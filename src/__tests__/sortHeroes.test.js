import sortHeroes from '../sortHeroes';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const sortedHeroes = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];
const smth = [{ health: 1 }, 'a', {}];

test('normal sort heroes with toBe', () => expect(sortHeroes(heroes)).toBe(sortedHeroes));
test('normal sort heroes with toEqual', () => expect(sortHeroes(heroes)).toEqual(sortedHeroes));
test('abnormal sort heroes', () => expect(sortHeroes()).toEqual([]));
test('abnormal sort heroes', () => expect(sortHeroes(smth)).toEqual(smth));
