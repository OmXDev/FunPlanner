import React, { useState } from 'react';

const VendorInfo = ({ onClose }) => {
  const [vendorName, setVendorName] = useState('');
  const [vendorCategory, setVendorCategory] = useState('');
  const [vendorContact, setVendorContact] = useState('');
  const [vendors, setVendors] = useState([]);
  const [venueAddress, setVenueAddress] = useState('');
  const [venueContact, setVenueContact] = useState('');
  const [venueCapacity, setVenueCapacity] = useState('');

  // Function to add a vendor
  const addVendor = () => {
    if (vendorName && vendorCategory && vendorContact) {
      const newVendor = { name: vendorName, category: vendorCategory, contact: vendorContact };
      setVendors([...vendors, newVendor]);
      setVendorName('');
      setVendorCategory('');
      setVendorContact('');
    }
  };

  // Function to remove a vendor
  const removeVendor = (index) => {
    setVendors(vendors.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl min-h-[80vh] relative">
        <h2 className="text-2xl font-bold mb-6 text-center">Vendor and Venue Info</h2>

        {/* Vendor Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="font-medium text-lg mb-4">Add Vendor</h3>
            <input
              type="text"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
              placeholder="Vendor Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
            />
            <input
              type="text"
              value={vendorCategory}
              onChange={(e) => setVendorCategory(e.target.value)}
              placeholder="Category (e.g., Food, Flowers, Decoration)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
            />
            <input
              type="text"
              value={vendorContact}
              onChange={(e) => setVendorContact(e.target.value)}
              placeholder="Contact Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
            />
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full"
              onClick={addVendor}
              disabled={!vendorName || !vendorCategory || !vendorContact}
            >
              Add Vendor
            </button>
          </div>

          {/* Vendor List */}
          <div className="bg-gray-100 p-4 rounded-lg h-[500px] overflow-y-auto">
            <h3 className="font-medium text-lg mb-4">Vendor List</h3>
            {vendors.length > 0 ? (
              <ul className="space-y-3">
                {vendors.map((vendor, index) => (
                  <li key={index} className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm">
                    <div>
                      <p className="text-lg font-semibold">{vendor.name}</p>
                      <p className="text-sm text-gray-500">Category: {vendor.category}</p>
                      <p className="text-sm text-gray-500">Contact: {vendor.contact}</p>
                    </div>
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                      onClick={() => removeVendor(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No vendors added yet.</p>
            )}
          </div>
        </div>

        {/* Venue Section */}
        <div className="mb-6">
          <h3 className="font-medium text-lg mb-4">Venue Info</h3>
          <input
            type="text"
            value={venueAddress}
            onChange={(e) => setVenueAddress(e.target.value)}
            placeholder="Venue Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
          />
          <input
            type="text"
            value={venueContact}
            onChange={(e) => setVenueContact(e.target.value)}
            placeholder="Venue Contact Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
          />
          <input
            type="number"
            value={venueCapacity}
            onChange={(e) => setVenueCapacity(e.target.value)}
            placeholder="Venue Capacity (No. of People)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
          />
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default VendorInfo;
