import React from "react";
import { useGetAllProductsQuery } from "../../features/product/productApi";
import Loader from "../../components/Loader";

const ProductList = () => {
  const { data, isLoading, refetch } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  return <div>ProductList</div>;
};

export default ProductList;
