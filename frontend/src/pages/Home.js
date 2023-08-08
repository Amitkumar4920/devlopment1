import React, { useRef } from "react";
import HomeCard from "../components/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../components/CardFeature";
import { FcPrevious, FcNext } from "react-icons/fc";
import AllProduct from "../components/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(0, 4);
  const homeProductCartListPizza = productData.filter(
    (e1) => e1.category === "pizza",
    []
  );
  // console.log(homeProductCartListPizza);

  const loadingArray = new Array(5).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };

  const PrevProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          {/* <div className='flex gap-3 bg-slate-300 w-36 px-2 h-14 items-center rounded-full'>
          <p className='text-sm font-medium text-slate-900 '>Bike Delivery</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjC1nrDYMCnBRqGqKhlOk9kd2c78JGviyrlse9b2g-PSgFslq_ttja-xgh2XiTAXJKHg&usqp=CAU" alt='image here' className='h-7'/>
        </div> */}
          <div className="flex gap-3 bg-blue-500 px-4 py-2 h-16 items-center rounded-full hover:bg-orange-300 cursor-pointer animate-fade-in">
            <div
              className="h-12 w-12 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://i0.wp.com/interexy.com/wp-content/uploads/2021/02/How-to-create-a-food-delivery-app.png?w=1276&ssl=1')",
              }}
            />
            <p className="text-sm font-semibold text-white">
              Fast &amp; Reliable Bike Delivery
            </p>
          </div>

          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fastest Deliver Service {" "}
            <span className="text-red-600">to Home</span>{" "}
          </h2>
          <p className="py-3 text-lg font-serif text-center md:text-left">
          <span className="text-blue-400 text-2xl md:text-3xl font-bold py-3">Welcome to FoodieDelight!</span>{" "}<br/><br/>
            {/* <p className="font-bold">Welcome to FoodieDelight!</p> <br /> */}
            Hungry and craving delicious food? You've come to the right place!<br/>
            FoodieDelight is your one-stop destination for all your food
            cravings.<br/>Whether you're in the mood for scrumptious pizzas,
            mouthwatering burgers, healthy salads, or delectable desserts, we
            have it all!
            <br/><br/>
            <div className="flex justify-center md:justify-start mt-4 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilN_K-0-OOiDmBbrH_1Ab8WJr3II9rreZ_g&usqp=CAU"
                alt="FoodieDelight"
                className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-full border-4 border-blue-500"
              />
            </div>
          </p>

          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4  border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((e1) => {
                return (
                  <HomeCard
                    key={e1._id}
                    id={e1._id}
                    image={e1.image}
                    name={e1.name}
                    price={e1.price}
                    category={e1.category}
                  />
                );
              })
            : loadingArray.map((e1, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"loading..."} />
                );
              })}
        </div>
      </div>

      <div className="">
        {/* <h2>Fresh vegetable</h2> */}
        <div className="flex w-full items-center">
          <h2 class="text-5xl font-extrabold dark:text-white mb-5">
            Top-Food
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={PrevProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded h-1/2"
            >
              <FcPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded h-1/2"
            >
              <FcNext />
            </button>
          </div>
        </div>

        <div
          className="flex gap-7 overflow-x-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListPizza[0]
            ? homeProductCartListPizza.map((e1) => {
                return (
                  <CardFeature
                    key={e1._id}
                    id={e1._id}
                    image={e1.image}
                    name={e1.name}
                    price={e1.price}
                    category={e1.category}
                  />
                );
              })
            : loadingArrayFeature.map((e1, index) => (
                <CardFeature loading="Loading..." key={index} />
              ))}
        </div>
      </div>

      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;
