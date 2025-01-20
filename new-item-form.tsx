import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const NewItemForm = () => {
  const [images, setImages] = useState([]);
  const [networkOnly, setNetworkOnly] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl mb-6">post an item to lend</h1>

      <form className="space-y-6">
        {/* Category Selection */}
        <div>
          <label className="block mb-2">
            category <span className="text-red-500">*</span>
          </label>
          <select 
            className="border border-gray-300 p-2 w-full"
            required
          >
            <option value="">choose a category...</option>
            <option value="kitchen">kitchen + dining</option>
            <option value="tools">tools + equipment</option>
            <option value="garden">lawn + garden</option>
            <option value="sports">sports + outdoors</option>
            <option value="electronics">electronics</option>
            <option value="party">party + events</option>
            <option value="music">musical instruments</option>
            <option value="other">other</option>
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block mb-2">
            title <span className="text-red-500">*</span>
          </label>
          <input 
            type="text"
            className="border border-gray-300 p-2 w-full"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2">
            description <span className="text-red-500">*</span>
          </label>
          <textarea 
            className="border border-gray-300 p-2 w-full h-32"
            required
          />
          <div className="text-sm text-gray-500 mt-1">
            include: condition, features, dimensions, restrictions
          </div>
        </div>

        {/* Photos */}
        <div>
          <label className="block mb-2">photos</label>
          <div className="border border-gray-300 p-4">
            <div className="text-center">
              <Upload className="mx-auto w-8 h-8 text-gray-400 mb-2" />
              <div>
                <button 
                  type="button"
                  className="text-blue-600 hover:underline"
                  onClick={() => document.getElementById('file-input').click()}
                >
                  add photos
                </button>
                <input 
                  id="file-input"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <div className="text-sm text-gray-500 mt-1">
                up to 24 photos
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2">
            location <span className="text-red-500">*</span>
          </label>
          <select 
            className="border border-gray-300 p-2 w-full"
            required
          >
            <option value="">choose area...</option>
            <option>NW Portland</option>
            <option>SE Portland</option>
            <option>NE Portland</option>
            <option>SW Portland</option>
            <option>Beaverton</option>
            <option>Hillsboro</option>
            <option>Gresham</option>
          </select>
        </div>

        {/* Item Details */}
        <div>
          <label className="block mb-2">item details</label>
          <div className="space-y-3">
            <div>
              <label className="block text-sm mb-1">brand (optional)</label>
              <input 
                type="text"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">model (optional)</label>
              <input 
                type="text"
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">condition <span className="text-red-500">*</span></label>
              <select 
                className="border border-gray-300 p-2 w-full"
                required
              >
                <option value="">select condition...</option>
                <option>like new</option>
                <option>excellent</option>
                <option>good</option>
                <option>fair</option>
              </select>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div>
          <label className="block mb-2">
            daily rate <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2">
            <span>$</span>
            <input 
              type="number"
              className="border border-gray-300 p-2 w-32"
              required
              min="0"
              step="0.01"
            />
            <span className="text-gray-500">per day</span>
          </div>
          <div className="mt-4">
            <label className="block mb-2">
              security deposit <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2">
              <span>$</span>
              <input 
                type="number"
                className="border border-gray-300 p-2 w-32"
                required
                min="0"
                step="0.01"
              />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <label className="block mb-2">accepted payment methods</label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span>cash</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span>venmo</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span>paypal</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span>zelle</span>
            </label>
          </div>
        </div>

        {/* Visibility */}
        <div>
          <label className="flex items-center gap-2">
            <input 
              type="checkbox"
              checked={networkOnly}
              onChange={(e) => setNetworkOnly(e.target.checked)}
            />
            <span>only show to my network</span>
          </label>
          <div className="text-sm text-gray-500 mt-1">
            your network: 45 trusted members
          </div>
        </div>

        {/* Contact Preferences */}
        <div>
          <label className="block mb-2">contact preferences</label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span>email ok</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span>message ok</span>
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-4">
          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-2"
          >
            post item
          </button>
          <button 
            type="button"
            className="border border-gray-300 px-6 py-2"
          >
            preview
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewItemForm;