import Dropdown from "./Dropdown";
import imageUser from "../../../public/user.svg";
import imageHeart from "../../../public/heart.svg";
import imageCart from "../../../public/cart.svg";
import imageSale from "../../../public/sale.svg";
import { useDropdown } from "../../hooks";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt1, HiOutlineTag } from "react-icons/hi";
import Cart from "./Cart";
import { useOffcanvas } from "../../hooks/useOffcanvas";
import Favourite from "./Favourite";
const Header = () => {
  const { dropdow, setDropdow, dropdowRef } = useDropdown(false);
  const [scroll, setScroll] = useState(false);
  const [dropdowSub, setDropdowSub] = useState(false);

  const menuRef = useRef(null);
  const barsRef = useRef(null);
  const cartRef = useRef(null);
  const favouriteRef = useRef(null);
  const favouriteIconRef = useRef(null);
  const cartIconRef = useRef(null);
  const { isOpen: isOpenCart, setIsOpen: setIsOpenCart } = useOffcanvas(
    false,
    cartRef,
    cartIconRef
  );
  const { isOpen: isOpenFav, setIsOpen: setIsOpenFav } = useOffcanvas(
    false,
    favouriteRef,
    favouriteIconRef
  );
  const { isOpen: isOpenMenu, setIsOpen: setIsOpenMenu } = useOffcanvas(
    false,
    menuRef,
    barsRef
  );
  useEffect(() => {
    const scroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 200 ) {
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
    if (window.scrollY > 200 || !(window.location.pathname === '/')) {
      setDropdow(!dropdow);
    }
  };
  const handleClickShowMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const handleClickDropdownSubmenu = () => {
    setDropdowSub(!dropdowSub);
  };
  const handleClickHiddenMenu = () => {
    setIsOpenMenu(false);
  };
  const handleClickShowCart = () => {
    setIsOpenCart(!isOpenCart);
  };
  const handleClickShowFav = () => {
    setIsOpenFav(!isOpenFav);
  };
  return (
    <>
      <header className="">
        <div className="topbar hidden lg:block py-3 max-w-[1410px] px-5 mx-auto text-sm">
          <div className="flex justify-between items-center">
            <p className="text-[#515d66]">
              You are a student and students get 20% discount.
            </p>
            <ul className="flex gap-x-8 text-[#212529]">
              <li>
                <a className="hover:text-[#2b38d1]" href="#">
                  Store Locator
                </a>
              </li>
              <li>
                <a className="hover:text-[#2b38d1]" href="#">
                  Order Tracking
                </a>
              </li>
              <li>
                <a className="hover:text-[#2b38d1]" href="#">
                  FAQs
                </a>
              </li>
              {
                <Dropdown title={"English"}>
                  <div className="bg-white absolute z-10 top-8 right-0 w-[130px] shadow-lg">
                    <ul className="leading-8 p-3">
                      <li className="hover:text-[#2b38d1] cursor-pointer hover:pl-1 transition-all ">
                        English
                      </li>
                      <li className="hover:text-[#2b38d1] cursor-pointer hover:pl-1 transition-all ">
                        Viet Nam
                      </li>
                      <li className="hover:text-[#2b38d1] cursor-pointer hover:pl-1 transition-all ">
                        English
                      </li>
                    </ul>
                  </div>
                </Dropdown>
              }
              {
                <Dropdown title={"USD"}>
                  <div className="bg-white absolute z-10 top-8 right-0 w-[100px] shadow-lg">
                    <ul className="leading-8 p-3">
                      <li className="hover:text-[#2b38d1] cursor-pointer hover:pl-1 transition-all ">
                        VND
                      </li>
                      <li className="hover:text-[#2b38d1] cursor-pointer hover:pl-1 transition-all ">
                        USD
                      </li>
                    </ul>
                  </div>
                </Dropdown>
              }
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex max-w-[1410px] px-5 py-5 mx-auto justify-between items-center">
          <div
            ref={barsRef}
            onClick={handleClickShowMenu}
            className="lg:hidden"
          >
            <i className="fa-solid fa-bars text-[25px]"></i>
          </div>
          <div className="w-[150px] shrink-0">
            <img
              src="https://demo-uminex.myshopify.com/cdn/shop/files/Logo_fb7c7c58-1b8f-455e-8b97-56d607743b37_145x@2x.png?v=1679893103"
              alt=""
            />
          </div>
          <div className="hidden lg:block w-full">
            <div className="flex items-center w-full  justify-center">
              <div className="border rounded-s-md border-[#e5e8ec] w-[60%] h-12 flex">
                <select
                  className="px-3 text-[#212529] hidden md:block bg-transparent  outline-0 w-[150px]"
                  name=""
                  id=""
                >
                  <option className="text-[#212529]" value="">
                    All Categories
                  </option>
                  <option className="text-[#212529]" value="">
                    All Categories
                  </option>
                  <option className="text-[#212529]" value="">
                    All Categories
                  </option>
                  <option className="text-[#212529]" value="">
                    All Categories
                  </option>
                  <option className="text-[#212529]" value="">
                    All Categories
                  </option>
                </select>
                <input
                  type="text"
                  defaultValue={""}
                  placeholder="Search for products..."
                  className="px-3 text-[14px] py-2 rounded-xl w-full  outline-0"
                />
              </div>
              <button className="bg-[#2b38d1] text-white hover:bg-[#2b39d1bd] px-10 py-[13px] rounded-e-md">
                Search
              </button>
            </div>
          </div>

          <div className="flex">
            <div className="hidden lg:block">
              <a href="#" className="flex items-center gap-2 mr-10">
                <img src={imageUser} alt="" />
                <div>
                  <p className="text-[#3c3d3e] tracking-widest text-[10px]">
                    Login
                  </p>
                  <p className="text-[#212529] font-bold text-[14px]">
                    Account
                  </p>
                </div>
              </a>
            </div>
            <div onClick={handleClickShowFav} ref={favouriteIconRef} className="hidden lg:block lg:mr-7 shrink-0 ">
              <a href="#" className="relative z-0 top-[6px]  ">
                <img src={imageHeart} alt="" />
                <span className="block -top-2 -right-3 w-5 leading-5 text-center text-white text-[10px] absolute h-5 rounded-full font-bold bg-red-600">
                  1
                </span>
              </a>
            </div>
            <div
              onClick={handleClickShowCart}
              ref={cartIconRef}
              className="text-center lg:mr-10"
            >
              <a href="#" className="flex items-center ">
                <div className="relative shrink-0 z-0 ">
                  <img src={imageCart} alt="" />
                  <span className="block -top-2 -right-3 w-5 leading-5 text-center text-white text-[10px] absolute h-5 rounded-full font-bold bg-red-600">
                    1
                  </span>
                </div>
                <div className="hidden lg:block">
                  <p className="text-[#3c3d3e] w-[100px] tracking-widest text-[10px]">
                    Your Cart <HiOutlineTag className="inline" />
                  </p>
                  <p className="text-[#212529] font-bold text-[14px]">
                    $430.00
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <hr />
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
                    <a href="#" className="hover:text-[#2b38d1]">
                      <li className="py-2  px-2 border-b-[1px] ">Home</li>
                    </a>
                    <a href="#" className="hover:text-[#2b38d1]">
                      <li className="py-2  px-2 border-b-[1px] ">Home</li>
                    </a>
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
                  <a className=" text-[#212529] hover:text-[#2b38d1]" href="">
                    Home{" "}
                  </a>
                </li>
                <li className=" lg:py-0 relative py-5 border-b lg:border-b-0">
                  <div className="flex justify-between items-center">
                    <a
                      className="block w-4/5 text-[#212529] hover:text-[#2b38d1]"
                      href=""
                    >
                      Shop{" "}
                    </a>
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
        <hr />
        <Cart cart={isOpenCart} setCart={setIsOpenCart} cartRef={cartRef} />
        <Favourite isOpen={isOpenFav} setIsOpen={setIsOpenFav} favRef={favouriteRef}/>
      </header>
    </>
  );
};

export default Header;
