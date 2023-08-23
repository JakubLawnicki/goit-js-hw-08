import Player from '@vimeo/player';
const video = document.querySelector('#vimeo-player');
const player = new Player(video);
const throttle = require('lodash.throttle');

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(function onPlay(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);

player.on('ended', () => {
  localStorage.setItem('videoplayer-current-time', 0);
});

window.addEventListener('load', () =>
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
);
