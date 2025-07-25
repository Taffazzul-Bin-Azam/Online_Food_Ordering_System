import { FaShoppingCart, FaHome, FaHeart, FaUser, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <div className="w-full bg-teal-50 text-black flex items-center justify-between px-4 md:px-6 py-3 h-16 fixed top-0 left-0 z-50 shadow">

      {/* Brand Logo */}
      <div className="flex items-center gap-2 text-xl font-bold">
        <img src="/logo.jpg" alt="logo" className="w-10 h-10 object-contain" />
        <span>BiteNow</span>
      </div>

      {/* Sidebar Options - now horizontal */}
      <div className="hidden md:flex items-center gap-6 ml-8 text-sm font-medium">
        <Link to="/" className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
          <FaHome className="text-lg" />
          <span>Home</span>
        </Link>
        <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
          <FaHeart className="text-lg" />
          <span>Favs</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
          <FaUser className="text-lg" />
          <span>Profile</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
          <FaClipboardList className="text-lg" />
          <span>Order</span>
        </div>
      </div>

      {/* Search bar */}
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search food or restaurants"
          className="w-full px-3 py-2 rounded-md text-black outline-none border border-gray-300"
        />
      </div>

      {/* Cart and button */}
      <div className="flex items-center gap-4 relative">
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-xl cursor-pointer" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
        <button className="bg-orange-500 px-4 py-1 rounded text-white hover:bg-orange-600">
          SignIn
        </button>
      </div>
    </div>
  );
};

export default Navbar;
