import Container from "../../../components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Set Up Your Pharmacy",
    description:
      "Add your pharmacy information, staff accounts, medicine categories, and initial inventory.",
  },
  {
    number: "02",
    title: "Manage Daily Operations",
    description:
      "Handle purchases, sales, inventory updates, suppliers, and customers from one dashboard.",
  },
  {
    number: "03",
    title: "Track Performance",
    description:
      "Monitor reports, stock levels, expiry alerts, and business performance in real time.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            How It Works
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Get started with PharmaFlow in just three simple steps.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;