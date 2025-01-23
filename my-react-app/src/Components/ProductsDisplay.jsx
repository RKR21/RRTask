import { useState } from "react";
import ProductDetails from "./ProductDetails";
import NewProductForm from "./NewProductForm";
const ProductsDisplay = ({ products, setProducts }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  const openForm = () => {
    setIsFormOpen(true);
  };
  const closeForm = () => {
    setIsFormOpen(false);
  };
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]); // Add the new product to the list
    isAddSuccessful(newProduct.id);
  };
  const isAddSuccessful = (id) => {
    const newest = products.find((product) => product.id === id);
    newest ? setIsSuccess(false) : setIsSuccess(true);
  };
  return (
    <div className="flex flex-col">
      <div>
        {isSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-green-500 p-4 rounded-lg w-auto max-w-md mx-4 text-center">
              <p className="text-white">Product successfully added...</p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-2 bg-white text-green-600 px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <button
        className="bg-[#C73E1D] border rounded-md text-xl text-white 
        font-serif m-8 mx-auto p-3 hover:bg-[#9cb380] hover:text-black duration-300"
        onClick={openForm}
      >
        Add
      </button>
      {isFormOpen && (
        <NewProductForm
          products={products}
          addProduct={addProduct}
          closeForm={closeForm}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="card border rounded-lg shadow-lg hover:scale-105 hover:cursor-pointer"
            onClick={() => openModal(product)}
          >
            <div className="image bg-[#9CB380] w-full h-36 mb-4 rounded-t-lg" />
            <div className="info">
              <p className="product-name">{product.name}</p>
              <p className="product-info">${product.price}</p>
              <p className="product-info">{product.category}</p>
              <p className="product-info">{product.stock} left</p>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ProductDetails product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  );
};
export default ProductsDisplay;
