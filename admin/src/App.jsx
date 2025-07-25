import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard";
import MenuList from "./pages/MenuList";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import Orders from "./pages/Orders";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      {/* 👇 Redirect base path to admin */}
      <Route path="/" element={<Navigate to="/admin" />} />

      {/* Public login route */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Protected admin panel routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="menu" element={<MenuList />} />
        <Route path="add" element={<AddItem />} />
        <Route path="edit/:id" element={<EditItem />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default App;
