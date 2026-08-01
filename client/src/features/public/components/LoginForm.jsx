import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

import AuthContext from "../../../contexts/AuthContext";

import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";
import axiosSecure from "../../../api/axiosSecure";
import { PATHS } from "../../../router/paths";

function LoginForm() {
  const { signInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || PATHS.DASHBOARD;

  const handleLogin = (event) => {
    console.log("Login button clicked");
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(async (result) => {
        await axiosSecure.post("/jwt", {
          email: result.user.email,
        });

        toast.success(`Welcome ${result.user.email}`);
        form.reset();

        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg">
          <h1 className="text-center text-4xl font-bold">Welcome Back</h1>

          <p className="mt-3 text-center text-slate-600">
            Sign in to your PharmaFlow account.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block font-medium">Email</label>

              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Password</label>

              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>

              <div className="text-right">
                <Link
                  to={PATHS.FORGOT_PASSWORD}
                  className="text-sm text-emerald-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <p className="mt-6 text-center text-slate-600">
            Don't have an account?{" "}
            <Link
              to={PATHS.REGISTER}
              className="font-medium text-emerald-600 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}

export default LoginForm;
