import { Outlet } from "react-router-dom";
import HeaderAdmin from "../components/admin/Header";
import FooterAdmin from "../components/admin/Footer";
import Siderbar from "../components/admin/Siderbar";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { Login } from "../pages/admin";
import { useAuth, useToken } from "../hooks";
import axios from "axios";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { token, setToken } = useToken();
  const { user } = useAuth(token);
  console.log(user);
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div>
      <HeaderAdmin
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex">
        <Siderbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          setToken={setToken}
        />
        <div
          id="content"
          className=" bg-gray-100 w-full transition-all duration-200 ease-in-out"
        >
          <Outlet />
        </div>
      </div>
      <FooterAdmin />
      <ToastContainer />

    </div>
  );
};

export default Admin;
