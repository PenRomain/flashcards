const readlineSync = require('readline-sync');

readlineSync.question('some text');

const startUp = [];
let first;

do {
  console.log('\n', startUp);

  first = readlineSync.question('do something\n> ');

  startUp.push(first);

  console.log('\nplayer write:', startUp);
} while (first);
