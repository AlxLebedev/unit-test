import isAlive from '../isAlive';

test.each([
  [{ name: 'Steve', health: 90 }, 'healthy'],
  [{ name: 'Steve', health: 51 }, 'healthy'],
  [{ name: 'John', health: 50 }, 'wounded'],
  [{ name: 'John', health: 35 }, 'wounded'],
  [{ name: 'John', health: 15 }, 'wounded'],
  [{ name: 'Alan', health: 12 }, 'critical'],
])(
  ('should show health'),
  (character, expected) => {
    const result = isAlive(character);

    expect(result).toBe(expected);
  },
);
