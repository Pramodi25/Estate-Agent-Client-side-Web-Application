import React from 'react';
import { useDrag } from 'react-dnd';
import { Link } from 'react-router-dom';
import { ItemTypes } from '../constants/DragTypes';

function PropertyCard({ property, isFavorite, onFavorite }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PROPERTY,
    item: { property },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`bg-white rounded-lg shadow-md p-4 ${
        isDragging ? 'opacity-50' : ''
      }`}
      style={{ cursor: 'move' }}
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <button
          onClick={() => onFavorite(property)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              isFavorite ? 'text-red-500' : 'text-gray-400'
            }`}
            fill={isFavorite ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <div className="mt-4">
        <Link
          to={`/property/${property.id}`}
          className="text-lg font-semibold hover:text-blue-500"
        >
          {property.title}
        </Link>
        <p className="text-gray-600 mt-2">£{property.price.toLocaleString()}</p>
        <p className="text-gray-500">{property.type} - {property.bedrooms} bedrooms</p>
      </div>
    </div>
  );
}

export default PropertyCard;