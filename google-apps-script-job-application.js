/**
 * Google Apps Script for Job Application Form
 * This script handles form submissions, stores resumes in Google Drive,
 * and saves application data to Google Sheets
 */

// Configuration - Update these IDs with your actual Google Drive folder and Sheet IDs
const CONFIG = {
  // STEP 1: Create a folder in Google Drive for resumes
  // Go to drive.google.com → New → Folder → Name it "Job Application Resumes"
  // Open the folder and copy the ID from URL: https://drive.google.com/drive/folders/[FOLDER_ID]
  RESUME_FOLDER_ID: 'https://drive.google.com/drive/u/0/folders/1eXc1MwVBgKhAKCP2luturWiHcQf9siiA',
  
  // STEP 2: Create a Google Sheet for applications  
  // Go to sheets.google.com → Blank → Rename to "Job Applications"
  // Copy the ID from URL: https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit
  SHEET_ID: 'https://docs.google.com/spreadsheets/d/1uLVyXzQdoKOivU9KqlDgnabogw6HIilLxCR3W-1PGSw/edit?gid=0#gid=0',
  
  // Sheet name (tab name in your Google Sheet)
  SHEET_NAME: 'Job Applications'
};

/**
 * Main function to handle POST requests from the job application form
 */
function doPost(e) {
  try {
    console.log('Received POST request');
    console.log('Event object:', e);
    console.log('Parameters:', e ? e.parameter : 'No parameters');
    console.log('Post data:', e ? e.postData : 'No post data');
    
    // Check if we have parameters
    if (!e || !e.parameter) {
      throw new Error('No parameters received in POST request');
    }
    
    // Extract form data
    const formData = {
      name: e.parameter.name || '',
      email: e.parameter.email || '',
      mobile: e.parameter.mobile || '',
      experience: e.parameter.experience || '',
      resumeFileName: e.parameter.resumeFileName || '',
      resumeData: e.parameter.resumeData || '',
      resumeType: e.parameter.resumeType || '',
      resumeSize: e.parameter.resumeSize || '',
      timestamp: e.parameter.timestamp || new Date().toISOString()
    };
    
    console.log('Form data extracted:', {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      experience: formData.experience,
      resumeFileName: formData.resumeFileName,
      resumeType: formData.resumeType,
      resumeSize: formData.resumeSize
    });
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.mobile || !formData.experience) {
      throw new Error('Missing required fields');
    }
    
    if (!formData.resumeData || !formData.resumeFileName) {
      throw new Error('Resume file is required');
    }
    
    // Save resume to Google Drive
    console.log('Saving resume to Google Drive...');
    const resumeUrl = saveResumeToGoogleDrive(formData);
    console.log('Resume saved successfully:', resumeUrl);
    
    // Save application data to Google Sheet
    console.log('Saving application data to Google Sheet...');
    const rowNumber = saveToGoogleSheet(formData, resumeUrl);
    console.log('Data saved to sheet, row number:', rowNumber);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'success',
        message: 'Application submitted successfully',
        rowNumber: rowNumber,
        resumeUrl: resumeUrl
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'error',
        error: error.toString(),
        message: 'Failed to submit application'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Save resume file to Google Drive
 */
function saveResumeToGoogleDrive(formData) {
  try {
    // Get the resume folder
    const folder = DriveApp.getFolderById(CONFIG.RESUME_FOLDER_ID);
    
    // Decode base64 data
    const resumeBlob = Utilities.newBlob(
      Utilities.base64Decode(formData.resumeData),
      formData.resumeType,
      formData.resumeFileName
    );
    
    // Create unique filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const sanitizedName = formData.name.replace(/[^a-zA-Z0-9]/g, '_');
    const uniqueFileName = `${timestamp}_${sanitizedName}_${formData.resumeFileName}`;
    
    // Save file to Google Drive
    const file = folder.createFile(resumeBlob.setName(uniqueFileName));
    
    // Make file accessible (optional - you might want to keep it private)
    // file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    // Return the file URL
    return file.getUrl();
    
  } catch (error) {
    console.error('Error saving resume to Google Drive:', error);
    throw new Error('Failed to save resume: ' + error.toString());
  }
}

/**
 * Save application data to Google Sheet
 */
function saveToGoogleSheet(formData, resumeUrl) {
  try {
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
      
      // Add headers
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Mobile',
        'Experience',
        'Resume Filename',
        'Resume URL',
        'Resume Type',
        'Resume Size (bytes)',
        'Status'
      ];
      
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#f0f0f0');
      
      // Set column widths
      sheet.setColumnWidth(1, 150); // Timestamp
      sheet.setColumnWidth(2, 200); // Name
      sheet.setColumnWidth(3, 250); // Email
      sheet.setColumnWidth(4, 150); // Mobile
      sheet.setColumnWidth(5, 150); // Experience
      sheet.setColumnWidth(6, 200); // Resume Filename
      sheet.setColumnWidth(7, 300); // Resume URL
      sheet.setColumnWidth(8, 150); // Resume Type
      sheet.setColumnWidth(9, 120); // Resume Size
      sheet.setColumnWidth(10, 100); // Status
    }
    
    // Prepare data row
    const timestamp = new Date(formData.timestamp);
    const rowData = [
      timestamp,
      formData.name,
      formData.email,
      formData.mobile,
      formData.experience,
      formData.resumeFileName,
      resumeUrl,
      formData.resumeType,
      parseInt(formData.resumeSize) || 0,
      'New'
    ];
    
    // Add data to sheet
    const lastRow = sheet.getLastRow();
    const newRowNumber = lastRow + 1;
    sheet.getRange(newRowNumber, 1, 1, rowData.length).setValues([rowData]);
    
    // Format the new row
    const newRowRange = sheet.getRange(newRowNumber, 1, 1, rowData.length);
    newRowRange.setBorder(true, true, true, true, true, true);
    
    // Make resume URL clickable
    const urlCell = sheet.getRange(newRowNumber, 7);
    urlCell.setFormula(`=HYPERLINK("${resumeUrl}", "View Resume")`);
    
    return newRowNumber;
    
  } catch (error) {
    console.error('Error saving to Google Sheet:', error);
    throw new Error('Failed to save to sheet: ' + error.toString());
  }
}

/**
 * Test function to verify the script setup
 * Run this function in Google Apps Script editor to test your configuration
 */
function testSetup() {
  try {
    console.log('Testing Google Apps Script setup...');
    
    // Check if IDs are updated
    if (CONFIG.RESUME_FOLDER_ID === 'YOUR_GOOGLE_DRIVE_FOLDER_ID_HERE') {
      throw new Error('Please update RESUME_FOLDER_ID in CONFIG');
    }
    
    if (CONFIG.SHEET_ID === 'YOUR_GOOGLE_SHEET_ID_HERE') {
      throw new Error('Please update SHEET_ID in CONFIG');
    }
    
    // Test Google Drive folder access
    const folder = DriveApp.getFolderById(CONFIG.RESUME_FOLDER_ID);
    console.log('✓ Google Drive folder accessible:', folder.getName());
    
    // Test Google Sheet access
    const spreadsheet = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    console.log('✓ Google Sheet accessible:', spreadsheet.getName());
    
    // Test sheet creation/access
    let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);
    if (!sheet) {
      console.log('ℹ Sheet does not exist, it will be created on first submission');
    } else {
      console.log('✓ Sheet accessible:', sheet.getName());
    }
    
    console.log('✅ Setup test completed successfully!');
    console.log('🚀 Your Google Apps Script is ready to handle job applications!');
    return 'Setup test passed - Ready for deployment!';
    
  } catch (error) {
    console.error('❌ Setup test failed:', error);
    console.log('📋 Setup checklist:');
    console.log('1. Create Google Drive folder and update RESUME_FOLDER_ID');
    console.log('2. Create Google Sheet and update SHEET_ID');
    console.log('3. Make sure you have edit permissions for both');
    return 'Setup test failed: ' + error.toString();
  }
}

/**
 * Function to handle GET requests (for testing)
 */
function doGet(e) {
  console.log('GET request received');
  return ContentService
    .createTextOutput(JSON.stringify({
      result: 'success',
      message: 'Job Application API is running',
      timestamp: new Date().toISOString(),
      testMode: true
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Simple test function to verify POST handling
 */
function testPost() {
  try {
    console.log('Testing POST functionality...');
    
    // Simulate a POST request with proper structure
    const mockEvent = {
      parameter: {
        name: 'Test User',
        email: 'test@example.com',
        mobile: '1234567890',
        experience: '5 years',
        resumeFileName: 'test.pdf',
        resumeData: 'JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCi9GMSA4IFRmCjEwMCA3MDAgVGQKKFRlc3QgUERGKSBUagpFVApzdHJlYW0KZW5kb2JqCnhyZWYKMCA2CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDAwMDU4IDAwMDAwIG4gCjAwMDAwMDAxMTUgMDAwMDAgbiAKMDAwMDAwMDI0NSAwMDAwMCBuIAowMDAwMDAwMzIyIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgNgovUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDE0CiUlRU9G', // base64 for a minimal PDF
        resumeType: 'application/pdf',
        resumeSize: '1000',
        timestamp: new Date().toISOString()
      },
      postData: {
        contents: 'name=Test+User&email=test%40example.com&mobile=1234567890&experience=5+years&resumeFileName=test.pdf&resumeData=JVBERi0xLjQK...&resumeType=application%2Fpdf&resumeSize=1000',
        type: 'application/x-www-form-urlencoded'
      }
    };
    
    console.log('Calling doPost with mock data...');
    const result = doPost(mockEvent);
    const content = result.getContent();
    console.log('Test POST result:', content);
    
    const parsedResult = JSON.parse(content);
    if (parsedResult.result === 'success') {
      console.log('✅ POST test successful!');
      console.log('Resume URL:', parsedResult.resumeUrl);
      console.log('Sheet row:', parsedResult.rowNumber);
    } else {
      console.log('❌ POST test failed:', parsedResult.error);
    }
    
    return content;
    
  } catch (error) {
    console.error('❌ Test POST failed:', error);
    return JSON.stringify({
      result: 'error',
      error: error.toString()
    });
  }
}