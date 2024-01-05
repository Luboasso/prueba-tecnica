import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

const getAll = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const productsService = {
  getAll,
};

export default productsService;
