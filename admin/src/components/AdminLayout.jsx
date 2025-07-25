// admin/src/components/AdminLayout.jsx
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="/admin" className="hover:underline">Dashboard</Link>
          <Link to="/admin/menu" className="hover:underline">Menu Items</Link>
          <Link to="/admin/add" className="hover:underline">Add Item</Link>
          <Link to="/admin/orders" className="hover:underline">Orders</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
