class Player {
  constructor() {
    this.reference = document.getElementById('player');
    this.step = 26;
    this.x = 0;
    this.y = 0;
  }
  MoveDown() {
    this.reference.style.marginTop = (this.y + this.step).toString() + 'px';
    this.y = Number.parseInt(this.reference.style.marginTop);
  }
  MoveUp() {
    this.reference.style.marginTop = (this.y - this.step).toString() + 'px';
    this.y = Number.parseInt(this.reference.style.marginTop);
  }
  MoveRight() {
    this.reference.style.marginLeft = (this.x + this.step).toString() + 'px';
    this.x = Number.parseInt(this.reference.style.marginLeft);
  }
  MoveLeft() {
    this.reference.style.marginLeft = (this.x - this.step).toString() + 'px';
    this.x = Number.parseInt(this.reference.style.marginLeft);
  }
}

const player = new Player();

document.body.addEventListener('keydown', function (ev) {
  if (ev.key === 'ArrowUp') {
    player.MoveUp();
    console.log('y =', player.y, typeof player.y);
  } else if (ev.key === 'ArrowDown') {
    player.MoveDown();
    console.log('y =', player.y, typeof player.y);
  } else if (ev.key === 'ArrowLeft') {
    player.MoveLeft();
    console.log('x =', player.x, typeof player.x);
  } else if (ev.key === 'ArrowRight') {
    player.MoveRight();
    console.log('x =', player.x, typeof player.x);
  }
});