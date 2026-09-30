function ShoppingList({ shoppingList, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveProduct }) {
  return (
    <div className="shopping-list">
      <h2>Shopping list</h2>
      {
        shoppingList.map((shoppingListItem) => (
          <div key={shoppingListItem.id} className="shopping-list__item">
            <h2>{shoppingListItem.name}</h2>
            <p>{shoppingListItem.category}</p>

            <button onClick={() => { handleDecreaseQuantity(shoppingListItem) }}>-</button>
            <span>quantity: {shoppingListItem.quantity}</span>
            <button onClick={() => { handleIncreaseQuantity(shoppingListItem) }}>+</button>
            <button onClick={() => { handleRemoveProduct(shoppingListItem) }}>Remove</button>

            <div className="prices">
              {shoppingListItem.prices.map((price) => (
                <div key={price.store} className="item">
                  {price.store}: {(price.price * shoppingListItem.quantity).toFixed(2)} kr
                </div>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ShoppingList;