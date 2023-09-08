import { Outlet } from "react-router-dom";
import { Footer, Header, NavBottom } from "../components/common";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <NavBottom />
    </div>
  );
};

export default Layout;
