import Container from "../../../components/ui/Container";

const services = [
  {
    title: "Medicine Management",
    description:
      "Manage medicines with categories, manufacturers, pricing, expiry dates, and stock levels.",
  },
  {
    title: "Inventory Management",
    description:
      "Track stock movements, low-stock alerts, damaged items, and inventory value in real time.",
  },
  {
    title: "Purchase Management",
    description:
      "Create purchase orders, receive stock, manage suppliers, and track payments.",
  },
  {
    title: "Point of Sale (POS)",
    description:
      "Sell medicines quickly using barcode scanning, cart management, discounts, VAT, and invoices.",
  },
  {
    title: "Customer Management",
    description:
      "Maintain customer records, purchase history, loyalty points, and payment information.",
  },
  {
    title: "Supplier Management",
    description:
      "Manage supplier details, purchase history, dues, statements, and ratings.",
  },
  {
    title: "Reports & Analytics",
    description:
      "Generate sales, purchase, inventory, profit, expense, and business performance reports.",
  },
  {
    title: "Role-Based Access",
    description:
      "Provide secure access for Admins, Managers, Pharmacists, Cashiers, and other staff members.",
  },
];

function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            What We Offer
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            PharmaFlow provides all the essential tools needed to efficiently
            manage and grow a modern pharmacy business.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-emerald-600">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesGrid;