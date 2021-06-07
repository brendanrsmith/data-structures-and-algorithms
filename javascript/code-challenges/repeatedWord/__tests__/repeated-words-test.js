'use strict';

const repeatedWord = require('../repeated-word');

require('../repeated-word');

describe('REPEATED WORDS', () => {

  it('should handle empty string', () => {
    expect(repeatedWord('')).toBe('NO REPEATED WORDS');
  });

  it('should handle string with no repeats', () => {
    expect(repeatedWord('this is a string')).toBe('NO REPEATED WORDS');
  });

  it('should handle string with one repeat', () => {
    expect(repeatedWord('this is a string with one repeat is')).toBe('is');
  });

  it('should handle string with multiple repeats', () => {
    expect(repeatedWord('this is a string with one repeat is a')).toBe('is');
  });

});
