import Container from "../../../components/ui/Container";

function AboutHero() {
  return (
    <section className="bg-emerald-600 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold">
            About PharmaFlow
          </h1>

          <p className="mt-6 text-lg leading-8 text-emerald-100">
            PharmaFlow is a modern Pharmacy Management System built to
            simplify pharmacy operations, improve efficiency, and help
            businesses manage medicines, inventory, purchases, sales,
            reports, and customer records from one secure platform.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default AboutHero;