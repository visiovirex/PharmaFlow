import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";

function ContactForm() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">
              Contact Us
            </h2>

            <p className="mt-4 text-slate-600">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="mb-2 block font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:outline-none"
              ></textarea>
            </div>

            <Button type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default ContactForm;