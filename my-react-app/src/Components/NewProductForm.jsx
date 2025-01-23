import React, { useState } from "react";

const AddProductForm = ({ addProduct, closeForm }) => {
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    sku: "",
    image_url: "",
    rating: {
      rate: "",
      count: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rate" || name === "count") {
      setNewProduct((prev) => ({
        ...prev,
        rating: {
          ...prev.rating,
          [name]: value,
        },
      }));
    } else {
      setNewProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(newProduct); // Call the parent function to add the product
    setNewProduct({
      id: "",
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      sku: "",
      image_url: "",
      rating: {
        rate: "",
        count: "",
      },
    }); // Reset form
    closeForm(); // Close the form
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] flex flex-col overflow-auto">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name and Price*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block">Product Name</label>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block">Price</label>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block">Description</label>
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

          {/* Category and Stock */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block">Category</label>
              <input
                type="text"
                name="category"
                value={newProduct.category}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block">Stock</label>
              <input
                type="number"
                name="stock"
                value={newProduct.stock}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
          </div>

          {/* SKU and Image URL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block">SKU</label>
              <input
                type="text"
                name="sku"
                value={newProduct.sku}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block">Image URL</label>
              <input
                type="text"
                name="image_url"
                value={newProduct.image_url}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
          </div>

          {/* Rating and # Votes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block">Rating Out of Five</label>
              <input
                type="number"
                name="rate"
                value={newProduct.rating.rate}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block">Number of Votes</label>
              <input
                type="number"
                name="count"
                value={newProduct.rating.count}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
          </div>
          <div>
            <label className="block">Product ID</label>
            <input
              type="number"
              name="id"
              value={newProduct.id}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#C73E1D] text-white p-2 rounded-md w-full"
          >
            Add Product
          </button>
        </form>
        <button
          onClick={closeForm}
          className="mt-4 bg-gray-500 text-white p-2 rounded-md w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddProductForm;
