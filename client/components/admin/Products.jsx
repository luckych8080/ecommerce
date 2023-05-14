import React from "react";
import Link from "next/link";
import CustomPagination from "../layouts/CustomPagination";

const Products = ({ data }) => {
  return (
    <div>
      <h1>{data?.productsCount} Products</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Stock</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((product) => (
            <tr>
              <td>{product?.name}</td>
              <td>{product?.stock}</td>
              <td>${product?.price}</td>
              <td>
                <div>
                  <Link href={`/admin/products/upload_images`}>
                    <i aria-hidden="true"></i>
                  </Link>

                  <Link href={`/admin/products`}>
                    <i aria-hidden="true"></i>
                  </Link>
                  <a>
                    <i aria-hidden="true"></i>
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <CustomPagination
          resPerPage={data?.resPerPage}
          productsCount={data?.filteredProductsCount}
        />
      </div>
    </div>
  );
};

export default Products;
