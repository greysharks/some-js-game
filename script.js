class Player {
  constructor() {
    this.reference = document.getElementById('player');
    this.y = 0;
    this.x = 0;
  }
  MoveDown() {
    this.reference.style.marginTop = '20px';
    this.y = Number.parseInt(this.reference.style.marginTop);
  }
  MoveUp() {
    this.reference.style.marginTop = '0px';
    this.y = Number.parseInt(this.reference.style.marginTop);
  }
  MoveRight() {
    this.reference.style.marginLeft = '20px';
    this.x = Number.parseInt(this.reference.style.marginLeft);
  }
  MoveLeft() {
    this.reference.style.marginLeft = '0px';
    this.x = Number.parseInt(this.reference.style.marginLeft);
  }
}

const player = new Player();

document.body.addEventListener('keydown', function (ev) {
  if (ev.key === 'ArrowUp') {
    player.MoveUp();
    console.log('y =', player.y);
  } else if (ev.key === 'ArrowDown') {
    player.MoveDown();
    console.log('y =', player.y);
  } else if (ev.key === 'ArrowLeft') {
    player.MoveLeft();
    console.log('x =', player.x);
  } else if (ev.key === 'ArrowRight') {
    player.MoveRight();
    console.log('x =', player.x);
  }
});