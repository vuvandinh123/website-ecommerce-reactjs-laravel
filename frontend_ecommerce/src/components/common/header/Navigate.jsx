import { useEffect, useState } from "react";
import imageSale from "../../../../public/sale.svg";
import { useDropdown } from "../../../hooks";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import PropTypes from "prop-types";

const Navigate = ({isOpenMenu, setIsOpenMenu,menuRef}) => {
  const [scroll, setScroll] = useState(false);
  const [dropdowSub, setDropdowSub] = useState(false);
  const { dropdow, setDropdow, dropdowRef } = useDropdown(false);
  useEffect(() => {
    const scroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
        setDropdow(false);
      }
    });
    return () => {
      removeEventListener("scroll", scroll);
    };
  }, []);
  const handleClickDropdown = () => {
    if (window.scrollY > 200 || !(window.location.pathname === "/")) {
      setDropdow(!dropdow);
    }
  };
  const handleClickDropdownSubmenu = () => {
    setDropdowSub(!dropdowSub);
  };

  const handleClickHiddenMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <>
      <div
        className={`border-b   max-w-[100%] m-auto px-4 hidden bg-[#fff] ${
          isOpenMenu && "!block"
        } lg:block ${
          scroll && "fixed !top-0 z-50 left-0"
        } z-50 transition-all duration-500 -top-20  shadow-yellow-500 right-0`}
      >
        <div
          className={`flex max-w-[1410px] z-50${
            isOpenMenu &&
            "fixed z-50 bg-[#505050cb] top-0 left-0  bottom-0 right-0"
          }  max-w-[100%] lg:px-5 mx-auto items-center`}
        >
          <div
            ref={dropdowRef}
            onClick={handleClickDropdown}
            className={`w-64 z-50 flex-none before:content-[''] before:bg-[#241adf]  before:block before:h-[3px] before:opacity-0 before:left-[50%] before:right-[50%] before:hover:opacity-100 before:absolute hover:before:left-0 hover:before:right-0 before:duration-300 before:top-0 relative  transition-all cursor-pointer  py-4 ${
              isOpenMenu && "hidden"
            }`}
          >
            <div className="flex items-center">
              <HiOutlineMenuAlt1 className="text-[25px] mr-3" />
              Browse All Categories
            </div>
            <div
              className={`scale-y-0  opacity-0 transition-all duration-500 z-10 ${
                dropdow && "!scale-100 opacity-100"
              }`}
            >
              <div className="absolute mt-5 bg-white p-3 bottom-auto left-0 right-0 shadow-md">
                <ul className="leading-8">
                  <div className="relative group">
                    <div className="flex justify-between hover:text-[#2b38d1] items-center">
                      <li className="py-2  px-2 border-b-[1px] ">Home</li>
                      <i className="fa-solid fa-chevron-right text-[9px]"></i>
                    </div>
                    <div className="absolute group-hover:translate-x-0 group-hover:opacity-100 duration-300 group-hover:visible transition-all  left-[106%] translate-x-5 opacity-0 invisible top-0 bg-white shadow-md">
                      <div className="w-[800px] p-5">
                        <div className="grid grid-cols-3">
                          <div>
                            <h3 className="text-[#212529] font-semibold mb-2">
                              Laptop computer
                            </h3>
                            <ul>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                            </ul>
                            <h3 className="text-[#212529] font-semibold mb-2">
                              Laptop computer
                            </h3>
                            <ul>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-[#212529] font-semibold mb-2">
                              Laptop computer
                            </h3>
                            <ul>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                            </ul>
                            <h3 className="text-[#212529] font-semibold mb-2">
                              Laptop computer
                            </h3>
                            <ul>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                              <li>
                                <a
                                  className="text-[#515d66] block hover:text-[#2b38d1]"
                                  href="#"
                                >
                                  hello
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="max-h-xs">
                            <a href="">
                              <div className="group/1  overflow-hidden">
                                <img
                                  className="group-hover/1:scale-105 transition-all duration-200"
                                  src="https://demo-uminex.myshopify.com/cdn/shop/files/banner-menu1.jpg?v=1671607665&width=2000"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="flex justify-between hover:text-[#2b38d1] items-center">
                      <li className="py-2  px-2 border-b-[1px] ">Home</li>
                      <i className="fa-solid fa-chevron-right text-[9px]"></i>
                    </div>
                    <div className="absolute w-[200px] group-hover:translate-x-0 group-hover:opacity-100 duration-300 group-hover:visible transition-all  left-[106%] translate-x-5 opacity-0 invisible top-0 bg-white shadow-md">
                      <div className=" p-6">
                        <div>
                          <ul className="">
                            <li className="py-1">
                              <div className='block before:content-[""] before:block before:bg-transparent before:w-[50px] before:h-20 before:left-[90%] before:z-20 before:absolute group/2 hover:ps-1 transition-all relative'>
                                <div className="flex justify-between hover:text-[#2b38d1] items-center">
                                  <p className="">hello dasdsada</p>
                                  <i className="fa-solid fa-chevron-right text-[9px]"></i>
                                </div>
                                <div className="absolute w-[200px] group-hover/2:translate-x-0 group-hover/2:opacity-100 duration-300 group-hover/2:visible transition-all  left-[117%] translate-x-5 opacity-0 invisible top-0 bg-white shadow-md">
                                  <ul className="p-4">
                                    <li>
                                      <a
                                        className="hover:text-[#2b38d1] hover:ps-1 transition-all "
                                        href=""
                                      >
                                        hello dasdsada
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="hover:text-[#2b38d1] hover:ps-1 transition-all "
                                        href=""
                                      >
                                        hello dasdsada
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="hover:text-[#2b38d1] hover:ps-1 transition-all "
                                        href=""
                                      >
                                        hello dasdsada
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li className="py-1">
                              <a
                                className="hover:text-[#2b38d1] block hover:ps-1 transition-all "
                                href=""
                              >
                                hello dasdsada
                              </a>
                            </li>
                            <li className="py-1">
                              <a
                                className="hover:text-[#2b38d1] block hover:ps-1 transition-all "
                                href=""
                              >
                                hello dasdsada
                              </a>
                            </li>
                            <li className="py-1">
                              <a
                                className="hover:text-[#2b38d1] block hover:ps-1 transition-all "
                                href=""
                              >
                                hello dasdsada
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to={"/"} className="hover:text-[#2b38d1]">
                    <li className="py-2  px-2 border-b-[1px] ">Home</li>
                  </Link>
                  <Link to={"/"} href="#" className="hover:text-[#2b38d1]">
                    <li className="py-2  px-2 border-b-[1px] ">Home</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div
            ref={menuRef}
            className={`${
              isOpenMenu && "w-[70%]"
            } lg:border-l lg:border-[#ccc] transition-all duration-300  lg:w-auto lg:bg-transparent bg-white h-full`}
          >
            <ul
              className={`flex ${
                isOpenMenu && "flex-col h-[100vh] w-full overflow-scroll "
              } relative gap-x-8 justify-start px-6`}
            >
              <button
                onClick={handleClickHiddenMenu}
                className="mt-5 lg:hidden items-center w-full text-center gap-2 text-[1.0rem] text-red-500 uppercase"
              >
                Close<i className="ml-2 fa-solid fa-xmark"></i>
              </button>
              <li className="lg:hidden">
                <h3 className="text-center my-5 font-semibold text-[11px]">
                  WHAT ARE YOU LOOKING FOR?
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue={""}
                    className="rounded-full border-0 outline-none px-3 py-2 w-full shadow-md"
                    placeholder="Search"
                  />
                  <button className="absolute right-8 top-3">
                    {" "}
                    <i className="fa-solid fa-magnifying-glass absolute"></i>
                  </button>
                </div>
              </li>
              <li className=" lg:py-0 py-5 border-b lg:border-b-0">
                <Link
                  to={"/"}
                  className=" text-[#212529] hover:text-[#2b38d1]"
                  href=""
                >
                  Home{" "}
                </Link>
              </li>
              <li className=" lg:py-0 relative py-5 border-b lg:border-b-0">
                <div className="flex justify-between items-center">
                  <Link
                    to={"/categories/all"}
                    className="block w-4/5 text-[#212529] hover:text-[#2b38d1]"
                    href=""
                  >
                    Shop{" "}
                  </Link>
                  <i
                    onClick={handleClickDropdownSubmenu}
                    className="fa-solid w-[20%] fa-chevron-down text-end mr-2 text-[12px]"
                  ></i>
                </div>
                <div
                  className={`max-h-0 lg:hidden overflow-hidden transition-all mt-2 ${
                    dropdowSub && "!max-h-96 duration-300"
                  }`}
                >
                  <ul className="relative left-5">
                    <li className="py-2">
                      <a className="text-[#212529] " href="">
                        Laptop
                      </a>
                    </li>
                    <li className="py-2">
                      <a className="text-[#212529]" href="">
                        Iphone
                      </a>
                    </li>
                    <li className="py-2">
                      <a className="text-[#212529]" href="">
                        Sam sung
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" lg:py-0 py-5 border-b lg:border-b-0">
                <a className=" text-[#212529] hover:text-[#2b38d1]" href="">
                  Page
                </a>
              </li>
              <li className=" lg:py-0 py-5 border-b lg:border-b-0">
                <a className=" text-[#212529] hover:text-[#2b38d1]" href="">
                  Contact Us
                </a>
              </li>
              <li className=" lg:py-0 py-5 border-b lg:border-b-0">
                <a className=" text-[#212529] hover:text-[#2b38d1]" href="">
                  Blog
                </a>
              </li>
              <li className=" lg:py-0 py-5 border-b lg:border-b-0">
                <a className=" hover:text-[#2b38d1] text-red-600" href="">
                  By Uminex!
                </a>
              </li>
            </ul>
          </div>
          <div className={`flex-auto ${isOpenMenu && "hidden"}`}>
            <a
              className=" flex gap-2 justify-end text-[#ffbd2e] font-bold text-base hover:text-[#2b38d1]"
              href=""
            >
              <img src={imageSale} alt="" />
              Sale $20 Off Your First Order.
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
Navigate.propTypes = {
  isOpenMenu: PropTypes.bool,
  setIsOpenMenu: PropTypes.func,
  menuRef: PropTypes.object,
}
export default Navigate;
