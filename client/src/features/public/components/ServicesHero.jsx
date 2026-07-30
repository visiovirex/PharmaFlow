import Container from "../../../components/ui/Container";

function ServicesHero() {
  return (
    <section className="bg-emerald-600 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold">
            Our Services
          </h1>

          <p className="mt-6 text-lg leading-8 text-emerald-100">
            PharmaFlow provides everything a modern pharmacy needs to
            manage medicines, inventory, sales, purchases, customers,
            suppliers, reports, and business operations from a single,
            secure platform.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ServicesHero;