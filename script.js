class Playzone {
  constructor() {
    this.reference = document.getElementById('playzone');
    this.size = 640;
    this.player = new Player();
    this.coin = new Coin(this.size, this.player.size);

    this.reference.style.height = this.size + 'px';
    this.reference.style.width = this.size + 'px';
  }
  IsCoinCollected() {
    if ((this.player.x === this.coin.x) && (this.player.y === this.coin.y)) {
      this.coin.ChangePosition();
    }
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

document.body.addEventListener('keydown', function (ev) {
  if (ev.key === 'ArrowUp') {
    if (playzone.player.y > 0) {
      playzone.player.MoveUp();
      playzone.IsCoinCollected();
    }
    console.log('y =', playzone.player.y, typeof playzone.player.y);
  } else if (ev.key === 'ArrowDown') {
    if (playzone.player.y < (playzone.size - playzone.player.size)) {
      playzone.player.MoveDown();
      playzone.IsCoinCollected();
    }
    console.log('y =', playzone.player.y, typeof playzone.player.y);
  } else if (ev.key === 'ArrowLeft') {
    if (playzone.player.x > 0) {
      playzone.player.MoveLeft();
      playzone.IsCoinCollected();
    }
    console.log('x =', player.x, typeof player.x);
  } else if (ev.key === 'ArrowRight') {
    if (playzone.player.x < (playzone.size - playzone.player.size)) {
      playzone.player.MoveRight();
      playzone.IsCoinCollected();
    }
    console.log('x =', playzone.player.x, typeof playzone.player.x);
  }
});