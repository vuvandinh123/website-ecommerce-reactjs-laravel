import PropTypes from "prop-types";
import { useRef } from "react";
import { useOffcanvas } from "../../hooks";
import { Link } from "react-router-dom";

const Siderbar = ({ isSidebarOpen, setToken }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const iconRef = useRef(null);
  const activeRef = useRef(null);
  const {isOpen,setIsOpen} = useOffcanvas(false,activeRef,iconRef);
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
        <button
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
        </button>
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
            Transacciones
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
          <div
            className={`fixed bg-[#3939395d] left-0 -top-10 bottom-0 right-0 z-[1055]  w-full   ${isOpen ? "block":"hidden"}`}
            id="exampleModal"
          >
            <div
              className="pointer-events-none  relative w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
            >
              <div ref={activeRef} className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] mt-52 top-[50%] pointer-events-auto absolute  flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 ">
                <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                  {/*Modal title*/}
                  <h5
                    className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                    id="exampleModalLabel"
                  >
                    Thông báo
                  </h5>
                  {/*Close button*/}
                  <button
                    type="button"
                    onClick={()=>setIsOpen(false)}
                    className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/*Modal body*/}
                <div className="relative flex-auto p-4">
                  Bạn có muốn thoát !
                </div>
                {/*Modal footer*/}
                <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                  <button
                    type="button"
                    onClick={()=>setIsOpen(false)}
                    className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
    
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={handleClickLogout}
                    className="ml-1 inline-block rounded bg-red-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Exits
                  </button>
                </div>
              </div>
            </div>
          </div>
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
