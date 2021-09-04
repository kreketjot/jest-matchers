export default (heroes = []) => {
  const sorted = [...heroes];

  sorted.sort((hero1, hero2) => hero2.health - hero1.health);
  return sorted;
};
