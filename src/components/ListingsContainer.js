import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onRemoveListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return (
            <ListingCard
              listing={listing}
              key={listing.id}
              onRemoveListing={onRemoveListing}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
