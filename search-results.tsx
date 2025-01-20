import React, { useState } from 'react';

const SearchResults = () => {
  const [viewMode, setViewMode] = useState('gallery');
  const [sortBy, setSortBy] = useState('relevance');

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Search bar */}
      <div className="mb-4 flex gap-2 items-center">
        <input 
          type="text"
          defaultValue="kitchen mixer"
          className="border border-gray-300 p-1 w-96"
        />
        <button className="border border-gray-300 p-1 px-4 bg-gray-50">search</button>
      </div>

      <div className="flex gap-8">
        {/* Left sidebar */}
        <div className="w-48 shrink-0">
          <div className="mb-6">
            <h2 className="text-blue-600 font-bold mb-2">categories</h2>
            <ul className="text-sm space-y-1">
              <li>
                <a href="/all" className="text-blue-600 hover:underline">all items</a>
                <span className="text-gray-500 ml-1">3,842</span>
              </li>
              <li>
                <a href="/kitchen" className="text-blue-600 hover:underline">kitchen + dining</a>
                <span className="text-gray-500 ml-1">245</span>
              </li>
              <li>
                <a href="/tools" className="text-blue-600 hover:underline">tools</a>
                <span className="text-gray-500 ml-1">892</span>
              </li>
            </ul>
          </div>



          <div className="mb-6">
            <h3 className="font-bold mb-2">daily rate</h3>
            <div className="flex gap-2 items-center mb-2">
              <span>$</span>
              <input type="text" className="border border-gray-300 w-20 p-1" placeholder="min" />
              <span>to</span>
              <span>$</span>
              <input type="text" className="border border-gray-300 w-20 p-1" placeholder="max" />
            </div>
            <button className="text-blue-600 hover:underline text-sm">update</button>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>available now</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>has image</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>highly rated lenders</span>
            </label>
          </div>
        </div>

        {/* Results area */}
        <div className="flex-1">
          {/* Controls */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 items-center">
              <select 
                value={viewMode}
                onChange={(e) => setViewMode(e.target.value)}
                className="border border-gray-300 p-1"
              >
                <option value="gallery">gallery</option>
                <option value="list">list</option>
              </select>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 p-1"
              >
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
                <option value="price_low">price: low to high</option>
                <option value="price_high">price: high to low</option>
              </select>
            </div>
            <div className="text-sm">
              <span>1 - 36 of 245</span>
              <button className="ml-4 text-blue-600 hover:underline">save search</button>
            </div>
          </div>

          {/* Results grid */}
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                id: 1,
                title: "Professional Stand Mixer - 5qt",
                price: "$15/day",
                location: "NW Portland",
                image: "/api/placeholder/300/225",
                posted: "3h ago"
              },
              {
                id: 2,
                title: "Hand Mixer - Perfect for Small Jobs",
                price: "$8/day",
                location: "Beaverton",
                image: "/api/placeholder/300/225",
                posted: "5h ago"
              },
              {
                id: 3,
                title: "Commercial Grade Mixer - 8qt",
                price: "$25/day",
                location: "SE Portland",
                image: "/api/placeholder/300/225",
                posted: "7h ago"
              },
              {
                id: 4,
                title: "KitchenAid Classic Plus",
                price: "$12/day",
                location: "Lake Oswego",
                image: "/api/placeholder/300/225",
                posted: "9h ago"
              },
              {
                id: 5,
                title: "Vintage Sunbeam Mixmaster",
                price: "$10/day",
                location: "Pearl District",
                image: "/api/placeholder/300/225",
                posted: "1d ago"
              },
              {
                id: 6,
                title: "Modern Food Processor/Mixer Combo",
                price: "$18/day",
                location: "Hillsboro",
                image: "/api/placeholder/300/225",
                posted: "1d ago"
              }
            ].map(item => (
              <div key={item.id} className="border border-gray-300">
                <a href={`/item/${item.id}`} className="block">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full"
                  />
                  <div className="p-2">
                    <div className="font-bold text-green-600">{item.price}</div>
                    <div className="text-blue-600 hover:underline">{item.title}</div>
                    <div className="text-sm text-gray-500">
                      {item.location} · {item.posted}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center gap-2">
            <button className="border border-gray-300 px-2 py-1">‹ prev</button>
            <button className="border border-gray-300 px-2 py-1">next ›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;