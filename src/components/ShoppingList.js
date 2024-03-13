import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [itemsArr, setItems] = useState(items);
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  };

  function handleSearchChange(event) {
    setSearch(event.target.value)
  };

  function onItemFormSubmit(newItem) {
    const newItemsArr = [...itemsArr, newItem];
    setItems(newItemsArr);
    return newItemsArr;
  };

  const itemsToDisplay = itemsArr.filter((item) => {
    const itemName = item.name.toLowerCase()
    const searchLowerCase = search.toLowerCase()
    if (selectedCategory === "All" && search === "") 
    return true;
    else if (search === "")
    return item.category === selectedCategory
    else if (selectedCategory === "All")
    return itemName.includes(searchLowerCase)
    else
    return item.category === selectedCategory &&
    itemName.includes(searchLowerCase)
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
      onItemFormSubmit={onItemFormSubmit}
      />
      <Filter 
      search={search}
      onCategoryChange={handleCategoryChange} 
      onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
