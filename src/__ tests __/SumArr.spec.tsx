import { describe, expect, it } from 'vitest';
import { sum } from './sum'; // adjust the path based on where your sum function is located

describe('Sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});