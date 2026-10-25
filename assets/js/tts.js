/* TTS — usa la voz del navegador, priorizando nb-NO (bokmål).
   Expone window.TTS = { speak, stop, supported } */

(function () {
  'use strict';

  var supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  var voice = null;
  var current = null;

  function pickVoice() {
    if (!supported) return;
    var list = window.speechSynthesis.getVoices() || [];
    if (!list.length) return;

    // Preferencias: nb-NO > nn-NO > cualquier "no" > danés (comprensible) > ninguna
    voice =
      list.find(function (v) { return /^nb[-_]NO$/i.test(v.lang); }) ||
      list.find(function (v) { return /^nn[-_]NO$/i.test(v.lang); }) ||
      list.find(function (v) { return /^no([-_]|$)/i.test(v.lang); }) ||
      list.find(function (v) { return /^da[-_]DK$/i.test(v.lang); }) ||
      null;
  }

  if (supported) {
    pickVoice();
    window.speechSynthesis.addEventListener('voiceschanged', pickVoice);
  }

  function markButtons(playing) {
    var btns = document.querySelectorAll('.say');
    for (var i = 0; i < btns.length; i++) btns[i].classList.remove('playing');
    if (playing) {
      var all = document.querySelectorAll('[data-say="' + current + '"]');
      for (var j = 0; j < all.length; j++) all[j].classList.add('playing');
    }
  }

  function speak(text, opts) {
    if (!supported || !text) return;
    opts = opts || {};
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      if (!voice) pickVoice();
      if (voice) u.voice = voice;
      u.lang = (voice && voice.lang) || 'nb-NO';
      u.rate = opts.rate || 0.92;
      u.pitch = 1;
      u.onstart = function () { current = text; markButtons(true); };
      u.onend = function () { current = null; markButtons(false); };
      u.onerror = function () { current = null; markButtons(false); };
      window.speechSynthesis.speak(u);
    } catch (e) {
      /* silencio: el audio es opcional */
    }
  }

  function stop() {
    if (!supported) return;
    window.speechSynthesis.cancel();
    markButtons(false);
  }

  window.TTS = { speak: speak, stop: stop, supported: supported };
})();
