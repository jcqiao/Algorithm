import { balanceParenthesis } from "./index";

describe("balanceParenthesis", () => {
  test("should return true for balanced parentheses", () => {
    expect(balanceParenthesis("()")).toBe(true);
    expect(balanceParenthesis("[]")).toBe(true);
    expect(balanceParenthesis("{}")).toBe(true);
    expect(balanceParenthesis("({[]})")).toBe(true);
    expect(balanceParenthesis("({[()]})")).toBe(true);
  });

  test("should return false for unbalanced parentheses", () => {
    expect(balanceParenthesis("(")).toBe(false);
    expect(balanceParenthesis(")")).toBe(false);
    expect(balanceParenthesis("({[})")).toBe(false);
    expect(balanceParenthesis("({[)]}")).toBe(false);
    expect(balanceParenthesis("({[()]}")).toBe(false);
  });

  test("should throw an error for non-string input", () => {
    expect(() => balanceParenthesis(123)).toThrow(
      "Input must be a non-empty string"
    );
    expect(() => balanceParenthesis(null)).toThrow(
      "Input must be a non-empty string"
    );
    expect(() => balanceParenthesis(undefined)).toThrow(
      "Input must be a non-empty string"
    );
    expect(() => balanceParenthesis({})).toThrow(
      "Input must be a non-empty string"
    );
  });

  test("should throw an error for empty string input", () => {
    expect(() => balanceParenthesis("")).toThrow(
      "Input must be a non-empty string"
    );
  });
});
