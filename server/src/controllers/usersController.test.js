const {
  updateById,
  getById,
} = require('./usersController')();

const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('Invoking updateById function', () => {
  test('Should call res.json with an object', async () => {
    const req = {
      params: { userId: null },
      body: {},
    };
    const res = {
      json: jest.fn(),
    };
    User.findByIdAndUpdate.mockResolvedValueOnce({ name: 'user 25' });
    await updateById(req, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'user 25' });
  });
});
describe('Invoking updateById function without params', () => {
  test('Should call status 404', async () => {
    const req = {
      params: { userId: null },
    };
    const res = {
      status: jest.fn(),
      send: jest.fn(),
    };
    User.findByIdAndUpdate.mockRejectedValueOnce(404);
    await updateById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('invoking a getById function', () => {
  test('Should call res.json', async () => {
    const req = {
      params: { userId: '5' },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    User.findById.mockImplementationOnce(() => ({
      populate: jest.fn().mockImplementationOnce(() => ({})),
    }));
    await getById(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});

describe('invoking a getById function without req arguments', () => {
  test('should call status 404', async () => {
    const req = {
      params: { userId: null },
    };
    const res = {
      status: jest.fn(),
    };
    User.findById.mockRejectedValueOnce('error');
    await getById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
