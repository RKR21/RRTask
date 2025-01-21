import { useEffect, useState } from "react";

const CartDetails = ({ cart, closeModal, user, products }) => {
  const [productInfo, setProductInfo] = useState([]);
  const getProductInfo = () => {
    const info = cart.items.map((item) => {
      const product = products.find(
        (product) => String(product.id) === String(item.productId)
      );

      return {
        name: product.name,
        description: product.description,
        quantity: item.quantity,
      };
    });
    setProductInfo(info);
  };
  useEffect(() => {
    getProductInfo();
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl overflow-auto">
        <h2 className="text-3xl font-semibold text-center text-[#522a27] mb-6">
          {user ? user.firstname + " " + user.lastname : "Name Not Found"}
        </h2>

        {/* User Info */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <p className="font-medium">
              <strong>Email:</strong>
            </p>
            <p className="text-gray-700">
              {user ? user.email : "Email Not Found"}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">
              <strong>Location:</strong>
            </p>
            <p className="text-gray-700">
              {user
                ? `${user.city}, ${user.state} ${user.zipcode}`
                : "Location Not Found"}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">
              <strong>Phone:</strong>
            </p>
            <p className="text-gray-700">
              {user ? user.phone : "Phone Not Found"}
            </p>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4 mb-6">
          <h3 className="text-xl font-semibold text-[#522a27]">
            Products in Cart
          </h3>
          <div className="divide-y divide-gray-200">
            {productInfo.map((product, index) => (
              <div key={index} className="py-2">
                <div className="flex justify-between">
                  <p className="font-medium">{product.name}</p>
                  <p className="font-semibold">x{product.quantity}</p>
                </div>
                <p className="text-gray-500 text-sm">{product.description}</p>
              </div>
            ))}
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
export default CartDetails;
