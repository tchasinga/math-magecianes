import calculate from './Calculate'; // Adjust the import path based on your project structure

describe('calculate function', () => {
  it('should reset the calculator state when AC button is pressed', () => {
    const initialState = {
      total: '100',
      next: '50',
      operation: '+',
    };

    const newState = calculate(initialState, 'AC');

    expect(newState).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should handle number input correctly', () => {
    const initialState = {
      total: '100',
      next: '50',
      operation: '+',
    };

    // When a number button is pressed
    let newState = calculate(initialState, '1');
    expect(newState).toEqual({
      total: '100',
      next: '501',
      operation: '+',
    });

    // When a zero button is pressed
    newState = calculate(initialState, '0');
    expect(newState).toEqual({
      total: '100',
      next: '500',
      operation: '+',
    });
  });

  it('should handle decimal point input correctly', () => {
    const initialState = {
      total: '100',
      next: '50',
      operation: '+',
    };

    // When the decimal point button is pressed
    let newState = calculate(initialState, '.');
    expect(newState).toEqual({
      total: '100',
      next: '50.',
      operation: '+',
    });

    // When the decimal point button is pressed again (should not add a second decimal point)
    newState = calculate(newState, '.');
    expect(newState).toEqual({
      total: '100',
      next: '50.',
      operation: '+',
    });
  });

  it('should handle the equal (=) button correctly', () => {
    const initialState = {
      total: '100',
      next: '50',
      operation: '+',
    };

    // When the equal button is pressed
    const newState = calculate(initialState, '=');
    expect(newState).toEqual({
      total: '150',
      next: null,
      operation: null,
    });
  });

  it('should handle the +/- button correctly', () => {
    const initialState = {
      total: '100',
      next: '50',
      operation: '+',
    };

    // When the +/- button is pressed
    const newState = calculate(initialState, '+/-');
    expect(newState).toEqual({
      total: '100',
      next: '-50',
      operation: '+',
    });
  });
});
