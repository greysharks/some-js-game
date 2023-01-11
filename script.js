class Player {
  constructor() {
    this.reference = document.getElementById('player');
  }
  MoveDown() {
    this.reference.style.marginTop = '20px';
  }
  MoveUp() {
    this.reference.style.marginTop = '0px';
  }
  MoveRight() {
    this.reference.style.marginLeft = '20px';
  }
  MoveLeft() {
    this.reference.style.marginLeft = '0px';
  }
}

const player = new Player();

document.body.addEventListener('keydown', function (ev) {
  if (ev.key === 'ArrowUp') {
    player.MoveUp();
    console.log('Up');
  } else if (ev.key === 'ArrowDown') {
    player.MoveDown();
    console.log('Down');
  } else if (ev.key === 'ArrowLeft') {
    player.MoveLeft();
    console.log('Left');
  } else if (ev.key === 'ArrowRight') {
    player.MoveRight();
    console.log('Right');
  }
});