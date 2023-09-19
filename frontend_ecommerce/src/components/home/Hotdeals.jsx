import hotdeals from "../../../public/svg/hotdel.svg";
import { Product } from "../common";
import { useCountDown } from "../../hooks";
import SlickCround from "../common/SlickCround";
import { useProductApi } from "../../hooks/hooksApi/useProductApi";

const Hotdeals = () => {
  const products = Array(10).fill(null);
  const {data} = useProductApi();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [ 
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
  const timeCountDown = new Date("2023-10-28T00:00:00").getTime();
  const { time } = useCountDown(timeCountDown);
  return (
    <div className="my-20">
      <div className=" bg-white rounded-md p-4 flex justify-between flex-wrap gap-y-4 items-center">
        <div className="flex items-center">
          <img src={hotdeals} className="me-2" alt="" />
          <p className="text-base font-[200] text-[#6F7275]">
            <span className="text-red-600 me-2 uppercase font-semibold ">
              Hot Deals!
            </span>
            GET OUR BEST PRICES
          </p>
        </div>
        <div>
          <div className="text-sm leading-4 flex items-center justify-between">
            <span className="me-3 text-[12px] lg:text-[14px]  text-[#424242]">
              Hurry up! Offer ends in:
            </span>
            <div>
              <span className="px-3 me-1 py-2 bg-red-600 font-bold rounded-sm text-white">
                {time.days}
              </span>
              <span className="px-3 me-1 py-2 bg-red-600 font-bold rounded-sm text-white">
                {time.hours}
              </span>
              <span className="px-3 me-1 py-2 bg-red-600 font-bold rounded-sm text-white">
                {time.minutes}
              </span>
              <span className="px-3 py-2 bg-red-600 font-bold rounded-sm text-white">
                {time.seconds}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap mt-3 gap-2">
        <div className="lg:basis-1/3 w-full">
          <a href="#" className="overflow-hidden block rounded-md">
            <img
              className="w-full min-h-[380px]   hover:scale-105 transition-all duration-300"
              src="https://demo-uminex.myshopify.com/cdn/shop/files/img_1_3.png?v=1673017886&width=2000"
              alt=""
            />
          </a>
        </div>
        <div className="lg:basis-2/3 max-w-[100%]  lg:max-w-[900px] relative group/arrow">
          <SlickCround settings={settings}>
            {data?.map((item, index) => {
              return <Product data={item} key={index} deals={true} />;
            })}
          </SlickCround>
        </div>
      </div>
    </div>
  );
};

export default Hotdeals;
