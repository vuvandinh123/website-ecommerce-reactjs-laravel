import { useEffect, useRef, useState } from "react";
import { Accordion } from "../../components/common";
import { colorApi } from "../../api/colorApi";
import { sizeApi } from "../../api/sizeApi";
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { brandApi } from "../../api/brand.Api";

const Filter = (props) => {
  const { filter, setFilter, price, setPrice } = props;
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [brands, setBrands] = useState([]);
  const minPriceRef = useRef(null);
  const maxPriceRef = useRef(null);
  const colorRef = useRef(null);

  const handleCheckboxChange = (event) => {
    const value = Number(event.target.value);
    const name = event.target.name;
    const isChecked = event.target.checked;
    props.handleCheckboxChange(value, isChecked, name);
  };
  const handleClickFilterPrice = () => {
    setPrice({
      min: minPriceRef.current.value,
      max: maxPriceRef.current.value,
    });
  };
  useEffect(() => {
    const fetchApi = async () => {
      const res1 = await colorApi.getAll();
      const res2 = await sizeApi.getAll();
      const res3 = await brandApi.getAll();
      setColors(res1.data);
      setSizes(res2.data);
      setBrands(res3.data);
    };
    fetchApi();
  }, []);

  return (
    <>
      <div className="border-b pb-5 mt-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold uppercase ">Filter</h3>

          <button className="" title="Remove all">
            <BiTrash
              onClick={() => {
                setFilter({
                  size: [],
                  color: [],
                  brand: [],
                });
                setPrice({
                  min: null,
                  max: null,
                });
                document.querySelectorAll(".brand").forEach((it) => {
                  it.checked = false;
                });
                document.querySelectorAll(".color").forEach((it) => {
                  it.checked = false;
                });
                document.querySelectorAll(".size").forEach((it) => {
                  it.checked = false;
                });
                minPriceRef.current.value = "";
                maxPriceRef.current.value = "";
              }}
              className="text-[15px]"
            />
          </button>
        </div>
        <div className="flex items-center gap-1 mt-2 flex-wrap">
          {filter.brand.length > 0 &&
            filter.brand.map((item, index) => {
              const mach = brands.find((item2) => item2.id === item);
              return (
                <div key={index}>
                  <span className="px-2 text-[13px] py-1 pr-0 my-1 bg-slate-100 inline-block ms-1  rounded-sm">
                    Brand: {mach.name}
                    <span
                      onClick={() => {
                        document.querySelectorAll(".brand").forEach((it) => {
                          if (it.value == mach.id) {
                            it.checked = false;
                          }
                        });
                        setFilter((prevSelectedValues) => {
                          return {
                            ...prevSelectedValues,
                            brand: prevSelectedValues.color.filter(
                              (item3) => item3 !== mach.id
                            ),
                          };
                        });
                      }}
                      className="px-2  hover:text-[#ff3030] cursor-pointer"
                    >
                      <AiOutlineClose className="inline text-[13px]" />
                    </span>
                  </span>
                </div>
              );
            })}
          {price.min && (
            <div className="flex items-center ">
              <span className="px-4 text-[13px] py-1 my-1 bg-slate-100 inline-block ms-1  rounded-sm">
                Min: {price.min}
                <span
                  onClick={() => {
                    minPriceRef.current.value = "";
                    setPrice({ ...price, min: null });
                  }}
                  className="pl-3 hover:text-[#ff3030] cursor-pointer"
                >
                  <AiOutlineClose className="inline" />
                </span>
              </span>
            </div>
          )}
          {price.max && (
            <div className="flex items-center ">
              <span className="px-3 text-[13px] py-1 my-1 bg-slate-100 inline-block ms-1  rounded-sm">
                Max: {price.max}
                <span
                  onClick={() => {
                    maxPriceRef.current.value = "";
                    setPrice({ ...price, max: null });
                  }}
                  className="pl-3 hover:text-[#ff3030] cursor-pointer"
                >
                  <AiOutlineClose className="inline" />
                </span>
              </span>
            </div>
          )}
          {filter.color.length > 0 &&
            filter.color.map((item, index) => {
              const mach = colors.find((item2) => item2.id === item);
              return (
                <div key={index}>
                  <span className="px-2 text-[13px] py-1 pr-0 my-1 bg-slate-100 inline-block ms-1  rounded-sm">
                    Color: {mach.name}
                    <span
                      onClick={() => {
                        document.querySelectorAll(".color").forEach((it) => {
                          if (it.value == mach.id) {
                            it.checked = false;
                          }
                        });
                        setFilter((prevSelectedValues) => {
                          return {
                            ...prevSelectedValues,
                            color: prevSelectedValues.color.filter(
                              (item3) => item3 !== mach.id
                            ),
                          };
                        });
                      }}
                      className="px-2  hover:text-[#ff3030] cursor-pointer"
                    >
                      <AiOutlineClose className="inline text-[13px]" />
                    </span>
                  </span>
                </div>
              );
            })}
          {filter.size.length > 0 &&
            filter.size.map((item, index) => {
              const mach = sizes.find((item2) => item2.id === item);
              return (
                <div className="flex items-center " key={index}>
                  <span className="px-2 text-[13px] py-1 my-1 bg-slate-100 inline-block ms-1  rounded-sm">
                    Size: {mach.name}
                    <span
                      onClick={() => {
                        document.querySelectorAll(".size").forEach((it) => {
                          if (it.value == item) {
                            it.checked = false;
                          }
                        });
                        setFilter((prevSelectedValues) => {
                          return {
                            ...prevSelectedValues,
                            size: prevSelectedValues.size.filter(
                              (i) => i !== item
                            ),
                          };
                        });
                      }}
                      className="pl-3 hover:text-[#ff3030] cursor-pointer"
                    >
                      <AiOutlineClose className="inline text-[12px]" />
                    </span>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
      <div className="border-b pb-5 mt-5">
        <Accordion title="PRICE">
          <div>
            <p className="text-gray-500 mt-3">
              The highest price is{"  "}
              <span className="text-black">$928.00</span>
            </p>
            <div className="">
              <div className="flex items-center gap-3 mt-3 justify-around">
                <span className="text-xl text-gray-500">$</span>
                <input
                  ref={minPriceRef}
                  placeholder="Min"
                  className="border px-3 py-2 w-20 text-center outline-none focus:border focus:border-[#3030ff] rounded-md"
                  type="number"
                />
                <input
                  ref={maxPriceRef}
                  placeholder="Max"
                  className="border px-1 py-2 w-20 text-center outline-none focus:border focus:border-[#3030ff] rounded-md"
                  type="number"
                />
              </div>

              <button
                onClick={handleClickFilterPrice}
                className="w-full py-2 border bg-[#3030ff] text-white rounded-md mt-3"
              >
                Apply
              </button>
            </div>
          </div>
        </Accordion>
      </div>
      <div className="border-b pb-5 mt-5">
        <Accordion title="brand">
          <div className="mt-5">
            {brands.map((item) => (
              <label
                key={item.id}
                htmlFor={item.name}
                className="flex justify-between mb-2 cursor-pointer"
              >
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    value={item.id}
                    onChange={handleCheckboxChange}
                    name="brand"
                    className="brand"
                    id={item.name}
                  />
                  <span className="text-gray-500 pt-[2px]">
                    {item.name} (7)
                  </span>
                </div>
              </label>
            ))}
          </div>
        </Accordion>
      </div>
      <div className="border-b pb-5 mt-5">
        <Accordion title="color">
          <div className="mt-5">
            {colors.map((item) => (
              <label
                key={item.id}
                htmlFor={item.name}
                className="flex justify-between mb-2 cursor-pointer"
              >
                <div className="flex gap-3 items-center">
                  <input
                    ref={colorRef}
                    type="checkbox"
                    value={item.id}
                    onChange={handleCheckboxChange}
                    name="color"
                    className="color"
                    id={item.name}
                  />
                  <span className="text-gray-500 pt-[2px]">
                    {item.name} ({item.product_count})
                  </span>
                </div>
                <span
                  style={{ background: item.color_code }}
                  className={`w-4 h-4 block rounded-full`}
                ></span>
              </label>
            ))}
          </div>
        </Accordion>
      </div>
      <div className="border-b pb-5 mt-5">
        <Accordion title="SIZE">
          <div className="mt-5">
            <form action="" method="post">
              {sizes.map((item) => (
                <label
                  key={item.id}
                  htmlFor={item.name}
                  className="flex justify-between mb-2 cursor-pointer"
                >
                  <div className="flex gap-3 items-center">
                    <input
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      value={item.id}
                      className="size"
                      name="size"
                      id={item.name}
                    />
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
    </>
  );
};

Filter.propTypes = {
  handleCheckboxChange: PropTypes.func,
  filter: PropTypes.object,
  setFilter: PropTypes.func,
  setPrice: PropTypes.func,
  price: PropTypes.object,
};
export default Filter;
