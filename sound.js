const SOUND_PATH = 'sound/';
const SOUND_VOLUME = 0.25;

const SOUND_FILES = [
  'ui_confirm',
  'ui_dropdown_select'
];

const sounds = new Map();

function preload() {
  SOUND_FILES.forEach((name) => {
    const audio = new Audio(`${SOUND_PATH}${name}.ogg`);
    audio.preload = 'auto';
    sounds.set(name, audio);
  });
}

function init() {
  document.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
      playSound('ui_confirm');
      return;
    }

    if (target.closest('.stratum-entry') ||
      target.closest('.gate-entry') ||
      target.closest('.clickable-arrow')) {
	  playSound('ui_dropdown_select');
      return;
    }
  });
}

function play_sound(name) {
  const baseAudio = sounds.get(name);
  if (!baseAudio) return;

  // allows for overlap
  const audio = baseAudio.cloneNode();
  
  audio.volume = SOUND_VOLUME;
  audio.play().catch(() => {});
}

preload();
init();
