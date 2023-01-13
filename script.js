class Player {
  constructor() {
    this.reference = document.getElementById('player');
    this.step = 26;
    this.x = 0;
    this.y = 0;
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
  constructor(playerStep) {
    this.size = 12;
    this.maxLength = 500 - this.size;

    // Generate two different coefficients for x and y with values between 0 and 18 (inclusively)
    this.coefficientForX = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    this.coefficientForY = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);

    this.x = playerStep * this.coefficientForX;
    this.y = playerStep * this.coefficientForY;

    if (this.x > this.maxLength) {
      this.x = this.maxLength;
    }

    if (this.y > this.maxLength) {
      this.y = this.maxLength;
    }

    const coinDiv = document.createElement('div');
    coinDiv.style.backgroundColor = 'black';
    coinDiv.style.width = this.size + 'px';
    coinDiv.style.height = this.size + 'px';
    coinDiv.style.marginTop = this.y + 'px';
    coinDiv.style.marginLeft = this.x + 'px';
    document.getElementById('playzone').appendChild(coinDiv);
  }
}

const player = new Player();
const coin = new Coin(player.step);

document.body.addEventListener('keydown', function (ev) {
  if (ev.key === 'ArrowUp') {
    if (player.y > 0) {
      player.MoveUp();
    }
    console.log('y =', player.y, typeof player.y);
  } else if (ev.key === 'ArrowDown') {
    if (player.y < 468) {  // 468 = (sizeOfPlayzone - sizeOfPlayer)
      player.MoveDown();
    }
    console.log('y =', player.y, typeof player.y);
  } else if (ev.key === 'ArrowLeft') {
    if (player.x > 0) {
      player.MoveLeft();
    }
    console.log('x =', player.x, typeof player.x);
  } else if (ev.key === 'ArrowRight') {
    if (player.x < 468) {  // 468 = (sizeOfPlayzone - sizeOfPlayer)
      player.MoveRight();
    }
    console.log('x =', player.x, typeof player.x);
  }
});