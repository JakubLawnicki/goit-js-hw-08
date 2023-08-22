import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const _ = require('lodash');

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', _.throttle(onPlay, 1000));

function onPlay() {
  player
    .getCurrentTime()
    .then(() =>
      localStorage.setItem(
        'videoplayer-current-time',
        `${player.getCurrentTime()}`
      )
    );

  // console.log(localStorage.getItem('videoplayer-current-time'));
}

window.addEventListener('load', () =>
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
);
