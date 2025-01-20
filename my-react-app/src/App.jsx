import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import DataFetcher from "./Components/DataFetcher";
import Tabs from "./Components/Tabs";

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   console.log(users); // Log the products when they are updated
  // }, [carts]);
  return (
    <div className="main flex justify-center">
      <DataFetcher
        setProducts={setProducts}
        setCarts={setCarts}
        setUsers={setUsers}
      />
      <Tabs
        products={products}
        carts={carts}
        users={users}
        setProducts={setProducts}
      />
    </div>
  );
}

export default App;
