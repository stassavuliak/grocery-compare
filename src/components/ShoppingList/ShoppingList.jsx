function ShoppingList({ shoppingList, handleIncreaseQuantity, handleDecreaseQuantity }) {
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
          </div>
        ))
      }
    </div>
  )
}

export default ShoppingList;