import { useState } from "react";
import { useCallback } from 'react';
import products from "./data/products.js";
import ProductList from "./components/ProductList/ProductList.jsx";
import ShoppingList from "./components/ShoppingList/ShoppingList.jsx";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const handleAddProduct = useCallback((product) => {
    const isProductInList = shoppingList.some(
      (item) => item.id === product.id
    );

    if (isProductInList) {

      setShoppingList(
        shoppingList.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          } else {
            return item
          }
        })
      )

    } else {

      setShoppingList([
        ...shoppingList,
        {
          ...product,
          quantity: 1
        }
      ]);

    }
  }, [shoppingList])

  return (
    <>
      <h1>Grocery compare</h1>
      <ProductList products={products} handleAddProduct={handleAddProduct} />
      <ShoppingList shoppingList={shoppingList} />
    </>
  )
}

export default App
