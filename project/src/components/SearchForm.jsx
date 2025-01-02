import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [criteria, setCriteria] = useState({
    type: 'any',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    dateFrom: '',
    dateTo: '',
    postcode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCriteria(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(criteria);
  };

  return (
    <div className="relative mb-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center h-full" 
        style={{
          backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/03/12/14/47/winter-670314_960_720.jpg)',
          filter: 'brightness(0.6)'
        }}
      />

      <form onSubmit={handleSubmit} className="relative z-10 bg-white/90 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Property Type
              <select
                name="type"
                value={criteria.type}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="any">Any</option>
                <option value="house">House</option>
                <option value="flat">Flat</option>
                <option value="bungalow">Bungalow</option>
              </select>
            </label>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Min Price
              <input
                type="number"
                name="minPrice"
                value={criteria.minPrice}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Min Price"
              />
            </label>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Max Price
              <input
                type="number"
                name="maxPrice"
                value={criteria.maxPrice}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Max Price"
              />
            </label>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Min Bedrooms
              <input
                type="number"
                name="minBedrooms"
                value={criteria.minBedrooms}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Min Bedrooms"
              />
            </label>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Max Bedrooms
              <input
                type="number"
                name="maxBedrooms"
                value={criteria.maxBedrooms}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Max Bedrooms"
              />
            </label>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date From
              <input
                type="date"
                name="dateFrom"
                value={criteria.dateFrom}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
              />
            </label>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date To
              <input
                type="date"
                name="dateTo"
                value={criteria.dateTo}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
              />
            </label>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Postcode
              <input
                type="text"
                name="postcode"
                value={criteria.postcode}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                placeholder="Postcode"
              />
            </label>
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;