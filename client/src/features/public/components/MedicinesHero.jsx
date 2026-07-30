import Container from "../../../components/ui/Container";

function MedicinesHero() {
  return (
    <section className="bg-emerald-600 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold">
            Medicines
          </h1>

          <p className="mt-6 text-lg leading-8 text-emerald-100">
            Explore our comprehensive medicine catalog designed to help
            pharmacies organize medicines efficiently by category, brand,
            manufacturer, dosage, and availability.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default MedicinesHero;