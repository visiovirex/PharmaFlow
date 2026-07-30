function Navbar() {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <h1 className="text-2xl font-bold text-emerald-600">
          PharmaFlow
        </h1>

        <div className="flex gap-6">
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;