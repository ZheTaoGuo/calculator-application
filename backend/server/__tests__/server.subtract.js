const { subtract } = require('../controllers/subtract');

it ('should subtract two numbers', () => {
    const request = {
        body: {
            num1: 2,
            num2: 1
        }
    }
    const response = {
        set: jest.fn((x) => x),
        status: jest.fn((x) => x),
        send: jest.fn((x) => x)
    }
    subtract(request, response)
    expect(response.send).toHaveBeenCalledWith({success: 'True', difference: 1})
    expect(response.status).toHaveBeenCalledWith(200)
})