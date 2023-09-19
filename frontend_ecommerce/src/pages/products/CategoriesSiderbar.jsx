import React, { useEffect, useState } from "react";
import { categoriesApi } from "../../api/categoriesApi";
import { Link } from "react-router-dom";

const CategoriesSiderbar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await categoriesApi.getAll();
      setData(res.data);
    };
    fetchApi();
  }, []);
  return (
    <>
      <h3 className="font-bold uppercase "> product category</h3>
      <ul className="mt-5">
        <label htmlFor={'all'} className=" cursor-pointer">
          <div className="my-2">
            <Link
              to={`/categories/all`}
              className="text-gray-500 py-1 pt-[2px] block hover:pl-1 hover:transition-all duration-100 hover:text-[#1a40ff]"
            >
              All
            </Link>
          </div>
        </label>
        {data.map((item) => (
          <label key={item.id} htmlFor={item.name} className=" cursor-pointer">
            <div className="my-2">
              <Link
                to={`/categories/${item.slug}`}
                className="text-gray-500 py-1 pt-[2px] block hover:pl-1 hover:transition-all duration-100 hover:text-[#1a40ff]"
              >
                {item.name}
              </Link>
            </div>
          </label>
        ))}
      </ul>
    </>
  );
};

export default CategoriesSiderbar;
