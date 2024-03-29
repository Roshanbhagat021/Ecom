import { Select, SimpleGrid, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import ProductsCard from "../components/ProductsCard";

const AllProducts = () => {
  const { loading, error } = useContext(AuthContext);
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const res = await axios.get(`http://localhost:3000/products`);
      setData(res.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  async function getCetagoryData(category) {
    try {
      const res = await axios.get(
        `http://localhost:3000/products?category=${category}`
      );
      setData(res.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  function handelChage(e) {
    getCetagoryData(e.target.value);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <VStack
        spacing={4}
        m={"10px auto 10px auto"}
        className=" w-[90vw] max-w-[1000px]"
      >
        <Select name="category" onChange={(e) => handelChage(e)}>
          <option value="">All</option>
          <option value="men-clothing">Men's Clothing</option>
          <option value="women-clothing">Woment's Clothing</option>
          <option value="jewellery">Jewellery</option>
          <option value="electronics">Electronics</option>
        </Select>
      </VStack>

      {loading === true ? (
        <h1>Loading...</h1>
      ) : error === true ? (
        <h1>Something went wrong...</h1>
      ) : (
        <SimpleGrid
          maxW={"fit-content"}
          m={"10px auto"}
          columns={{ base: 1, md: 2, lg: 3 }}
          justifyContent={"center"}
        >
          {data.map((ele, index) => {
            return <ProductsCard key={index} {...ele} />;
          })}
        </SimpleGrid>
      )}
    </div>
  );
};

export default AllProducts;
