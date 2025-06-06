
import React from 'react';

const PackageSelectionStep = ({ formData, handleInputChange, packages, departureCities }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Your Package</h2>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Choose Tour Package *
        </label>
        <select
          value={formData.selectedPackage}
          onChange={(e) => handleInputChange('selectedPackage', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          required
        >
          <option value="">Select a package</option>
          {packages.map(pkg => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.name} - {pkg.duration} - {pkg.price}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Departure City *
          </label>
          <select
            value={formData.departureCity}
            onChange={(e) => handleInputChange('departureCity', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
            <option value="">Select departure city</option>
            {departureCities.map(city => (
              <option key={city.value} value={city.value}>{city.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Travel Date *
          </label>
          <input
            type="date"
            value={formData.travelDate}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => handleInputChange('travelDate', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Group Size *
        </label>
        <select
          value={formData.groupSize}
          onChange={(e) => handleInputChange('groupSize', parseInt(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          required
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} {i === 0 ? 'Person' : 'People'}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PackageSelectionStep;
