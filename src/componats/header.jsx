import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-gray-900">
        RTK
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
          All Posts
        </Link>
        <Link
          to="/create"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Create Post
        </Link>
      </div>

      {/* Cart Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Cart
      </button>
    </nav>
  );
};

export default Header;
