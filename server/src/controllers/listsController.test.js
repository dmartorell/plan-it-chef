const {
  getAll,
  deleteById,
  createOne,
  updateById,
  getById,
} = require('./listsController')();

const List = require('../models/listModel');

jest.mock('../models/listModel');

describe('Invoking getAll function', () => {
  test('shoud return all lists', async () => {
    const res = {
      json: jest.fn(),
    };
    List.find.mockResolvedValueOnce([{ name: 'myList 20' }]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{ name: 'myList 20' }]);
  });
});

describe('Invoking updateById function', () => {
  test('Should call res.json with an object', async () => {
    const req = {
      params: { listId: null },
      body: {},
    };
    const res = {
      json: jest.fn(),
    };
    List.findByIdAndUpdate.mockResolvedValueOnce({ name: 'myList 25' });
    await updateById(req, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'myList 25' });
  });
});
describe('Invoking updateById function without params', () => {
  test('Should call status 404', async () => {
    const req = {
      params: { listId: null },
    };
    const res = {
      status: jest.fn(),
      send: jest.fn(),
    };
    List.findByIdAndUpdate.mockRejectedValueOnce(404);
    await updateById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
describe('Invoking deleteById function', () => {
  test('Should call status 200', async () => {
    const req = {
      params: { listId: '3' },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    List.findByIdAndDelete.mockResolvedValueOnce();
    await deleteById(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});

describe('Invoking deleteById function without params', () => {
  test('Should call status 404', async () => {
    const req = {
      params: { listId: null },
    };
    const res = {
      status: jest.fn(),
      send: jest.fn(),
    };
    List.findByIdAndDelete.mockRejectedValueOnce(404);
    await deleteById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('Invoking createOne function', () => {
  class MockList {
    constructor(name) {
      this.name = name;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }

  test('should call json', async () => {
    const req = {
      body: null,
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),

    };

    const newList = new MockList('myList 10');
    List.mockReturnValueOnce(newList);
    await createOne(req, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'myList 10' });
  });
});

describe('Invoking createOne function', () => {
  test('should call status 404', async () => {
    const req = {
      body: null,
    };
    const res = {
      status: jest.fn(),
      send: jest.fn(),
    };

    List.mockRejectedValueOnce({
      save: jest.fn().mockRejectedValueOnce(),
    });
    await createOne(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('invoking a getById function', () => {
  test('Should call res.json', async () => {
    const req = {
      params: { listId: '5' },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    List.findById.mockImplementationOnce(() => ({
      populate: jest.fn().mockImplementationOnce(() => ({})),
    }));
    await getById(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});

describe('invoking a getById function without req arguments', () => {
  test('should call status 404', async () => {
    const res = {
      status: jest.fn(),
    };
    const req = {
      params: {},
    };
    List.findById.mockRejectedValueOnce();
    await getById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
