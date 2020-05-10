import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const buttonPlay: HTMLElement = document.getElementById('playButton');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute: HTMLElement = document.getElementById('muteButton');
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/ServiceWorkers.js').catch((error) => {
    console.log(error.message);
  });
}
