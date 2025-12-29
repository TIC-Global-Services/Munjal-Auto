import { useState } from 'react';

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
  const [errors, setErrors] = useState({});

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

  // Validate individual field
  const validateField = (name, value) => {
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
          error = 'Please enter a valid mobile number (at least 10 digits)';
        }
        break;
      case 'experience':
        if (!value || value.trim().length < 1) {
          error = 'Experience field cannot be empty';
        }
        break;
      case 'resume':
        if (!value) {
          error = 'Please upload your resume';
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`📝 Job form field ${name} changed to:`, value);
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('📎 File selected:', file.name, file.type, file.size);
      
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          resume: 'Please select a PDF, DOC, or DOCX file'
        }));
        e.target.value = '';
        return;
      }
      
      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        setErrors(prev => ({
          ...prev,
          resume: 'File size must be less than 5MB'
        }));
        e.target.value = '';
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
      setFileName(file.name);
      
      // Clear resume error
      if (errors.resume) {
        setErrors(prev => ({
          ...prev,
          resume: ''
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        resume: null
      }));
      setFileName('No file Chosen');
    }
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

  // WORKING HIDDEN IFRAME METHOD - Based on test-job-application.html
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('🚀 Job Application Form submission started');
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log('❌ Job form validation errors:', newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log('📤 Starting job application submission with working method');
      
      // Convert resume file to base64
      let resumeBase64 = '';
      if (formData.resume) {
        console.log('📎 Converting file to base64...');
        resumeBase64 = await convertFileToBase64(formData.resume);
        console.log('✅ File converted, base64 length:', resumeBase64.length);
      } else {
        console.error('❌ No resume file found');
        alert('Please select a resume file');
        return;
      }
      
      // Create hidden iframe with unique name (exactly like working test)
      const iframeName = `job_application_iframe_${Date.now()}`;
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = iframeName;
      iframe.id = iframeName;
      document.body.appendChild(iframe);
      console.log('📺 Created iframe:', iframeName);
      
      // Create form element (exactly like working test)
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://script.google.com/macros/s/AKfycbxyN8HqU14p-7R8wMokntmuB54s9URXc80Norz1PUgunwrvbx3nhGxIaIJD9IGpkP8V/exec';
      form.target = iframeName;
      form.enctype = 'application/x-www-form-urlencoded';
      
      // Add text fields (exactly like working test)
      const textFields = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile.trim(),
        experience: formData.experience.trim()
      };
      
      Object.keys(textFields).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = textFields[key];
        form.appendChild(input);
        console.log(`📝 Added field ${key}: "${textFields[key]}"`);
      });
      
      // Add file data (exactly like working test)
      const fileFields = {
        resumeFileName: formData.resume.name,
        resumeData: resumeBase64,
        resumeType: formData.resume.type,
        resumeSize: formData.resume.size.toString(),
        timestamp: new Date().toISOString()
      };
      
      Object.keys(fileFields).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fileFields[key];
        form.appendChild(input);
        if (key === 'resumeData') {
          console.log(`📝 Added ${key}: [base64 data, ${fileFields[key].length} chars]`);
        } else {
          console.log(`📝 Added ${key}: "${fileFields[key]}"`);
        }
      });
      
      // Add form to document and submit (exactly like working test)
      document.body.appendChild(form);
      console.log(`📋 Form created with ${form.children.length} fields`);
      console.log('📤 Submitting form via iframe...');
      form.submit();
      console.log('✅ Form submitted via iframe');
      
      // Clean up after delay (exactly like working test)
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
      }, 5000);
      
      console.log('✅ Job application submitted successfully via iframe');
      
      // Show success message
      alert('🎉 Job application submitted successfully!\\n\\nThank you for your interest. We will review your application and get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        mobile: '',
        experience: '',
        resume: null
      });
      
      setFileName('No file Chosen');
      setErrors({});
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) {
        fileInput.value = '';
      }
      
    } catch (error) {
      console.error('❌ Job application submission failed:', error);
      alert('❌ There was an error submitting your job application. Please try again or contact us directly at mail@munjalauto.com');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="h-auto md:h-[480px] -mt-0 md:-mt-12">
      <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between p-4 md:p-10 ml-0 md:ml-16 -mt-0 md:-mt-6">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-1 ${
                  errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-200 focus:ring-gray-300'
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-1 ${
                  errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-200 focus:ring-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-1 ${
                  errors.mobile ? 'border-red-500 focus:ring-red-300' : 'border-gray-200 focus:ring-gray-300'
                }`}
              />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
            </div>
            <div>
              <input
                type="text"
                name="experience"
                placeholder="Total Experience"
                value={formData.experience}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-1 ${
                  errors.experience ? 'border-red-500 focus:ring-red-300' : 'border-gray-200 focus:ring-gray-300'
                }`}
              />
              {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
            </div>
          </div>

          <div>
            <label className="cursor-pointer block">
              <div className={`w-full max-w-[592px] md:w-[592px] h-[150px] md:h-[200px] border-2 border-dashed rounded-xl bg-gray-50 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors ${
                errors.resume ? 'border-red-500' : 'border-gray-300'
              }`}>
                <div className="text-gray-400 mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div className="text-gray-600 font-medium">Upload your resume</div>
                <div className="text-gray-400 text-sm mt-1">
                  (Accepted formats: PDF / DOC | Max size: 5 MB)
                </div>
                {fileName !== 'No file Chosen' && (
                  <div className="text-green-600 text-sm mt-2 font-medium">{fileName}</div>
                )}
              </div>
              <input 
                type="file" 
                className="hidden" 
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </label>
            {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
          </div>
        </div>

        <div className="flex justify-start mb-4 md:mb-8 pt-[15px] md:pt-[30px]">
          <button 
            type="submit" 
            className="bg-black text-white px-10 py-2 rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Apply'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;