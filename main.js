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

function createPlayer1() {
  const $player1 = document.createElement('div');
  $player1.classList.add('player1');

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  $player1.appendChild($progressbar);

  const $character = document.createElement('div');
  $character.classList.add('character');
  $player1.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = '100%';
  // $life.innerText = life;
  $progressbar.appendChild($life);

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = 'Scorpion';
  $progressbar.appendChild($name);

  const $img = document.createElement('img');
  $img.classList.add('img');
  $img.src = 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif';
  $character.appendChild($img);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player1);
};

function createPlayer2() {
  const $player2 = document.createElement('div');
  $player2.classList.add('player2');

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  $player2.appendChild($progressbar);

  const $character = document.createElement('div');
  $character.classList.add('character');
  $player2.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = '100%';
  // $life.innerText = life;
  $progressbar.appendChild($life);

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = 'Kitana';
  $progressbar.appendChild($name);

  const $img = document.createElement('img');
  $img.classList.add('img');
  $img.src = 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif';
  $character.appendChild($img);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player2);
};

// createPlayer1();
// createPlayer2();

// createPlayer1('player1', 'Subzero', 73);
// createPlayer2('player2', 'Kitana', 54);

createPlayer1('player1', subzero);

