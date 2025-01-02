import React from 'react';
import { Link } from 'react-router-dom';

function PropertyList({ properties, favorites, onFavorite }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map(property => (
        <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{property.title}</h2>
            <p className="text-gray-600 mb-2">£{property.price.toLocaleString()}</p>
            <p className="text-gray-500 mb-2">{property.type} - {property.bedrooms} bedrooms</p>
            <p className="text-gray-500 mb-4">{property.postcode}</p>
            <div className="flex justify-between items-center">
              <Link
                to={`/property/${property.id}`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View Details
              </Link>
              <button
                onClick={() => onFavorite(property)}
                className={`${
                  favorites.some(f => f.id === property.id)
                    ? 'text-red-500'
                    : 'text-gray-500'
                } hover:text-red-700 focus:outline-none`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill={favorites.some(f => f.id === property.id) ? 'currentColor' : 'none'}
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;