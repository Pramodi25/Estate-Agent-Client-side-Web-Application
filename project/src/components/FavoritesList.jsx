

import React from 'react';
import { Link } from 'react-router-dom';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constants/DragTypes';

function FavoritesList({ favorites, onRemove, onClear, onFavorite }) {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.PROPERTY,
    drop: (item) => {
      if (!favorites.some(f => f.id === item.property.id)) {
        onFavorite(item.property);
      }
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });
  if (favorites.length === 0) {
    return (
      <div 
        ref={drop}
        className={`max-w-4xl mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 ${
          isOver ? 'bg-blue-50 border-2 border-blue-300' : ''
        }`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Favorites</h2>
        <p className="text-gray-500">No favorites added yet. Drag properties here to add them.</p>
      </div>
    );
  }

  return (
    <div 
      ref={drop}
      className={`max-w-4xl mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 ${
        isOver ? 'bg-blue-50 border-2 border-blue-300' : ''
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Favorites</h2>
        <button
          onClick={onClear}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Clear All
        </button>
      </div>
      <div className="space-y-4">
        {favorites.map(property => (
          <div key={property.id} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <Link
                  to={`/property/${property.id}`}
                  className="text-lg font-semibold hover:text-blue-500"
                >
                  {property.title}
                </Link>
                <p className="text-gray-600">£{property.price.toLocaleString()}</p>
                <p className="text-gray-500">{property.type} - {property.bedrooms} bedrooms</p>
              </div>
              <button
                onClick={() => onRemove(property)}
                className="text-red-500 hover:text-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesList;