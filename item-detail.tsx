import React, { useState } from 'react';
import { Calendar, Share2, Flag } from 'lucide-react';

const ItemDetail = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Navigation */}
      <div className="text-sm mb-4">
        <a href="/portland" className="text-blue-600 hover:underline">portland</a>
        {" > "}
        <a href="/kitchen" className="text-blue-600 hover:underline">kitchen + dining</a>
        {" > "}
        <span>KitchenAid Pro Stand Mixer</span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl mb-2">KitchenAid Pro Stand Mixer (NW Portland)</h1>
        <div className="text-xl text-green-600 font-bold">$25/day</div>
        <div className="text-gray-600">$100 security deposit required</div>
      </div>

      {/* Main content */}
      <div className="flex gap-8">
        {/* Left column with images */}
        <div className="w-2/3">
          <div className="border border-gray-300 p-2 mb-4">
            <img 
              src="/api/placeholder/600/450" 
              alt="KitchenAid Mixer" 
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <img src="/api/placeholder/150/150" alt="Additional view" className="border border-gray-300" />
            <img src="/api/placeholder/150/150" alt="Additional view" className="border border-gray-300" />
            <img src="/api/placeholder/150/150" alt="Additional view" className="border border-gray-300" />
            <img src="/api/placeholder/150/150" alt="Additional view" className="border border-gray-300" />
          </div>
        </div>

        {/* Right column with actions */}
        <div className="w-1/3 space-y-4">
          {/* Owner info */}
          <div className="border border-gray-300 p-4">
            <div className="font-bold mb-2">Owner Information</div>
            {showContactInfo ? (
              <>
                <div>Sarah K.</div>
                <div className="text-gray-600">Member since 2023</div>
                <div className="text-gray-600">15 successful loans</div>
                <button 
                  className="text-blue-600 hover:underline mt-2"
                  onClick={() => setShowContactInfo(false)}
                >
                  hide contact info
                </button>
              </>
            ) : (
              <button 
                className="text-blue-600 hover:underline"
                onClick={() => setShowContactInfo(true)}
              >
                show contact info
              </button>
            )}
          </div>

          {/* Network visibility */}
          <div className="border border-gray-300 p-4">
            <div className="font-bold mb-2">Item Visibility</div>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Only show to my network</span>
            </label>
            <div className="text-sm text-gray-500 mt-1">
              Your network: 45 trusted members
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button className="border border-gray-300 p-2 flex-1 hover:bg-gray-50">
              <Share2 className="inline-block w-4 h-4 mr-1" />
              share
            </button>
            <button className="border border-gray-300 p-2 flex-1 hover:bg-gray-50">
              <Flag className="inline-block w-4 h-4 mr-1" />
              report
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <div className="font-bold mb-2">Description</div>
        <pre className="whitespace-pre-wrap font-sans">
Professional grade KitchenAid stand mixer, perfect for all your baking needs. Includes:

- 5qt stainless steel bowl
- Flat beater attachment
- Wire whip attachment
- Dough hook
- Splash guard

Available for borrowing.
Located in NW Portland near 23rd Ave.
        </pre>
      </div>

      {/* Details */}
      <div className="mt-8 space-y-2">
        <div className="font-bold">Item Details</div>
        <div>Condition: Excellent</div>
        <div>Brand: KitchenAid</div>
        <div>Model: Professional 5 Plus</div>
        <div>Color: Silver</div>
        <div>Power: 450W</div>
      </div>

      {/* Availability Calendar */}
      <div className="mt-8">
        <div className="font-bold mb-2 flex items-center">
          <Calendar className="inline-block w-4 h-4 mr-2" />
          Availability Calendar
        </div>
        <div className="text-gray-600">
          Available starting Jan 25
        </div>
        <button className="text-blue-600 hover:underline mt-2">
          view calendar
        </button>
      </div>

      {/* Payment Methods */}
      <div className="mt-8">
        <div className="font-bold mb-2">Accepted Payment Methods</div>
        <div className="space-y-1">
          <div>✓ Cash</div>
          <div>✓ Venmo</div>
          <div>✓ PayPal</div>
          <div>✓ Zelle</div>
        </div>
      </div>

      {/* Post details */}
      <div className="mt-8 text-sm text-gray-500">
        <div>post id: 123456789</div>
        <div>posted: 2024-01-19 2:30pm</div>
        <div>updated: 2024-01-19 3:45pm</div>
      </div>
    </div>
  );
};

export default ItemDetail;