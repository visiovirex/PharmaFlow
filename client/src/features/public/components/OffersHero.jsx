import Container from "../../../components/ui/Container";

function OffersHero() {
  return (
    <section className="bg-emerald-600 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold">
            Special Offers
          </h1>

          <p className="mt-6 text-lg leading-8 text-emerald-100">
            Discover the latest discounts, promotional campaigns, and
            exclusive pharmacy deals available through PharmaFlow.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default OffersHero;