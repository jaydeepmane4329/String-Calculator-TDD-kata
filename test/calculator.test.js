const { add } = require('../src/calculator');

test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
});

test('should return the number itself when only one number is present', () => {
    expect(add('1')).toBe(1);
  });
  