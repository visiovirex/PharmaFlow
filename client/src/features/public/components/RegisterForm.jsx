import { useContext } from "react";
import { Link } from "react-router";
import toast from "react-hot-toast";

import AuthContext from "../../../contexts/AuthContext";

import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";
import { PATHS } from "../../../router/paths";

function RegisterForm() {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    console.log("Register button clicked");
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(() => {
        toast.success("Account created successfully!");
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-lg rounded-xl bg-white p-8 shadow-lg">
          <h1 className="text-center text-4xl font-bold">Create Account</h1>

          <p className="mt-3 text-center text-slate-600">
            Create your PharmaFlow account to get started.
          </p>

          <form onSubmit={handleRegister} className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">First Name</label>

                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Last Name</label>

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium">Email</label>

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Password</label>

              <input
                name="password"
                type="password"
                placeholder="Create Password"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
              />
            </div>

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-slate-600">
            Already have an account?{" "}
            <Link
              to={PATHS.LOGIN}
              className="font-medium text-emerald-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}

export default RegisterForm;
