import request from 'supertest';
import app from '../app';

describe('POST /messages', () => {

    // Test for successfully sending a message
    it('should return 200 when a valid message is sent', async () => {
        const response = await request(app).post('/messages').send({
            message: 'Hello, world!'
        });

        expect(response.status).toBe(200);
    });

    // Test for missing message in the body
    it('should return 400 when message is missing', async () => {
        const response = await request(app).post('/messages').send({});

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('"message" is required');
    });

    // Test for empty message string
    it('should return 400 when message is an empty string', async () => {
        const response = await request(app).post('/messages').send({
            message: ''
        });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('"message" cannot be an empty string');
    });

    // Test for non-string message value
    it('should return 400 when message is not a string', async () => {
        const response = await request(app).post('/messages').send({
            message: 12345
        });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('"message" should be a type of string');
    });

});

