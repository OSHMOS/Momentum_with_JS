// Objects
const player = {
  name: 'osh',
  points: 10,
  fat: true,
};
console.log(player);

// Get property in Objects
console.log(player.name);
console.log(player['name']);
// Player is constant but property is not constant
player.fat = false;
console.log(player);

// Add property in Objects
player.lastName = 'mos';
console.log(player);

player.points += 15;
console.log(player.points);
