import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  // ┌ └ ─ ├ │
  // App [searchTerm, listings]
  // ├ Header
  // │  └ Search
  // └ ListingsContainer
  //    └ ListingCard

  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listings) => setListings(listings));
  }, []);

  console.log(listings);
  const handleRemoveListing = (deletedListing) => {
    setListings(listings.filter((listing) => listing.id !== deletedListing.id));
  };

  return (
    <div className="app">
      <Header />
      <ListingsContainer
        listings={listings}
        onRemoveListing={handleRemoveListing}
      />
    </div>
  );
}

export default App;
