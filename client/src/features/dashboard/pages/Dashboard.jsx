import useUser from "../../../hooks/useUser";

function Dashboard() {
  const { dbUser, loading } = useUser();

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{dbUser?.name}</p>
      <p>{dbUser?.email}</p>
      <p>{dbUser?.role}</p>
    </div>
  );
}

export default Dashboard;