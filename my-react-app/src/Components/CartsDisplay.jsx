import { useState } from "react";
import CartDetails from "./CartDetails";
const CartsDisplay = ({ carts, users, products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCart, setSelectedCart] = useState(null);
  const [user, setUser] = useState(null);
  const getNumItems = (cart) => {
    const items = cart.items;
    const quantity = items.reduce((total, item) => total + item.quantity, 0);
    return quantity;
  };
  const getUser = (cart) => {
    const userId = cart.userId;
    const user = users.find((user) => String(user.id) === String(userId));
    return user;
  };
  const getUsersName = (cart) => {
    const user = getUser(cart);
    if (user == undefined) {
      return "Name Not Found";
    } else {
      return user.firstname + " " + user.lastname;
    }
  };

  const openModal = (cart) => {
    setIsModalOpen(true);
    setSelectedCart(cart);
    setUser(getUser(cart));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8">
      {carts.map((cart, index) => (
        <div
          key={cart.id}
          className="card border rounded-lg shadow-lg hover:scale-105 hover:cursor-pointer"
          onClick={() => openModal(cart)}
        >
          <div className="image bg-[#9CB380] w-full h-36 mb-4 rounded-t-lg" />
          <div className="info">
            <p className="product-info">
              <strong>Name: </strong>
              {getUsersName(cart)}
            </p>
            <p className="product-info">
              <strong>Date: </strong>
              {cart.date}
            </p>
            <p className="product-info">
              <strong>Status: </strong>
              {cart.status}
            </p>
            <p className="product-info">{cart.category}</p>
            <p className="product-info">
              <strong>Quantity: </strong>
              {getNumItems(cart)}
            </p>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <CartDetails
          cart={selectedCart}
          closeModal={closeModal}
          getUser={getUser}
          user={user}
          products={products}
        />
      )}
    </div>
  );
};
export default CartsDisplay;
