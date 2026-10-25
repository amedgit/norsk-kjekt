/* Audio del curso.
   1) Si la frase está en el manifiesto, reproduce el MP3 pregrabado
      (assets/js/audio-manifest.js → assets/audio/*.mp3). Suena igual en
      cualquier dispositivo, sin depender de las voces instaladas.
   2) Si no está, cae a speechSynthesis (nb-NO) cuando el navegador tiene voces.

   La velocidad (0.7×–1.3×) se aplica a la reproducción y se recuerda en
   localStorage. Expone window.TTS = { speak, stop, setRate, getRate,
   supported, hasAudio } */

(function () {
  'use strict';

  var RATE_KEY = 'norsk-kjekt-rate';
  var MIN_RATE = 0.5;
  var MAX_RATE = 1.6;

  var map = window.AUDIO_MANIFEST || {};
  var hasFiles = Object.keys(map).length > 0;
  var synth = typeof window !== 'undefined' && 'speechSynthesis' in window;
  var voice = null;
  var current = null;
  var warned = false;

  function clamp(v) { return Math.min(MAX_RATE, Math.max(MIN_RATE, v)); }

  var rate = (function () {
    try {
      var v = parseFloat(window.localStorage.getItem(RATE_KEY));
      return isFinite(v) && v >= MIN_RATE && v <= MAX_RATE ? v : 1;
    } catch (e) {
      return 1;
    }
  })();

  /* Elemento <audio> en el DOM: más fiable en iOS y fácil de inspeccionar. */
  var audio = null;
  if (typeof Audio !== 'undefined') {
    audio = new Audio();
    audio.id = 'nk-audio';
    audio.preload = 'auto';
    try { document.body.appendChild(audio); } catch (e) { /* sin body */ }
    audio.defaultPlaybackRate = rate;
    audio.playbackRate = rate;
  }

  /* Debe coincidir con tools/generate-audio.mjs */
  function norm(s) {
    return String(s).replace(/[«»]/g, '').replace(/\s+/g, ' ').trim();
  }

  function pickVoice() {
    if (!synth) return;
    var list = window.speechSynthesis.getVoices() || [];
    if (!list.length) return;
    voice =
      list.find(function (v) { return /^nb[-_]NO$/i.test(v.lang); }) ||
      list.find(function (v) { return /^nn[-_]NO$/i.test(v.lang); }) ||
      list.find(function (v) { return /^no([-_]|$)/i.test(v.lang); }) ||
      list.find(function (v) { return /^da[-_]DK$/i.test(v.lang); }) ||
      null;
  }

  if (synth) {
    pickVoice();
    window.speechSynthesis.addEventListener('voiceschanged', pickVoice);
  }

  function markPlaying(text) {
    var btns = document.querySelectorAll('.say');
    for (var i = 0; i < btns.length; i++) btns[i].classList.remove('playing');
    if (!text) return;
    var all = document.querySelectorAll('[data-say]');
    for (var j = 0; j < all.length; j++) {
      if (all[j].getAttribute('data-say') === text) all[j].classList.add('playing');
    }
  }

  function clearPlaying() {
    current = null;
    markPlaying(null);
  }

  function speakSynth(text) {
    if (!synth) return;
    if (!voice) pickVoice();
    if (!window.speechSynthesis.getVoices().length) {
      if (!warned) {
        warned = true;
        console.info('TTS: este navegador no tiene voces instaladas y la frase no está en el manifiesto de audio.');
      }
      return;
    }
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      if (voice) u.voice = voice;
      u.lang = (voice && voice.lang) || 'nb-NO';
      u.rate = Math.min(2, 0.92 * rate);
      u.onstart = function () { current = text; markPlaying(text); };
      u.onend = clearPlaying;
      u.onerror = clearPlaying;
      window.speechSynthesis.speak(u);
    } catch (e) {
      clearPlaying();
    }
  }

  function playFile(file, text) {
    if (!audio) { speakSynth(text); return; }
    try {
      audio.pause();
      audio.currentTime = 0;
      audio.src = 'assets/audio/' + file;
      /* Cambiar de src resetea playbackRate: se reaplica después. */
      audio.defaultPlaybackRate = rate;
      audio.playbackRate = rate;
      audio.onended = clearPlaying;
      audio.onerror = function () {
        clearPlaying();
        speakSynth(text);
      };
      current = text;
      var p = audio.play();
      if (p && typeof p.catch === 'function') {
        p.catch(function () {
          clearPlaying();
          speakSynth(text);
        });
      }
      markPlaying(text);
    } catch (e) {
      clearPlaying();
      speakSynth(text);
    }
  }

  /** true si hay MP3 pregrabado para ese texto. */
  function hasAudio(text) {
    return !!map[norm(text)];
  }

  function speak(text) {
    if (!text) return;
    if (synth) window.speechSynthesis.cancel();

    var file = map[norm(text)];
    if (file) {
      playFile(file, text);
      return;
    }
    speakSynth(text);
  }

  function stop() {
    if (synth) window.speechSynthesis.cancel();
    if (audio) {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch (e) { /* ignorar */ }
    }
    clearPlaying();
  }

  function setRate(r) {
    rate = clamp(Number(r) || 1);
    try { window.localStorage.setItem(RATE_KEY, String(rate)); } catch (e) { /* modo privado */ }
    if (audio) {
      audio.defaultPlaybackRate = rate;
      audio.playbackRate = rate;
    }
    return rate;
  }

  function getRate() { return rate; }

  window.TTS = {
    speak: speak,
    stop: stop,
    setRate: setRate,
    getRate: getRate,
    hasAudio: hasAudio,
    supported: hasFiles || synth
  };
})();
