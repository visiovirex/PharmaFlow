import { Link } from "react-router";

import { PATHS } from "../../router/paths";

function Navbar() {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          to={PATHS.HOME}
          className="text-2xl font-bold text-emerald-600"
        >
          PharmaFlow
        </Link>

        <div className="flex gap-6">
          <Link to={PATHS.HOME}>Home</Link>

          <Link to={PATHS.ABOUT}>About</Link>

          <Link to={PATHS.SERVICES}>Services</Link>

          <Link to={PATHS.CONTACT}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;