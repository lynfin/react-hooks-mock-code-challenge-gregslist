import React, { useState } from "react";

function ListingCard({ listing, onRemoveListing }) {
  const { description, image, location } = listing;
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite((isFavorite) => !isFavorite);
  };
  const handleDelete = () => {
    onRemoveListing(listing);
  };
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button
            onClick={handleClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
