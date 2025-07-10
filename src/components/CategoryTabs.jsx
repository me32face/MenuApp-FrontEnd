import React from 'react';
import '../assets/styles/CategoryTabs.css';

const CategoryTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="category-tabs">
      <div className="category-tabs-bg desktop"></div>
      <div className="category-tabs-bg mobile"></div>

      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === 'food' ? 'active' : ''}`}
          onClick={() => setActiveTab('food')}
        >
          FOOD
        </button>
        <button
          className={`tab-button ${activeTab === 'drinks' ? 'active' : ''}`}
          onClick={() => setActiveTab('drinks')}
        >
          DRINKS
        </button>
        <button
          className={`tab-button ${activeTab === 'brunch' ? 'active' : ''}`}
          onClick={() => setActiveTab('brunch')}
        >
          BRUNCH
        </button>
      </div>
    </div>
  );
};

export default CategoryTabs;
