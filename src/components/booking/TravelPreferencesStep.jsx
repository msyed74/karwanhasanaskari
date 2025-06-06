
import React from 'react';

const TravelPreferencesStep = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Travel Preferences</h2>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Room Type
        </label>
        <select
          value={formData.roomType}
          onChange={(e) => handleInputChange('roomType', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
          <option value="single">Single Room</option>
          <option value="double">Double Room (Shared)</option>
          <option value="triple">Triple Room</option>
          <option value="family">Family Room</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Dietary Requirements
        </label>
        <select
          value={formData.dietaryRequirements}
          onChange={(e) => handleInputChange('dietaryRequirements', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
          <option value="">No special requirements</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="diabetic">Diabetic-friendly</option>
          <option value="other">Other (specify in special requests)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Special Requests
        </label>
        <textarea
          value={formData.specialRequests}
          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
          rows={4}
          placeholder="Any special requests, accessibility needs, or additional information..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
    </div>
  );
};

export default TravelPreferencesStep;
