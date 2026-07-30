import Card from "../../../components/ui/Card";
import Container from "../../../components/ui/Container";

import { testimonials } from "../data/testimonials";

function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-slate-600">
            Trusted by pharmacy owners and healthcare professionals.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <p className="italic text-slate-600">
                "{testimonial.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-semibold">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {testimonial.designation}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;