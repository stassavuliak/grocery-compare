import products from "./data/products.js"
import ProductList from "./components/ProductList/ProductList.jsx"

function App() {
  return (
    <>
      <h1>Grocery compare</h1>
      <ProductList products={products} />
    </>
  )
}

export default App
