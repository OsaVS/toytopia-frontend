import React from "react";
import { useGetAllProductsQuery } from "../../features/product/productApi";
import Loader from "../../components/Loader";
import { ProductData } from "../../types/product";

const ProductList = () => {
  const { data, isLoading, refetch } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  return (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-semibold mb-5">Products List</h1>
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">Product Code</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Category</th>
          <th className="border px-4 py-2">Price</th>
          <th className="border px-4 py-2">Stock</th>
        </tr>
      </thead>
      <tbody>
        {data?.data.map((product: ProductData) => (
          <tr key={product._id}>
            <td className="border px-4 py-2">{product._id}</td>
            <td className="border px-4 py-2">{product.name}</td>
            <td className="border px-4 py-2">{product.category}</td>
            <td className="border px-4 py-2">{product.price}</td>
            <td className="border px-4 py-2">{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>

  </div>);
};

export default ProductList;
