import { Accordion } from "../../components/common";
import { useEffect, useState } from "react";
import { productApi } from "../../api/productApi";
import CategoriesSiderbar from "./CategoriesSiderbar";
import { useNavigate, useParams } from "react-router-dom";
import Filter from "./Filter";
import LayoutProduct from "../../components/common/LayoutProduct";
import { useApiCall } from "../../hooks";
const Products = () => {
  const [sortBy, setSortBy] = useState("featured");
  const searchParams = new URLSearchParams(window.location.search);

  const size = searchParams.get("size")?.split(",") || [];
  const brand = searchParams.get("brand")?.split(",") || [];
  const color = searchParams.get("color")?.split(",") || [];
  const [params, setParams] = useState({
    brand: brand,
    color: color,
    size: size,
    sortBy: "featured",
    price: { min: null, max: null },
  });
  // console.log(window.location);
  const navigate = useNavigate();
  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (params.brand.length > 0) {
      queryParams.append("brand", params.brand.join(","));
    }
    if (params.color.length > 0) {
      queryParams.append("color", params.color.join(","));
    }
    if (params.size.length > 0) {
      queryParams.append("size", params.size.join(","));
    }
    if (params.sortBy.length > 0) {
      queryParams.append("sortBy", params.sortBy);
    }
    navigate(`?${queryParams.toString()}`);
  }, [params, navigate]);
  const limi = searchParams.get("limit");
  const [limit, setLimit] = useState(Number(limi) || 5);
  const [price, setPrice] = useState({
    min: null,
    max: null,
  });

  const { slug } = useParams();
  // useEffect(() => {
  //   if(size.length > 0){
  //     setFilter({...filter, size})
  //   }

  // },[size,filter])
  const handleCheckboxChange = (value, isChecked, name) => {
    if (name == "size") {
      setParams((item) => {
        if (isChecked) {
          if (!item.size.includes(value)) {
            return {
              ...item,
              size: [...item.size, value],
            };
          }
        } else {
          return {
            ...item,
            size: item.size.filter((item) => item !== value),
          };
        }
        return item;
      });
    } else if (name == "color") {
      setParams((item) => {
        if (isChecked) {
          if (!item.color.includes(value)) {
            return {
              ...item,
              color: [...item.color, value],
            };
          }
        } else {
          return {
            ...item,
            color: item.color.filter((item) => item !== value),
          };
        }
        return item;
      });
    } else if (name == "brand") {
      setParams((item) => {
        if (isChecked) {
          if (!item.brand.includes(value)) {
            return {
              ...item,
              brand: [...item.brand, value],
            };
          }
        } else {
          return {
            ...item,
            brand: item.brand.filter((item) => item !== value),
          };
        }
        return item;
      });
    }
  };
  // const handleCheckboxChange = (value, isChecked, name) => {
  //   if (name == "size") {
  //     setFilter((item) => {
  //       if (isChecked) {
  //         if (!item.size.includes(value)) {
  //           return {
  //             ...item,
  //             size: [...item.size, value],
  //           };
  //         }
  //       } else {
  //         return {
  //           ...item,
  //           size: item.size.filter((item) => item !== value),
  //         };
  //       }
  //       return item;
  //     });
  //   } else if (name == "color") {
  //     setFilter((item) => {
  //       if (isChecked) {
  //         if (!item.color.includes(value)) {
  //           return {
  //             ...item,
  //             color: [...item.color, value],
  //           };
  //         }
  //       } else {
  //         return {
  //           ...item,
  //           color: item.color.filter((item) => item !== value),
  //         };
  //       }
  //       return item;
  //     });
  //   } else if (name == "brand") {
  //     setFilter((item) => {
  //       if (isChecked) {
  //         if (!item.brand.includes(value)) {
  //           return {
  //             ...item,
  //             brand: [...item.brand, value],
  //           };
  //         }
  //       } else {
  //         return {
  //           ...item,
  //           brand: item.brand.filter((item) => item !== value),
  //         };
  //       }
  //       return item;
  //     });
  //   }
  // };
  const { data, progress, loading } = useApiCall(async () => {
    return await productApi.getAll({
      size: JSON.stringify(params.size),
      color: JSON.stringify(params.color),
      min: price.min,
      max: price.max,
      page: 1,
      limit: limit,
      category: slug,
      sortBy: sortBy,
      brand: JSON.stringify(params.brand),
    });
  }, [
    params.color,
    params.size,
    slug,
    price.min,
    price.max,
    params.brand,
    limit,
    sortBy,
  ]);
  const listProduct = data?.data?.data.data || [];
  const totalProduct = data?.data?.data.total || 0;
  // useEffect(() => {
  //   const params = {
  //     size: JSON.stringify(filter.size),
  //     color: JSON.stringify(filter.color),
  //     min: price.min,
  //     max: price.max,
  //     page: 1,
  //     limit: limit,
  //     category: slug,
  //     brand: JSON.stringify(filter.brand),
  //   };
  //   setLoading(true);
  //   setProgress(0);
  //   const fetchApi = async () => {
  //     const res = await productApi.getAll(params);
  //     setData(res.data.data.data);
  //     for (let i = 0; i <= 100; i++) {
  //       await new Promise((resolve) => setTimeout(resolve, 10));
  //       setProgress(i);
  //     }
  //     setTotalProduct(res.data.data.total);
  //     setLoading(false);
  //   };
  //   fetchApi();
  // }, [
  //   filter.size,
  //   filter.color,
  //   slug,
  //   price.min,
  //   price.max,
  //   filter.brand,
  //   limit,
  // ]);

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
              <CategoriesSiderbar />
            </div>
            <Filter
              handleCheckboxChange={handleCheckboxChange}
              filter={params}
              price={price}
              params={params}
              setPrice={setPrice}
              setFilter={setParams}
            />
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
                <div>
                  <img
                    className="w-full"
                    src="https://demo-uminex.myshopify.com/cdn/shop/files/img_1_8_180x.jpg?v=1676309988"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute top-1/4 left-5">
                <p className="uppercase text-red-500 mb-2 text-[12px]">
                  Top Camaras
                </p>
                <h6 className="text-2xl">LAP TOP</h6>
                <h6 className="uppercase text-red-500 text-2xl">macboox m1</h6>
                <p>
                  Just from <span>$129.00</span>
                </p>
                <button className="w-full py-2 mt-5 font-bold  text-black border-[3px]  rounded-full">
                  SHOW NOW
                </button>
              </div>
            </div>
          </div>
          <div className="lg:basis-4/5">
            <LayoutProduct
              setSortBy={setSortBy}
              sortBy={sortBy}
              setParams={setParams}
              params={params}
              progress={progress}
              loading={loading}
              data={listProduct}
            />
            <div
              onClick={() => {
                if (listProduct.length < totalProduct) {
                  setLimit(limit + 5);
                  const params = "?limit=" + (limit + 5);
                  navigate(params);
                }
              }}
              className="flex items-center justify-center mt-10"
            >
              {listProduct.length < totalProduct && (
                <button className="px-10 py-3 hover:shadow-md hover:bg-blue-500 transition-all duration-200 hover:text-white border-2  rounded-md bg-slate-200  ">
                  Load more ({totalProduct - listProduct.length}) products
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
