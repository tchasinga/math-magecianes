import operate from './Operate'; // Update the path to the 'operate' function implementation

describe('operate function', () => {
  it('should add two numbers correctly', () => {
    expect(operate('10', '5', '+')).toBe('15');
  });

  it('should subtract two numbers correctly', () => {
    expect(operate('15', '7', '-')).toBe('8');
  });

  it('should multiply two numbers correctly', () => {
    expect(operate('6', '3', 'x')).toBe('18');
  });

  it('should divide two numbers correctly', () => {
    expect(operate('20', '4', '÷')).toBe('5');
  });

  it("should handle division by zero and return 'Can't divide by 0.'", () => {
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should find modulo of two numbers correctly', () => {
    expect(operate('20', '7', '%')).toBe('6');
  });

  it("should handle modulo by zero and return 'Can't find modulo as can't divide by 0.'", () => {
    expect(operate('15', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate('10', '5', '$')).toThrow("Unknown operation '$'");
  });
});
