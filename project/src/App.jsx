import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SearchForm from './components/SearchForm';
import PropertyList from './components/PropertyList';
import FavoritesList from './components/FavoritesList';
import PropertyDetail from './components/PropertyDetail';
import propertyData from './data/properties.json';

function App() {
  const [properties, setProperties] = useState(propertyData.properties);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = (criteria) => {
    let filtered = properties;

    if (criteria.type && criteria.type !== 'any') {
      filtered = filtered.filter(p => p.type === criteria.type);
    }

    if (criteria.minPrice) {
      filtered = filtered.filter(p => p.price >= parseInt(criteria.minPrice));
    }

    if (criteria.maxPrice) {
      filtered = filtered.filter(p => p.price <= parseInt(criteria.maxPrice));
    }

    if (criteria.minBedrooms) {
      filtered = filtered.filter(p => p.bedrooms >= parseInt(criteria.minBedrooms));
    }

    if (criteria.maxBedrooms) {
      filtered = filtered.filter(p => p.bedrooms <= parseInt(criteria.maxBedrooms));
    }

    if (criteria.dateFrom) {
      filtered = filtered.filter(p => new Date(p.dateAdded) >= criteria.dateFrom);
    }

    if (criteria.dateTo) {
      filtered = filtered.filter(p => new Date(p.dateAdded) <= criteria.dateTo);
    }

    if (criteria.postcode) {
      filtered = filtered.filter(p => 
        p.postcode.toLowerCase().startsWith(criteria.postcode.toLowerCase())
      );
    }

    setFilteredProperties(filtered);
  };

  const toggleFavorite = (property) => {
    setFavorites(prev => {
      const exists = prev.some(p => p.id === property.id);
      if (exists) {
        return prev.filter(p => p.id !== property.id);
      } else {
        return [...prev, property];
      }
    });
  };

  const removeFavorite = (property) => {
    setFavorites(prev => prev.filter(p => p.id !== property.id));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="min-h-screen bg-white">
          <header className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
              <h1 className="text-2xl font-bold">PropertyFinder</h1>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                Sign in
              </button>
            </div>
          </header>
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="space-y-6">
                    <SearchForm onSearch={handleSearch} />
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                      <div className="lg:col-span-3">
                        <PropertyList
                          properties={filteredProperties}
                          favorites={favorites}
                          onFavorite={toggleFavorite}
                        />
                      </div>
                      <div className="lg:col-span-1">
                        <FavoritesList
                          favorites={favorites}
                          onRemove={removeFavorite}
                          onClear={clearFavorites}
                        />
                      </div>
                    </div>
                  </div>
                }
              />
              <Route
                path="/property/:id"
                element={
                  <PropertyDetail
                    property={properties[0]}
                    onFavorite={toggleFavorite}
                    isFavorite={favorites.some(p => p.id === properties[0].id)}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;