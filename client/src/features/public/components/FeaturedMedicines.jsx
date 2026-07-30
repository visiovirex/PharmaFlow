import Container from "../../../components/ui/Container";

const medicines = [
  {
    name: "Paracetamol 500mg",
    category: "Tablet",
  },
  {
    name: "Amoxicillin 250mg",
    category: "Capsule",
  },
  {
    name: "Vitamin C Syrup",
    category: "Syrup",
  },
  {
    name: "Omeprazole 20mg",
    category: "Capsule",
  },
  {
    name: "Ibuprofen 400mg",
    category: "Tablet",
  },
  {
    name: "Salbutamol Inhaler",
    category: "Inhaler",
  },
];

function FeaturedMedicines() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Featured Medicines
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            A selection of commonly managed medicines within PharmaFlow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {medicines.map((medicine) => (
            <div
              key={medicine.name}
              className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                {medicine.category}
              </span>

              <h3 className="mt-4 text-2xl font-semibold">
                {medicine.name}
              </h3>

              <p className="mt-3 text-slate-600">
                Easily manage stock, pricing, expiry dates, and sales for this medicine using PharmaFlow.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedMedicines;