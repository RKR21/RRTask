const ProductDetails = ({ product, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl overflow-auto">
        <h2 className="text-3xl font-semibold text-center text-[#522a27] mb-6">
          {product.name}
        </h2>

        {/* Product Info */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <p className="font-medium text-lg">
              <strong>Price:</strong>
            </p>
            <p className="text-lg text-gray-700">${product.price}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-lg">
              <strong>Category:</strong>
            </p>
            <p className="text-lg text-gray-700">{product.category}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-lg">
              <strong>Description:</strong>
            </p>
            <p className="text-lg text-gray-700">{product.description}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-lg">
              <strong>Stock:</strong>
            </p>
            <p className="text-lg text-gray-700">x{product.stock}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <p
              className={`text-lg font-semibold ${
                product.rating.rate >= 4
                  ? "text-green-600"
                  : product.rating.rate >= 3
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              <strong>Rating:</strong> {product.rating.rate}/5
            </p>
            <p className="italic text-sm text-gray-600">
              {product.rating.rate >= 4
                ? "Excellent"
                : product.rating.rate >= 3
                ? "Ok"
                : "Needs Improvement"}
            </p>
          </div>
          <p className="text-sm text-gray-500">{product.rating.count} votes</p>
        </div>

        {/* SKU and URL */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <p className="font-medium text-lg">
              <strong>Image URL:</strong>
            </p>
            <p className="text-lg text-gray-700">{product.image_url}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-lg">
              <strong>SKU:</strong>
            </p>
            <p className="text-lg text-gray-700">{product.sku}</p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="mt-4 bg-[#522a27] text-white p-2 rounded-lg hover:bg-[#C73E1D] transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
