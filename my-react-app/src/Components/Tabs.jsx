import { useState } from "react";
import ProductsDisplay from "./ProductsDisplay";
import CartsDisplay from "./CartsDisplay";
const Tabs = ({ products, carts, users, setProducts }) => {
  const [tab, setTab] = useState(0);

  const handleClickP = () => {
    setTab(0);
  };
  const handleClickC = () => {
    setTab(1);
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="mt-20 space-x-6">
        <button
          className={`font-serif text-xl border border-solid rounded-lg p-2 w-40 hover:scale-105
            ${
              tab === 0 ? "bg-[#c59849] text-black" : "bg-[#522a27] text-white"
            }`}
          onClick={() => handleClickP()}
        >
          Products
        </button>
        <button
          className={`font-serif text-xl border border-solid rounded-lg p-2 w-40 hover:scale-105
            ${
              tab === 1 ? "bg-[#c59849] text-black" : "bg-[#522a27] text-white"
            }`}
          onClick={() => handleClickC()}
        >
          Carts
        </button>
      </div>
      <div className="display">
        {tab === 0 ? (
          <ProductsDisplay products={products} setProducts={setProducts} />
        ) : (
          <CartsDisplay carts={carts} users={users} products={products} />
        )}
      </div>
    </div>
  );
};
export default Tabs;
