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
  }, [shoppingList]);

  const handleIncreaseQuantity = useCallback((product) => {
    setShoppingList(
      shoppingList.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
    )
  }, [shoppingList])

  const handleDecreaseQuantity = useCallback((product) => {
    setShoppingList(
      shoppingList.map((item) => {
        if (item.id === product.id) {

          if (item.quantity < 1) {
            return {
              ...item,
              quantity: 0,
            }
          }
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
    )
  }, [shoppingList])

  return (
    <>
      <h1>Grocery compare</h1>
      <ProductList products={products} handleAddProduct={handleAddProduct} />
      <ShoppingList shoppingList={shoppingList} handleIncreaseQuantity={handleIncreaseQuantity} handleDecreaseQuantity={handleDecreaseQuantity} />
    </>
  )
}

export default App
