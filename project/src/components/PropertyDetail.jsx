import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import propertiesData from '../data/properties.json';

function PropertyDetail({ onFavorite, isFavorite }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('description');
  
  const property = propertiesData.properties.find(p => p.id === parseInt(id));

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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-600">Price</p>
                <p className="text-2xl font-bold">£{property.price.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-600">Property Type</p>
                <p className="text-xl capitalize">{property.type}</p>
              </div>
              <div>
                <p className="text-gray-600">Bedrooms</p>
                <p className="text-xl">{property.bedrooms}</p>
              </div>
              <div>
                <p className="text-gray-600">Bathrooms</p>
                <p className="text-xl">{property.bathrooms}</p>
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

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Features</h2>
              <ul className="list-disc pl-5">
                {property.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Agent Details</h2>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold">{property.agent.name}</p>
                <p>{property.agent.expertise}</p>
                <p>Phone: {property.agent.phone}</p>
                <p>Email: {property.agent.email}</p>
              </div>
            </div>
          </>
        );
        case 'floorPlan':
          const floorPlanImages = {
            house: "https://i.pinimg.com/originals/95/0c/5d/950c5d8138f6c2f8b54c8ee18e1b1d43.jpg",
            flat: "https://i.pinimg.com/originals/f3/af/df/f3afdf0457d6e168c4031c7200227e30.png",
            studio: "https://i.pinimg.com/originals/6d/2f/61/6d2f611a39ffc7c9ccdcc11592fec0ce.jpg",
            penthouse: "https://i.pinimg.com/originals/04/f7/1e/04f71e23f3b25857e7c081d8564ef147.jpg",
            loft: "https://i.pinimg.com/originals/d1/4f/86/d14f86c7428d1c47d447d952aa6766a7.jpg"
          };
        
          return (
            <div className="text-center py-8">
              <img
                src={floorPlanImages[property.type] || floorPlanImages.house}
                alt={`Floor Plan for ${property.title}`}
                className="max-w-2xl mx-auto rounded-lg shadow-lg"
              />
              <p className="text-gray-500 mt-4">Floor plan layout for {property.title}</p>
              <div className="mt-6 text-left max-w-2xl mx-auto">
                <h3 className="font-semibold mb-2">Property Dimensions:</h3>
                <p className="text-gray-700">Total Area: {property.additionalFeatures.squareFootage} sq ft</p>
                {property.additionalFeatures.plotSize && (
                  <p className="text-gray-700">Plot Size: {property.additionalFeatures.plotSize}</p>
                )}
                {property.additionalFeatures.floorLevel && (
                  <p className="text-gray-700">Floor Level: {property.additionalFeatures.floorLevel}</p>
                )}
              </div>
            </div>
          );
      case 'map':
        return (
          <div className="py-8">
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Location Details</h3>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Postcode:</span> {property.postcode}
              </p>
              
              {property.location.nearbyStations && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Nearby Stations:</h4>
                  <ul className="list-disc pl-5">
                    {property.location.nearbyStations.map((station, index) => (
                      <li key={index} className="text-gray-700">{station}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Local Amenities:</h4>
                <ul className="list-disc pl-5">
                  {property.location.amenities.map((amenity, index) => (
                    <li key={index} className="text-gray-700">{amenity}</li>
                  ))}
                </ul>
              </div>

              {property.location.nearbySchools && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Nearby Schools:</h4>
                  <ul className="list-disc pl-5">
                    {property.location.nearbySchools.map((school, index) => (
                      <li key={index} className="text-gray-700">{school}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
        
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'description'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('floorPlan')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'floorPlan'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Floor Plan
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'map'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Map
            </button>
          </nav>
        </div>

        {renderTabContent()}

        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Search
        </button>
      </div>
    </div>
  );
}

export default PropertyDetail;