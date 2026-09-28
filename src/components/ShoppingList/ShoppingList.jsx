function ShoppingList({ shoppingList }) {
  return (
    <div className="shopping-list">
      <h2>Shopping list</h2>
      {
        shoppingList.map((shoppingListItem) => (
          <div key={shoppingListItem.id} className="shopping-list__item">
            <h2>{shoppingListItem.name}</h2>
            <p>{shoppingListItem.category}</p>
            <span>quantity: {shoppingListItem.quantity}</span>
          </div>
        ))
      }
    </div>
  )
}

export default ShoppingList;