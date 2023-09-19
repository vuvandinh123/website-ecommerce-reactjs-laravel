import { Outlet } from "react-router-dom";
import { Footer, Header, NavBottom } from "../components/common";
import { ToastContainer } from 'react-toastify';
const Layout = () => {
  return (
    <div>
      
      <Header />
      <Outlet />
      <Footer />
      <NavBottom />
      <ToastContainer />
    </div>
  );
};

export default Layout;
