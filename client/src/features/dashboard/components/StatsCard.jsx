function StatsCard({ title, value, color }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h3 className="text-sm font-medium text-slate-500">
        {title}
      </h3>

      <h2 className={`mt-3 text-3xl font-bold ${color}`}>
        {value}
      </h2>
    </div>
  );
}

export default StatsCard;