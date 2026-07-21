const add = require('./sum');

test('adds 6+3 to equal 9', () => {
    expect(add(6,3)).toBe(9);
});