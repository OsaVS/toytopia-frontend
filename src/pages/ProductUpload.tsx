import React, { useState } from "react";
import {
  useAddProductMutation,
  useGetProductByIdQuery,
} from "../features/product/productApi";
import { ToyCategory } from "../types/product";
import Loader from "../components/Loader";

const ProductUpload = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState<ToyCategory | "">("");
  const [isNewProduct, setIsNewProduct] = useState(true);
  const [discount, setDiscount] = useState(0);
  const [stock, setStock] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [subImages, setSubImages] = useState<string[]>([]);

  const [addProduct, { isLoading, error }] = useAddProductMutation();
  const { data: product, error: productError } = useGetProductByIdQuery(id, {
    skip: !id,
  });

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: Function
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result as string);
      };
    }
  };

  const handleSubImagesUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const imagesArray: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          imagesArray.push(reader.result as string);
          if (imagesArray.length === files.length) {
            setSubImages([...subImages, ...imagesArray]);
          }
        };
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addProduct({
      name,
      description,
      price: Number(price),
      category,
      isNewProduct,
      discount,
      stock: Number(stock),
      mainImage,
      subImages,
    });
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
          onChange={(e) => handleImageUpload(e, setMainImage)}
          required
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleSubImagesUpload}
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
            src={product.data.mainImage}
            alt={product.data.name}
            width="200"
          />
          {product.data.subImages.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt={`${product.data.name} ${index}`}
              width="200"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductUpload;
