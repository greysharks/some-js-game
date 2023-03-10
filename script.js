class Playzone {
  constructor() {
    this.size = 640;
    this.player = new Player(this.size);
    this.coin = new Coin(this.size, this.player.size);
    
    this.reference = document.getElementById('playzone');
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
  constructor(playzoneSize) {
    this.size = 32;
    this.step = 32;
    this.x = 0;
    this.y = 0;
    this.maxCoordinate = playzoneSize - this.size;
    
    this.reference = document.getElementById('player');
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

class Random {
  constructor() {}
  Random() {
    // Generate random value between 0 and 20 (inclusively)
    return Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + (Math.floor(Math.random() * 10) % 3);
  }
}

class Coin {
  constructor(playzoneSize, playerSize) {
    this.size = 12;
    this.step = playerSize;
    this.maxCoordinate = playzoneSize - this.size;
    this.coefficient = new Random();

    this.x = this.step * this.coefficient.Random();
    this.y = this.step * this.coefficient.Random();

    this.reference = document.createElement('div');
    this.reference.style.backgroundColor = 'black';
    this.reference.style.width = this.size + 'px';
    this.reference.style.height = this.size + 'px';
    this.reference.style.marginTop = this.y + 'px';
    this.reference.style.marginLeft = this.x + 'px';
    document.getElementById('playzone').appendChild(this.reference);
  }
  ChangePosition() {
    this.x = this.step * this.coefficient.Random();
    this.y = this.step * this.coefficient.Random();

    this.reference.style.marginTop = this.y + 'px';
    this.reference.style.marginLeft = this.x + 'px';
  }
}

const playzone = new Playzone();

document.body.addEventListener('keydown', function (ev) {
  if (ev.key === 'ArrowUp') {
    const timer = setInterval(() => {
      if (playzone.player.y > 0) {
        playzone.player.MoveUp();
        playzone.IsCoinCollected();
      } else {
        clearInterval(timer);
      }
    }, 500);
    console.log('y =', playzone.player.y, typeof playzone.player.y);
  } else if (ev.key === 'ArrowDown') {
    const timer = setInterval(() => {
      if (playzone.player.y < playzone.player.maxCoordinate) {
        playzone.player.MoveDown();
        playzone.IsCoinCollected();
      } else {
        clearInterval(timer);
      }
    }, 500);
    console.log('y =', playzone.player.y, typeof playzone.player.y);
  } else if (ev.key === 'ArrowLeft') {
    const timer = setInterval(() => {
      if (playzone.player.x > 0) {
        playzone.player.MoveLeft();
        playzone.IsCoinCollected();
      } else {
        clearInterval(timer);
      }
    }, 500);
    console.log('x =', playzone.player.x, typeof playzone.player.x);
  } else if (ev.key === 'ArrowRight') {
    const timer = setInterval(() => {
      if (playzone.player.x < playzone.player.maxCoordinate) {
        playzone.player.MoveRight();
        playzone.IsCoinCollected();
      } else {
        clearInterval(timer);
      }
    }, 500);
    console.log('x =', playzone.player.x, typeof playzone.player.x);
  }
});