function StoreComparison({ storeTotals, cheapestStore, savings }) {
  return (
    <>
      <div className="store-totals">
        {Object.entries(storeTotals).map(([store, total]) => (
          <div key={store}>
            {store}: {total.toFixed(2)} kr
          </div>
        ))}
      </div>

      <div className="cheapest-store">
        <strong> Cheapest store is: {cheapestStore?.[0]}</strong> <strong>{cheapestStore ? cheapestStore?.[1].toFixed(2) : ''}</strong>
      </div>

      <div className="savings">
        You save: {savings.toFixed(2)} kr
      </div>
    </>
  )
}

export default StoreComparison;