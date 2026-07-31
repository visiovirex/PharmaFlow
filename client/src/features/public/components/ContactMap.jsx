import Container from "../../../components/ui/Container";

function ContactMap() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Find Us
          </h2>

          <p className="mt-4 text-slate-600">
            Visit our pharmacy or contact our support team.
          </p>
        </div>

        <div className="mt-12 flex h-96 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white">
          <span className="text-xl text-slate-500">
            Google Map Placeholder
          </span>
        </div>
      </Container>
    </section>
  );
}

export default ContactMap;