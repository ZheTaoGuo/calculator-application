const { addition } = require('../controllers/addition');

it ('should add two numbers', () => {
    const request = {
        body: {
            num1: 1,
            num2: 2
        }
    }
    const response = {
        set: jest.fn((x) => x),
        status: jest.fn((x) => x),
        send: jest.fn((x) => x)
    }
    addition(request, response)
    expect(response.send).toHaveBeenCalledWith({success: 'True', total: 3})
    expect(response.status).toHaveBeenCalledWith(200)
})