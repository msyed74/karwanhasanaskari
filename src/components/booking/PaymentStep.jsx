
import React from 'react';
import { CreditCard, Phone, Shield, Calendar as CalendarIcon } from 'lucide-react';

const PaymentStep = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h2>
      
      <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
        <div className="flex items-center mb-4">
          <Shield className="h-6 w-6 text-emerald-600 mr-2" />
          <h3 className="text-lg font-semibold text-emerald-800">Secure Payment</h3>
        </div>
        <p className="text-emerald-700 mb-4">
          Your payment information is protected with bank-level security. 
          We accept multiple payment methods for your convenience.
        </p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Payment Method
        </label>
        <div className="space-y-3">
          <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={formData.paymentMethod === 'card'}
              onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
              className="mr-3"
            />
            <CreditCard className="h-5 w-5 mr-2 text-gray-600" />
            <span>Credit/Debit Card</span>
          </label>
          
          <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={formData.paymentMethod === 'upi'}
              onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
              className="mr-3"
            />
            <Phone className="h-5 w-5 mr-2 text-gray-600" />
            <span>UPI Payment</span>
          </label>
          
          <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="netbanking"
              checked={formData.paymentMethod === 'netbanking'}
              onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
              className="mr-3"
            />
            <Shield className="h-5 w-5 mr-2 text-gray-600" />
            <span>Net Banking</span>
          </label>
          
          <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="paymentMethod"
              value="installment"
              checked={formData.paymentMethod === 'installment'}
              onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
              className="mr-3"
            />
            <CalendarIcon className="h-5 w-5 mr-2 text-gray-600" />
            <span>Installment Plan</span>
          </label>
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <p className="text-yellow-800 text-sm">
          <strong>Note:</strong> A booking confirmation fee of ₹10,000 is required to secure your reservation. 
          The remaining amount can be paid in installments as per our payment plan.
        </p>
      </div>
    </div>
  );
};

export default PaymentStep;
