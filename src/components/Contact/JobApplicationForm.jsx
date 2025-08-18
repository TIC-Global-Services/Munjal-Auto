import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    experience: '',
    resume: null
  });

  const [fileName, setFileName] = useState('No file Chosen');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Mobile validation function
  const isValidMobile = (mobile) => {
    const mobileRegex = /^[+]?[\d\s\-()]+$/;
    return mobileRegex.test(mobile) && mobile.replace(/\D/g, '').length >= 10;
  };
  
  // Convert file to base64
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        // Remove the data URL prefix (data:application/pdf;base64,)
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        alert('Please select a PDF, DOC, or DOCX file');
        e.target.value = '';
        return;
      }
      
      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert('File size must be less than 5MB');
        e.target.value = '';
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
      setFileName(file.name);
    } else {
      setFormData(prev => ({
        ...prev,
        resume: null
      }));
      setFileName('No file Chosen');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
        validationErrors.push('Please enter a valid mobile number (at least 10 digits)');
      }
      
      if (!formData.experience || formData.experience.trim().length < 1) {
        validationErrors.push('Experience field cannot be empty');
      }
      
      if (!formData.resume) {
        validationErrors.push('Please upload your resume');
      }
      
      // Display validation errors
      if (validationErrors.length > 0) {
        alert('Please fix the following errors:\\n\\n' + validationErrors.join('\\n'));
        return;
      }
      
      console.log('Starting file conversion...');
      
      // Convert resume file to base64
      const resumeBase64 = await convertFileToBase64(formData.resume);
      
      console.log('File converted to base64, length:', resumeBase64.length);
      
      // Create URLSearchParams for proper form encoding
      const submitData = new URLSearchParams();
      submitData.append('name', formData.name.trim());
      submitData.append('email', formData.email.trim().toLowerCase());
      submitData.append('mobile', formData.mobile.trim());
      submitData.append('experience', formData.experience.trim());
      submitData.append('resumeFileName', formData.resume.name);
      submitData.append('resumeData', resumeBase64);
      submitData.append('resumeType', formData.resume.type);
      submitData.append('resumeSize', formData.resume.size.toString());
      submitData.append('timestamp', new Date().toISOString());
      
      console.log('Submitting data...');
      
      // Replace with your actual Google Apps Script Web App URL
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyu8SUwbW_TH1lbU1vI1ogvguTQBRuRZexq3aBSk4WsBAjYic6pWrKuapBz7cqR1qH_/exec';
      
      // Submit form with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 45000); // 45 second timeout
      
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: submitData.toString(),
        signal: controller.signal,
        mode: 'cors'
      });
      
      clearTimeout(timeoutId);
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const responseText = await response.text();
      console.log('Response text:', responseText);
      
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Error parsing JSON response:', parseError);
        console.log('Raw response:', responseText);
        throw new Error('Invalid response format from server');
      }
      
      if (result.result === 'success') {
        // Success notification
        alert('🎉 Application submitted successfully!\\n\\nThank you for your interest. We will review your application and get back to you soon.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          mobile: '',
          experience: '',
          resume: null
        });
        
        setFileName('No file Chosen');
        
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) {
          fileInput.value = '';
        }
        
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
      } else if (error.message.includes('Invalid response format')) {
        errorMessage = 'Server returned an invalid response. Please try again.';
      }
      
      alert(errorMessage);
      
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="p-8">
      <form onSubmit={handleSubmit} className="space-y-10 h-full flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
          <div>
            <input
              type="text"
              name="experience"
              placeholder="Total Experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>

        <div>
          <p className="mb-2">Upload your resume <span className='text-red-500'>*</span></p>
          <div className="flex items-center">
            <label className="cursor-pointer bg-gray-100 px-4 py-2 border border-gray-200 rounded">
              Choose file
              <input 
                type="file" 
                className="hidden" 
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </label>
            <span className="ml-3 text-sm text-gray-500">{fileName}</span>
          </div>
        </div>

        <div>
          <button 
            type="submit" 
            className="bg-black text-white px-10 py-2 rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;