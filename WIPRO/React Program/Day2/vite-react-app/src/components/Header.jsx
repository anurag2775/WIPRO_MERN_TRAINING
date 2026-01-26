import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center z-50 relative">
      <h1 className="text-xl font-bold">LearnHub</h1>

      <nav className="space-x-4">
        <Link to="/" className="hover:text-orange-400">Home</Link>
        <Link to="/about" className="hover:text-orange-400">About</Link>
        <Link to="/contact" className="hover:text-orange-400">Contact</Link>
        <Link to="/login" className="hover:text-orange-400">Admin</Link>
      </nav>
    </header>
  )
}

export default Header

