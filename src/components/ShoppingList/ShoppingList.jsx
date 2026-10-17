function ShoppingList({ shoppingList, handleIncreaseQuantity, handleDecreaseQuantity, handleRemoveProduct }) {
  const storeTotals = shoppingList.reduce((acc, shoppingListItem) => {
    shoppingListItem.prices.forEach((price) => {
      acc[price.store] =
        (acc[price.store] ?? 0) +
        (price.price * shoppingListItem.quantity);
    });

    return acc;
  }, {});


  const cheapestStore = Object.keys(storeTotals).length > 0
    ? Object.entries(storeTotals).reduce((acc, currentValue) => {
      if (currentValue[1] < acc[1]) {
        return currentValue
      }
      return acc
    }, Object.entries(storeTotals)[0])
    : null;


  return (
    <div className="shopping-list">
      <h2>Shopping list</h2>

      <div className="store-totals">
        {Object.entries(storeTotals).map(([store, total]) => (
          <div key={store}>
            {store}: {total.toFixed(2)} kr
          </div>
        ))}
      </div>

      <div className="cheapest-store">
        Cheapest store is: {cheapestStore?.[0]}
        {cheapestStore ? cheapestStore?.[1].toFixed(2) : ''}
      </div>
      {/* store totals */}

      {
        shoppingList.map((shoppingListItem) => {
          return (
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
          )
        })
      }
    </div>
  )
}

export default ShoppingList;