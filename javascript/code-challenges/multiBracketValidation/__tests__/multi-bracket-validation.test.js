'use strict';

const multiBracketValidation = require('../multi-bracket-validation.js');

describe('MULTI-BRACKET-VALIDATION', () => {

  it('Should detect matching braces', () => {
    expect(multiBracketValidation('{}')).toBe(true);
    expect(multiBracketValidation('[]')).toBe(true);
    expect(multiBracketValidation('()')).toBe(true);
  });

  it('Should detect multiple matching braces', () => {
    expect(multiBracketValidation('{}(){}')).toBe(true);
    expect(multiBracketValidation('(){}[[]]')).toBe(true);
  });

  it('Should detect multiple matching braces with extra characters', () => {
    expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBe(true);
  });

  it('Should detect mis-matching braces', () => {
    expect(multiBracketValidation('[({}]')).toBe(false);
    expect(multiBracketValidation('(](')).toBe(false);
    expect(multiBracketValidation('{(})')).toBe(false);
  });

  it('Should detect edge cases', () => {
    expect(multiBracketValidation('{')).toBe(false);
    expect(multiBracketValidation(')')).toBe(false);
    expect(multiBracketValidation('[}')).toBe(false);
  });
});
