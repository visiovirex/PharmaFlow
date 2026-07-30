import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";

function CTA() {
  return (
    <section className="bg-emerald-600 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">
            Ready to Modernize Your Pharmacy?
          </h2>

          <p className="mt-6 text-lg text-emerald-100">
            Join PharmaFlow and simplify medicine management, inventory,
            billing, purchases, reporting, and much more—all from one
            secure platform.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              className="bg-slate-300 text-emerald-700 hover:bg-sky-400-100"
            >
              Get Started
            </Button>

            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-700"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CTA;