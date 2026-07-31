import Container from "../../../components/ui/Container";

const offers = [
  {
    title: "10% Off on First Purchase",
    description:
      "New customers receive a 10% discount on their first medicine purchase.",
  },
  {
    title: "Free Health Checkup",
    description:
      "Receive a complimentary basic health checkup with selected purchases.",
  },
  {
    title: "Buy 2 Get 1 Free",
    description:
      "Enjoy special bundle offers on selected healthcare products.",
  },
  {
    title: "Seasonal Discounts",
    description:
      "Save more with limited-time discounts during seasonal campaigns.",
  },
  {
    title: "Loyalty Rewards",
    description:
      "Earn reward points on every purchase and redeem them later.",
  },
  {
    title: "Senior Citizen Offer",
    description:
      "Special discounts for senior citizens on selected medicines.",
  },
];

function ActiveOffers() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Active Offers
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Take advantage of our latest promotions and exclusive pharmacy
            deals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-emerald-600">
                {offer.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ActiveOffers;