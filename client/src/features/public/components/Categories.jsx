import Card from "../../../components/ui/Card";
import Container from "../../../components/ui/Container";

import { categories } from "../data/categories";

function Categories() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Browse Medicine Categories
          </h2>

          <p className="mt-4 text-slate-600">
            Explore medicines and healthcare products by category.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="cursor-pointer text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-6xl">
                {category.icon}
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                {category.name}
              </h3>

              <p className="mt-3 text-slate-500">
                {category.count}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Categories;