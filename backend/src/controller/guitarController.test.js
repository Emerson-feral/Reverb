const { getAll } = require('./guitarControllers')();
const Guitar = require('../model/guitarModel');

jest.mock('../model/guitarModel');

describe('getAll', () => {
  test('Should get all guitars', async () => {
    // Arrange
    const res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };

    Guitar.find.mockResolvedValueOnce([{ name: 'Strato' }]);

    // Act
    await getAll(null, res);

    // Assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Strato' }]);
  });
});
