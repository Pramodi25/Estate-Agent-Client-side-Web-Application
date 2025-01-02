import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PropertyDetail({ property, onFavorite, isFavorite }) {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!property) {
    return (
      <div className="text-center py-10">
        <p>Property not found</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Search
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-96 object-cover"
        />
        <button
          onClick={() => onFavorite(property)}
          className={`absolute top-4 right-4 p-2 rounded-full ${
            isFavorite ? 'bg-red-500' : 'bg-white'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isFavorite ? 'text-white' : 'text-red-500'}`}
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

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-600">Price</p>
            <p className="text-2xl font-bold">£{property.price.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-600">Property Type</p>
            <p className="text-xl">{property.type}</p>
          </div>
          <div>
            <p className="text-gray-600">Bedrooms</p>
            <p className="text-xl">{property.bedrooms}</p>
          </div>
          <div>
            <p className="text-gray-600">Postcode</p>
            <p className="text-xl">{property.postcode}</p>
          </div>
          <div>
            <p className="text-gray-600">Added</p>
            <p className="text-xl">{new Date(property.dateAdded).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p className="text-gray-700">{property.description}</p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Search
        </button>
      </div>
    </div>
  );
}

export default PropertyDetail;