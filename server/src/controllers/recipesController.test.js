// const jest = require('jest');

const {
  getAll,
  deleteById,
  createOne,
  getById,
} = require('./recipesController')();

const Recipe = require('../models/recipeModel');

jest.mock('../models/recipeModel');

describe('Invoking getAll function', () => {
  test('shoud return all recipes', async () => {
    const res = {
      json: jest.fn(),
    };
    Recipe.find.mockResolvedValueOnce([{ title: 'myRecipe' }]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{ title: 'myRecipe' }]);
  });
});

describe('Invoking deleteById function', () => {
  test('Should call status 200', async () => {
    const req = {
      params: { recipeId: '3' },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    Recipe.findByIdAndDelete.mockResolvedValueOnce();
    await deleteById(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});

describe('Invoking deleteById function without params', () => {
  test('Should call status 404', async () => {
    const req = {
      params: { recipeId: null },
    };
    const res = {
      status: jest.fn(),
      send: jest.fn(),
    };
    Recipe.findByIdAndDelete.mockRejectedValueOnce(404);
    await deleteById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('Invoking createOne function', () => {
  class MockRecipe {
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

    const newList = new MockRecipe('myRecipe');
    Recipe.mockReturnValueOnce(newList);
    await createOne(req, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'myRecipe' });
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

    Recipe.mockRejectedValueOnce({
      save: jest.fn().mockRejectedValueOnce(),
    });
    await createOne(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('invoking a getById function', () => {
  test('Should call res.json', async () => {
    const req = {
      params: { recipeId: '5' },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    Recipe.findById.mockImplementationOnce(() => ({}));
    await getById(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});

describe('invoking a getById function without req arguments', () => {
  test('should call status 404', async () => {
    const req = {
      params: { recipeId: null },
    };
    const res = {
      status: jest.fn(),
    };
    Recipe.findById.mockRejectedValueOnce('error');
    await getById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
