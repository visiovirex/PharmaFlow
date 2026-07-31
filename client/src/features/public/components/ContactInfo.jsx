import Container from "../../../components/ui/Container";

const contactDetails = [
  {
    title: "Address",
    value: "123 Pharmacy Street, Healthcare City",
  },
  {
    title: "Phone",
    value: "+880 1234-567890",
  },
  {
    title: "Email",
    value: "support@pharmaflow.com",
  },
  {
    title: "Business Hours",
    value: "Saturday - Thursday • 9:00 AM - 9:00 PM",
  },
];

function ContactInfo() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Get In Touch
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            We're here to answer your questions and provide the support you need.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-emerald-600">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ContactInfo;