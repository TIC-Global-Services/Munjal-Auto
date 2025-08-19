
import { useState } from "react";
import carPic from "../../assets/CarPic.png"
import carPic2 from "../../assets/Carpic2.png"
import JobApplicationForm from "./JobApplicationForm";
import { motion } from "framer-motion";

const ContactTabs = () => {
  const [activeTab, setActiveTab] = useState('office');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    experience: '',
    resume: null
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.textContent : '';
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
    }

    try {
      // Comprehensive validation
      const validationErrors = [];

      if (!formData.name || formData.name.trim().length < 2) {
        validationErrors.push('Name must be at least 2 characters long');
      }

      if (!formData.email || !isValidEmail(formData.email)) {
        validationErrors.push('Please enter a valid email address');
      }

      if (!formData.mobile || !isValidMobile(formData.mobile)) {
        validationErrors.push('Please enter a valid mobile number');
      }

      if (!formData.experience || formData.experience.trim().length < 10) {
        validationErrors.push('Experience description must be at least 10 characters long');
      }

      if (!formData.resume) {
        validationErrors.push('Please upload your resume');
      } else {
        // Validate file type and size
        const allowedTypes = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedTypes.includes(formData.resume.type)) {
          validationErrors.push('Resume must be a PDF, DOC, or DOCX file');
        }

        if (formData.resume.size > maxSize) {
          validationErrors.push('Resume file size must be less than 5MB');
        }
      }

      // Display validation errors
      if (validationErrors.length > 0) {
        alert('Please fix the following errors:\n\n' + validationErrors.join('\n'));
        return;
      }

      // Convert resume file to base64
      const resumeBase64 = await convertFileToBase64(formData.resume);

      // Prepare form data for submission
      const submitData = new FormData();
      submitData.append('name', formData.name.trim());
      submitData.append('email', formData.email.trim().toLowerCase());
      submitData.append('mobile', formData.mobile.trim());
      submitData.append('experience', formData.experience.trim());
      submitData.append('resumeFileName', formData.resume.name);
      submitData.append('resumeData', resumeBase64);
      submitData.append('resumeType', formData.resume.type);
      submitData.append('resumeSize', formData.resume.size);
      submitData.append('timestamp', new Date().toISOString());

      // Replace with your actual Google Apps Script Web App URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

      // Submit form with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: submitData,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.result === 'success') {
        // Success notification
        alert('🎉 Application submitted successfully!\n\nThank you for your interest. We will review your application and get back to you soon.');

        // Reset form
        setFormData({
          name: '',
          email: '',
          mobile: '',
          experience: '',
          resume: null
        });

        // Reset file input if it exists
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) {
          fileInput.value = '';
        }

        // Optional: Redirect or show success page
        // window.location.href = '/thank-you';

      } else {
        throw new Error(result.error || 'Submission failed');
      }

    } catch (error) {
      console.error('Error submitting form:', error);

      let errorMessage = 'Error submitting form. Please try again.';

      if (error.name === 'AbortError') {
        errorMessage = 'Request timed out. Please check your internet connection and try again.';
      } else if (error.message.includes('HTTP error')) {
        errorMessage = 'Server error. Please try again later.';
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Network error. Please check your internet connection.';
      }

      alert(+ errorMessage);

    } finally {
      // Restore button state
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
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
      <div className="flex border-b">
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
            <div className="flex flex-col md:flex-row md:h-[380px] py-2 h-full  rounded-lg overflow-hidden shadow-sm items-center justify-center">
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
            </div>

            {/* Waghodia Plant */}
            <div className="flex flex-col md:flex-row md:h-[380px]  rounded-lg overflow-hidden shadow-sm items-center justify-center">
              <div className="w-full md:w-1/3   md:p-8 p-8 flex items-center">
                <h3 className="text-[32px] text-black font-bold">Waghodia plant</h3>
              </div>
              <div className="w-full md:w-2/3 p-6">
                <h4 className="text-red-500 font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">187, GIDC Industrial Estate,</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Waghodia -391 760, Vadodara (Gujarat)</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Phone: +91 (2668) 262421</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Phone: +91 (2668) 262422</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Fax: +91 (2668) 262427</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Mobile: +91 9099978936</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Mobile: +91 9099978937</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">E-mail: <a href="mailto:mail@munjalauto.com" className="text-red-500">mail@munjalauto.com</a></p>
              </div>
            </div>

            {/* Haridwar Plant */}
            <div className="flex flex-col md:flex-row md:h-[380px]  rounded-lg overflow-hidden shadow-sm items-center justify-center">
              <div className="w-full md:w-1/3   p-8 flex items-center">
                <h3 className="text-[32px] text-black font-bold">Haridwar Plant</h3>
              </div>
              <div className="w-full md:w-2/3 p-6">
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
            <div className="flex flex-col md:flex-row md:h-[380px]  rounded-lg overflow-hidden shadow-sm items-center justify-center">
              <div className="w-full md:w-1/3   p-8 flex items-center">
                <h3 className="text-[32px] text-black font-bold">Bawal Plant</h3>
              </div>
              <div className="w-full md:w-2/3 p-6">
                <h4 className="text-red-500 font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Plot No. – 37, Sector 5 Phase II,</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">G.C Bawal- 123 501, Rewari (Haryana)</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Tel: +91 (1284) 264435-36</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Fax: +91 (1284) 264434</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">E-mail: <a href="mailto:mail@munjalauto.com" className="text-red-500">mail@munjalauto.com</a></p>
              </div>
            </div>

            {/* Dharuhera Plant */}
            <div className="flex flex-col md:h-[380px] md:flex-row  rounded-lg overflow-hidden shadow-sm items-center justify-center">
              <div className="w-full md:w-1/3   p-8 flex items-center">
                <h3 className="text-[32px] text-black font-bold">Dharuhera Plant</h3>
              </div>
              <div className="w-full md:w-2/3 p-6">
                <h4 className="text-red-500 font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Plot no. 32-A, Industrial Area,</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Dharuhera-122106, Rewari, Haryana</p>
                <p className="mb-1 text-black md:text-[20px] md:leading-[31px]">Tel: +91 (1274) 243010-11</p>
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
              <div className="rounded-lg overflow-hidden">
                <img
                  src={carPic}
                  alt="Career at Munjal Auto"
                  className="w-full h-full object-cover"
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
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={carPic2}
                  alt="Business Meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-gray-600 mb-6">
              For product inquiries, orders, or detailed information, reach out to us using the form below. Our team will respond promptly to assist you. We welcome business queries from across India and around the world.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Write a Message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                  ></textarea>
                </div>

                <div>
                  <button className="bg-black text-white px-8 py-2 rounded">Submit</button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </div>

    </div>
  )
}


export default ContactTabs
