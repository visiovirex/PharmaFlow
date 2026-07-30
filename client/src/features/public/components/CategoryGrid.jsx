import Container from "../../../components/ui/Container";

const categories = [
  {
    name: "Tablets",
    description: "Solid oral medicines used for a wide range of treatments.",
  },
  {
    name: "Capsules",
    description: "Easy-to-swallow medicines available in different strengths.",
  },
  {
    name: "Syrups",
    description: "Liquid medicines suitable for children and adults.",
  },
  {
    name: "Injections",
    description: "Medicines administered by healthcare professionals.",
  },
  {
    name: "Creams & Ointments",
    description: "Topical medicines for skin care and treatment.",
  },
  {
    name: "Eye & Ear Drops",
    description: "Specialized medicines for eye and ear conditions.",
  },
  {
    name: "Inhalers",
    description: "Respiratory medicines for asthma and breathing disorders.",
  },
  {
    name: "Medical Devices",
    description: "Essential healthcare products and medical equipment.",
  },
];

function CategoryGrid() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Browse Categories
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Easily organize and manage medicines using structured categories.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-emerald-600">
                {category.name}
              </h3>

              <p className="mt-4 text-slate-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CategoryGrid;