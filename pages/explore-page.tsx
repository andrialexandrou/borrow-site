import React from 'react';
import "../app/globals.css";

const ExplorePage = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl text-purple-700">borrow</span>
          <span className="text-xl text-purple-700">portland</span>
        </div>
        <div className="flex gap-4">
          <button className="text-blue-600 hover:underline">post</button>
          <button className="text-blue-600 hover:underline">acct</button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          className="border border-gray-300 p-1 w-64"
          placeholder="search borrowable items"
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2 bg-gray-100 px-2">equipment</h2>
            <ul className="space-y-1">
              <li><a href="/kitchen" className="text-blue-600 hover:underline">kitchen + dining</a></li>
              <li><a href="/tools" className="text-blue-600 hover:underline">power tools</a></li>
              <li><a href="/garden" className="text-blue-600 hover:underline">lawn + garden</a></li>
              <li><a href="/cleaning" className="text-blue-600 hover:underline">cleaning</a></li>
              <li><a href="/electronics" className="text-blue-600 hover:underline">electronics</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2 bg-gray-100 px-2">sports + outdoors</h2>
            <ul className="space-y-1">
              <li><a href="/camping" className="text-blue-600 hover:underline">camping gear</a></li>
              <li><a href="/bikes" className="text-blue-600 hover:underline">bikes</a></li>
              <li><a href="/winter" className="text-blue-600 hover:underline">winter sports</a></li>
              <li><a href="/water" className="text-blue-600 hover:underline">water sports</a></li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2 bg-gray-100 px-2">party + events</h2>
            <ul className="space-y-1">
              <li><a href="/tables" className="text-blue-600 hover:underline">tables + chairs</a></li>
              <li><a href="/sound" className="text-blue-600 hover:underline">sound equipment</a></li>
              <li><a href="/lighting" className="text-blue-600 hover:underline">lighting</a></li>
              <li><a href="/games" className="text-blue-600 hover:underline">party games</a></li>
              <li><a href="/decor" className="text-blue-600 hover:underline">decorations</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2 bg-gray-100 px-2">creative</h2>
            <ul className="space-y-1">
              <li><a href="/camera" className="text-blue-600 hover:underline">cameras + lenses</a></li>
              <li><a href="/music" className="text-blue-600 hover:underline">musical instruments</a></li>
              <li><a href="/art" className="text-blue-600 hover:underline">art supplies</a></li>
              <li><a href="/craft" className="text-blue-600 hover:underline">craft tools</a></li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2 bg-gray-100 px-2">nearby cities</h2>
            <ul className="space-y-1">
              <li><a href="/vancouver" className="text-blue-600 hover:underline">vancouver, wa</a></li>
              <li><a href="/salem" className="text-blue-600 hover:underline">salem</a></li>
              <li><a href="/eugene" className="text-blue-600 hover:underline">eugene</a></li>
              <li><a href="/corvallis" className="text-blue-600 hover:underline">corvallis</a></li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2 bg-gray-100 px-2">help + info</h2>
            <ul className="space-y-1">
              <li><a href="/about" className="text-blue-600 hover:underline">about borrow</a></li>
              <li><a href="/safety" className="text-blue-600 hover:underline">safety tips</a></li>
              <li><a href="/scams" className="text-blue-600 hover:underline">avoid scams</a></li>
              <li><a href="/terms" className="text-blue-600 hover:underline">terms of use</a></li>
              <li><a href="/privacy" className="text-blue-600 hover:underline">privacy policy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2 bg-gray-100 px-2">languages</h2>
            <ul className="space-y-1">
              <li><a href="?lang=es" className="text-blue-600 hover:underline">español</a></li>
              <li><a href="?lang=zh" className="text-blue-600 hover:underline">中文</a></li>
              <li><a href="?lang=vi" className="text-blue-600 hover:underline">tiếng việt</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-xs text-gray-500">
        <p>© 2025 borrow</p>
      </footer>
    </div>
  );
};

export default ExplorePage;