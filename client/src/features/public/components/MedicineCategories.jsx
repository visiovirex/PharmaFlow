import Container from "../../../components/ui/Container";

const categories = [
  "Tablets",
  "Capsules",
  "Syrups",
  "Injections",
  "Creams & Ointments",
  "Drops",
  "Inhalers",
  "Medical Devices",
];

function MedicineCategories() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Medicine Categories
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Browse medicines by category to quickly find the products you
            need.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-xl border border-slate-200 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-emerald-600">
                {category}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MedicineCategories;