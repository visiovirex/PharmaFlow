import Container from "../../../components/ui/Container";

function OurStory() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">
              Our Story
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              PharmaFlow was created to solve the everyday challenges
              faced by modern pharmacies. Managing inventory, tracking
              medicine expiry dates, handling sales, purchases, suppliers,
              and generating reports can quickly become overwhelming when
              done manually.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our goal is to provide a complete Pharmacy Management System
              that is fast, secure, and easy to use, allowing pharmacy
              owners and staff to focus more on serving customers and less
              on paperwork.
            </p>
          </div>

          <div className="rounded-2xl bg-emerald-50 p-10">
            <h3 className="text-2xl font-semibold text-emerald-700">
              Built for Every Pharmacy
            </h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              <li>✔ Independent Pharmacies</li>
              <li>✔ Retail Pharmacy Chains</li>
              <li>✔ Hospital Pharmacies</li>
              <li>✔ Wholesale Medicine Suppliers</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OurStory;