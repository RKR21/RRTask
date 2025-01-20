import { useEffect } from "react";

const DataFetcher = ({ setProducts, setCarts, setUsers }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [responseP, responseC, responseU] = await Promise.all([
          fetch("https://api.jsoning.com/mock/public/products"),
          fetch("https://api.jsoning.com/mock/public/carts"),
          fetch("https://api.jsoning.com/mock/public/users"),
        ]);
        if (!responseP.ok || !responseC.ok || !responseU.ok) {
          throw new Error("One or both API calls failed");
        }
        const products = await responseP.json();
        const carts = await responseC.json();
        const users = await responseU.json();
        setProducts(products);
        setCarts(carts);
        setUsers(users);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);
  return null;
};
export default DataFetcher;
