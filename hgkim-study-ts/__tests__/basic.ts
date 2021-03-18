describe('basic test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when value is 1', () => {
    it('value equals 1', () => {
      const value = 1;
      expect(value).toBe(1);
    });
  });

});
