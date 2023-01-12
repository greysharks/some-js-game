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

const player = new Player();

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