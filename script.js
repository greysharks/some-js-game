class Playzone {
  constructor() {
    this.reference = document.getElementById('playzone');
    this.size = 640;

    this.reference.style.height = this.size + 'px';
    this.reference.style.width = this.size + 'px';
  }
}

class Player {
  constructor() {
    this.reference = document.getElementById('player');
    this.step = 32;
    this.size = 32;
    this.x = 0;
    this.y = 0;

    this.reference.style.height = this.size + 'px';
    this.reference.style.width = this.size + 'px';
  }
  MoveUp() {
    this.reference.style.marginTop = (this.y - this.step).toString() + 'px';
    this.y = Number.parseInt(this.reference.style.marginTop);
  }
  MoveDown() {
    this.reference.style.marginTop = (this.y + this.step).toString() + 'px';
    this.y = Number.parseInt(this.reference.style.marginTop);
  }
  MoveLeft() {
    this.reference.style.marginLeft = (this.x - this.step).toString() + 'px';
    this.x = Number.parseInt(this.reference.style.marginLeft);
  }
  MoveRight() {
    this.reference.style.marginLeft = (this.x + this.step).toString() + 'px';
    this.x = Number.parseInt(this.reference.style.marginLeft);
  }
}

class Coin {
  constructor(playzoneSize, playerSize) {
    this.size = 12;
    this.step = playerSize;
    this.maxLength = playzoneSize - this.size;

    // Generate two different coefficients for x and y with values between 0 and 20 (inclusively)
    this.coefficientForX = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + (Math.floor(Math.random() * 10) % 3);
    this.coefficientForY = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + (Math.floor(Math.random() * 10) % 3);

    this.x = this.step * this.coefficientForX;
    this.y = this.step * this.coefficientForY;

    if (this.x > this.maxLength) {
      this.x = this.maxLength;
    }

    if (this.y > this.maxLength) {
      this.y = this.maxLength;
    }

    this.reference = document.createElement('div');
    this.reference.style.backgroundColor = 'black';
    this.reference.style.width = this.size + 'px';
    this.reference.style.height = this.size + 'px';
    this.reference.style.marginTop = this.y + 'px';
    this.reference.style.marginLeft = this.x + 'px';
    document.getElementById('playzone').appendChild(this.reference);
  }
  ChangePosition() {
    // Generate two different coefficients for x and y with values between 0 and 20 (inclusively)
    this.coefficientForX = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + (Math.floor(Math.random() * 10) % 3);
    this.coefficientForY = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + (Math.floor(Math.random() * 10) % 3);

    this.x = this.step * this.coefficientForX;
    this.y = this.step * this.coefficientForY;

    if (this.x > this.maxLength) {
      this.x = this.maxLength;
    }

    if (this.y > this.maxLength) {
      this.y = this.maxLength;
    }
    
    this.reference.style.marginTop = this.y + 'px';
    this.reference.style.marginLeft = this.x + 'px';
  }
}

const playzone = new Playzone();
const player = new Player();
const coin = new Coin(playzone.size, player.size);

document.body.addEventListener('keydown', function (ev) {
  if (ev.key === 'ArrowUp') {
    if (player.y > 0) {
      player.MoveUp();
    }
    console.log('y =', player.y, typeof player.y);
  } else if (ev.key === 'ArrowDown') {
    if (player.y < (playzone.size - player.size)) {
      player.MoveDown();
    }
    console.log('y =', player.y, typeof player.y);
  } else if (ev.key === 'ArrowLeft') {
    if (player.x > 0) {
      player.MoveLeft();
    }
    console.log('x =', player.x, typeof player.x);
  } else if (ev.key === 'ArrowRight') {
    if (player.x < (playzone.size - player.size)) {
      player.MoveRight();
    }
    console.log('x =', player.x, typeof player.x);
  }
});