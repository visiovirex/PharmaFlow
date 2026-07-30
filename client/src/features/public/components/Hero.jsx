import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";

function Hero() {
  return (
    <section className="bg-linear-to-r from-emerald-700 to-emerald-500 py-24 text-white">
      <Container>
        <div className="max-w-3xl">
          <span className="rounded-full bg-white/20 px-4 py-1 text-sm">
            Trusted Pharmacy Management
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Smart Pharmacy Management Made Simple
          </h1>

          <p className="mt-6 text-lg text-emerald-50">
            Manage medicines, inventory, purchases, sales, customers,
            suppliers, reports, invoices, PDF generation, and much more —
            all from one modern platform.
          </p>

          <div className="mt-10 flex gap-4">
            <Button variant="primary">
              Get Started
            </Button>

            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-700"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;