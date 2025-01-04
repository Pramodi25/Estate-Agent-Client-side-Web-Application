import React from 'react';
import PropertyCard from './PropertyCard';

function PropertyList({ properties, favorites, onFavorite }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map(property => (
        <PropertyCard
          key={property.id}
          property={property}
          isFavorite={favorites.some(f => f.id === property.id)}
          onFavorite={onFavorite}
        />
      ))}
    </div>
  );
}

export default PropertyList;