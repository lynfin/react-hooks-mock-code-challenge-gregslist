import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return <ListingCard listing={listing} key={listing.id} />;
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
