import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css";

const SingleProductPage = () => {
  const { product_id } = useParams();

  const [data, setData] = useState([]);

  async function getData() {
    try {
      const res = await axios.get(
        `http://localhost:3000/products/${product_id}`
      );
      setData(res.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const { image, title, rating, price, category, description, id } = data;
  console.log("rating: ", rating);

  return (
    <div className="w-[80vw] mx-auto flex items-center rounded-md p-6 mt-10 flex-col gap-4 sm:flex-row  shadow-transition">
      <div className="lg:w-[30%] relative  overflow-hidden">
        <img
          className="transition-transform duration-500 hover:shadow-lg transform hover:scale-110 p-6"
          src={image}
          alt=""
        />
      </div>
      <div className="flex w-[80vw] flex-col gap-2 lg:gap-4 lg:flex-1 px-4 ">
        <h1 className="text-sm sm:text-2xl lg:text-4xl">{title}</h1>
        <h2 className="text-gray-400 text-xs">{description}</h2>
        <p>Price-{price}</p>
        <p>Category-{category}</p>
        <p>Rating-{rating?.rate} Stars</p>
        <p>Reviews-{rating?.count}</p>
        <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProductPage;
