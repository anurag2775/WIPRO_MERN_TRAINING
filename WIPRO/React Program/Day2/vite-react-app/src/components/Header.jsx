function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">LearnHub</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:text-orange-400">Home</a>
        <a href="#" className="hover:text-orange-400">Courses</a>
        <a href="#" className="hover:text-orange-400">About</a>
        <a href="#" className="hover:text-orange-400">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
