import React, { useEffect, useState } from "react";
import "src/styles/ItemPage.scss";

const ItemCard = ({ item }) => {
  const [isVisible, setIsVisible] = useState(true);

  const imageUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/${item.keyName}_lg.png`;

  if (!isVisible) {
    return null;
  }

  // თუ ნეიტრალური აითემია ანუ უფასო, მაშინ დაწეროს
  const renderCost = () => {
    if (item.qual === "neutral") {
      return <span>Neutral Item</span>;
    }
    if (item.cost === 0) {
      return <span>Neutral Item</span>;
    }
    return (
      <>
        <span>{item.cost}</span>
      </>
    );
  };

  return (
    <div className="item-card">
      <img
        src={imageUrl}
        alt={item.dname || "Dota 2 item"}
        className="item-image"
        onError={() => setIsVisible(false)}
      />
      <strong >{item.dname}</strong>
      <div className="item-cost">{renderCost()}</div>
    </div>
  );
};

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch item data from the OpenDota API.
    fetch("https://api.opendota.com/api/constants/items")
      .then((res) => res.json())
      .then((data) => {
        // Filter out recipe items and transform the data into an array.
        const filteredKeys = Object.keys(data).filter(
          (key) => !key.includes("recipe")
        );
        const itemArray = filteredKeys.map((key) => ({
          keyName: key,
          ...data[key],
        }));
        setItems(itemArray);
      })
      .catch((err) => console.error("Failed to fetch items", err))
      .finally(() => setLoading(false)); 
  }, []);

  const filteredItems = items.filter(
    (item) =>
      item.dname && item.dname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="item-page-container">
      <div className="header">
        <h1>Dota 2 Items </h1>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for an item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="status-message">Loading items...</p>
      ) : (
        <div className="items-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <ItemCard key={item.id || item.keyName} item={item} />
            ))
          ) : (
            <p className="status-message">
              No items found matching your search.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
