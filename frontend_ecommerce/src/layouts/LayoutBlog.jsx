import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SiderbarBlog } from "../components/common";
const Layout = () => {
  return (
    <div>
      <SiderbarBlog />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Layout;
