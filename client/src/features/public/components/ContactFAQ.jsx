import Container from "../../../components/ui/Container";

const faqs = [
  {
    question: "Can PharmaFlow manage multiple pharmacy branches?",
    answer: "Yes. Multi-branch support is planned as part of Version 3.0.",
  },
  {
    question: "Does PharmaFlow support barcode scanning?",
    answer: "Yes. Barcode scanning will be available in the POS module.",
  },
  {
    question: "Can I track medicine expiry dates?",
    answer: "Yes. PharmaFlow includes expiry monitoring and alerts.",
  },
];

function ContactFAQ() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl border border-slate-200 p-6"
            >
              <h3 className="text-xl font-semibold text-emerald-600">
                {faq.question}
              </h3>

              <p className="mt-3 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ContactFAQ;