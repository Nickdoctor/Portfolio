const request = require('supertest');
const sgMail = require('@sendgrid/mail');

// Replace with the deployed API URL
const apiUrl = 'https://portfolio-lac-delta-12.vercel.app/api/contactSend'; 

jest.mock('@sendgrid/mail'); // Mock SendGrid

describe('POST /api/contactSend', () => {

  it('should send an email and return 200', async () => {
    const mockSend = jest.fn().mockResolvedValue(true); // Mock SendGrid success response
    sgMail.send = mockSend;

    // Test the deployed version by hitting the Vercel endpoint
    const response = await request(apiUrl) // Use the deployed URL for the API endpoint
      .post('/')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello, I need help!',
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Email sent successfully');
    expect(mockSend).toHaveBeenCalledTimes(1); // Ensure SendGrid was called once
  });

  it('should return 500 when SendGrid fails', async () => {
    const mockSend = jest.fn().mockRejectedValue(new Error('SendGrid error'));
    sgMail.send = mockSend;

    const response = await request(apiUrl) // Use the deployed URL for the API endpoint
      .post('/')
      .send({
        name: 'Jane Doe',
        email: 'jane@example.com',
        message: 'Test message',
      });

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Failed to send email');
  });

  it('should return 405 if method is not POST', async () => {
    const response = await request(apiUrl) // Use the deployed URL for the API endpoint
      .get('/'); // GET request to test the 405 status
    expect(response.status).toBe(405); // Method Not Allowed
  });
});
