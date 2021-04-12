const subzero = {
  name: 'Subzero',
  hp: 40,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['ice', 'frost', 'blizzard', 'snow', 'cold'],
  attack: function () {
    console.log(subzero.name + 'Fight!..');
  }
};

const kitana = {
  name: 'Kitana',
  hp: 57,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['гунсэн', 'тэссэн', 'гумбай', 'бо', 'сай', 'разоранг'],
  attack: function () {
    console.log(this.name + 'Fight!..');
  }
};

function createPlayer(className, name, life, obj) {
  $player = document.createElement('div');
  $player.classList.add(`${className}`);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  $player.appendChild($progressbar);

  const $character = document.createElement('div');
  $character.classList.add('character');
  $player.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = `${life}%`;
  // $life.innerText = life;
  $progressbar.appendChild($life);

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = `${name}`;
  $progressbar.appendChild($name);

  const $img = document.createElement('img');
  $img.classList.add('img');
  $img.src = obj.img;
  $character.appendChild($img);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player);
};

// function createPlayer2() {
//   const $player = document.createElement('div');
//   $player.classList.add('player2');

//   const $progressbar = document.createElement('div');
//   $progressbar.classList.add('progressbar');
//   $player.appendChild($progressbar);

//   const $character = document.createElement('div');
//   $character.classList.add('character');
//   $player.appendChild($character);

//   const $life = document.createElement('div');
//   $life.classList.add('life');
//   $life.style.width = '100%';
//   // $life.innerText = life;
//   $progressbar.appendChild($life);

//   const $name = document.createElement('div');
//   $name.classList.add('name');
//   $name.innerText = 'Kitana';
//   $progressbar.appendChild($name);

//   const $img = document.createElement('img');
//   $img.classList.add('img');
//   $img.src = 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif';
//   $character.appendChild($img);

//   const $arenas = document.querySelector('.arenas');
//   $arenas.appendChild($player);
// };

// createPlayer1();
// createPlayer2();

// createPlayer1('player1', 'Subzero', 73);
// createPlayer2('player2', 'Kitana', 54);

// createPlayer1('player1', subzero);

// createPlayer('player1');
// createPlayer('player2');

createPlayer('player1', 'subzero', 50, subzero);
createPlayer('player2', 'kitana', 78, kitana);


