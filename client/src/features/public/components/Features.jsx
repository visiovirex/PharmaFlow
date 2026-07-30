import Container from "../../../components/ui/Container";
import Card from "../../../components/ui/Card";

import { features } from "../data/features";

function Features() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-4 text-slate-600">
            Manage your pharmacy from one platform.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;