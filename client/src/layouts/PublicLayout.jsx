import { Outlet } from "react-router";

import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Header />

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default PublicLayout;