import Container from "../../../components/ui/Container";

const reasons = [
  {
    title: "Quick Medicine Search",
    description:
      "Find medicines faster by organizing them into structured categories.",
  },
  {
    title: "Better Inventory Control",
    description:
      "Track stock levels efficiently across different medicine categories.",
  },
  {
    title: "Improved Reporting",
    description:
      "Generate reports based on medicine categories for better business insights.",
  },
  {
    title: "Simplified Management",
    description:
      "Reduce complexity by keeping medicines organized and easy to maintain.",
  },
];

function WhyCategoriesMatter() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why Categories Matter
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Proper categorization helps pharmacies improve organization,
            efficiency, and day-to-day operations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-emerald-600">
                {reason.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyCategoriesMatter;