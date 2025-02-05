import React, { useState } from "react";
import {
  useAddProductMutation,
  useGetProductByIdQuery,
  useUpdateProductImagesMutation,
} from "../features/product/productApi";
import { ToyCategory } from "../types/product";
import Loader from "../components/Loader";
import { TP_BASE } from "../constants";

const ProductUpload = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState<ToyCategory | "">("");
  const [isNewProduct, setIsNewProduct] = useState(true);
  const [discount, setDiscount] = useState(0);
  const [stock, setStock] = useState("");
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [subImages, setSubImages] = useState<File[]>([]);

  const [addProduct, { isLoading, error }] = useAddProductMutation();
  const [updateProductImages] = useUpdateProductImagesMutation();
  const { data: product, error: productError } = useGetProductByIdQuery(id, {
    skip: !stock,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mainImage) return alert("Main image is required!");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", String(price));
    formData.append("category", category);
    formData.append("isNewProduct", isNewProduct.toString());
    formData.append("discount", discount.toString());
    formData.append("stock", String(stock));
    formData.append("mainImage", mainImage);
    subImages.forEach((image) => formData.append("subImages", image));
    await addProduct(formData);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!mainImage) {
      alert("Main image is required!");
      return;
    }

    const formData = new FormData();
    formData.append("mainImage", mainImage);
    if (subImages) {
      Array.from(subImages).forEach((file) => {
        formData.append("subImages", file);
      });
    }

    try {
      console.log(id)
      await updateProductImages({ id, formData }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    <Loader />;
  }

  return (
    <div>
      <h2>Upload Product</h2>
      <form onSubmit={handleSubmit} className="grid">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as ToyCategory)}
          required
        >
          <option value="">Select Category</option>
          {Object.values(ToyCategory).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={isNewProduct ? "Yes" : "No"}
          onChange={(e) => setIsNewProduct(e.target.value === "Yes")}
          required
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <input
          type="number"
          placeholder="Discount (%)"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
          required
          min={0}
          max={100}
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setMainImage(e.target.files?.[0] || null)}
          required
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setSubImages(Array.from(e.target.files || []))}
          required
        />
        <button type="submit">Upload</button>
      </form>
      {error && <p>Error uploading product.</p>}

      <h2>Fetch Product by ID</h2>
      <input
        type="text"
        placeholder="Enter Product ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      {productError && <p>Product not found.</p>}
      {product && (
        <div>
          <h3>{product.data.name}</h3>
          <p>{product.data.description}</p>
          <p>Price: {product.data.price}LKR</p>
          <img
            src={`${TP_BASE}${product.data.mainImage}`}
            alt={product.data.name}
            width="200"
          />
          {product.data.subImages.map((image: string, index: number) => (
            <img
              key={index}
              src={`${TP_BASE}${image}`}
              alt={`${product.data.name} ${index}`}
              width="200"
            />
          ))}
        </div>
      )}

      <div>
        <h2>Update Product Images</h2>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Enter Product ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <br />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setMainImage(e.target.files?.[0] || null)}
          />
          <br />
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setSubImages(Array.from(e.target.files || []))}
          />
          <br />
          <button type="submit">Update Images</button>
        </form>
      </div>
    </div>
  );
};

export default ProductUpload;
