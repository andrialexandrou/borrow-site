import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('myitems');
  const [showBorrowForm, setShowBorrowForm] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Sample data for items I'm borrowing
  const [borrowedItems, setBorrowedItems] = useState([
    { 
      id: 1, 
      item: "KitchenAid Stand Mixer",
      owner: "Sarah K.",
      ownerEmail: "sarah@example.com",
      dates: "Jan 15 - Jan 22"
    },
    { 
      id: 2,
      item: "Pressure Washer",
      owner: "Mike R.",
      ownerEmail: "mike@example.com",
      dates: "Jan 25 - Jan 27"
    }
  ]);

  // Sample data for owned items
  const [myItems, setMyItems] = useState([
    { 
      id: 1, 
      item: "Circular Saw",
      status: "loaned out",
      price: "$15/day",
      borrower: "John D.",
      borrowerEmail: "john@example.com",
      dates: "Jan 18 - Jan 25"
    },
    { 
      id: 2,
      item: "Board Game Collection",
      status: "available",
      borrower: "-",
      borrowerEmail: "",
      dates: "-"
    },
    {
      id: 3,
      item: "Digital Projector",
      status: "loaned out",
      borrower: "Emma L.",
      borrowerEmail: "emma@example.com",
      dates: "Jan 19 - Jan 22"
    }
  ]);

  // Filter items based on status
  const filteredItems = myItems.filter(item => {
    if (statusFilter === 'all') return true;
    return item.status === statusFilter;
  });

  // Rest of the component logic...
  const handleReturn = (itemId) => {
    setMyItems(myItems.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          status: 'available',
          borrower: '-',
          borrowerEmail: '',
          dates: '-'
        };
      }
      return item;
    }));
  };

  const handleMarkBorrowed = (itemId, borrowerName, borrowerEmail, dates) => {
    setMyItems(myItems.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          status: 'loaned out',
          borrower: borrowerName,
          borrowerEmail: borrowerEmail,
          dates: dates
        };
      }
      return item;
    }));
    setShowBorrowForm(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl text-purple-700">my account</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-300 mb-4">
        <div role="tablist" className="flex gap-4">
          <button
            role="tab"
            aria-selected={activeTab === 'myitems'}
            aria-controls="myitems-panel"
            className={`py-2 ${activeTab === 'myitems' ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => setActiveTab('myitems')}
          >
            my items
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'borrowed'}
            aria-controls="borrowed-panel"
            className={`py-2 ${activeTab === 'borrowed' ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => setActiveTab('borrowed')}
          >
            borrowing
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'history'}
            aria-controls="history-panel"
            className={`py-2 ${activeTab === 'history' ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            history
          </button>
        </div>
      </div>

      {/* My Items Panel */}
      <div
        role="tabpanel"
        id="myitems-panel"
        aria-labelledby="myitems-tab"
        hidden={activeTab !== 'myitems'}
      >
        {/* Filter */}
        <div className="mb-4 flex items-center gap-2">
          <span>status:</span>
          <select 
            className="border border-gray-400 p-1"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">show all</option>
            <option value="loaned out">show loaned out</option>
            <option value="available">show available</option>
          </select>
        </div>

        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-2 border border-gray-300">item</th>
              <th className="text-left p-2 border border-gray-300">status</th>
              <th className="text-left p-2 border border-gray-300">dates</th>
              <th className="text-left p-2 border border-gray-300">borrower</th>
              <th className="text-left p-2 border border-gray-300">actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="p-2">
                  <div className="text-gray-600">{item.price}</div><a href={`/item/${item.id}`} className="text-blue-600 hover:underline">
                    {item.item}
                  </a>
                </td>
                <td className="p-2">
                  <span className={item.status === 'loaned out' ? 'text-orange-600' : 'text-green-600'}>
                    {item.status}
                  </span>
                </td>
                <td className="p-2">{item.dates}</td>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <span>{item.borrower}</span>
                    {item.borrowerEmail && (
                      <button
                        onClick={() => window.location.href = `mailto:${item.borrowerEmail}`}
                        className="text-blue-600 hover:text-blue-800"
                        aria-label={`Message ${item.borrower}`}
                      >
                        <Mail size={16} />
                      </button>
                    )}
                  </div>
                </td>
                <td className="p-2">
                  {item.status === 'loaned out' ? (
                    <button
                      onClick={() => handleReturn(item.id)}
                      className="text-blue-600 hover:underline"
                      aria-label={`Mark ${item.item} as returned`}
                    >
                      mark returned
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowBorrowForm(item.id)}
                      className="text-blue-600 hover:underline"
                    >
                      mark loaned
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Loan form modal */}
        {showBorrowForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 max-w-md w-full">
              <h2 className="text-lg mb-4">Mark Item as Loaned Out</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleMarkBorrowed(
                  showBorrowForm,
                  e.target.borrower.value,
                  e.target.email.value,
                  `${e.target.startDate.value} - ${e.target.endDate.value}`
                );
              }}>
                <div className="space-y-3">
                  <div>
                    <label className="block">Borrower Name:</label>
                    <input type="text" name="borrower" className="border p-1 w-full" required />
                  </div>
                  <div>
                    <label className="block">Borrower Email:</label>
                    <input type="email" name="email" className="border p-1 w-full" required />
                  </div>
                  <div>
                    <label className="block">Start Date:</label>
                    <input type="date" name="startDate" className="border p-1 w-full" required />
                  </div>
                  <div>
                    <label className="block">End Date:</label>
                    <input type="date" name="endDate" className="border p-1 w-full" required />
                  </div>
                  <div className="flex gap-2 justify-end">
                    <button 
                      type="button"
                      onClick={() => setShowBorrowForm(null)}
                      className="border p-1 px-3"
                    >
                      cancel
                    </button>
                    <button 
                      type="submit"
                      className="border p-1 px-3 bg-blue-600 text-white"
                    >
                      save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Borrowing Items Panel */}
      <div
        role="tabpanel"
        id="borrowed-panel"
        aria-labelledby="borrowed-tab"
        hidden={activeTab !== 'borrowed'}
      >
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-2 border border-gray-300">item</th>
              <th className="text-left p-2 border border-gray-300">dates</th>
              <th className="text-left p-2 border border-gray-300">owner</th>
            </tr>
          </thead>
          <tbody>
            {borrowedItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="p-2">
                  <a href={`/item/${item.id}`} className="text-blue-600 hover:underline">
                    {item.item}
                  </a>
                </td>
                <td className="p-2">{item.dates}</td>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <span>{item.owner}</span>
                    <button
                      onClick={() => window.location.href = `mailto:${item.ownerEmail}`}
                      className="text-blue-600 hover:text-blue-800"
                      aria-label={`Message ${item.owner}`}
                    >
                      <Mail size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* History panel */}
      <div role="tabpanel" id="history-panel" hidden={activeTab !== 'history'}>
        {/* Borrow Again Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">borrow again</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                id: 1,
                name: "Circular Saw",
                owner: "John D.",
                lastBorrowed: "Dec 2024",
                img: "/api/placeholder/100/100",
                available: true
              },
              {
                id: 2,
                name: "Digital Projector",
                owner: "Emma L.",
                lastBorrowed: "Oct 2023",
                img: "/api/placeholder/200/200",
                available: true
              },
              {
                id: 3,
                name: "Stand Mixer",
                owner: "Sarah K.",
                lastBorrowed: "Sep 2023",
                img: "/api/placeholder/200/200",
                available: false
              }
            ].map(item => (
              <div key={item.id} className="border border-gray-300 p-3">
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-[100px] h-[100px] mb-2 object-cover"
                />
                <a href={`/item/${item.id}`} className="text-blue-600 hover:underline block mb-1">
                  {item.name}
                </a>
                <div className="text-sm text-gray-600">owned by {item.owner}</div>
                <div className="text-sm text-gray-600">last borrowed: {item.lastBorrowed}</div>
                {item.available ? (
                  <a 
                    href={`/item/${item.id}`}
                    className="text-blue-600 hover:underline block mt-2 text-sm"
                  >
                    borrow again
                  </a>
                ) : (
                  <span className="text-orange-600 text-sm block mt-2">currently unavailable</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Activity Log */}
        <div>
          <h2 className="text-lg font-bold mb-4">activity log</h2>
          <div className="border border-gray-300">
            {[
              {
                date: "2024-12-10",
                action: "borrowed",
                item: "circular saw",
                person: "John",
                type: "from"
              },
              {
                date: "2024-01-15",
                action: "returned",
                item: "digital projector",
                person: "Emma",
                type: "to"
              },
              {
                date: "2023-10-05",
                action: "borrowed",
                item: "digital projector",
                person: "Emma",
                type: "from"
              }
            ].map((log, index) => (
              <div 
                key={index} 
                className={`p-2 text-sm ${
                  index !== 0 ? 'border-t border-gray-300' : ''
                }`}
              >
                <span className="text-gray-600">{log.date}</span>
                {" "}
                <span>you {log.action} a {log.item} {log.type} {log.person}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AccountPage;