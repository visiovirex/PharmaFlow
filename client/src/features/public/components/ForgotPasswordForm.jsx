import { useContext } from "react";
import toast from "react-hot-toast";

import AuthContext from "../../../contexts/AuthContext";
import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";

function ForgotPasswordForm() {
  const { resetPassword } = useContext(AuthContext);

  const handleReset = (event) => {
    event.preventDefault();

    const email = event.target.email.value;

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg">
          <h1 className="text-center text-3xl font-bold">
            Forgot Password
          </h1>

          <p className="mt-3 text-center text-slate-600">
            Enter your email to receive a password reset link.
          </p>

          <form
            onSubmit={handleReset}
            className="mt-8 space-y-5"
          >
            <div>
              <label className="mb-2 block font-medium">
                Email
              </label>

              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
            >
              Send Reset Link
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default ForgotPasswordForm;