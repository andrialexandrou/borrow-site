import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* User Info Section */}
      <div className="flex gap-6 mb-8">
        <div className="w-32 h-32">
          <img
            src="/api/placeholder/128/128"
            alt="User avatar"
            className="w-full h-full object-cover border border-gray-300"
          />
        </div>
        
        <div className="flex-1">
          <h1 className="text-2xl mb-2">sarah_k</h1>
          <div className="text-gray-600 space-y-1">
            <div>Member since January 2023</div>
            <div>Portland, OR</div>
            <div>15 successful loans · 4.9★ rating</div>
          </div>
          
          <div className="mt-4 flex gap-2">
            <button className="border border-gray-300 px-4 py-2 hover:bg-gray-50 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              email
            </button>
            <button className="border border-gray-300 px-4 py-2 hover:bg-gray-50 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              message
            </button>
          </div>
        </div>
      </div>

      {/* Available Items */}
      <div>
        <h2 className="text-lg font-bold mb-4">available items from sarah_k</h2>
        <div className="border border-gray-300">
          {[
            {
              id: 1,
              title: "KitchenAid Stand Mixer",
              location: "NW Portland",
              price: "$25/day",
              image: "/api/placeholder/100/100",
              posted: "2d ago"
            },
            {
              id: 2,
              title: "Pressure Washer - 3000 PSI",
              location: "NW Portland",
              image: "/api/placeholder/100/100",
              posted: "3d ago"
            },
            {
              id: 3,
              title: "Camping Tent (4-person)",
              location: "NW Portland",
              image: "/api/placeholder/100/100",
              posted: "5d ago"
            }
          ].map((item, index) => (
            <div 
              key={item.id} 
              className={`flex ${
                index > 0 ? 'border-t border-gray-300' : ''
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-[100px] h-[100px] object-cover"
              />
              <div className="p-3">
                <a 
                  href={`/item/${item.id}`} 
                  className="text-blue-600 hover:underline block"
                >
                  {item.title}
                </a>
                <div className="text-gray-600">
                  {item.location} · {item.posted} · {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">recent reviews</h2>
        <div className="border border-gray-300">
          {[
            {
              id: 1,
              reviewer: "john_d",
              rating: 5,
              comment: "Great experience borrowing the mixer. Sarah was very helpful and communicative.",
              date: "Jan 15, 2024"
            },
            {
              id: 2,
              reviewer: "emma_l",
              rating: 5,
              comment: "Perfect condition, exactly as described. Would borrow from Sarah again!",
              date: "Jan 10, 2024"
            },
            {
              id: 3,
              reviewer: "mike_r",
              rating: 4,
              comment: "Very responsive and flexible with pickup times.",
              date: "Jan 5, 2024"
            }
          ].map((review, index) => (
            <div 
              key={review.id}
              className={`p-4 ${
                index > 0 ? 'border-t border-gray-300' : ''
              }`}
            >
              <div className="flex justify-between mb-1">
                <a 
                  href={`/user/${review.reviewer}`}
                  className="text-blue-600 hover:underline"
                >
                  {review.reviewer}
                </a>
                <span className="text-gray-600">{review.date}</span>
              </div>
              <div className="mb-1">{"★".repeat(review.rating)}</div>
              <div>{review.comment}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Report Section */}
      <div className="mt-8 text-center">
        <button className="text-blue-600 hover:underline">
          report this user
        </button>
      </div>
    </div>
  );
};

export default UserProfile;