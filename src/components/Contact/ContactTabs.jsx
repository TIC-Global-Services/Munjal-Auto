
import { useState } from "react";
import carPic from "../../assets/careerupdate.jpg"
import carPic2 from "../../assets/Carpic2.png"
import JobApplicationForm from "./JobApplicationForm";
import { motion } from "framer-motion";

const ContactTabs = () => {
  const [activeTab, setActiveTab] = useState('office');
  
  // Business inquiry form state
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    mobile: '',
    organization: '',
    message: ''
  });
  
  const [inquiryErrors, setInquiryErrors] = useState({});
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);

  // Validation functions
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidMobile = (mobile) => {
    const mobileRegex = /^[+]?[\d\s\-()]+$/;
    return mobileRegex.test(mobile) && mobile.replace(/\D/g, '').length >= 10;
  };

  // Validate inquiry form field
  const validateInquiryField = (name, value) => {
    console.log(`Validating field ${name}:`, value, `(length: ${value ? value.length : 0})`);
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value || value.trim().length < 2) {
          error = 'Name must be at least 2 characters long';
        }
        break;
      case 'email':
        if (!value || !isValidEmail(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'mobile':
        if (!value || !isValidMobile(value)) {
          error = 'Please enter a valid mobile number';
        }
        break;
      case 'organization':
        if (!value || value.trim().length < 2) {
          error = 'Organization name is required';
        }
        break;
      case 'message':
        if (!value || value.trim().length < 10) {
          error = 'Message must be at least 10 characters long';
        }
        break;
      default:
        break;
    }
    
    console.log(`Field ${name} validation result:`, error || 'VALID');
    return error;
  };

  // Handle inquiry form input changes
  const handleInquiryChange = (e) => {
    const { name, value } = e.target;
    console.log(`📝 Field ${name} changed to:`, value);
    
    setInquiryData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (inquiryErrors[name]) {
      setInquiryErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // ENHANCED HIDDEN IFRAME FORM SUBMISSION - Handle inquiry form submission
  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    console.log('🚀 Business Inquiry Form submission started');
    console.log('📋 Current form data:', inquiryData);
    
    // Validate all fields
    const errors = {};
    Object.keys(inquiryData).forEach(field => {
      const error = validateInquiryField(field, inquiryData[field]);
      if (error) errors[field] = error;
    });
    
    if (Object.keys(errors).length > 0) {
      setInquiryErrors(errors);
      console.log('❌ Validation errors:', errors);
      return;
    }
    
    setIsSubmittingInquiry(true);
    setInquiryErrors({});
    
    try {
      console.log('📤 Submitting business inquiry data via hidden iframe:', inquiryData);
      
      // Create hidden iframe with unique name
      const iframeName = `business_inquiry_iframe_${Date.now()}`;
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = iframeName;
      iframe.id = iframeName;
      document.body.appendChild(iframe);
      console.log('📺 Created iframe:', iframeName);
      
      // Create form element
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://script.google.com/macros/s/AKfycbzCRUNRfiLiy_TYAUOwdRZI5_6Txo4sZ4jnL79s4PkJDWx-ku7YqONJLwfZPHeu2jE/exec';
      form.target = iframeName;
      form.enctype = 'application/x-www-form-urlencoded';
      
      // Add form fields with validation
      const fields = ['name', 'email', 'mobile', 'organization', 'message'];
      fields.forEach(fieldName => {
        const value = inquiryData[fieldName];
        if (value && value.trim()) {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = fieldName;
          input.value = value.trim();
          form.appendChild(input);
          console.log(`📝 Added field ${fieldName}:`, value.trim());
        } else {
          console.warn(`⚠️ Empty field ${fieldName}:`, value);
        }
      });
      
      // Add timestamp for tracking
      const timestampInput = document.createElement('input');
      timestampInput.type = 'hidden';
      timestampInput.name = 'timestamp';
      timestampInput.value = new Date().toISOString();
      form.appendChild(timestampInput);
      console.log('📅 Added timestamp:', new Date().toISOString());
      
      // Add form to document
      document.body.appendChild(form);
      console.log('📋 Form created with', form.children.length, 'fields');
      
      // Submit form
      console.log('📤 Submitting form via iframe...');
      form.submit();
      console.log('✅ Form submitted');
      
      // Wait a bit longer before cleanup to ensure submission completes
      setTimeout(() => {
        try {
          if (document.body.contains(form)) {
            document.body.removeChild(form);
            console.log('🧹 Removed form');
          }
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
            console.log('🧹 Removed iframe');
          }
        } catch (cleanupError) {
          console.log('⚠️ Cleanup error (non-critical):', cleanupError);
        }
      }, 5000); // Increased cleanup delay
      
      console.log('✅ Business inquiry submitted successfully via iframe');
      
      // Show success message
      alert('✅ SUCCESS! Your business inquiry has been submitted successfully. We will contact you soon!');
      
      // Reset form
      setInquiryData({
        name: '',
        email: '',
        mobile: '',
        organization: '',
        message: ''
      });
      
    } catch (error) {
      console.error('❌ Business inquiry submission failed:', error);
      alert('❌ There was an error submitting your inquiry. Please try again or contact us directly at mail@munjalauto.com');
    } finally {
      setIsSubmittingInquiry(false);
    }
  };

  const tabs = [
    { id: 'office', label: 'Office & Plants' },
    { id: 'career', label: 'Career' },
    { id: 'inquiry', label: 'Business Inquiry' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-#2E2E2E">

      {/* Navigation Tabs */}
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 px-6 font-medium text-sm transition-colors duration-300 ${activeTab === tab.id ? 'text-red-500' : 'text-gray-400 hover:text-gray-700'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="md:py-8 md:px-5 px-4 md:mt-10 mt-5">
        {/* Office & Works Tab */}
        {activeTab === 'office' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Corporate Office */}
            {/* <div className="flex flex-col md:flex-row md:h-[380px] py-2 h-full  rounded-lg overflow-hidden shadow-sm items-center justify-center">
              <div className="w-full md:w-1/3  p-8 flex items-center ">
                <h3 className="text-[32px] text-black font-bold">Corporate office</h3>
              </div>
              <div className="w-full md:w-2/3 px-6">
                <h4 className="text-[#ED1C24] font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">2nd Floor, Tower "C", Unitech Business Zone,</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Nirvana Country, South City – 2, Sector-50,</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Gurugram – 122018, Haryana</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Phone: +91 124 4057891/92</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Fax: +91 124 4057892</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">E-mail: <a href="mailto:mail@munjalauto.com" className="text-[#ED1C24]">mail@munjalauto.com</a></p>
              </div>
            </div> */}

            {/* Waghodia Plant */}
            <div className="flex flex-col md:flex-row md:h-[380px] rounded-lg overflow-hidden shadow-sm items-start justify-between">
              <div className="w-full md:w-2/5 md:p-8 p-8 flex items-start md:pt-6">
                <h3 className="text-[30px] md:text-[38px] text-black font-bold">Waghodia plant</h3>
              </div>
              <div className="w-full md:w-3/5 p-6 md:pl-60 flex flex-col justify-center md:pt-16">
                <h4 className="text-red-500 font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">187, GIDC Industrial Estate,</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Waghodia -391 760, Vadodara (Gujarat)</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Phone: +91 (2668) 262421</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Mobile: +91 9099978936</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">E-mail: <a href="mailto:mail@munjalauto.com" className="text-red-500">mail@munjalauto.com</a></p>
              </div>
            </div>

            {/* Haridwar Plant */}
            <div className="flex flex-col md:flex-row md:h-[380px]  rounded-lg overflow-hidden shadow-sm items-start justify-center">
              <div className="w-full md:w-2/5   p-8 flex items-start md:pt-6">
                <h3 className="text-[30px] md:text-[38px] text-black font-bold">Haridwar Plant</h3>
              </div>
              <div className="w-full md:w-3/5 p-6 md:pl-60 flex flex-col justify-center md:pt-16">
                <h4 className="text-red-500 font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Plot no – 11 Industrial Park II,</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Village Salempur Mehdood, Haridwar</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">(Uttrakhand)</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Tel: +91 (1334) 235530/32</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Fax: +91 (1334) 235533</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">E-mail: <a href="mailto:mail@munjalauto.com" className="text-red-500">mail@munjalauto.com</a></p>
              </div>
            </div>

            {/* Bawal Plant */}
            <div className="flex flex-col md:flex-row md:h-[380px]  rounded-lg overflow-hidden shadow-sm items-start justify-center">
              <div className="w-full md:w-2/5   p-8 flex items-start md:pt-6">
                <h3 className="text-[30px] md:text-[38px] text-black font-bold">Bawal Plant & Cenral Tool Room</h3>
              </div>
              <div className="w-full md:w-3/5 p-6 md:pl-60 flex flex-col justify-center md:pt-16">
                <h4 className="text-red-500 font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Plot No. – 37, Sector 5 Phase II,</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">G.C Bawal- 123 501, Rewari (Haryana)</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Tel: +91 (1284) 264435-36</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Fax: +91 (1284) 264434</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">E-mail: <a href="mailto:mail@munjalauto.com" className="text-red-500">mail@munjalauto.com</a></p>
              </div>
            </div>

            {/* Dharuhera Plant */}
            <div className="flex flex-col md:h-[380px] md:flex-row  rounded-lg overflow-hidden shadow-sm items-start justify-center">
              <div className="w-full md:w-2/5   p-8 flex items-start md:pt-6">
                <h3 className="text-[30px] md:text-[38px] text-black font-bold">Dharuhera Plant</h3>
              </div>
              <div className="w-full md:w-3/5 p-6 md:pl-60 flex flex-col justify-center md:pt-16">
                <h4 className="text-red-500 font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Plot no. 32-A, Industrial Area,</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Dharuhera-122106, Rewari, Haryana</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Tel: +91 (1274) 243010-11</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">E-mail: <a href="mailto:mail@munjalauto.com" className="text-red-500">mail@munjalauto.com</a></p>
              </div>
            </div>

            {/*Sanand Plant*/}
            <div className="flex flex-col md:h-[380px] md:flex-row  rounded-lg overflow-hidden shadow-sm items-start justify-center">
              <div className="w-full md:w-2/5   p-8 flex items-start md:pt-6">
                <h3 className="text-[30px] md:text-[38px] text-black font-bold">Sanand Plant</h3>
              </div>
              <div className="w-full md:w-3/5 p-6 md:pl-60 flex flex-col justify-center md:pt-16">
                <h4 className="text-red-500 font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">BOL INDUSTRIAL ESTATE,</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">GIDC SANAND 2, Chharodi,</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Gujarat 382170</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">E-mail: <a href="mailto:mail@munjalauto.com" className="text-red-500">mail@munjalauto.com</a></p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Career Tab */}
        {activeTab === 'career' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row gap-8"
          >
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden w-full max-w-[488px] h-[300px] md:w-[488px] md:h-[480px] mx-auto md:mx-0">
                <img
                  src={carPic}
                  alt="Career at Munjal Auto"
                  className="w-full h-full object-cover object-right"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
             
              <JobApplicationForm />

            </div>
          </motion.div>
        )}

        {/* Business Inquiry Tab */}
        {activeTab === 'inquiry' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row gap-8"
          >
            <div className="w-full md:w-1/3 -mt-4 md:-mt-6">
              <div className="rounded-lg overflow-hidden w-full max-w-[488px] h-[300px] md:w-[488px] md:h-[480px] mx-auto md:mx-0">
                <img
                  src={carPic2}
                  alt="Career at Munjal Auto"
                  className="w-full h-full object-cover object-right"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="h-auto md:h-[480px] flex flex-col justify-between ml-0 md:ml-28 mt-0 md:-mt-4">
                <div className="mt-0 md:-mt-2">
                  <p className="text-gray-600 mb-8">
                  To place an order or to avail more information regarding our products, do write in. Our customer care executives will get back to you as soon as possible. We invite trade queries from India and abroad.
                  </p>

                  <form onSubmit={handleInquirySubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={inquiryData.name}
                          onChange={handleInquiryChange}
                          placeholder="Name"
                          required
                          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-1 border-gray-200 focus:ring-gray-300"
                        />
                        {inquiryErrors.name && (
                          <p className="text-red-500 text-sm mt-1">{inquiryErrors.name}</p>
                        )}
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={inquiryData.email}
                          onChange={handleInquiryChange}
                          placeholder="Email"
                          required
                          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-1 border-gray-200 focus:ring-gray-300"
                        />
                        {inquiryErrors.email && (
                          <p className="text-red-500 text-sm mt-1">{inquiryErrors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
                      <div>
                        <input
                          type="tel"
                          name="mobile"
                          value={inquiryData.mobile}
                          onChange={handleInquiryChange}
                          placeholder="Mobile Number"
                          required
                          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-1 border-gray-200 focus:ring-gray-300"
                        />
                        {inquiryErrors.mobile && (
                          <p className="text-red-500 text-sm mt-1">{inquiryErrors.mobile}</p>
                        )}
                      </div>
                      <div>
                        <input
                          type="text"
                          name="organization"
                          value={inquiryData.organization}
                          onChange={handleInquiryChange}
                          placeholder="Organization Name"
                          required
                          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-1 border-gray-200 focus:ring-gray-300"
                        />
                        {inquiryErrors.organization && (
                          <p className="text-red-500 text-sm mt-1">{inquiryErrors.organization}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={inquiryData.message}
                        onChange={handleInquiryChange}
                        placeholder="Write a Message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-1 border-gray-200 focus:ring-gray-300"
                      ></textarea>
                      {inquiryErrors.message && (
                        <p className="text-red-500 text-sm mt-1">{inquiryErrors.message}</p>
                      )}
                    </div>

                    <div className="mb-4 md:mb-8 pt-[15px] md:pt-[30px]">
                      <button 
                        type="submit"
                        disabled={isSubmittingInquiry}
                        className="bg-black text-white px-10 py-2 rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmittingInquiry ? 'Submitting...' : 'Submit Inquiry'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Stay Connected Section - appears in all tabs */}
      <div className="mt-8 md:mt-12 pt-6 md:pt-8 px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-3 md:space-y-0">
          <h2 className="text-lg md:text-xl font-bold text-black">Stay Connected</h2>
          <div className="flex space-x-3 md:space-x-4 justify-start">
            {/* Twitter */}
            <a href="#" className="text-black hover:text-gray-600 transition-colors">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            
            {/* Facebook */}
            <a href="#" className="text-black hover:text-gray-600 transition-colors">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="#" className="text-black hover:text-gray-600 transition-colors">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            {/* GitHub */}
            <a href="#" className="text-black hover:text-gray-600 transition-colors">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}


export default ContactTabs
