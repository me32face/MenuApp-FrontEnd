import React, { useEffect, useState } from "react";
import "../assets/styles/MenuItemsGrid.css";
import axios from "axios";
import CategoryTabs from "./CategoryTabs";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("drinks");

  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "drinks",
  });

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetchItemsByCategory(activeCategory);
  }, [activeCategory]);

  const fetchItemsByCategory = async (category) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/menu?category=${category}`);
      setMenuItems(res.data);
    } catch (err) {
      console.error("Error fetching menu items:", err);
    }
  };

  const handleAddItem = async () => {
    try {
      await axios.post(`${API_BASE_URL}/api/menu`, newItem);
      fetchItemsByCategory(activeCategory);
      setShowModal(false);
      setNewItem({ name: "", description: "", price: "", category: "drinks" });
    } catch (err) {
      console.error("Error adding item:", err);
    }
  };

  return (
    <div>
      <CategoryTabs activeTab={activeCategory} setActiveTab={setActiveCategory} />

      <div className="menuapp-container">
        <div className="menuapp-header">
          <h1 className="menuapp-title">Our Menu</h1>
          <button className="menuapp-add-button" onClick={() => setShowModal(true)}>
            + Add Item
          </button>
        </div>

        <div className="menuapp-grid">
          {menuItems.map((item) => (
            <div className="menuapp-card" key={item._id}>
              <h3 className="menuapp-item-name">{item.name}</h3>
              <p className="menuapp-item-desc">{item.description}</p>
              <p className="menuapp-item-price">₹{item.price}</p>
              <small className="menuapp-item-category">{item.category}</small>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="menuapp-modal-overlay" onClick={() => setShowModal(false)}>
            <div className="menuapp-modal-box" onClick={(e) => e.stopPropagation()}>
              <h2 className="menuapp-modal-title">Add New Item</h2>
              <input
                type="text"
                placeholder="Item Name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              />
              <textarea
                placeholder="Description"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              />
              <input
                type="number"
                placeholder="Price"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              />
              <select
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              >
                <option value="drinks">Drinks</option>
                <option value="food">Food</option>
                <option value="brunch">Brunch</option>
              </select>

              <div className="menuapp-modal-actions">
                <button className="menuapp-btn-save" onClick={handleAddItem}>
                  Save
                </button>
                <button className="menuapp-btn-cancel" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
