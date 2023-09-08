import { FiLayers } from "react-icons/fi";
import { AiOutlineCheck, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { ImageLoader, Title } from "../common";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Product = ({ deals }) => {
  return (
    <div className="">
      <div className="mx-1 group rounded-md overflow-hidden relative  bg-white p-[20px]">
        <div className="">
          <div className="cursor-pointer relative min-h-[130px]">
            <Link to={"/products/1"}>
              <ImageLoader
                src="https://demo-uminex.myshopify.com/cdn/shop/products/products_12_2.jpg?v=1672302207&width=360"
                className={
                  "lg:group-hover:hidden  lg:group-hover:scale-105 transition-all duration-300"
                }
              />
              <img
                className="!hidden lg:group-hover:!block lg:group-hover:scale-105 transition-all duration-500"
                src="https://demo-uminex.myshopify.com/cdn/shop/products/products_12_1.jpg?v=1672302207&width=360"
                alt=""
              />
            </Link>
          </div>
          <div className="absolute top-5 font-bold text-[12px] left-0 px-2 py-1 text-white bg-[#35ff1a]">
            NEW
          </div>
          <div className="absolute top-20 right-2 opacity-0 group-hover:top-10 group-hover:opacity-100 transition-all duration-500 ">
            <div className="w-9 h-9 hover:bg-[#4459ff] hover:text-white bg-white group/t  cursor-pointer mb-1 relative flex justify-center items-center rounded-full bg-transparent border">
              <AiOutlineHeart />
              <Title title={"Add wishlist"} />
            </div>
            <div className="w-9 h-9 cursor-pointer hover:bg-[#4459ff] hover:text-white group/t bg-white mb-1 flex justify-center items-center rounded-full bg-transparent border">
              <FiLayers />
              <Title title={"Add compare"} />
            </div>
            <div className="w-9 h-9 cursor-pointer hover:bg-[#4459ff] hover:text-white group/t bg-white mb-1 flex justify-center items-center rounded-full bg-transparent border">
              <AiOutlineEye />
              <Title title={"Quick view"} />
            </div>
          </div>
        </div>
        <div className=" relative lg:group-hover:-mt-12 lg:group-hover:pb-12 pb-0 transition-all duration-500 mt-0 z-20 py-3 bg-white">
          <h3 className="text-[15px] leading-[1.2em] max-h-[2.4em] text-clip overflow-hidden ...">
            <Link to="products/1" className=" ">
              Laptop Apple MacBook Pro M1 16GB/512GB
            </Link>
          </h3>
          <div className="flex items-center mt-2 gap-2">
            <div className="flex items-center gapx-3 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((item, index) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 md:w-5 w-3 md:h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    key={index}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
            </div>
            <span className="text-gray-400 text-[12px]">(1 review)</span>
          </div>
          <div className="flex items-center gap-3">
            <h4 className="text-[#3741ff] font-bold text-base mt-1">$230.00</h4>
            <span className="text-gray-300 font-thin text-xs mt-1 line-through">
              $300.00
            </span>
          </div>
          <div className={`${deals ? "block" : "hidden"}`}>
            <div className="h-2 mt-3 rounded-xl relative flex bg-[#00000016] after:content-[''] after:block after:bg-red-500 after:rounded-2xl after:h-2 after:absolute after:w-[55%] after:left-0"></div>
            <p className="text-gray-500 mt-3">
              Sold: <span className="text-black font-bold">55/100 </span>{" "}
              products
            </p>
          </div>
          <div className={`${deals ? "hidden" : "block"} mt-6 h-2`}>
            <div className="flex items-center text-[#1c8e24] text-[12px] ">
              {" "}
              <AiOutlineCheck className="me-2" /> In stock{" "}
              <span className="text-black ms-2"> 3 Products</span>
            </div>
          </div>
          <button className="bg-[#2b38d1] absolute mt-5 text-white py-2 px-5 w-full lg:py-2 lg:px-8 rounded-full transition-all">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  deals: PropTypes.bool,
};
export default Product;
