document.addEventListener('play', (event) => {
  if (!(event.target instanceof HTMLAudioElement)) return;
  for (const audio of document.querySelectorAll('audio')) {
    if (audio !== event.target && !audio.paused) audio.pause();
  }
  document.querySelectorAll('.audio-item.is-playing').forEach((item) => {
    item.classList.remove('is-playing');
  });
  event.target.closest('.audio-item')?.classList.add('is-playing');
}, true);

document.addEventListener('pause', (event) => {
  if (event.target instanceof HTMLAudioElement) {
    event.target.closest('.audio-item')?.classList.remove('is-playing');
  }
}, true);

document.addEventListener('ended', (event) => {
  if (event.target instanceof HTMLAudioElement) {
    event.target.closest('.audio-item')?.classList.remove('is-playing');
  }
}, true);

const sectionLinks = new Map(
  [...document.querySelectorAll('.site-header nav a')].map((link) => [link.hash.slice(1), link])
);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of sectionLinks.values()) link.classList.remove('active');
      sectionLinks.get(entry.target.id)?.classList.add('active');
    }
  }, { rootMargin: '-25% 0px -65% 0px' });
  for (const id of sectionLinks.keys()) {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  }
}
