// Visitors start playback. Native video controls and details work without JS.
const film = document.querySelector('#product-film');
const status = document.querySelector('.video-status');
if (film && status) {
  const showStatus = (message) => {
    status.textContent = message;
    status.hidden = !message;
  };
  film.addEventListener('waiting', () => showStatus('Loading video… You can also open it directly below.'));
  film.addEventListener('stalled', () => {
    if (!film.paused) showStatus('The video is taking a little longer to load. Try the direct link below.');
  });
  film.addEventListener('playing', () => showStatus(''));
  film.addEventListener('pause', () => showStatus(''));
  film.addEventListener('ended', () => showStatus(''));
  const showError = () => showStatus('This video could not load. Try opening it directly below.');
  film.addEventListener('error', showError);
  film.querySelector('source')?.addEventListener('error', showError);
}
