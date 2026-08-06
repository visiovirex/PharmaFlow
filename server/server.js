import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import verifyToken from "./middlewares/verifyToken.js";

dotenv.config();
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("PharmaFlow Server Running...");
});

async function run() {
  try {
    await client.connect();

    const db = client.db("pharmaFlowDB");

    const usersCollection = db.collection("users");
    const medicinesCollection = db.collection("medicines");
    const customersCollection = db.collection("customers");
    const suppliersCollection = db.collection("suppliers");

    app.post("/jwt", async (req, res) => {
      const user = req.body;

      const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false, // change to true after deployment with HTTPS
          sameSite: "lax",
        })
        .send({ success: true });
    });

    app.post("/users", async (req, res) => {
      const user = req.body;

      const existingUser = await usersCollection.findOne({
        email: user.email,
      });

      if (existingUser) {
        return res.send({
          message: "User already exists",
          inserted: false,
        });
      }

      const result = await usersCollection.insertOne(user);

      res.send(result);
    });

    app.post("/logout", (req, res) => {
      res
        .clearCookie("token", {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
        })
        .send({ success: true });
    });

    app.get("/protected", verifyToken, (req, res) => {
      res.send({
        success: true,
        message: "Protected route accessed successfully.",
        user: req.decoded,
      });
    });

    app.get("/users/:email", verifyToken, async (req, res) => {
      const email = req.params.email;

      if (req.decoded.email !== email) {
        return res.status(403).send({
          message: "Forbidden Access",
        });
      }

      const user = await usersCollection.findOne({
        email,
      });

      res.send(user);
    });

    app.get("/dashboard/stats", verifyToken, async (req, res) => {
      const totalUsers = await usersCollection.countDocuments();
      const totalMedicines = await medicinesCollection.countDocuments();
      const totalCustomers = await customersCollection.countDocuments();
      const totalSuppliers = await suppliersCollection.countDocuments();

      res.send({
        totalUsers,
        totalMedicines,
        totalCustomers,
        totalSuppliers,
      });
    });

    app.patch("/users/role/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const { role } = req.body;

      const filter = {
        _id: new ObjectId(id),
      };

      const updateDoc = {
        $set: {
          role,
        },
      };

      const result = await usersCollection.updateOne(filter, updateDoc);

      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });

    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error(error);
  }
}

run();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
