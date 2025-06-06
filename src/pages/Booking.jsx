import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, User, Calendar as CalendarIcon, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  packagesData,
  departureCitiesData,
  bookingStepsData,
} from '@/data/bookingData';
import PackageSelectionStep from '@/components/booking/PackageSelectionStep';
import PersonalDetailsStep from '@/components/booking/PersonalDetailsStep';
import TravelPreferencesStep from '@/components/booking/TravelPreferencesStep';
import PaymentStep from '@/components/booking/PaymentStep';
import BookingSummary from '@/components/booking/BookingSummary';
import emailjs from 'emailjs-com';

const Booking = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    selectedPackage: '',
    departureCity: '',
    travelDate: '',
    groupSize: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    emergencyContact: '',
    roomType: 'double',
    specialRequests: '',
    dietaryRequirements: '',
    paymentMethod: 'card',
  });

  const stepIcons = {
    'Package Selection': MapPin,
    'Personal Details': User,
    'Travel Preferences': CalendarIcon,
    Payment: CreditCard,
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please provide a valid email address before submitting.",
      });
      return;
    }
  
    const bookingData = {
      ...formData,
      bookingId: `KHA${Date.now()}`,
      bookingDate: new Date().toISOString(),
      status: 'pending'
    };
  
    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    existingBookings.push(bookingData);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
  
    const emailParams = {
      to_name: 'Karwan e Hasan Askari',
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email.trim(), // Important fix
      phone: formData.phone,
      address: formData.address,
      emergency_contact: formData.emergencyContact,
      departure_city: formData.departureCity,
      travel_date: formData.travelDate,
      group_size: formData.groupSize,
      room_type: formData.roomType,
      special_requests: formData.specialRequests,
      dietary_requirements: formData.dietaryRequirements,
      payment_method: formData.paymentMethod,
      booking_id: bookingData.bookingId,
      package: packagesData.find(p => p.id === parseInt(formData.selectedPackage))?.name || ''
    };
  
    console.log("Sending email with params:", emailParams); // For debugging
  
    emailjs.send(
      'service_y9vq0xu',
      'template_8skic3w',
      emailParams,
      'O3lNhRC6HEEYizMJH'
    ).then(() => {
      toast({
        title: "Booking Submitted Successfully!",
        description: `Your booking ID is ${bookingData.bookingId}. We'll contact you within 24 hours.`,
      });
  
      setFormData({
        selectedPackage: '',
        departureCity: '',
        travelDate: '',
        groupSize: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        emergencyContact: '',
        roomType: 'double',
        specialRequests: '',
        dietaryRequirements: '',
        paymentMethod: 'card'
      });
      setCurrentStep(1);
    }).catch(error => {
      toast({
        title: "Email Failed!",
        description: "There was a problem sending your booking confirmation email.",
      });
      console.error("EmailJS error:", error);
    });
  };
  

  const selectedPackageDetails = packagesData.find(
    (pkg) => pkg.id === parseInt(formData.selectedPackage)
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PackageSelectionStep
            formData={formData}
            handleInputChange={handleInputChange}
            packages={packagesData}
            departureCities={departureCitiesData}
          />
        );
      case 2:
        return (
          <PersonalDetailsStep formData={formData} handleInputChange={handleInputChange} />
        );
      case 3:
        return (
          <TravelPreferencesStep formData={formData} handleInputChange={handleInputChange} />
        );
      case 4:
        return <PaymentStep formData={formData} handleInputChange={handleInputChange} />;
      default:
        return null;
    }
  };

  const isNextDisabled = () => {
    if (
      currentStep === 1 &&
      (!formData.selectedPackage || !formData.departureCity || !formData.travelDate)
    ) {
      return true;
    }
    if (
      currentStep === 2 &&
      (!formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.address ||
        !formData.emergencyContact)
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Pilgrimage</h1>
            <p className="text-xl">Begin your spiritual journey with just a few simple steps</p>
          </motion.div>
        </div>
      </section>

      {/* Stepper */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 md:space-x-8">
              {bookingStepsData.map((step, index) => {
                const IconComponent = stepIcons[step.title];
                return (
                  <div key={step.number} className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                        currentStep >= step.number
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'border-gray-300 text-gray-400'
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        IconComponent && <IconComponent className="h-5 w-5" />
                      )}
                    </div>
                    <div className="ml-2 hidden md:block">
                      <p
                        className={`text-sm font-semibold ${
                          currentStep >= step.number ? 'text-emerald-600' : 'text-gray-400'
                        }`}
                      >
                        {step.title}
                      </p>
                    </div>
                    {index < bookingStepsData.length - 1 && (
                      <div
                        className={`w-8 md:w-16 h-0.5 mx-4 ${
                          currentStep > step.number ? 'bg-emerald-600' : 'bg-gray-300'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Form + Summary */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                {renderStepContent()}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <Button variant="outline" onClick={handlePrevStep} disabled={currentStep === 1}>
                    Previous
                  </Button>
                  {currentStep < 4 ? (
                    <Button
                      onClick={handleNextStep}
                      disabled={isNextDisabled()}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600"
                    >
                      Submit Booking
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-1">
              <BookingSummary formData={formData} selectedPackageDetails={selectedPackageDetails} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
