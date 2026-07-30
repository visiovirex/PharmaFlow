import Container from "../../../components/ui/Container";

function CategoriesHero() {
  return (
    <section className="bg-emerald-600 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold">
            Medicine Categories
          </h1>

          <p className="mt-6 text-lg leading-8 text-emerald-100">
            Organize medicines into well-defined categories for faster
            searching, easier inventory management, and improved pharmacy
            operations.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default CategoriesHero;