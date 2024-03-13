import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({  onItemFormSubmit }) {
  
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleItemInput(event) {
    setItemName(event.target.value)
  };

  function handleCategoryInput(event) {
    setItemCategory(event.target.value)
  };

  function formSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    };
    onItemFormSubmit(newItem)
  };

  return (
    <form 
    onSubmit={(event) => formSubmit(event)}
    className="NewItem">
      <label>
        Name:
        <input 
        onChange={handleItemInput}
        type="text" name="name" />
      </label>

      <label>
        Category:
        <select 
        onChange={handleCategoryInput}
        name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
