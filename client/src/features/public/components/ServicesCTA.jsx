import { Link } from "react-router";

import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";
import { PATHS } from "../../../router/paths";

function ServicesCTA() {
  return (
    <section className="bg-emerald-600 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">
            Ready to Modernize Your Pharmacy?
          </h2>

          <p className="mt-6 text-lg leading-8 text-emerald-100">
            Join PharmaFlow today and simplify medicine management,
            inventory, sales, purchases, reporting, and every aspect of
            your pharmacy business.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to={PATHS.REGISTER}>
              <Button>Get Started</Button>
            </Link>

            <Link to={PATHS.CONTACT}>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServicesCTA;