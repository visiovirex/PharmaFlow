import Container from "../../../components/ui/Container";

const reasons = [
  {
    title: "Quality Assured",
    description:
      "Manage only verified medicines from trusted manufacturers and suppliers.",
  },
  {
    title: "Expiry Monitoring",
    description:
      "Track expiry dates and receive alerts before medicines expire.",
  },
  {
    title: "Accurate Inventory",
    description:
      "Monitor stock levels in real time to avoid shortages and overstocking.",
  },
  {
    title: "Fast Search",
    description:
      "Quickly locate medicines using names, categories, brands, or barcodes.",
  },
];

function WhyChooseMedicines() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why Choose Our Medicine Management?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            PharmaFlow helps pharmacies maintain accurate medicine records,
            improve inventory control, and ensure safe dispensing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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

export default WhyChooseMedicines;