import PropTypes from "prop-types";
import { useRef } from "react";
import { useOffcanvas } from "../../hooks";
import { Link } from "react-router-dom";
import Toast from "./Toast";

const Siderbar = ({ isSidebarOpen, setToken }) => {
  const iconRef = useRef(null);
  const activeRef = useRef(null);
  const { isOpen, setIsOpen } = useOffcanvas(false, activeRef, iconRef);
  const handleClickLogout = () => {
    sessionStorage.removeItem("token");
    setToken({});
  };
  return (
    <div
      id="sidebar"
      className={` ${
        isSidebarOpen ? "w-[16rem]" : "w-[4rem]"
      } bg-white h-screen  rounded-none border-none transition-all duration-200 ease-in-out overflow-hidden`}
    >
      <div className="p-2 space-y-4">
        <Link
          to={"/admin"}
          className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick="highlightSidebarItem(this)"
        >
          <i className="fas fa-home text-lg" />
          <span
            className={`font-medium transition-all duration-200 opacity-0 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Dashboard
          </span>
        </Link>
        <Link
          to={"products"}
          className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick="highlightSidebarItem(this)"
        >
          <i className="fas fa-check-circle" />
          <span
            className={`font-medium whitespace-nowrap transition-all duration-200 opacity-0 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Tất cả sản phẩm
          </span>
        </Link>
        <Link
          to={"categories"}
          className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick="highlightSidebarItem(this)"
        >
          <i className="fas fa-check-circle" />
          <span
            className={`font-medium whitespace-nowrap transition-all duration-200 opacity-0 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
           Danh mục
          </span>
        </Link>
        <Link
          to={"brands"}
          className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick="highlightSidebarItem(this)"
        >
          <i className="fas fa-check-circle" />
          <span
            className={`font-medium whitespace-nowrap transition-all duration-200 opacity-0 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Thương hiệu
          </span>
        </Link>
        {/* Usuarios */}
        <button
          className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick="highlightSidebarItem(this)"
        >
          <i className="fas fa-users" />
          <span
            className={`font-medium whitespace-nowrap transition-all duration-200 opacity-0 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Người dùng
          </span>
        </button>
        {/* Comercios */}
        <Link
          to={"/admin/import-product"}
          className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick="highlightSidebarItem(this)"
        >
          <i className="fas fa-store" />
          <span
            className={`font-medium whitespace-nowrap transition-all duration-200 opacity-0 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Nhập hàng
          </span>
        </Link>
        {/* Transacciones */}
        <button
          className="relative px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick="highlightSidebarItem(this)"
        >
          <i className="fas fa-exchange-alt" />
          <span
            className={`font-medium whitespace-nowrap transition-all duration-200 opacity-0 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Xuất hàng
          </span>
        </button>
        {/* Cerrar sesión */}
        <button
          ref={iconRef}
          className="relative  px-3 py-3 flex items-center space-x-4 justify-start text-gray-500 rounded-lg group"
          onClick={() => setIsOpen(true)}
        >
          <i className="fas fa-sign-out-alt" />
          <span
            className={`font-medium whitespace-nowrap transition-all duration-200 opacity-0 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Đăng xuất
          </span>
        </button>
        <Toast
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleClickLogout={handleClickLogout}
          activeRef={activeRef}
          iconRef={iconRef}
          label="Thông báo"
        >
          Bạn có muốn thoát !
        </Toast>
      </div>
    </div>
  );
};

export default Siderbar;

Siderbar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
};
