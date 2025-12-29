function doPost(e) {
  try {
    console.log('Received POST request for business inquiry');
    console.log('Event object:', e);
    console.log('Parameters:', e.parameter);
    console.log('Post data:', e.postData);
    
    // Extract data from the request
    const data = e.parameter;
    
    if (!data || Object.keys(data).length === 0) {
      throw new Error('No parameters received in POST request');
    }
    
    console.log('Business inquiry data extracted:', {
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      organization: data.organization,
      messageLength: data.message ? data.message.length : 0
    });
    
    // Save to Google Sheet
    console.log('Saving business inquiry to Google Sheet...');
    const rowNumber = storeInSheet(data);
    console.log('Data saved to sheet, row number:', rowNumber);
    
    // Send email notification
    console.log('Sending email notification...');
    sendEmailNotification(data);
    console.log('Email notification sent');
    
    // Return success response with CORS headers
    const response = ContentService
      .createTextOutput(JSON.stringify({
        result: "success",
        message: "Business inquiry submitted successfully",
        rowNumber: rowNumber
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
    // Add CORS headers
    response.setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    
    return response;
    
  } catch (error) {
    console.error('Error processing business inquiry:', error);
    
    const errorResponse = ContentService
      .createTextOutput(JSON.stringify({
        result: "error",
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
    // Add CORS headers even for errors
    errorResponse.setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    
    return errorResponse;
  }
}

function doGet(e) {
  const response = ContentService
    .createTextOutput(JSON.stringify({
      result: "success",
      message: "Business Inquiry API is running",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  
  // Add CORS headers
  response.setHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  
  return response;
}

function doOptions(e) {
  // Handle preflight CORS requests
  const response = ContentService
    .createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON);
  
  response.setHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400'
  });
  
  return response;
}

function storeInSheet(data) {
  // Using your existing Google Sheet ID
  const SHEET_ID = '1-ZEoWvP-mAHmKdSbOpJuDqAGoHayPIPj8gItAPRkGf0';
  const SHEET_NAME = 'Business Inquiries';
  
  try {
    console.log('storeInSheet called with data:', data);
    console.log('Data type:', typeof data);
    console.log('Data keys:', Object.keys(data || {}));
    
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      console.log('Creating new sheet:', SHEET_NAME);
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // Add headers for business inquiry
      sheet.getRange(1, 1, 1, 7).setValues([
        ['Timestamp', 'Name', 'Email', 'Mobile', 'Organization', 'Message', 'Status']
      ]);
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    }
    
    // Add the new data
    const rowData = [
      new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
      data.name || 'N/A',
      data.email || 'N/A',
      data.mobile || 'N/A',
      data.organization || 'N/A',
      data.message || 'N/A',
      'New'
    ];
    
    console.log('Adding row data:', rowData);
    const range = sheet.appendRow(rowData);
    const rowNumber = sheet.getLastRow();
    
    console.log('Data stored successfully in sheet, row:', rowNumber);
    return rowNumber;
    
  } catch (error) {
    console.error('Error storing data in sheet:', error);
    throw error;
  }
}

function sendEmailNotification(data) {
  // Using your email address
  const RECIPIENT_EMAIL = '1049viveksubramaniang@gmail.com';
  const CC_EMAIL = ''; 
  
  try {
    const subject = `New Business Inquiry from ${data.name} - ${data.organization}`;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #151414; border-bottom: 2px solid #ED1C24; padding-bottom: 10px;">
          New Business Inquiry Submission
        </h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 150px;">Timestamp:</td>
              <td style="padding: 8px 0; color: #151414;">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
              <td style="padding: 8px 0; color: #151414;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #151414;">
                <a href="mailto:${data.email}" style="color: #ED1C24; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Mobile:</td>
              <td style="padding: 8px 0; color: #151414;">
                <a href="tel:${data.mobile}" style="color: #ED1C24; text-decoration: none;">${data.mobile}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Organization:</td>
              <td style="padding: 8px 0; color: #151414;">${data.organization}</td>
            </tr>
          </table>
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #151414; margin-bottom: 10px;">Message:</h3>
          <div style="background-color: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 4px; white-space: pre-wrap;">
            ${data.message || 'No message provided'}
          </div>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This email was automatically generated from the business inquiry form on the Munjal Auto website.</p>
          <p>Please respond to the customer directly at: <a href="mailto:${data.email}" style="color: #ED1C24;">${data.email}</a></p>
        </div>
      </div>
    `;
    
    const textBody = `
New Business Inquiry Submission

Timestamp: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
Name: ${data.name}
Email: ${data.email}
Mobile: ${data.mobile}
Organization: ${data.organization}

Message:
${data.message || 'No message provided'}

Please respond to the customer directly at: ${data.email}
    `;
    
    // Send email
    GmailApp.sendEmail(
      RECIPIENT_EMAIL,
      subject,
      textBody,
      {
        htmlBody: htmlBody,
        cc: CC_EMAIL,
        replyTo: data.email
      }
    );
    
    console.log('Email notification sent successfully');
  } catch (error) {
    console.error('Error sending email notification:', error);
    throw error;
  }
}

// Function to test the script
function testScript() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    mobile: '9876543210',
    organization: 'Test Company',
    message: 'This is a test business inquiry message.'
  };
  
  try {
    console.log('Testing with data:', testData);
    storeInSheet(testData);
    sendEmailNotification(testData);
    console.log('Test completed successfully');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Function to test storeInSheet directly
function testStoreInSheet() {
  const testData = {
    name: 'Test Store User',
    email: 'teststore@example.com',
    mobile: '9876543210',
    organization: 'Test Store Company',
    message: 'This is a test for storeInSheet function.'
  };
  
  try {
    console.log('Testing storeInSheet with data:', testData);
    storeInSheet(testData);
    console.log('storeInSheet test completed successfully');
  } catch (error) {
    console.error('storeInSheet test failed:', error);
  }
}

// Function to test sendEmailNotification directly
function testSendEmail() {
  const testData = {
    name: 'Test Email User',
    email: 'testemail@example.com',
    mobile: '9876543210',
    organization: 'Test Email Company',
    message: 'This is a test for sendEmailNotification function.'
  };
  
  try {
    console.log('Testing sendEmailNotification with data:', testData);
    sendEmailNotification(testData);
    console.log('sendEmailNotification test completed successfully');
  } catch (error) {
    console.error('sendEmailNotification test failed:', error);
  }
}

// Function to test doPost with form data
function testDoPost() {
  const mockEvent = {
    parameter: {
      name: 'Vivek G',
      email: '1049viveksubramaniang@gmail.com',
      mobile: '08870070226',
      organization: 'Victopia Labs',
      message: 'This is a test message from the form'
    }
  };
  
  try {
    console.log('Testing doPost with mock event:', mockEvent);
    const result = doPost(mockEvent);
    const content = result.getContent();
    console.log('doPost result:', content);
    return content;
  } catch (error) {
    console.error('doPost test failed:', error);
    return JSON.stringify({
      status: 'error',
      message: error.toString()
    });
  }
}