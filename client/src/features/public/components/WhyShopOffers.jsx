import Container from "../../../components/ui/Container";

const benefits = [
  {
    title: "Save More",
    description:
      "Enjoy discounts on medicines and healthcare products throughout the year.",
  },
  {
    title: "Trusted Products",
    description:
      "Every promotional item comes from trusted brands and verified suppliers.",
  },
  {
    title: "Exclusive Rewards",
    description:
      "Earn loyalty points and receive exclusive member-only promotions.",
  },
  {
    title: "Limited-Time Deals",
    description:
      "Take advantage of seasonal campaigns and special pharmacy events.",
  },
];

function WhyShopOffers() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why Shop Our Offers?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            We help customers save money while ensuring they receive quality
            healthcare products.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-emerald-600">
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

export default WhyShopOffers;