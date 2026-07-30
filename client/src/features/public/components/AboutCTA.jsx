import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";

function AboutCTA() {
  return (
    <section className="bg-emerald-600 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">
            Ready to Transform Your Pharmacy?
          </h2>

          <p className="mt-6 text-lg text-emerald-100">
            Join PharmaFlow and manage medicines, inventory, sales,
            purchases, suppliers, customers, and reports from one
            powerful platform.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button>
              Get Started
            </Button>

            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutCTA;