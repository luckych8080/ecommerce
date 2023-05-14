import Product from "./Product";
import Filter from "../layouts/Filters";

const AllProducts = ({ data }) => {
  return (
    <main className="flex items-start">
      <Filter />
      <div>
      {data?.products?.map((product) => (
        <Product key={product?._id} product={product} />
      ))}
      </div>
    </main>
  );
};

export default AllProducts;
