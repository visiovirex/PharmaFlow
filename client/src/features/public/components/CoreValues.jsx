import Container from "../../../components/ui/Container";

const values = [
  {
    title: "Innovation",
    description:
      "We continuously improve PharmaFlow by adopting modern technologies and best practices.",
  },
  {
    title: "Reliability",
    description:
      "Our platform is designed to provide stable, secure, and dependable pharmacy operations every day.",
  },
  {
    title: "Security",
    description:
      "Protecting pharmacy data and maintaining user privacy are at the core of everything we build.",
  },
  {
    title: "Customer Success",
    description:
      "We build solutions that help pharmacies save time, reduce errors, and grow their business.",
  },
];

function CoreValues() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Our Core Values
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Everything we build is guided by these principles.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-emerald-600">
                {value.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CoreValues;