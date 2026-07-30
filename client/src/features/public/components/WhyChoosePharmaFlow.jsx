import Container from "../../../components/ui/Container";

const features = [
  {
    title: "Complete Pharmacy ERP",
    description:
      "Manage medicines, inventory, purchases, sales, suppliers, customers, and reports from one platform.",
  },
  {
    title: "Fast & Easy to Use",
    description:
      "A clean and intuitive interface that helps your staff work efficiently with minimal training.",
  },
  {
    title: "Secure Data",
    description:
      "Role-based access, authentication, and secure data management keep your business protected.",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Track medicine stock, expiry dates, purchases, sales, and every important activity in real time.",
  },
  {
    title: "Powerful Reports",
    description:
      "Generate sales, inventory, purchase, profit, and business reports instantly.",
  },
  {
    title: "Future Ready",
    description:
      "Built to support multi-branch pharmacies, online pharmacy, mobile apps, and AI-powered features.",
  },
];

function WhyChoosePharmaFlow() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why Choose PharmaFlow?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Everything you need to manage and grow your pharmacy business in one modern platform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-emerald-600">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChoosePharmaFlow;