import { Accordion, Product } from "../../components/common";
import { useEffect, useState } from "react";
import Product2 from "../../components/common/Product2";

const Products = () => {
  var co = JSON.parse(localStorage.getItem("col")) || 0;
  const [col ,setCol] = useState(co);
  const color = [
    {
      id: 1,
      name: "red",
    },
    {
      id: 2,
      name: "yellow",
    },
    {
      id: 3,
      name: "black",
    },
    {
      id: 4,
      name: "CadetBlue",
    },
    {
      id: 5,
      name: "Chocolate",
    },
  ];
  const size = [
    {
      id: 1,
      name: "128GB",
    },
    {
      id: 2,
      name: "258GB",
    },
    {
      id: 3,
      name: "512GB",
    },
  ];
  const categorys = [
    {
      id: 1,
      name: "Smartphone",
    },
    {
      id: 2,
      name: "Laptop",
    },
    {
      id: 3,
      name: "Tablet",
    },
    {
      id: 4,
      name: "Smartwatch",
    },
    {
      id: 5,
      name: "Desktop Computer",
    },
    {
      id: 6,
      name: "Headphones",
    },
    {
      id: 7,
      name: "Gaming Console",
    },
    {
      id: 8,
      name: "Camera",
    },
    {
      id: 9,
      name: "Printer",
    },
    {
      id: 10,
      name: "Virtual Reality Headset",
    },
  ];

  useEffect(() => {
    if (col != 0) {
      localStorage.setItem("col", JSON.stringify(col));
    }

    const handleResize = () => {
      setCol(0);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [col]);
  return (
    <div className="bg-[#F1F5F6]">
      <div className="bg-[url(https://demo-uminex.myshopify.com/cdn/shop/files/bg_breadcrumbs_1920x.png?v=1684232545)] h-36 text-white flex justify-center items-center flex-col gap-y-3">
        <h2 className="text-4xl font-semibold">Products</h2>
        <div>
          <ul className="flex items-center gap-x-2">
            <li>
              <a href="">Home</a>
            </li>
            <li>/</li>
            <li>
              <a href="">Products</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-3 max-w-[1410px] px-5 mx-auto">
        <div className="flex gap-x-5">
          <div className="basis-1/5 hidden lg:block min-h-[100vh] bg-white p-5">
            <div className="border-b pb-5">
              <h3 className="font-bold uppercase "> product category</h3>
              <ul className="mt-5">
                <form action="" method="post">
                  {categorys.map((item) => (
                    <label
                      key={item.id}
                      htmlFor={item.name}
                      className="flex justify-between mb-2 cursor-pointer"
                    >
                      <div className="flex gap-3 items-center">
                        <input type="checkbox" className="" id={item.name} />
                        <span className="text-gray-500 pt-[2px]">
                          {item.name}
                        </span>
                      </div>
                      <span
                        style={{ background: item.name }}
                        className={`rounded-full w-6 h-6 block`}
                      ></span>
                    </label>
                  ))}
                </form>
              </ul>
            </div>
            <div className="border-b pb-5 mt-5">
              <Accordion title="PRICE">
                <div>
                  <p className="text-gray-500 mt-3">
                    The highest price is{"  "}
                    <span className="text-black">$928.00</span>
                  </p>
                  <div className="">
                    <form action="" method="post">
                      <div className="flex items-center gap-3 mt-3 justify-around">
                        <span className="text-xl text-gray-500">$</span>
                        <input
                          placeholder="Min"
                          className="border px-3 py-2 w-20 text-center outline-none focus:border focus:border-[#3030ff] rounded-md"
                          type="text"
                        />
                        <input
                          placeholder="Max"
                          className="border px-1 py-2 w-20 text-center outline-none focus:border focus:border-[#3030ff] rounded-md"
                          type="text"
                        />
                      </div>

                      <button className="w-full py-2 border bg-[#3030ff] text-white rounded-md mt-3">
                        Apply
                      </button>
                    </form>
                  </div>
                </div>
              </Accordion>
            </div>
            <div className="border-b pb-5 mt-5">
              <Accordion title="color">
                <div className="mt-5">
                  <form action="" method="post">
                    {color.map((item) => (
                      <label
                        key={item.id}
                        htmlFor={item.name}
                        className="flex justify-between mb-2 cursor-pointer"
                      >
                        <div className="flex gap-3 items-center">
                          <input type="checkbox" className="" id={item.name} />
                          <span className="text-gray-500 pt-[2px]">
                            {item.name} (7)
                          </span>
                        </div>
                      </label>
                    ))}
                  </form>
                </div>
              </Accordion>
            </div>
            <div className="border-b pb-5 mt-5">
              <Accordion title="SIZE">
                <div className="mt-5">
                  <form action="" method="post">
                    {size.map((item) => (
                      <label
                        key={item.id}
                        htmlFor={item.name}
                        className="flex justify-between mb-2 cursor-pointer"
                      >
                        <div className="flex gap-3 items-center">
                          <input type="checkbox" className="" id={item.name} />
                          <span className="text-gray-500 pt-[2px]">
                            {item.name} (1)
                          </span>
                        </div>
                        <span
                          style={{ background: item.name }}
                          className={`rounded-full w-6 h-6 block`}
                        ></span>
                      </label>
                    ))}
                  </form>
                </div>
              </Accordion>
            </div>
            <div className="border-b pb-5 mt-5">
              <Accordion title="AVAILABILITY">
                <div className="mt-5">
                  <form action="" method="post">
                    <label
                      htmlFor=""
                      className="flex justify-between mb-2 cursor-pointer"
                    >
                      <div className="flex gap-3 items-center">
                        <input type="checkbox" className="" id="" />
                        <span className="text-gray-500 pt-[2px]">aaa (1)</span>
                      </div>
                    </label>
                  </form>
                </div>
              </Accordion>
            </div>
            <div className="border-b pb-5 mt-5">
              <Accordion title="FEATURED PRODUCT">
                {Array(5)
                  .fill(1)
                  .map((item, index) => (
                    <div key={index} className="mt-5">
                      <div className="flex items-center">
                        <div className="basis-2/4 group relative">
                          <div>
                            <a href="" className="block">
                              <img
                                className="absolute group-hover:opacity-0 transition-all duration-400:"
                                src="https://demo-uminex.myshopify.com/cdn/shop/products/products_2_2.jpg?v=1670905748&width=360"
                                alt=""
                              />
                              <img
                                className="group-hover:scale-105"
                                src="https://demo-uminex.myshopify.com/cdn/shop/products/products_1_2.jpg?v=1670904533&width=360"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="mt-1">
                          <h4 className="">
                            <a
                              className="block text-[12px] hover:text-blue-500"
                              href=""
                            >
                              Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB
                            </a>{" "}
                          </h4>
                          <h5 className="font-bold mt-1 text-red-500">
                            $56.00
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
              </Accordion>
            </div>
            <div className="border-b pb-5 mt-5 relative">
              <div>
                <div><img className="w-full" src="https://demo-uminex.myshopify.com/cdn/shop/files/img_1_8_180x.jpg?v=1676309988" alt="" /></div>
              </div>
              <div className="absolute top-1/4 left-5">
                    <p className="uppercase text-red-500 mb-2 text-[12px]">Top Camaras</p>
                    <h6 className="text-2xl">LAP TOP</h6>
                    <h6 className="uppercase text-red-500 text-2xl">macboox m1</h6>
                    <p>Just from <span>$129.00</span></p>
                    <button className="w-full py-2 mt-5 font-bold  text-black border-[3px]  rounded-full">SHOW NOW</button>
              </div>
            </div>
          </div>
          <div className="lg:basis-4/5">
            <div className="bg-white p-5 rounded-md">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold">59</span>{" "}
                  <span className="text-gray-500">Products</span>
                </div>
                <div>
                  <ul className="flex items-center gap-5">
                    <li
                      className="hidden lg:block cursor-pointer"
                      onClick={() => setCol(3)}
                    >
                      <svg
                        className=""
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill={col === 3 ? "black" : "#d7d7e0"}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"></path>
                        <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z"></path>
                        <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z"></path>
                        <path d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z"></path>
                        <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
                        <path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z"></path>
                        <path d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z"></path>
                        <path d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z"></path>
                        <path d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z"></path>
                      </svg>
                    </li>
                    <li
                      className="hidden lg:block cursor-pointer"
                      onClick={() => setCol(4)}
                    >
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill={col === 4 ? "black" : "#d7d7e0"}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"></path>
                        <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z"></path>
                        <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z"></path>
                        <path d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z"></path>
                        <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
                        <path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z"></path>
                        <path d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z"></path>
                        <path d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z"></path>
                        <path d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z"></path>
                        <path d="M20 4C21.1046 4 22 3.10457 22 2C22 0.89543 21.1046 0 20 0C18.8954 0 18 0.89543 18 2C18 3.10457 18.8954 4 20 4Z"></path>
                        <path d="M20 10C21.1046 10 22 9.10457 22 8C22 6.89543 21.1046 6 20 6C18.8954 6 18 6.89543 18 8C18 9.10457 18.8954 10 20 10Z"></path>
                        <path d="M20 16C21.1046 16 22 15.1046 22 14C22 12.8954 21.1046 12 20 12C18.8954 12 18 12.8954 18 14C18 15.1046 18.8954 16 20 16Z"></path>
                      </svg>
                    </li>
                    <li
                      className="hidden lg:block cursor-pointer"
                      onClick={() => setCol(5)}
                    >
                      <svg
                        width="28"
                        height="16"
                        viewBox="0 0 28 16"
                        fill={col === 5 ? "black" : "#d7d7e0"}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"></path>
                        <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z"></path>
                        <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z"></path>
                        <path d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z"></path>
                        <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
                        <path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z"></path>
                        <path d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z"></path>
                        <path d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z"></path>
                        <path d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z"></path>
                        <path d="M20 4C21.1046 4 22 3.10457 22 2C22 0.89543 21.1046 0 20 0C18.8954 0 18 0.89543 18 2C18 3.10457 18.8954 4 20 4Z"></path>
                        <path d="M20 10C21.1046 10 22 9.10457 22 8C22 6.89543 21.1046 6 20 6C18.8954 6 18 6.89543 18 8C18 9.10457 18.8954 10 20 10Z"></path>
                        <path d="M20 16C21.1046 16 22 15.1046 22 14C22 12.8954 21.1046 12 20 12C18.8954 12 18 12.8954 18 14C18 15.1046 18.8954 16 20 16Z"></path>
                        <path d="M26 4C27.1046 4 28 3.10457 28 2C28 0.89543 27.1046 0 26 0C24.8954 0 24 0.89543 24 2C24 3.10457 24.8954 4 26 4Z"></path>
                        <path d="M26 10C27.1046 10 28 9.10457 28 8C28 6.89543 27.1046 6 26 6C24.8954 6 24 6.89543 24 8C24 9.10457 24.8954 10 26 10Z"></path>
                        <path d="M26 16C27.1046 16 28 15.1046 28 14C28 12.8954 27.1046 12 26 12C24.8954 12 24 12.8954 24 14C24 15.1046 24.8954 16 26 16Z"></path>
                      </svg>
                    </li>
                    <li
                      className="hidden lg:block cursor-pointer"
                      onClick={() => setCol(1)}
                    >
                      <svg
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill={col === 1 ? "black" : "#d7d7e0"}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"></path>
                        <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z"></path>
                        <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z"></path>
                        <path d="M20 2C20 2.552 19.553 3 19 3H7C6.448 3 6 2.552 6 2C6 1.448 6.448 1 7 1H19C19.553 1 20 1.447 20 2Z"></path>
                        <path d="M20 8C20 8.552 19.553 9 19 9H7C6.448 9 6 8.552 6 8C6 7.448 6.448 7 7 7H19C19.553 7 20 7.447 20 8Z"></path>
                        <path d="M20 14C20 14.552 19.553 15 19 15H7C6.448 15 6 14.552 6 14C6 13.447 6.448 13 7 13H19C19.553 13 20 13.447 20 14Z"></path>
                      </svg>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="text-gray-500 me-3">Sort by:</span>
                  <select
                    name=""
                    id=""
                    className="outline-none p-2 border rounded-md"
                  >
                    <option value="">Featured</option>
                    <option value="">Best selling</option>
                    <option value=""> Alphabetically, A-Z</option>
                    <option value="">Alphabetically, Z-A</option>
                    <option value="">Price, low to high</option>
                    <option value="">Price, high to low</option>
                    <option value="">Date, old to new</option>
                    <option value="">Date, new to old</option>
                  </select>
                </div>
              </div>
            </div>
            <div
              style={{
                gridTemplateColumns: col !== 0 ? `repeat(${col}, 1fr)` : '',
              }}
              className={` ${col != 1 && "grid"} ${
                col == 0 &&
                "min-[500px]:grid-cols-2 min-[600px]:grid-cols-3 min-[900px]:grid-cols-4 min-[1000px]:grid-cols-3 min-[1280px]:grid-cols-4 min-[1400px]:grid-cols-5"
              }  gap-y-2 mt-3 grid-cols-${col}`}
            >
              {Array(20)
                .fill(0)
                .map((item, index) => (
                  <div key={index} className="mb-1">
                    {col == 1 ? <Product2 /> : <Product />}
                    {/* <Product isItem={true}/> */}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
