import Container from "../../../components/ui/Container";

const benefits = [
  {
    title: "Save Time",
    description:
      "Automate daily pharmacy tasks and reduce manual paperwork.",
  },
  {
    title: "Reduce Errors",
    description:
      "Minimize inventory mistakes, pricing errors, and stock mismatches.",
  },
  {
    title: "Increase Productivity",
    description:
      "Enable your team to complete more work in less time with an intuitive interface.",
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Track sales, inventory, expiry dates, and purchases instantly.",
  },
  {
    title: "Better Business Decisions",
    description:
      "Use reports and analytics to understand business performance.",
  },
  {
    title: "Scalable Platform",
    description:
      "Grow from a single pharmacy to multiple branches without changing systems.",
  },
];

function Benefits() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Benefits of PharmaFlow
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Discover how PharmaFlow helps pharmacies operate more efficiently
            while improving customer service and business growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-emerald-600">
                {benefit.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Benefits;