import Container from "../../../components/ui/Container";

function ContactHero() {
  return (
    <section className="bg-emerald-600 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-lg leading-8 text-emerald-100">
            We'd love to hear from you. Reach out to our team for support,
            product inquiries, or partnership opportunities.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ContactHero;