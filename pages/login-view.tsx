'use client'

import React, { useState } from 'react';
import "../app/globals.css";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className="max-w-md mx-auto p-4 mt-16">
      <h1 className="text-3xl text-purple-700 text-center mb-8">
        borrow
      </h1>

      <div className="border border-gray-300 p-6">
        {/* Toggle between login and signup */}
        <div className="flex gap-4 mb-6">
          <button
            className={`${
              isLogin ? 'text-blue-600 underline' : 'text-gray-600'
            }`}
            onClick={() => setIsLogin(true)}
          >
            log in
          </button>
          <button
            className={`${
              !isLogin ? 'text-blue-600 underline' : 'text-gray-600'
            }`}
            onClick={() => setIsLogin(false)}
          >
            create account
          </button>
        </div>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1">
              email address
            </label>
            <input
              type="email"
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1">
              password
            </label>
            <input
              type="password"
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          {/* Additional fields for signup */}
          {!isLogin && (
            <>
              <div>
                <label className="block mb-1">
                  display name
                </label>
                <input
                  type="text"
                  required
                  className="border border-gray-300 p-2 w-full"
                />
              </div>

              <div>
                <label className="block mb-1">
                  location
                </label>
                <select
                  required
                  className="border border-gray-300 p-2 w-full"
                >
                  <option value="">select your area...</option>
                  <option>NW Portland</option>
                  <option>NE Portland</option>
                  <option>SE Portland</option>
                  <option>SW Portland</option>
                  <option>Beaverton</option>
                  <option>Hillsboro</option>
                  <option>Gresham</option>
                </select>
              </div>
            </>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2"
          >
            {isLogin ? 'log in' : 'create account'}
          </button>
        </form>

        {/* Footer links */}
        <div className="mt-6 text-center text-sm">
          {isLogin ? (
            <button className="text-blue-600 hover:underline">
              forgot password?
            </button>
          ) : (
            <div className="text-gray-500">
              By creating an account, you agree to our{' '}
              <a href="/terms" className="text-blue-600 hover:underline">
                terms
              </a>
              {' '}and{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">
                privacy policy
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Help text */}
      <div className="mt-8 text-center text-sm text-gray-500">
        Need help?{' '}
        <a href="/help" className="text-blue-600 hover:underline">
          contact support
        </a>
      </div>
    </div>
  );
};

export default LoginPage;