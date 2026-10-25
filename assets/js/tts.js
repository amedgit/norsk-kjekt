/* Audio del curso.
   1) Si la frase está en el manifiesto, reproduce el MP3 pregrabado
      (assets/js/audio-manifest.js → assets/audio/*.mp3). Suena igual en
      cualquier dispositivo, sin depender de las voces instaladas.
   2) Si no está, cae a speechSynthesis (nb-NO) cuando el navegador tiene voces.

   Expone window.TTS = { speak, stop, supported, hasAudio } */

(function () {
  'use strict';

  var map = window.AUDIO_MANIFEST || {};
  var hasFiles = Object.keys(map).length > 0;
  var synth = typeof window !== 'undefined' && 'speechSynthesis' in window;
  var audio = typeof Audio !== 'undefined' ? new Audio() : null;
  var voice = null;
  var current = null;
  var warned = false;

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
      u.rate = 0.92;
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

  /** Devuelve true si hay MP3 pregrabado para ese texto. */
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

  window.TTS = {
    speak: speak,
    stop: stop,
    hasAudio: hasAudio,
    supported: hasFiles || synth
  };
})();
