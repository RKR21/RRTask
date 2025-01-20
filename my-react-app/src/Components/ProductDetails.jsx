const ProductDetails = ({ product, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white p-6 rounded-lg w-fit">
        <h2 className="text-2xl font-bold mb-3">{product.name}</h2>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Stock:</strong> {product.stock}
        </p>
        <div className="rating">
          <p>
            <strong>Rating:</strong> {product.rating.rate}/5,{" "}
            {product.rating.count} Votes
          </p>
        </div>

        <p>
          <strong>Image Url:</strong> {product.image_url}
        </p>
        <p>
          <strong>SKU:</strong> {product.sku}
        </p>
        <button
          onClick={closeModal}
          className="mt-4 bg-[#522a27] text-white p-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default ProductDetails;
