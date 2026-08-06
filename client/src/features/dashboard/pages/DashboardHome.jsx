import StatsCard from "../components/StatsCard";

function DashboardHome() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-500">
          Welcome to PharmaFlow ERP
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Sales"
          value="৳ 0"
          color="text-emerald-600"
        />

        <StatsCard
          title="Medicines"
          value="0"
          color="text-blue-600"
        />

        <StatsCard
          title="Customers"
          value="0"
          color="text-orange-500"
        />

        <StatsCard
          title="Low Stock"
          value="0"
          color="text-red-600"
        />
      </div>

      {/* Quick Actions */}
      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">
          <button className="rounded-lg bg-emerald-600 px-5 py-3 text-white">
            Add Medicine
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-3 text-white">
            New Sale
          </button>

          <button className="rounded-lg bg-orange-500 px-5 py-3 text-white">
            New Purchase
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">
          Recent Activities
        </h2>

        <p className="text-slate-500">
          No recent activity available.
        </p>
      </div>
    </div>
  );
}

export default DashboardHome;