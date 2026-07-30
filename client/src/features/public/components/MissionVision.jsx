import Container from "../../../components/ui/Container";

function MissionVision() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-emerald-600">
              Our Mission
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              To empower pharmacies with a secure, reliable, and modern
              management system that simplifies daily operations, improves
              productivity, and enhances customer service.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-emerald-600">
              Our Vision
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              To become one of the leading pharmacy management platforms by
              delivering innovative technology that helps pharmacies grow
              efficiently and serve their communities better.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MissionVision;