import axios from "axios";
import AllProducts from "@/components/products/AllProducts";

const getProducts = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/products`);
  return data;
};

const Home = async () => {
  const productsData = await getProducts();

  return <AllProducts data={productsData} />;
};

export default Home;
