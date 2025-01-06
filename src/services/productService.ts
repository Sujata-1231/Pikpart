import axios from "axios";

export const fetchProducts = async () => {
  // for testing purpose only mention dummyjson not working as of now.
  // const useMockData = true;
  // if (useMockData) {
  //   return mockProducts;
  // }
  const response = await axios.get("https://dummyjson.com/products");
  return response.data.products;
};

// const mockProducts = [
//   { id: 1, name: "Product 1", price: 100 },
//   { id: 2, name: "Product 2", price: 200 },
//   { id: 3, name: "Product 3", price: 300 },
// ];
