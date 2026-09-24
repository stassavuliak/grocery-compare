function ProductList({ products }) {

  return (
    <div className="product-list">
      {
        products.map((product) => (
          <div key={product.id} className="product-list__item">
            <h2>{product.name}</h2>
            <p>{product.category}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ProductList;