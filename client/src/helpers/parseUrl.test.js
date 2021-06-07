describe('Given a parseUrl function', () => {
  class MockUrl {
    constructor() {
      this.hostname = 'url.com';
    }
  }
  const scenarios = [
    { url: 'www.recipies.com', result: 'recipes.com' },
    { url: 'recipes.com', result: 'recipes.com' },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with value '${scenario.url}'`, () => {
      test(`Then it should return '${scenario.result}'`, () => {
        const result = new MockUrl(scenario.url);
        expect(result).toEqual(scenario.result);
      });
    });
  });
});
