document.body.addEventListener('keydown', function(ev) {
  if (ev.key === 'ArrowUp') {
    console.log('Up');
  } else if (ev.key === 'ArrowDown') {
    console.log('Down');
  } else if (ev.key === 'ArrowLeft') {
    console.log('Left');
  } else if (ev.key === 'ArrowRight') {
    console.log('Right');
  }
});