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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white p-6 rounded-lg w-fit">
        <h2 className="text-2xl font-bold mb-3">
          {user ? user.firstname + " " + user.lastname : "Name Not Found"}
        </h2>
        <p>
          <strong>Email:</strong> {user ? user.email : "Email Not Found"}
        </p>
        <p>
          <strong>Location:</strong>{" "}
          {user
            ? `${user.city}, ${user.state} ${user.zipcode}`
            : "Email Not Found"}
        </p>
        <p>
          <strong>Phone:</strong> {user ? user.phone : "Phone Not Found"}
        </p>
        <p>
          <strong>Stock:</strong> {""}
        </p>
        <div className="products">
          {productInfo.map((product, index) => (
            <div key={index}>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.quantity}</p>
            </div>
          ))}
        </div>

        <p>
          <strong>Image Url:</strong>
        </p>
        <p>
          <strong>SKU:</strong>
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
export default CartDetails;
