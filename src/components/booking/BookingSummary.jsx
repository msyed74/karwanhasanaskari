
import React from 'react';
import { Calendar, Shield, Phone } from 'lucide-react';

const BookingSummary = ({ formData, selectedPackageDetails }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Booking Summary</h3>
      
      {selectedPackageDetails && (
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold text-gray-800">{selectedPackageDetails.name}</h4>
            <p className="text-gray-600">{selectedPackageDetails.duration}</p>
          </div>
          
          {formData.departureCity && (
            <div className="flex justify-between">
              <span className="text-gray-600">Departure:</span>
              <span className="font-semibold capitalize">{formData.departureCity}</span>
            </div>
          )}
          
          {formData.travelDate && (
            <div className="flex justify-between">
              <span className="text-gray-600">Travel Date:</span>
              <span className="font-semibold">{new Date(formData.travelDate).toLocaleDateString()}</span>
            </div>
          )}
          
          <div className="flex justify-between">
            <span className="text-gray-600">Group Size:</span>
            <span className="font-semibold">{formData.groupSize} {formData.groupSize === 1 ? 'Person' : 'People'}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Price per person:</span>
              <span className="font-semibold">{selectedPackageDetails.price}</span>
            </div>
            
            <div className="flex justify-between text-lg font-bold text-emerald-600 mt-2">
              <span>Total Amount:</span>
              <span>
                ₹{(parseInt(selectedPackageDetails.price.replace('₹', '114').replace(',', '')) * formData.groupSize).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}
      
      {!selectedPackageDetails && (
        <div className="text-center text-gray-500 py-8">
          <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Select a package to see pricing details</p>
        </div>
      )}
      
      <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
        <div className="flex items-center mb-2">
          <Shield className="h-5 w-5 text-emerald-600 mr-2" />
          <span className="font-semibold text-emerald-800">What's Included:</span>
        </div>
        <ul className="text-sm text-emerald-700 space-y-1">
          <li>• Round-trip flights</li>
          <li>• Accommodation</li>
          <li>• Meals as specified</li>
          <li>• Visa assistance</li>
          <li>• Expert guide</li>
          <li>• Travel insurance</li>
        </ul>
      </div>
      
      <div className="mt-6 text-center">
        <div className="flex items-center justify-center text-emerald-600 mb-2">
          <Phone className="h-4 w-4 mr-2" />
          <span className="text-sm font-semibold">Need Help?</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">Call us at  +91 9691938002 or email us at <a href="mailto:info@travelwithus.com" className="text-emerald-600 hover:underline">karwanehasanaskari786@gmail.com</a></p>
        <p className="text-xs text-gray-500">Available 24/7 for assistance</p>
      </div>
    </div>
  );
};

export default BookingSummary;
