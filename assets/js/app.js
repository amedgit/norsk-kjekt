/* Norsk Kjekt — app (sin dependencias) */
(function () {
  'use strict';

  var COURSE = window.COURSE;
  var LESSONS = COURSE.lessons;
  var DIALOGUES = COURSE.dialogues || [];
  var CHATS = COURSE.chats || [];
  var I18N = window.I18N;
  var t = I18N.t;
  var tp = I18N.tp;
  var app = document.getElementById('app');
  var hudStreak = document.getElementById('hud-streak');
  var hudXp = document.getElementById('hud-xp');

  /* =======================================================
     Estado / persistencia
     ======================================================= */

  var KEY = 'norsk-kjekt-v1';

  function defaults() {
    return { lessons: {}, fun: {}, exams: {}, dialogues: {}, xp: 0, days: {}, review: [], version: 1 };
  }

  var state = (function load() {
    try {
      var raw = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!raw || typeof raw !== 'object') return defaults();
      var d = defaults();
      var lessons = {};
      var fun = {};
      var dialogues = {};
      Object.keys(raw.lessons || {}).forEach(function (id) {
        var v = raw.lessons[id];
        if (v && typeof v === 'object') {
          lessons[id] = { best: Number(v.best) || 0, total: Number(v.total) || 0, at: Number(v.at) || 0 };
        }
      });
      Object.keys(raw.fun || {}).forEach(function (id) {
        var v = raw.fun[id];
        if (v && typeof v === 'object') {
          fun[id] = { best: Number(v.best) || 0, total: Number(v.total) || 0, at: Number(v.at) || 0 };
        }
      });
      Object.keys(raw.dialogues || {}).forEach(function (id) {
        var v = raw.dialogues[id];
        if (v && typeof v === 'object') {
          dialogues[id] = { best: Number(v.best) || 0, total: Number(v.total) || 0, at: Number(v.at) || 0 };
        }
      });
      return {
        lessons: lessons,
        fun: fun,
        dialogues: dialogues,
        exams: raw.exams && typeof raw.exams === 'object' ? raw.exams : {},
        xp: Number(raw.xp) || 0,
        days: raw.days && typeof raw.days === 'object' ? raw.days : d.days,
        review: Array.isArray(raw.review) ? raw.review.filter(function (s) { return typeof s === 'string'; }) : d.review,
        version: 1
      };
    } catch (e) {
      return defaults();
    }
  })();

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* modo privado */ }
  }

  function todayKey(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function markDay() {
    state.days[todayKey()] = true;
  }

  function currentStreak() {
    var d = new Date();
    if (!state.days[todayKey(d)]) d.setDate(d.getDate() - 1);
    var n = 0;
    while (state.days[todayKey(d)]) {
      n++;
      d.setDate(d.getDate() - 1);
    }
    return n;
  }

  function refreshHud() {
    hudStreak.textContent = currentStreak();
    hudXp.textContent = state.xp;
  }

  function addReview(sig) {
    if (state.review.indexOf(sig) === -1) state.review.push(sig);
  }

  function removeReview(sig) {
    var i = state.review.indexOf(sig);
    if (i > -1) state.review.splice(i, 1);
  }

  /* =======================================================
     Utilidades
     ======================================================= */

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function norm(s) {
    return String(s)
      .toLowerCase()
      .replace(/[.,!?;:«»"“”'’]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function say(text, cls) {
    return '<button class="say ' + (cls || '') + '" data-say="' + esc(text) + '" ' +
      'aria-label="' + esc(t('say.listenNo')) + '" title="' + esc(t('say.title')) + '">🔊</button>';
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function shuffleDifferent(arr) {
    if (arr.length < 3) return shuffle(arr);
    var target = arr.join('|');
    var out = shuffle(arr);
    var tries = 0;
    while (out.join('|') === target && tries < 12) {
      out = shuffle(arr);
      tries++;
    }
    return out;
  }

  function preview(item) {
    if (item.type === 'gap') return item.sentence.replace('___', '____');
    if (item.type === 'order') return t('preview.order') + item.words.join(' ');
    if (item.type === 'cloze') return item.prompt || t('preview.cloze');
    if (item.type === 'listen') return t('preview.listen') + (item.audio || '');
    if (item.type === 'transform') return t('preview.transform') + item.source;
    if (item.type === 'match') return tp('preview.match', item.pairs.length);
    if (item.type === 'odd') return t('preview.odd') + item.prompt;
    if (item.type === 'fix') return t('preview.fix') + item.sentence;
    if (item.type === 'memory') return tp('preview.memory', item.pairs.length);
    return item.prompt;
  }

  function fillBlanks(text, answers) {
    var out = text;
    for (var i = 0; i < answers.length; i++) out = out.replace('___', answers[i]);
    return out;
  }

  /* =======================================================
     Motor de ejercicios
     ======================================================= */

  function runExercises(mount, items, opts) {
    opts = opts || {};
    var list = items.slice();
    var idx = 0;
    var correct = 0;
    var results = [];
    var locked = false;

    function header() {
      var dots = list.map(function (_, k) {
        var cls = 'dot';
        if (results[k] === true) cls += ' ok';
        else if (results[k] === false) cls += ' bad';
        else if (k === idx) cls += ' now';
        return '<span class="' + cls + '"></span>';
      }).join('');
      return '<div class="ex-top"><span class="ex-label">' + esc(opts.label || t('ex.practice')) + '</span>' +
        '<span class="ex-count">' + Math.min(idx + 1, list.length) + ' / ' + list.length + '</span></div>' +
        '<div class="dots">' + dots + '</div>';
    }

    function showFeedback(ok, item, solution, audioOverride) {
      results[idx] = ok;
      if (ok) correct++;
      var fb = mount.querySelector('#fb');
      var next = mount.querySelector('#next');
      if (!fb) return;
      var audioText = audioOverride !== undefined
        ? audioOverride
        : (item.type === 'mcq' ? (item.audio || '') : solution);
      fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
      fb.innerHTML =
        '<div class="head">' + (ok ? t('ex.correct') : t('ex.almost')) + '</div>' +
        (item.explain ? '<div>' + esc(item.explain) + '</div>' : '') +
        '<div class="answer-line">' + (audioText ? say(audioText) + ' ' : '') + esc(solution) + '</div>' +
        (item.es ? '<div class="trad">' + esc(item.es) + '</div>' : '');
      if (next) {
        next.hidden = false;
        next.textContent = idx + 1 === list.length ? t('ex.seeResult') : t('ex.next');
      }
      locked = true;
    }

    function answersOf(item) {
      if (Array.isArray(item.answers)) return item.answers;
      if (item.answer != null) return [item.answer];
      if (item.type === 'listen' && item.audio) return [item.audio];
      return [];
    }

    function matches(item, value) {
      return answersOf(item).some(function (a) { return norm(a) === norm(value); });
    }

    function canonical(item) {
      var list = answersOf(item);
      var first = list[0];
      return Array.isArray(first) ? (first[0] || '') : (first || '');
    }

    function blankWidth(item, i) {
      var list = Array.isArray(item.answers) ? item.answers : [item.answer];
      var a = list[i];
      var s = Array.isArray(a) ? (a[0] || '') : (a || '');
      return Math.max(5, Math.min(18, String(s).length + 2));
    }

    function clozeSolution(item) {
      return fillBlanks(String(item.text || ''), item.answers.map(function (a) {
        return Array.isArray(a) ? (a[0] || '') : (a || '');
      }));
    }

    /* ---- cloze: varios huecos en un texto ---- */
    function buildCloze(item) {
      var parts = String(item.text || '').split('___');
      var gaps = parts.length - 1;
      var html = '<p class="ex-prompt">' + esc(item.prompt || t('ex.defaultCloze')) + '</p>' +
        '<p class="cloze-text">';
      for (var i = 0; i < parts.length; i++) {
        html += esc(parts[i]);
        if (i < gaps) {
          html += '<input class="blank-input cloze-input" data-gap="' + i + '" type="text" ' +
            'autocomplete="off" autocapitalize="off" spellcheck="false" ' +
            'style="width:' + blankWidth(item, i) + 'ch" placeholder="…" ' +
            'aria-label="' + esc(t('ex.gap', { n: i + 1 })) + '">';
        }
      }
      html += '</p>';
      if (item.bank) {
        html += '<div class="bank" id="bank">' + item.bank.map(function (w) {
          return '<button class="word" data-w="' + esc(w) + '">' + esc(w) + '</button>';
        }).join('') + '</div>';
      }
      return html + '<div class="actions"><button class="btn primary" id="check">' + esc(t('ex.check')) + '</button></div>';
    }

    /* ---- listen: dictado ---- */
    function buildListen(item) {
      var w = Math.max(14, Math.min(46, (item.audio || '').length + 2));
      return '<p class="ex-prompt">' + esc(item.prompt || t('ex.defaultListen')) + '</p>' +
        '<div class="listen-box">' +
        '<button class="btn primary" id="play" data-say="' + esc(item.audio) + '">' + esc(t('ex.listen')) + '</button>' +
        '<span class="ex-hint">' + esc(item.hint || t('ex.defaultListenHint')) + '</span>' +
        '</div>' +
        '<input class="listen-input" id="gap" type="text" autocomplete="off" autocapitalize="off" ' +
        'spellcheck="false" placeholder="' + esc(t('ex.writeWhatYouHear')) + '" aria-label="' + esc(t('ex.dictation')) + '" ' +
        'style="max-width:' + w + 'ch">' +
        '<div class="actions"><button class="btn primary" id="check">' + esc(t('ex.check')) + '</button></div>';
    }

    /* ---- transform: reescribir una frase ---- */
    function buildTransform(item) {
      return '<p class="ex-prompt">' + esc(item.prompt || t('ex.defaultTransform')) + '</p>' +
        '<div class="source">' + say(item.source) + '<span>' + esc(item.source) + '</span></div>' +
        (item.hint ? '<p class="ex-hint">' + esc(item.hint) + '</p>' : '') +
        '<input class="transform-input" id="gap" type="text" autocomplete="off" autocapitalize="off" ' +
        'spellcheck="false" placeholder="' + esc(t('ex.writeYourSentence')) + '" aria-label="' + esc(t('ex.answer')) + '">' +
        '<div class="actions"><button class="btn primary" id="check">' + esc(t('ex.check')) + '</button></div>';
    }

    /* ---- match: emparejar dos columnas ---- */
    function matchColumn(item, side) {
      var list = shuffle(item.pairs.map(function (pair, i) {
        return { text: side === 'a' ? pair.a : pair.b, key: i };
      }));
      return '<div class="m-col">' + list.map(function (x) {
        var withAudio = side === 'a' || item.sayB;
        return '<div class="m-cell">' +
          '<button class="m-item" data-side="' + side + '" data-key="' + x.key + '">' +
          esc(x.text) + '</button>' +
          (withAudio ? say(x.text) : '') +
          '</div>';
      }).join('') + '</div>';
    }

    function buildMatch(item) {
      return '<p class="ex-prompt">' + esc(item.prompt || t('ex.defaultMatch')) + '</p>' +
        '<div class="match" id="match">' + matchColumn(item, 'a') + matchColumn(item, 'b') + '</div>' +
        '<p class="ex-hint" id="match-hint">' + esc(t('ex.matchHint')) + '</p>';
    }

    /* ---- odd: la palabra que no encaja ---- */
    function buildOdd(item) {
      return '<p class="ex-prompt">' + esc(item.prompt || t('ex.defaultOdd')) + '</p>' +
        '<div class="options">' + item.options.map(function (o, i) {
          return '<button class="opt" data-odd="' + i + '"><span class="key">' +
            'ABCD'[i] + '</span><span>' + esc(o) + '</span></button>';
        }).join('') + '</div>' +
        '<p class="ex-hint">' + esc(t('ex.oddHint')) + '</p>';
    }

    /* ---- fix: encontrar la palabra equivocada ---- */
    function buildFix(item) {
      var tokens = String(item.sentence).split(' ');
      return '<p class="ex-prompt">' + esc(item.prompt || t('ex.defaultFix')) + '</p>' +
        '<p class="fix-sentence">' + tokens.map(function (t, i) {
          return '<button class="fix-word" data-token="' + i + '">' + esc(t) + '</button>';
        }).join(' ') + '</p>' +
        '<p class="ex-hint" id="fix-hint">' + esc(t('ex.fixHint')) + '</p>';
    }

    /* ---- memory: parejas ocultas ---- */
    function buildMemory(item) {
      var cards = shuffle(item.pairs.reduce(function (acc, pair, i) {
        acc.push({ key: i, side: 'a', text: pair.a });
        acc.push({ key: i, side: 'b', text: pair.b });
        return acc;
      }, []));
      return '<p class="ex-prompt">' + esc(item.prompt || t('ex.defaultMemory')) + '</p>' +
        '<p class="ex-hint" id="memory-hint">' + esc(t('ex.memoryHint')) + '</p>' +
        '<div class="memory-grid" id="memory">' + cards.map(function (c, i) {
          return '<button class="mem-card" data-key="' + c.key + '" data-i="' + i + '" ' +
            'aria-label="' + esc(t('ex.cardN', { n: i + 1 })) + '">' +
            '<span class="mem-face mem-back">🇳🇴</span>' +
            '<span class="mem-face mem-front">' + esc(c.text) + '</span></button>';
        }).join('') + '</div>';
    }

    function draw() {
      locked = false;
      if (window.TTS) window.TTS.stop();
      var item = list[idx];
      var body = '';

      if (item.type === 'mcq') {
        body =
          '<p class="ex-prompt">' + esc(item.prompt) + '</p>' +
          '<div class="options">' + item.options.map(function (o, i) {
            return '<button class="opt" data-opt="' + i + '"><span class="key">' +
              'ABCD'[i] + '</span><span>' + esc(o) + '</span></button>';
          }).join('') + '</div>';
      } else if (item.type === 'gap') {
        var parts = item.sentence.split('___');
        var width = Math.max(6, Math.min(18, (item.answers[0] || '').length + 3));
        body =
          '<p class="ex-prompt">' + esc(item.prompt || t('ex.defaultGap')) + '</p>' +
          '<p class="sentence">' + esc(parts[0]) +
          '<input class="blank-input" id="gap" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" ' +
          'style="width:' + width + 'ch" placeholder="…" aria-label="' + esc(t('ex.missingWord')) + '">' +
          esc(parts[1] || '') + '</p>' +
          (item.bank ? '<div class="bank" id="bank">' + item.bank.map(function (w) {
            return '<button class="word" data-w="' + esc(w) + '">' + esc(w) + '</button>';
          }).join('') + '</div>' : '') +
          '<div class="actions"><button class="btn primary" id="check">' + esc(t('ex.check')) + '</button></div>';
      } else if (item.type === 'cloze') {
        body = buildCloze(item);
      } else if (item.type === 'listen') {
        body = buildListen(item);
      } else if (item.type === 'transform') {
        body = buildTransform(item);
      } else if (item.type === 'match') {
        body = buildMatch(item);
      } else if (item.type === 'odd') {
        body = buildOdd(item);
      } else if (item.type === 'fix') {
        body = buildFix(item);
      } else if (item.type === 'memory') {
        body = buildMemory(item);
      } else {
        body =
          '<p class="ex-prompt">' + esc(item.prompt || t('ex.defaultOrder')) + '</p>' +
          '<p class="ex-hint">' + esc(t('ex.orderHint')) + '</p>' +
          '<div class="order-answer" id="ans"><span class="placeholder">' + esc(t('ex.yourSentence')) + '</span></div>' +
          '<div class="bank" id="bank"></div>' +
          '<div class="actions">' +
          '<button class="btn ghost small" id="reset">' + esc(t('ex.clear')) + '</button>' +
          '<button class="btn primary" id="check">' + esc(t('ex.check')) + '</button></div>';
      }

      mount.innerHTML =
        '<div class="exercise">' + header() + body +
        '<div class="feedback" id="fb" aria-live="polite"></div>' +
        '<div class="actions"><button class="btn primary" id="next" hidden>' + esc(t('ex.next')) + '</button></div>' +
        '</div>';

      var nextBtn = mount.querySelector('#next');
      nextBtn.addEventListener('click', function () {
        idx++;
        if (idx < list.length) draw();
        else showResult();
      });

      if (item.type === 'mcq') bindMcq(item);
      else if (item.type === 'gap') bindGap(item);
      else if (item.type === 'cloze') bindCloze(item);
      else if (item.type === 'listen') bindListen(item);
      else if (item.type === 'transform') bindTransform(item);
      else if (item.type === 'match') bindMatch(item);
      else if (item.type === 'odd') bindOdd(item);
      else if (item.type === 'fix') bindFix(item);
      else if (item.type === 'memory') bindMemory(item);
      else bindOrder(item);
    }

    /* ---- opción múltiple ---- */
    function bindMcq(item) {
      var buttons = Array.prototype.slice.call(mount.querySelectorAll('[data-opt]'));
      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (locked) return;
          var chosen = Number(btn.dataset.opt);
          var ok = chosen === item.answer;
          buttons.forEach(function (b) {
            var i = Number(b.dataset.opt);
            b.disabled = true;
            if (i === item.answer) b.classList.add('correct');
            else if (i === chosen) b.classList.add('wrong');
          });
          showFeedback(ok, item, item.options[item.answer]);
        });
      });
    }

    /* ---- hueco ---- */
    function bindGap(item) {
      var input = mount.querySelector('#gap');
      var check = mount.querySelector('#check');
      var bank = mount.querySelector('#bank');

      if (bank) {
        bank.addEventListener('click', function (e) {
          var w = e.target.closest('[data-w]');
          if (!w || locked) return;
          input.value = w.dataset.w;
          input.focus();
        });
      }

      function go() {
        if (locked || !input) return;
        var val = input.value.trim();
        if (!val) { input.focus(); return; }
        var ok = item.answers.some(function (a) { return norm(a) === norm(val); });
        input.classList.add(ok ? 'ok' : 'bad');
        input.readOnly = true;
        if (check) check.disabled = true;
        if (bank) {
          Array.prototype.forEach.call(bank.querySelectorAll('.word'), function (b) { b.classList.add('used'); });
        }
        showFeedback(ok, item, item.sentence.replace('___', item.answers[0]));
      }

      if (check) check.addEventListener('click', go);
      if (input) {
        input.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') { e.preventDefault(); go(); }
        });
        input.focus();
      }
    }

    /* ---- ordenar ---- */
    function bindOrder(item) {
      var chosen = [];
      var pool = shuffleDifferent(item.words).map(function (w, i) { return { w: w, id: i }; });
      var ansEl = mount.querySelector('#ans');
      var bankEl = mount.querySelector('#bank');

      function paint() {
        ansEl.innerHTML = chosen.length
          ? chosen.map(function (t) {
            return '<button class="word" data-rm="' + t.id + '">' + esc(t.w) + '</button>';
          }).join('')
          : '<span class="placeholder">' + esc(t('ex.yourSentence')) + '</span>';
        ansEl.classList.toggle('filled', chosen.length > 0);

        bankEl.innerHTML = pool.map(function (t) {
          var used = chosen.some(function (c) { return c.id === t.id; });
          return '<button class="word ' + (used ? 'used' : '') + '" data-add="' + t.id + '">' + esc(t.w) + '</button>';
        }).join('');
      }

      ansEl.addEventListener('click', function (e) {
        var b = e.target.closest('[data-rm]');
        if (!b || locked) return;
        chosen = chosen.filter(function (c) { return String(c.id) !== b.dataset.rm; });
        paint();
      });

      bankEl.addEventListener('click', function (e) {
        var b = e.target.closest('[data-add]');
        if (!b || locked) return;
        var t = pool.find(function (p) { return String(p.id) === b.dataset.add; });
        if (!t) return;
        chosen.push(t);
        paint();
      });

      mount.querySelector('#reset').addEventListener('click', function () {
        if (locked) return;
        chosen = [];
        paint();
      });

      mount.querySelector('#check').addEventListener('click', function () {
        if (locked || !chosen.length) return;
        var built = chosen.map(function (c) { return c.w; }).join(' ');
        var ok = norm(built) === norm(item.words.join(' '));
        mount.querySelector('#check').disabled = true;
        showFeedback(ok, item, item.words.join(' '));
      });

      paint();
    }

    /* ---- cloze: varios huecos ---- */
    function bindCloze(item) {
      var inputs = Array.prototype.slice.call(mount.querySelectorAll('.cloze-input'));
      var check = mount.querySelector('#check');
      var bank = mount.querySelector('#bank');
      var active = 0;

      inputs.forEach(function (inp, i) {
        inp.addEventListener('focus', function () { active = i; });
        inp.addEventListener('click', function () { active = i; });
      });

      if (bank) {
        bank.addEventListener('click', function (e) {
          var w = e.target.closest('[data-w]');
          if (!w || locked) return;
          var target = active;
          if (!inputs[target] || inputs[target].value.trim()) {
            target = -1;
            inputs.forEach(function (inp, i) {
              if (target < 0 && !inp.value.trim() && !inp.readOnly) target = i;
            });
          }
          if (target < 0) return;
          inputs[target].value = w.dataset.w;
          active = target;
          inputs[target].focus();
        });
      }

      function go() {
        if (locked) return;
        var empty = -1;
        inputs.forEach(function (inp, i) {
          if (!inp.value.trim() && empty < 0) empty = i;
        });
        if (empty > -1) {
          inputs[empty].focus();
          inputs[empty].classList.add('bad');
          setTimeout(function () { inputs[empty].classList.remove('bad'); }, 900);
          return;
        }

        var ok = true;
        inputs.forEach(function (inp, i) {
          var expected = item.answers[i];
          var good = Array.isArray(expected)
            ? expected.some(function (a) { return norm(a) === norm(inp.value); })
            : norm(expected) === norm(inp.value);
          inp.classList.add(good ? 'ok' : 'bad');
          inp.readOnly = true;
          if (!good) ok = false;
        });

        if (check) check.disabled = true;
        if (bank) {
          Array.prototype.forEach.call(bank.querySelectorAll('.word'), function (b) { b.disabled = true; });
        }
        showFeedback(ok, item, clozeSolution(item));
      }

      if (check) check.addEventListener('click', go);
      inputs.forEach(function (inp) {
        inp.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') { e.preventDefault(); go(); }
        });
      });
      if (inputs[0]) inputs[0].focus();
    }

    /* ---- listen: dictado ---- */
    function bindListen(item) {
      var input = mount.querySelector('#gap');
      var check = mount.querySelector('#check');

      function replay() {
        if (window.TTS) window.TTS.speak(item.audio);
      }

      /* El botón #play lleva data-say, así que el manejador global lo
         reproduce y le pone la clase .playing. */

      /* Intento de reproducción automática; si el navegador la bloquea,
         el botón «Escuchar» sigue ahí. */
      setTimeout(function () {
        if (!locked && mount.querySelector('#play')) replay();
      }, 280);

      function go() {
        if (locked || !input) return;
        var val = input.value.trim();
        if (!val) { input.focus(); return; }
        var ok = matches(item, val);
        input.classList.add(ok ? 'ok' : 'bad');
        input.readOnly = true;
        if (check) check.disabled = true;
        showFeedback(ok, item, item.audio || canonical(item));
      }

      if (check) check.addEventListener('click', go);
      if (input) {
        input.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') { e.preventDefault(); go(); }
        });
        input.focus();
      }
    }

    /* ---- transform: reescribir ---- */
    function bindTransform(item) {
      var input = mount.querySelector('#gap');
      var check = mount.querySelector('#check');

      function go() {
        if (locked || !input) return;
        var val = input.value.trim();
        if (!val) { input.focus(); return; }
        var ok = matches(item, val);
        input.classList.add(ok ? 'ok' : 'bad');
        input.readOnly = true;
        if (check) check.disabled = true;
        showFeedback(ok, item, canonical(item));
      }

      if (check) check.addEventListener('click', go);
      if (input) {
        input.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') { e.preventDefault(); go(); }
        });
        input.focus();
      }
    }

    /* ---- match: emparejar columnas ---- */
    function bindMatch(item) {
      var hint = mount.querySelector('#match-hint');
      var sel = null;
      var mistakes = 0;
      var matched = 0;
      var left = Array.prototype.slice.call(mount.querySelectorAll('[data-side="a"]'));
      var right = Array.prototype.slice.call(mount.querySelectorAll('[data-side="b"]'));

      function clearSel() {
        if (sel) sel.classList.remove('sel');
        sel = null;
      }

      function finish() {
        var ok = mistakes === 0;
        var solution = item.pairs.map(function (p) { return p.a + ' = ' + p.b; }).join(' · ');
        if (hint) hint.textContent = t('ex.complete');
        showFeedback(ok, item, solution, '');
      }

      left.forEach(function (el) {
        el.addEventListener('click', function () {
          if (locked || el.classList.contains('done')) return;
          clearSel();
          sel = el;
          el.classList.add('sel');
          if (hint) hint.textContent = t('ex.choosePair');
        });
      });

      right.forEach(function (el) {
        el.addEventListener('click', function () {
          if (locked || el.classList.contains('done')) return;
          if (!sel) {
            if (hint) hint.textContent = t('ex.chooseFirst');
            return;
          }
          var a = sel;
          if (a.dataset.key === el.dataset.key) {
            a.classList.add('done');
            a.disabled = true;
            el.classList.add('done');
            el.disabled = true;
            matched++;
            clearSel();
            if (matched === item.pairs.length) {
              finish();
            } else if (hint) {
              hint.textContent = tp('ex.remaining', item.pairs.length - matched);
            }
            return;
          }

          mistakes++;
          [a, el].forEach(function (x) {
            x.classList.add('wrong');
            setTimeout(function () { x.classList.remove('wrong'); }, 550);
          });
          clearSel();
          if (hint) hint.textContent = t('ex.tryAgain');
        });
      });
    }

    /* ---- odd: la palabra que no encaja ---- */
    function bindOdd(item) {
      var buttons = Array.prototype.slice.call(mount.querySelectorAll('[data-odd]'));
      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (locked) return;
          var chosen = Number(btn.dataset.odd);
          var ok = chosen === item.answer;
          buttons.forEach(function (b) {
            var i = Number(b.dataset.odd);
            b.disabled = true;
            if (i === item.answer) b.classList.add('correct');
            else if (i === chosen) b.classList.add('wrong');
          });
          showFeedback(ok, item, item.options[item.answer]);
        });
      });
    }

    /* ---- fix: encontrar el error ---- */
    function bindFix(item) {
      var tokens = Array.prototype.slice.call(mount.querySelectorAll('[data-token]'));
      var hint = mount.querySelector('#fix-hint');
      tokens.forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (locked) return;
          var i = Number(btn.dataset.token);
          var ok = i === item.wrong;
          tokens.forEach(function (b) { b.disabled = true; });
          if (ok) {
            btn.classList.add('correct');
            if (hint) hint.textContent = t('ex.fixFound');
          } else {
            btn.classList.add('wrong');
            var real = tokens[item.wrong];
            if (real) real.classList.add('correct');
            if (hint) hint.textContent = t('ex.fixOther');
          }
          showFeedback(ok, item, item.correct);
        });
      });
    }

    /* ---- memory: parejas ---- */
    function bindMemory(item) {
      var cards = Array.prototype.slice.call(mount.querySelectorAll('.mem-card'));
      var hint = mount.querySelector('#memory-hint');
      var first = null;
      var busy = false;
      var matched = 0;
      var mistakes = 0;

      function finish() {
        var ok = mistakes === 0;
        var solution = item.pairs.map(function (p) { return p.a + ' = ' + p.b; }).join(' · ');
        if (hint) hint.textContent = mistakes === 0 ? t('ex.memoryPerfect') : tp('ex.memoryDone', mistakes);
        showFeedback(ok, item, solution, '');
      }

      cards.forEach(function (card) {
        card.addEventListener('click', function () {
          if (busy || card.classList.contains('done') || card.classList.contains('flip')) return;
          card.classList.add('flip');
          card.disabled = true;
          card.setAttribute('aria-label', t('ex.cardUp', { text: card.querySelector('.mem-front').textContent }));

          if (!first) {
            first = card;
            if (hint) hint.textContent = t('ex.findPair');
            return;
          }

          busy = true;
          var a = first;
          var b = card;
          if (a.dataset.key === b.dataset.key) {
            a.classList.add('done');
            b.classList.add('done');
            matched++;
            if (window.TTS) {
              var pair = item.pairs[Number(b.dataset.key)];
              if (pair) window.TTS.speak(pair.a);
            }
            first = null;
            busy = false;
            if (matched === item.pairs.length) {
              finish();
            } else if (hint) {
              hint.textContent = tp('ex.remainingPairs', item.pairs.length - matched);
            }
            return;
          }

          mistakes++;
          [a, b].forEach(function (x) {
            x.classList.add('wrong');
            setTimeout(function () { x.classList.remove('wrong'); }, 500);
          });
          if (hint) hint.textContent = t('ex.tryAgain');
          setTimeout(function () {
            [a, b].forEach(function (x) {
              x.classList.remove('flip');
              x.classList.remove('wrong');
              x.disabled = false;
              x.setAttribute('aria-label', t('ex.cardDown'));
            });
            first = null;
            busy = false;
          }, 720);
        });
      });
    }

    /* ---- resultado ---- */
    function showResult() {
      var total = list.length;
      var pct = total ? Math.round((correct / total) * 100) : 0;
      var msg = pct === 100
        ? t('result.perfect')
        : pct >= 80
          ? t('result.great')
          : pct >= 50
            ? t('result.ok')
            : t('result.low');

      var failed = [];
      list.forEach(function (_, k) { if (results[k] !== true) failed.push(k); });

      mount.innerHTML =
        '<div class="result">' +
        '<div class="score">' + correct + '<small>/' + total + '</small></div>' +
        '<p>' + esc(msg) + '</p>' +
        (failed.length
          ? '<div class="failed-list">' + failed.map(function (k) {
            return '<div class="item"><b>' + (k + 1) + '</b><span>' + esc(preview(list[k])) + '</span></div>';
          }).join('') + '</div>'
          : '') +
        '<div class="actions">' +
        '<button class="btn primary" data-act="again">' + esc(t('result.again')) + '</button>' +
        (failed.length ? '<button class="btn ghost" data-act="failed">' + esc(t('result.reviewN', { n: failed.length })) + '</button>' : '') +
        (opts.onExit ? '<button class="btn ghost" data-act="exit">' + esc(opts.exitLabel || t('result.continue')) + '</button>' : '') +
        '</div></div>';

      mount.querySelector('[data-act="again"]').addEventListener('click', function () { start(list); });
      var fb = mount.querySelector('[data-act="failed"]');
      if (fb) {
        fb.addEventListener('click', function () {
          start(failed.map(function (k) { return list[k]; }));
        });
      }
      var ex = mount.querySelector('[data-act="exit"]');
      if (ex) ex.addEventListener('click', opts.onExit);

      if (opts.onDone) {
        opts.onDone({
          correct: correct,
          total: total,
          failed: failed.map(function (k) { return list[k]; })
        });
      }
    }

    function start(newList) {
      list = newList.slice();
      idx = 0;
      correct = 0;
      results = [];
      draw();
    }

    start(list);
  }

  /* =======================================================
     Vistas
     ======================================================= */

  function completedCount() {
    return LESSONS.filter(function (l) { return state.lessons[l.id]; }).length;
  }

  function nextLesson() {
    return LESSONS.find(function (l) { return !state.lessons[l.id]; }) || LESSONS[0];
  }

  function allVocab() {
    var out = [];
    LESSONS.forEach(function (l) {
      l.vocab.forEach(function (v) { out.push({ no: v.no, es: v.es, lesson: l }); });
    });
    return out;
  }

  function wordOfDay() {
    var arr = allVocab();
    var d = new Date();
    var day = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
    return arr[day % arr.length];
  }

  function lessonCard(l) {
    var st = state.lessons[l.id];
    var img = l.image || ('assets/img/lessons/' + l.id + '.svg');
    return '<a class="lesson-card" href="#/leksjon/' + l.id + '">' +
      '<div class="thumb"><img src="' + esc(img) + '" alt="" width="800" height="500" loading="lazy" decoding="async"></div>' +
      '<div class="top"><span class="emoji">' + l.emoji + '</span>' +
      '<span class="num">' + esc(t('lesson.cardNum', { n: l.num })) + ' · ' + l.level + '</span></div>' +
      '<h3>' + esc(l.title) + '</h3>' +
      '<p class="sub">' + esc(l.subtitle) + '</p>' +
      '<div class="foot">' +
      (st ? '<span class="chip done">✓ ' + st.best + '/' + st.total + '</span>' : '<span class="chip">' + esc(t('lesson.new')) + '</span>') +
      '<span class="chip plain">' + esc(tp('lesson.exercises', l.exercises.length)) + '</span>' +
      '</div></a>';
  }

  function levelSection(title, sub, levels) {
    var list = LESSONS.filter(function (l) { return levels.indexOf(l.level) > -1; });
    if (!list.length) return '';
    return '<h2 class="section-title">' + title + ' <span>' + sub + '</span></h2>' +
      '<div class="grid">' + list.map(lessonCard).join('') + '</div>';
  }

  /* =======================================================
     Samtaler: conversaciones cotidianas
     ======================================================= */

  function dialogueExerciseCount() {
    return DIALOGUES.reduce(function (n, d) { return n + d.exercises.length; }, 0);
  }

  function dialogueCompletedCount() {
    return DIALOGUES.filter(function (d) { return state.dialogues[d.id]; }).length;
  }

  function dialogueCard(d) {
    var st = state.dialogues[d.id];
    var img = d.image || ('assets/img/dialogues/' + d.id + '.svg');
    return '<a class="lesson-card dialogue-card" href="#/samtale/' + d.id + '">' +
      '<div class="thumb"><img src="' + esc(img) + '" alt="" width="800" height="500" loading="lazy" decoding="async"></div>' +
      '<div class="top"><span class="emoji">' + d.emoji + '</span>' +
      '<span class="num">' + esc(t('dlg.cardNum', { level: d.level })) + '</span></div>' +
      '<h3>' + esc(d.title) + '</h3>' +
      '<p class="sub">' + esc(d.subtitle) + '</p>' +
      '<div class="foot">' +
      (st ? '<span class="chip done">✓ ' + st.best + '/' + st.total + '</span>' : '<span class="chip">' + esc(t('lesson.new')) + '</span>') +
      '<span class="chip plain">' + esc(tp('dlg.lines', d.lines.length)) + '</span>' +
      '<span class="chip plain">' + esc(tp('lesson.exercises', d.exercises.length)) + '</span>' +
      '</div></a>';
  }

  function dialogueLevelSection(title, sub, levels) {
    var list = DIALOGUES.filter(function (d) { return levels.indexOf(d.level) > -1; });
    if (!list.length) return '';
    return '<h2 class="section-title">' + title + ' <span>' + sub + '</span></h2>' +
      '<div class="grid">' + list.map(dialogueCard).join('') + '</div>';
  }

  /* =======================================================
     Meldinger: grupos de WhatsApp noruegos
     ======================================================= */

  function chatCard(c) {
    return '<a class="lesson-card chat-card" href="#/melding/' + c.id + '">' +
      '<div class="chat-thumb" aria-hidden="true">' +
      '<span class="chat-thumb-emoji">' + c.emoji + '</span>' +
      '<span class="cb-mini"><i></i><i></i></span>' +
      '<span class="cb-mini right"><i></i></span>' +
      '</div>' +
      '<div class="top"><span class="emoji">' + c.emoji + '</span>' +
      '<span class="num">' + esc(t('chat.cardNum', { level: c.level })) + '</span></div>' +
      '<h3>' + esc(c.title) + '</h3>' +
      '<p class="sub">' + esc(c.subtitle) + '</p>' +
      '<div class="foot">' +
      '<span class="chip plain">' + esc(tp('chat.members', c.people.length)) + '</span>' +
      '<span class="chip plain">' + esc(tp('chat.messages', c.messages.length)) + '</span>' +
      '</div></a>';
  }

  function chatLevelSection(title, sub, levels) {
    var list = CHATS.filter(function (c) { return levels.indexOf(c.level) > -1; });
    if (!list.length) return '';
    return '<h2 class="section-title">' + title + ' <span>' + sub + '</span></h2>' +
      '<div class="grid">' + list.map(chatCard).join('') + '</div>';
  }

  /* =======================================================
     Tull & tøys: packs, tabla de palabras y verbos
     ======================================================= */

  function funExerciseCount() {
    return COURSE.fun.packs.reduce(function (n, p) { return n + p.exercises.length; }, 0);
  }

  function totalExerciseCount() {
    return LESSONS.reduce(function (n, l) { return n + l.exercises.length; }, 0) +
      funExerciseCount() + dialogueExerciseCount();
  }

  function allFunExercises() {
    var out = [];
    COURSE.fun.packs.forEach(function (p) { out = out.concat(p.exercises); });
    return out;
  }

  var funUi = {
    q: '',
    level: 'all',
    tag: 'all',
    sort: 'no',
    asc: true,
    hide: false,
    hideForms: false
  };

  function funTags() {
    var seen = {};
    var out = [];
    COURSE.wordbank.forEach(function (w) {
      if (!seen[w.tag]) { seen[w.tag] = true; out.push(w.tag); }
    });
    return out;
  }

  function filteredWords() {
    var q = norm(funUi.q);
    var list = COURSE.wordbank.filter(function (w) {
      if (funUi.level !== 'all' && w.level !== funUi.level) return false;
      if (funUi.tag !== 'all' && w.tag !== funUi.tag) return false;
      if (!q) return true;
      return norm(w.no + ' ' + w.es + ' ' + (w.note || '')).indexOf(q) > -1;
    });
    list.sort(function (a, b) {
      var av = String(a[funUi.sort] || '');
      var bv = String(b[funUi.sort] || '');
      var cmp = av.localeCompare(bv, 'nb');
      return funUi.asc ? cmp : -cmp;
    });
    return list;
  }

  function paintWords() {
    var body = document.getElementById('wb-body');
    if (!body) return;
    var list = filteredWords();

    document.querySelectorAll('[data-wb-level]').forEach(function (b) {
      b.classList.toggle('active', b.dataset.wbLevel === funUi.level);
    });
    document.querySelectorAll('[data-sort]').forEach(function (b) {
      var mark = b.querySelector('.sort-mark');
      if (!mark) return;
      mark.textContent = b.dataset.sort === funUi.sort ? (funUi.asc ? '↑' : '↓') : '↕';
    });

    body.innerHTML = list.length
      ? list.map(function (w, i) {
        var es = '<span class="wb-dots">•••</span><span class="wb-real">' + esc(w.es) + '</span>';
        return '<tr data-word="' + i + '">' +
          '<td><div class="wb-no">' + say(w.no) + '<span>' + esc(w.no) + '</span></div></td>' +
          '<td class="wb-es">' + es + (w.note ? '<span class="wb-note">' + esc(w.note) + '</span>' : '') + '</td>' +
          '<td><span class="wb-level lvl-' + w.level.toLowerCase() + '">' + w.level + '</span></td>' +
          '<td><span class="wb-tag">' + esc(I18N.tagLabel(w.tag)) + '</span></td></tr>';
      }).join('')
      : '<tr><td colspan="4" class="wb-empty">' + esc(t('fun.noResults')) + '</td></tr>';

    var count = document.getElementById('wb-count');
    if (count) {
      count.textContent = tp('fun.wordCount', list.length, { total: COURSE.wordbank.length }) +
        (funUi.hide ? t('fun.wordCountHide') : '');
    }
  }

  function wordTableHTML() {
    return '<div class="word-tools">' +
      '<input id="wb-q" type="search" placeholder="' + esc(t('fun.searchWords')) + '" value="' + esc(funUi.q) + '" aria-label="' + esc(t('fun.searchLabel')) + '">' +
      '<select id="wb-tag" aria-label="' + esc(t('fun.filterLabel')) + '">' +
      '<option value="all">' + esc(t('fun.allTopics')) + '</option>' +
      funTags().map(function (tag) {
        return '<option value="' + esc(tag) + '"' + (funUi.tag === tag ? ' selected' : '') + '>' + esc(I18N.tagLabel(tag)) + '</option>';
      }).join('') + '</select>' +
      '<label class="wb-switch"><input type="checkbox" id="wb-hide"' + (funUi.hide ? ' checked' : '') + '> ' + esc(t('fun.examMode')) + '</label>' +
      '</div>' +
      '<div class="wb-levels">' +
      ['all', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(function (l) {
        return '<button class="fchip" data-wb-level="' + l + '">' + (l === 'all' ? esc(t('fun.all')) : l) + '</button>';
      }).join('') + '</div>' +
      '<div class="wtable-wrap"><table class="wtable' + (funUi.hide ? ' hide-es' : '') + '" id="word-table">' +
      '<thead><tr>' +
      '<th><button class="wb-sort" data-sort="no">' + esc(t('fun.colNo')) + ' <span class="sort-mark">↕</span></button></th>' +
      '<th><button class="wb-sort" data-sort="es">' + esc(t('fun.colEs')) + ' <span class="sort-mark">↕</span></button></th>' +
      '<th><button class="wb-sort" data-sort="level">' + esc(t('fun.colLevel')) + ' <span class="sort-mark">↕</span></button></th>' +
      '<th><button class="wb-sort" data-sort="tag">' + esc(t('fun.colTag')) + ' <span class="sort-mark">↕</span></button></th>' +
      '</tr></thead><tbody id="wb-body"></tbody></table></div>' +
      '<p class="ex-hint" id="wb-count"></p>';
  }

  function bindWordTable() {
    var q = document.getElementById('wb-q');
    if (q) {
      q.addEventListener('input', function () {
        funUi.q = q.value;
        paintWords();
      });
    }
    var tag = document.getElementById('wb-tag');
    if (tag) {
      tag.addEventListener('change', function () {
        funUi.tag = tag.value;
        paintWords();
      });
    }
    document.querySelectorAll('[data-wb-level]').forEach(function (b) {
      b.addEventListener('click', function () {
        funUi.level = b.dataset.wbLevel;
        paintWords();
      });
    });
    document.querySelectorAll('[data-sort]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (funUi.sort === b.dataset.sort) funUi.asc = !funUi.asc;
        else { funUi.sort = b.dataset.sort; funUi.asc = true; }
        paintWords();
      });
    });
    var hide = document.getElementById('wb-hide');
    var table = document.getElementById('word-table');
    if (hide && table) {
      hide.addEventListener('change', function () {
        funUi.hide = hide.checked;
        table.classList.toggle('hide-es', funUi.hide);
        document.querySelectorAll('#wb-body tr.revealed').forEach(function (tr) { tr.classList.remove('revealed'); });
        paintWords();
      });
    }
    var body = document.getElementById('wb-body');
    if (body) {
      body.addEventListener('click', function (e) {
        if (!funUi.hide || e.target.closest('[data-say]')) return;
        var tr = e.target.closest('[data-word]');
        if (tr) tr.classList.toggle('revealed');
      });
    }
    paintWords();
  }

  function verbTableHTML() {
    return '<div class="wtable-wrap"><table class="wtable verb-table' + (funUi.hideForms ? ' hide-forms' : '') + '" id="verb-table">' +
      '<thead><tr><th>' + esc(t('fun.infinitive')) + '</th><th>' + esc(t('fun.present')) + '</th><th>' + esc(t('fun.past')) + '</th><th>' + esc(t('fun.perfect')) + '</th></tr></thead><tbody>' +
      COURSE.verbs.map(function (v) {
        return '<tr>' +
          '<td><div class="wb-no">' + say(v.inf) + '<span>' + esc(v.inf) + '</span></div>' +
          '<span class="wb-note">' + esc(v.es) + '</span></td>' +
          '<td><span class="vb-form">' + esc(v.present) + '</span></td>' +
          '<td><span class="vb-form">' + esc(v.past) + '</span></td>' +
          '<td><span class="vb-form">' + esc(v.perfect) + '</span></td></tr>';
      }).join('') + '</tbody></table></div>' +
      '<div class="actions" style="margin-top:.8rem">' +
      '<button class="btn ghost small" id="vb-hide">' + esc(funUi.hideForms ? t('fun.showForms') : t('fun.hideForms')) + '</button>' +
      '<a class="btn ghost small" href="#/tull/verbos">' + esc(t('fun.practice')) + '</a>' +
      '</div>' +
      '<p class="ex-hint" style="margin-top:.6rem">' + esc(t('fun.verbTip')) + '</p>';
  }

  function bindVerbTable() {
    var btn = document.getElementById('vb-hide');
    var table = document.getElementById('verb-table');
    if (!btn || !table) return;
    btn.addEventListener('click', function () {
      funUi.hideForms = !funUi.hideForms;
      table.classList.toggle('hide-forms', funUi.hideForms);
      btn.textContent = funUi.hideForms ? t('fun.showForms') : t('fun.hideForms');
    });
  }

  function funCard(p) {
    var st = state.fun[p.id];
    return '<a class="fun-card" href="#/tull/' + p.id + '">' +
      '<div class="head"><span class="fun-emoji">' + p.emoji + '</span>' +
      '<span class="chip">' + esc(p.level) + '</span></div>' +
      '<h3>' + esc(p.title) + '</h3>' +
      '<p>' + esc(p.subtitle) + '</p>' +
      '<div class="foot"><span class="chip plain">' + esc(tp('lesson.exercises', p.exercises.length)) + '</span>' +
      (st ? '<span class="chip done">✓ ' + st.best + '/' + st.total + '</span>' : '<span class="chip">' + esc(t('fun.newPack')) + '</span>') +
      '<span class="go">' + esc(t('fun.play')) + '</span></div></a>';
  }

  function renderFun(packId) {
    if (packId) { renderFunPack(packId); return; }

    app.innerHTML =
      '<section class="fun-hero">' +
      '  <div class="fun-hero-text">' +
      '    <span class="eyebrow">' + esc(t('fun.eyebrow')) + '</span>' +
      '    <h1>Tull &amp; tøys</h1>' +
      '    <p>' + esc(COURSE.fun.intro) + '</p>' +
      '    <div class="hero-actions">' +
      '      <button class="btn primary" id="mix-start">' + esc(t('fun.mix')) + '</button>' +
      '      <button class="btn ghost" id="go-table">' + esc(t('fun.wordTable')) + '</button>' +
      '      <button class="btn ghost" id="go-verbs">' + esc(t('fun.verbs')) + '</button>' +
      '    </div>' +
      '  </div>' +
      '  <aside class="fun-hero-card">' +
      '    <div><h3>' + esc(t('fun.newExercises')) + '</h3><div class="big-num">' + funExerciseCount() + ' <small>' + esc(t('fun.toLaugh')) + '</small></div></div>' +
      '    <div><h3>' + esc(t('fun.wordsInTable')) + '</h3><div class="big-num">' + COURSE.wordbank.length + ' <small>' + esc(t('fun.withAudio')) + '</small></div></div>' +
      '    <p class="fun-quote">«Det finnes ikke dårlig vær, bare dårlige klær.»<span>' + esc(t('fun.quoteBy')) + '</span></p>' +
      '  </aside>' +
      '</section>' +

      '<h2 class="section-title">' + esc(t('fun.chooseChaos')) + ' <span>' + esc(t('fun.chooseChaosSub')) + '</span></h2>' +
      '<div class="fun-grid">' + COURSE.fun.packs.map(funCard).join('') + '</div>' +

      '<section class="card" id="tabla" style="margin-top:1.6rem">' +
      '  <h2>' + esc(t('fun.tableTitle')) + ' <span class="h2-note">' + esc(t('fun.tableNote', { n: COURSE.wordbank.length })) + '</span></h2>' +
      '  <p class="ex-hint" style="margin-bottom:.8rem">' + esc(t('fun.tableIntro')) + '</p>' +
      wordTableHTML() +
      '</section>' +

      '<section class="card" id="verbos">' +
      '  <h2>' + esc(t('fun.verbTitle')) + ' <span class="h2-note">' + esc(t('fun.verbNote')) + '</span></h2>' +
      '  <p class="ex-hint" style="margin-bottom:.8rem">' + esc(t('fun.verbIntro')) + '</p>' +
      verbTableHTML() +
      '</section>';

    var mix = document.getElementById('mix-start');
    if (mix) mix.addEventListener('click', function () { location.hash = '#/tull/mix'; });
    var gt = document.getElementById('go-table');
    if (gt) gt.addEventListener('click', function () { document.getElementById('tabla').scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    var gv = document.getElementById('go-verbs');
    if (gv) gv.addEventListener('click', function () { document.getElementById('verbos').scrollIntoView({ behavior: 'smooth', block: 'start' }); });

    bindWordTable();
    bindVerbTable();
  }

  function renderFunPack(packId) {
    var pack = COURSE.fun.packs.find(function (p) { return p.id === packId; });
    var items = null;
    var isMix = packId === 'mix';

    if (isMix) {
      pack = {
        id: 'mix',
        emoji: '🎲',
        level: 'A1–B2',
        title: t('fun.mixTitle'),
        subtitle: t('fun.mixSub'),
        intro: t('fun.mixIntro')
      };
      items = shuffle(allFunExercises()).slice(0, 10);
    } else {
      items = pack ? pack.exercises : null;
    }

    if (!pack || !items) { renderFun(); return; }

    var st = state.fun[pack.id];
    app.innerHTML =
      '<div class="crumbs"><a href="#/tull">Tull &amp; tøys</a> <span>›</span> <span>' + esc(pack.title) + '</span></div>' +
      '<header class="lesson-head">' +
      '  <div class="kicker"><span class="emoji">' + pack.emoji + '</span>' +
      '    <span class="chip">' + esc(pack.level) + '</span>' +
      '    <span class="chip plain">' + esc(tp('lesson.exercises', items.length)) + '</span></div>' +
      '  <h1>' + esc(pack.title) + '</h1>' +
      '  <p class="lead">' + esc(pack.subtitle) + '</p>' +
      '  <p class="ex-hint" style="margin-top:.7rem;max-width:70ch">' + esc(pack.intro) + '</p>' +
      '</header>' +
      '<section class="card"><div id="fun-mount">' +
      '  <div class="actions">' +
      '    <button class="btn primary" id="start-fun">' + esc(t('fun.start', { n: items.length })) + '</button>' +
      (st ? '<span class="ex-hint">' + esc(t('fun.best', { best: st.best, total: st.total })) + '</span>' : '') +
      '  </div>' +
      '</div></section>';

    document.getElementById('start-fun').addEventListener('click', function () {
      var mount = document.getElementById('fun-mount');
      mount.scrollIntoView({ behavior: 'smooth', block: 'start' });
      runExercises(mount, items, {
        label: pack.title,
        exitLabel: t('fun.back'),
        onExit: function () { location.hash = '#/tull'; },
        onDone: function (res) {
          var prev = state.fun[pack.id];
          state.fun[pack.id] = {
            best: Math.max(prev ? prev.best : 0, res.correct),
            total: res.total,
            at: Date.now()
          };
          state.xp += res.correct * 10;
          markDay();

          if (!isMix) {
            items.forEach(function (it, i) {
              var sig = 'fun#' + pack.id + '#' + i;
              if (res.failed.indexOf(it) > -1) addReview(sig);
              else removeReview(sig);
            });
          }

          save();
          refreshHud();
          var box = mount.querySelector('.result');
          if (box) {
            box.insertAdjacentHTML('beforeend',
              '<p class="ex-hint">' + esc(t('result.progress', { n: res.correct * 10 })) + '</p>');
          }
        }
      });
    });
  }

  function renderHome() {
    var done = completedCount();
    var total = LESSONS.length;
    var pct = Math.round((done / total) * 100);
    var nl = nextLesson();
    var w = wordOfDay();

    app.innerHTML =
      '<section class="hero">' +
      '  <div class="hero-text">' +
      '    <span class="eyebrow">' + esc(t('home.eyebrow')) + '</span>' +
      '    <h1>' + t('home.title') + '</h1>' +
      '    <p>' + esc(t('home.intro', {
        lessons: LESSONS.length,
        exercises: totalExerciseCount(),
        packs: COURSE.fun.packs.length,
        words: COURSE.wordbank.length
      })) + '</p>' +
      '    <div class="hero-actions">' +
      '      <a class="btn primary" href="#/leksjon/' + nl.id + '">' + esc(done ? t('home.continue') : t('home.start')) + ' · ' + esc(nl.title) + '</a>' +
      '      <a class="btn ghost" href="#/samtaler">' + esc(t('nav.dialogues')) + '</a>' +
      '      <a class="btn ghost" href="#/tull">Tull &amp; tøys</a>' +
      '      <a class="btn ghost" href="#/coloquial">' + esc(t('home.street')) + '</a>' +
      '    </div>' +
      '  </div>' +
      '  <aside class="hero-card">' +
      '    <div><h3>' + esc(t('home.streak')) + '</h3><div class="big-num">' + currentStreak() + ' <small>' + esc(tp('home.days', currentStreak())) + '</small></div></div>' +
      '    <div><h3>' + esc(t('home.lessons')) + '</h3><div class="big-num">' + done + ' <small>' + esc(t('home.of', { n: total })) + '</small></div>' +
      '      <div class="meter" style="margin-top:.5rem"><i style="width:' + pct + '%"></i></div></div>' +
      '    <div class="wotd">' +
      '      <div class="w-label">' + esc(t('home.wordOfDay')) + '</div>' +
      '      <div class="w-no">' + esc(w.no) + ' ' + say(w.no) + '</div>' +
      '      <div class="w-es">' + esc(w.es) + '</div>' +
      '    </div>' +
      '  </aside>' +
      '</section>' +

      levelSection(t('home.basicTitle'), t('home.basicSub'), ['A1', 'A2']) +
      levelSection(t('home.b1Title'), t('home.b1Sub'), ['B1']) +
      levelSection(t('home.b2Title'), t('home.b2Sub'), ['B2']) +
      levelSection(t('home.c1Title'), t('home.c1Sub'), ['C1']) +
      levelSection(t('home.c2Title'), t('home.c2Sub'), ['C2']) +

      '<section class="dialogue-banner">' +
      '  <div>' +
      '    <span class="eyebrow">' + esc(t('home.dialogueEyebrow')) + '</span>' +
      '    <h2>' + esc(t('home.dialogueTitle')) + '</h2>' +
      '    <p>' + esc(t('home.dialogueText', { n: DIALOGUES.length })) + '</p>' +
      '  </div>' +
      '  <div class="fun-banner-actions">' +
      '    <a class="btn primary" href="#/samtaler">' + esc(t('home.dialogueEnter')) + '</a>' +
      '  </div>' +
      '</section>' +
      '<div class="grid" style="margin-top:1rem">' + DIALOGUES.slice(0, 3).map(dialogueCard).join('') + '</div>' +
      '<div class="actions" style="margin-top:1rem"><a class="btn ghost" href="#/samtaler">' +
      esc(tp('home.seeDialogues', DIALOGUES.length)) + '</a></div>' +

      '<section class="chat-banner">' +
      '  <div>' +
      '    <span class="eyebrow">' + esc(t('home.chatEyebrow')) + '</span>' +
      '    <h2>' + esc(t('home.chatTitle')) + '</h2>' +
      '    <p>' + esc(t('home.chatText', { n: CHATS.length })) + '</p>' +
      '  </div>' +
      '  <div class="fun-banner-actions">' +
      '    <a class="btn primary" href="#/meldinger">' + esc(t('home.chatEnter')) + '</a>' +
      '  </div>' +
      '</section>' +

      '<section class="exam-banner">' +
      '  <div>' +
      '    <span class="eyebrow">' + esc(t('exam.eyebrow')) + '</span>' +
      '    <h2>' + esc(t('exam.title')) + '</h2>' +
      '    <p>' + esc(t('exam.homeText')) + '</p>' +
      '  </div>' +
      '  <div class="fun-banner-actions">' +
      '    <a class="btn primary" href="#/eksamen">' + esc(t('exam.start')) + '</a>' +
      '  </div>' +
      '</section>' +

      '<section class="fun-banner">' +
      '  <div>' +
      '    <span class="eyebrow">' + esc(t('home.funEyebrow')) + '</span>' +
      '    <h2>' + esc(t('home.funTitle')) + '</h2>' +
      '    <p>' + esc(t('home.funText', { n: funExerciseCount() })) + '</p>' +
      '  </div>' +
      '  <div class="fun-banner-actions">' +
      '    <a class="btn primary" href="#/tull">' + esc(t('home.funEnter')) + '</a>' +
      '    <a class="btn ghost" href="#/tull/mix">' + esc(t('home.mix')) + '</a>' +
      '  </div>' +
      '</section>' +

      '<h2 class="section-title">' + esc(t('home.streetTitle')) + ' <span>' + esc(t('home.streetSub')) + '</span></h2>' +
      '<div class="colo-grid">' + COURSE.colloquial.slice(0, 3).map(function (c) {
        return '<div class="colo-card">' +
          '<div class="head"><span class="term">' + esc(c.term) + '</span>' + say(c.term) +
          '<span class="reg ' + regBucket(c.register) + '">' + esc(I18N.regLabel(c.register)) + '</span></div>' +
          '<p class="meaning">' + esc(c.meaning) + '</p></div>';
      }).join('') + '</div>' +
      '<div class="actions" style="margin-top:1rem"><a class="btn ghost" href="#/coloquial">' +
      esc(tp('home.seeExpressions', COURSE.colloquial.length)) + '</a></div>';
  }

  /* ---------------- Samtaler ---------------- */

  function renderDialogues() {
    var done = dialogueCompletedCount();
    var total = DIALOGUES.length;
    var pct = total ? Math.round((done / total) * 100) : 0;

    app.innerHTML =
      '<section class="colo-intro dialogue-intro">' +
      '  <span class="eyebrow">' + esc(t('dlg.eyebrow')) + '</span>' +
      '  <h1>' + esc(t('dlg.title')) + '</h1>' +
      '  <p>' + esc(t('dlg.intro', { n: total, exercises: dialogueExerciseCount() })) + '</p>' +
      '  <div class="dialogue-progress">' +
      '    <span>' + esc(t('dlg.progress', { done: done, total: total })) + '</span>' +
      '    <span class="meter"><i style="width:' + pct + '%"></i></span>' +
      '  </div>' +
      '</section>' +
      dialogueLevelSection(t('dlg.a2Title'), t('dlg.a2Sub'), ['A2']) +
      dialogueLevelSection(t('dlg.b1Title'), t('dlg.b1Sub'), ['B1']);
  }

  function renderDialogue(d) {
    var st = state.dialogues[d.id];
    var img = d.image || ('assets/img/dialogues/' + d.id + '.svg');
    var imgAlt = d.imageAlt || d.title;

    app.innerHTML =
      '<div class="crumbs"><a href="#/samtaler">' + esc(t('dlg.crumb')) + '</a> <span>›</span> <span>' + esc(d.title) + '</span></div>' +

      '<header class="lesson-head dialogue-head">' +
      '  <div class="lesson-copy">' +
      '  <div class="kicker"><span class="emoji">' + d.emoji + '</span>' +
      '    <span class="chip">' + d.level + '</span>' +
      '    <span class="chip plain">' + esc(tp('dlg.lines', d.lines.length)) + '</span>' +
      '    <span class="chip plain">' + esc(tp('lesson.exercises', d.exercises.length)) + '</span></div>' +
      '  <h1>' + esc(d.title) + '</h1>' +
      '  <p class="lead">' + esc(d.subtitle) + '</p>' +
      '  <p class="dlg-intro-text">' + esc(d.intro) + '</p>' +
      '  </div>' +
      '  <figure class="lesson-hero"><img src="' + esc(img) + '" alt="' + esc(imgAlt) + '" width="800" height="500" decoding="async"></figure>' +
      '</header>' +

      '<section class="card"><div class="dialogue-toolbar">' +
      '<h2>' + esc(t('dlg.dialogue')) + '</h2>' +
      '<button class="btn ghost small" id="toggle-tr" aria-expanded="false">' + esc(t('dlg.showTranslations')) + '</button>' +
      '</div><div class="dialogue">' +
      d.lines.map(function (l) {
        var me = l.who === 'Du';
        return '<div class="dline' + (me ? ' me' : '') + '">' +
          '<span class="davatar" aria-hidden="true">' + esc(l.who.slice(0, 2)) + '</span>' +
          '<div class="dbubble">' +
          '<div class="dmeta"><span class="dwho">' + esc(l.who) + '</span>' + say(l.no) + '</div>' +
          '<div class="dno">' + esc(l.no) + '</div>' +
          '<div class="des" hidden>' + esc(l.es) + '</div>' +
          '</div></div>';
      }).join('') +
      '</div></section>' +

      '<section class="card"><h2>' + esc(t('dlg.vocab')) + '</h2><div class="vocab">' +
      d.vocab.map(function (v) {
        return '<div class="row">' + say(v.no) +
          '<span class="txt"><span class="w">' + esc(v.no) + '</span>' +
          '<span class="t">' + esc(v.es) + '</span></span></div>';
      }).join('') +
      '</div></section>' +

      '<section class="card"><h2>' + esc(t('dlg.phrases')) + '</h2><div class="phrases">' +
      d.phrases.map(function (p) {
        return '<div class="phrase">' + say(p.no) +
          '<span class="txt"><span class="no">' + esc(p.no) + '</span>' +
          '<span class="es">' + esc(p.es) + '</span></span></div>';
      }).join('') +
      '</div></section>' +

      '<section class="card"><div class="tip">💡 <b>' + esc(t('dlg.tip')) + ':</b> ' + esc(d.tip) + '</div></section>' +

      '<section class="card" id="practice"><h2>' + esc(t('dlg.practice')) + '</h2><div id="ex-mount"></div></section>';

    var toggle = document.getElementById('toggle-tr');
    toggle.addEventListener('click', function () {
      var show = toggle.getAttribute('aria-expanded') !== 'true';
      app.querySelectorAll('.dialogue .des').forEach(function (el) { el.hidden = !show; });
      toggle.setAttribute('aria-expanded', show ? 'true' : 'false');
      toggle.textContent = show ? t('dlg.hideTranslations') : t('dlg.showTranslations');
    });

    var mount = document.getElementById('ex-mount');
    mount.innerHTML =
      '<div class="actions">' +
      '<button class="btn primary" id="start-ex">' + esc(t('dlg.start', { n: d.exercises.length })) + '</button>' +
      (st ? '<span class="ex-hint">' + esc(t('dlg.best', { best: st.best, total: st.total })) + '</span>' : '') +
      '</div>';

    document.getElementById('start-ex').addEventListener('click', function () {
      document.getElementById('practice').scrollIntoView({ behavior: 'smooth', block: 'start' });
      runExercises(mount, d.exercises, {
        label: t('dlg.label', { title: d.title }),
        onDone: function (res) {
          var prev = state.dialogues[d.id];
          state.dialogues[d.id] = {
            best: Math.max(prev ? prev.best : 0, res.correct),
            total: res.total,
            at: Date.now()
          };
          state.xp += res.correct * 10;
          markDay();

          var failedIds = res.failed.map(function (it) { return d.exercises.indexOf(it); });
          d.exercises.forEach(function (_, i) {
            var sig = 'dlg#' + d.id + '#' + i;
            if (failedIds.indexOf(i) > -1) addReview(sig);
            else removeReview(sig);
          });

          save();
          refreshHud();

          var box = mount.querySelector('.result');
          if (box) {
            box.insertAdjacentHTML('beforeend',
              '<p class="ex-hint">' + esc(t('result.progress', { n: res.correct * 10 })) + '</p>');
          }
        }
      });
    });
  }

  /* ---------------- Meldinger ---------------- */

  function renderChats() {
    app.innerHTML =
      '<section class="colo-intro chat-intro">' +
      '  <span class="eyebrow">' + esc(t('chat.eyebrow')) + '</span>' +
      '  <h1>' + esc(t('chat.title')) + '</h1>' +
      '  <p>' + esc(t('chat.intro', { n: CHATS.length })) + '</p>' +
      '</section>' +
      chatLevelSection(t('chat.a2Title'), t('chat.a2Sub'), ['A2']) +
      chatLevelSection(t('chat.b1Title'), t('chat.b1Sub'), ['B1']);
  }

  function renderChat(c) {
    var people = {};
    c.people.forEach(function (p) { people[p.id] = p; });

    app.innerHTML =
      '<div class="crumbs"><a href="#/meldinger">' + esc(t('chat.crumb')) + '</a> <span>›</span> <span>' + esc(c.title) + '</span></div>' +

      '<header class="chat-head-block">' +
      '  <div class="kicker"><span class="emoji">' + c.emoji + '</span>' +
      '    <span class="chip">' + c.level + '</span>' +
      '    <span class="chip plain">' + esc(tp('chat.members', c.people.length)) + '</span>' +
      '    <span class="chip plain">' + esc(tp('chat.messages', c.messages.length)) + '</span></div>' +
      '  <h1>' + esc(c.title) + '</h1>' +
      '  <p class="lead">' + esc(c.subtitle) + '</p>' +
      '  <p class="dlg-intro-text">' + esc(c.intro) + '</p>' +
      '</header>' +

      '<section class="card"><div class="dialogue-toolbar">' +
      '<h2>' + esc(t('chat.group')) + '</h2>' +
      '<button class="btn ghost small" id="toggle-tr" aria-expanded="false">' + esc(t('dlg.showTranslations')) + '</button>' +
      '</div>' +
      '<div class="chatphone">' +
      '  <div class="chat-topbar">' +
      '    <span class="chat-back" aria-hidden="true">‹</span>' +
      '    <span class="chat-ava" aria-hidden="true">' + c.emoji + '</span>' +
      '    <span class="chat-titles"><b>' + esc(c.title) + '</b>' +
      '    <small>' + esc(tp('chat.members', c.people.length)) + ' · ' + esc(t('chat.online')) + '</small></span>' +
      '    <span class="chat-ico" aria-hidden="true">📞</span>' +
      '  </div>' +
      '  <div class="chat-body">' +
      '    <div class="daysep"><span>' + esc(c.day) + '</span></div>' +
      c.messages.map(function (m) {
        var me = m.who === 'me';
        var person = people[m.who] || { name: m.who, color: 'inherit' };
        return '<div class="cmsg' + (me ? ' me' : '') + '"><div class="cbub">' +
          (me ? '' : '<span class="cname" style="color:' + esc(person.color) + '">' + esc(person.name) + '</span>') +
          '<p class="cno">' + esc(m.no) + '</p>' +
          '<p class="ces" hidden>' + esc(m.es) + '</p>' +
          '<span class="ctime">' + esc(m.time) + (me ? ' <i class="ticks" aria-hidden="true">✓✓</i>' : '') + '</span>' +
          '</div></div>';
      }).join('') +
      '  </div>' +
      '  <div class="chat-input"><span class="chat-input-text">' + esc(t('chat.input')) + '</span>' +
      '  <span aria-hidden="true">😊&nbsp;&nbsp;🎤</span></div>' +
      '</div></section>' +

      '<section class="card"><h2>' + esc(t('chat.glossary')) + '</h2><div class="glossary">' +
      c.glossary.map(function (g) {
        return '<div class="g-item"><span class="g-no">' + esc(g.no) + '</span>' +
          '<span class="g-es">' + esc(g.es) + '</span></div>';
      }).join('') +
      '</div></section>' +

      '<section class="card"><div class="tip">💡 <b>' + esc(t('dlg.tip')) + ':</b> ' + esc(c.tip) + '</div></section>';

    var toggle = document.getElementById('toggle-tr');
    toggle.addEventListener('click', function () {
      var show = toggle.getAttribute('aria-expanded') !== 'true';
      app.querySelectorAll('.chat-body .ces').forEach(function (el) { el.hidden = !show; });
      toggle.setAttribute('aria-expanded', show ? 'true' : 'false');
      toggle.textContent = show ? t('dlg.hideTranslations') : t('dlg.showTranslations');
    });
  }

  function renderLesson(lesson) {
    var st = state.lessons[lesson.id];
    var fold = /^B/.test(lesson.level);
    var img = lesson.image || ('assets/img/lessons/' + lesson.id + '.svg');
    var imgAlt = lesson.imageAlt || lesson.title;

    app.innerHTML =
      '<div class="crumbs"><a href="#/">' + esc(t('lesson.crumb')) + '</a> <span>›</span> <span>' + esc(t('lesson.breadcrumb', { n: lesson.num })) + '</span></div>' +

      '<header class="lesson-head">' +
      '  <div class="lesson-copy">' +
      '  <div class="kicker"><span class="emoji">' + lesson.emoji + '</span>' +
      '    <span class="chip">' + lesson.level + '</span>' +
      '    <span class="chip plain">' + esc(tp('lesson.exercises', lesson.exercises.length)) + '</span></div>' +
      '  <h1>' + esc(lesson.title) + '</h1>' +
      '  <p class="lead">' + esc(lesson.subtitle) + '</p>' +
      '  <div class="goals">' + lesson.goals.map(function (g) { return '<span class="goal">' + esc(g) + '</span>'; }).join('') + '</div>' +
      '  </div>' +
      '  <figure class="lesson-hero"><img src="' + esc(img) + '" alt="' + esc(imgAlt) + '" width="800" height="500" decoding="async"></figure>' +
      '</header>' +

      '<section class="card"><h2>' + esc(t('lesson.text')) + (fold ? ' <span class="h2-note">' + esc(t('lesson.folded')) + '</span>' : '') +
      '</h2><div class="text-body">' +
      lesson.text.map(function (p, i) {
        return '<div class="para">' + say(p.no) +
          '<div class="lines"><span class="no">' + esc(p.no) + '</span>' +
          (fold
            ? '<button class="t-toggle" data-t="' + i + '" aria-expanded="false" aria-controls="tr-' + i + '">' + esc(t('lesson.showTranslation')) + '</button>' +
              '<span class="es trans" id="tr-' + i + '" hidden>' + esc(p.es) + '</span>'
            : '<span class="es">' + esc(p.es) + '</span>') +
          '</div></div>';
      }).join('') +
      '</div></section>' +

      (lesson.grammar
        ? '<section class="card grammar"><h2>' + esc(t('lesson.grammar')) + ' · ' + esc(lesson.grammar.title) + '</h2>' +
          '<ul class="grammar-points">' + lesson.grammar.points.map(function (pt) {
            return '<li>' + esc(pt) + '</li>';
          }).join('') + '</ul>' +
          '<div class="grammar-ex">' + lesson.grammar.examples.map(function (ex) {
            return '<div class="gx">' + say(ex.no) +
              '<span class="txt"><span class="no">' + esc(ex.no) + '</span>' +
              '<span class="es">' + esc(ex.es) + '</span></span></div>';
          }).join('') + '</div></section>'
        : '') +

      '<section class="card"><h2>' + esc(t('lesson.vocab')) + '</h2><div class="vocab">' +
      lesson.vocab.map(function (v) {
        return '<div class="row">' + say(v.no) +
          '<span class="txt"><span class="w">' + esc(v.no) + '</span>' +
          '<span class="t">' + esc(v.es) + (v.note ? ' · ' + esc(v.note) : '') + '</span></span></div>';
      }).join('') +
      '</div></section>' +

      '<section class="card"><h2>' + esc(t('lesson.phrases')) + '</h2><div class="phrases">' +
      lesson.phrases.map(function (p) {
        return '<div class="phrase">' + say(p.no) +
          '<span class="txt"><span class="no">' + esc(p.no) + '</span>' +
          '<span class="es">' + esc(p.es) + '</span></span></div>';
      }).join('') +
      '</div></section>' +

      '<section class="card"><div class="tip">💡 <b>' + esc(t('lesson.tip')) + '</b> ' + esc(lesson.tip) + '</div></section>' +

      '<section class="card" id="practice"><h2>' + esc(t('lesson.practice')) + '</h2><div id="ex-mount"></div></section>';

    app.querySelectorAll('.t-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var el = document.getElementById('tr-' + btn.dataset.t);
        if (!el) return;
        var show = el.hidden;
        el.hidden = !show;
        btn.textContent = show ? t('lesson.hideTranslation') : t('lesson.showTranslation');
        btn.setAttribute('aria-expanded', show ? 'true' : 'false');
      });
    });

    var mount = document.getElementById('ex-mount');
    mount.innerHTML =
      '<div class="actions">' +
      '<button class="btn primary" id="start-ex">' + esc(t('lesson.start', { n: lesson.exercises.length })) + '</button>' +
      (st ? '<span class="ex-hint">' + esc(t('lesson.best', { best: st.best, total: st.total })) + '</span>' : '') +
      '</div>';

    document.getElementById('start-ex').addEventListener('click', function () {
      document.getElementById('practice').scrollIntoView({ behavior: 'smooth', block: 'start' });
      runExercises(mount, lesson.exercises, {
        label: t('lesson.label', { n: lesson.num }),
        onDone: function (res) {
          var prev = state.lessons[lesson.id];
          state.lessons[lesson.id] = {
            best: Math.max(prev ? prev.best : 0, res.correct),
            total: res.total,
            at: Date.now()
          };
          state.xp += res.correct * 10;
          markDay();

          var failedIds = res.failed.map(function (it) { return lesson.exercises.indexOf(it); });
          lesson.exercises.forEach(function (_, i) {
            var sig = lesson.id + '#' + i;
            if (failedIds.indexOf(i) > -1) addReview(sig);
            else removeReview(sig);
          });

          save();
          refreshHud();

          var box = mount.querySelector('.result');
          if (box) {
            box.insertAdjacentHTML('beforeend',
              '<p class="ex-hint">' + esc(t('result.progress', { n: res.correct * 10 })) + '</p>');
          }
        }
      });
    });
  }

  /* ---------------- coloquial ---------------- */

  function regBucket(r) {
    return r === 'muy informal' ? 'informal' : r;
  }

  var colo = { q: '', reg: 'all' };

  function coloFiltered() {
    var q = norm(colo.q);
    return COURSE.colloquial.filter(function (c) {
      if (colo.reg !== 'all' && regBucket(c.register) !== colo.reg) return false;
      if (!q) return true;
      var hay = [c.term, c.literal, c.meaning, c.tip].concat(
        c.example.map(function (e) { return e.no + ' ' + e.es; })
      ).join(' ');
      return norm(hay).indexOf(q) > -1;
    });
  }

  function coloListHTML() {
    var items = coloFiltered();
    if (!items.length) {
      return '<div class="empty"><span class="big">🔍</span>' + esc(t('colo.none')) + '</div>';
    }
    return '<div class="colo-grid">' + items.map(function (c) {
      return '<article class="colo-card">' +
        '<div class="head"><span class="term">' + esc(c.term) + '</span>' + say(c.term) +
        '<span class="reg ' + regBucket(c.register) + '">' + esc(I18N.regLabel(c.register)) + '</span></div>' +
        '<span class="literal">' + esc(t('colo.literal')) + esc(c.literal) + '</span>' +
        '<p class="meaning">' + esc(c.meaning) + '</p>' +
        '<div class="dialogue">' + c.example.map(function (e) {
          return '<div class="line"><span class="who">' + esc(e.who) + '</span>' + say(e.no) +
            '<span><span class="no">' + esc(e.no) + '</span>' +
            '<span class="es">' + esc(e.es) + '</span></span></div>';
        }).join('') + '</div>' +
        '<div class="tip">💡 ' + esc(c.tip) + '</div>' +
        '</article>';
    }).join('') + '</div>';
  }

  function renderColoquial() {
    var regs = [
      { key: 'all', label: t('colo.all') },
      { key: 'neutro', label: t('reg.neutro') },
      { key: 'informal', label: t('reg.informal') },
      { key: 'fuerte', label: t('reg.fuerte') },
      { key: 'vulgar', label: t('reg.vulgar') },
      { key: 'oral', label: t('reg.oral') }
    ];

    app.innerHTML =
      '<section class="colo-intro">' +
      '  <h1>' + esc(t('colo.title')) + '</h1>' +
      '  <p>' + esc(t('colo.intro')) + '</p>' +
      '</section>' +
      '<div class="filters">' +
      '  <input id="q" type="search" placeholder="' + esc(t('colo.search')) + '" value="' + esc(colo.q) + '" aria-label="' + esc(t('fun.searchLabel')) + '">' +
      regs.map(function (r) {
        return '<button class="fchip ' + (colo.reg === r.key ? 'active' : '') + '" data-reg="' + r.key + '">' + r.label + '</button>';
      }).join('') +
      '</div>' +
      '<div id="colo-list">' + coloListHTML() + '</div>';

    var input = document.getElementById('q');
    input.addEventListener('input', function () {
      colo.q = input.value;
      document.getElementById('colo-list').innerHTML = coloListHTML();
    });

    app.querySelectorAll('[data-reg]').forEach(function (b) {
      b.addEventListener('click', function () {
        colo.reg = b.dataset.reg;
        app.querySelectorAll('[data-reg]').forEach(function (x) {
          x.classList.toggle('active', x === b);
        });
        document.getElementById('colo-list').innerHTML = coloListHTML();
      });
    });
  }

  /* ---------------- repaso ---------------- */

  function reviewEntries() {
    var out = [];
    state.review.forEach(function (sig) {
      var parts = sig.split('#');
      if (parts[0] === 'fun') {
        var pack = COURSE.fun.packs.find(function (p) { return p.id === parts[1]; });
        var funItem = pack && pack.exercises[Number(parts[2])];
        if (pack && funItem) {
          out.push({ sig: sig, item: funItem, title: pack.title, emoji: pack.emoji, label: t('fun.mixLabel') });
        }
        return;
      }
      if (parts[0] === 'dlg') {
        var dialogue = DIALOGUES.find(function (d) { return d.id === parts[1]; });
        var dlgItem = dialogue && dialogue.exercises[Number(parts[2])];
        if (dialogue && dlgItem) {
          out.push({ sig: sig, item: dlgItem, title: dialogue.title, emoji: dialogue.emoji, label: t('dlg.reviewLabel', { level: dialogue.level }) });
        }
        return;
      }
      var lesson = LESSONS.find(function (l) { return l.id === parts[0]; });
      var item = lesson && lesson.exercises[Number(parts[1])];
      if (lesson && item) {
        out.push({ sig: sig, item: item, title: lesson.title, emoji: lesson.emoji, label: t('review.lessonLabel', { n: lesson.num }) });
      }
    });
    return out;
  }

  function renderReview() {
    var entries = reviewEntries();

    if (!entries.length) {
      app.innerHTML =
        '<div class="review-head"><div><h1>' + esc(t('review.title')) + '</h1>' +
        '<p>' + esc(t('review.intro')) + '</p></div></div>' +
        '<div class="empty"><span class="big">🌱</span>' +
        t('review.empty') + '</div>';
      return;
    }

    app.innerHTML =
      '<div class="review-head"><div><h1>' + esc(t('review.title')) + '</h1>' +
      '<p>' + esc(tp('review.pending', entries.length)) + '</p></div>' +
      '<button class="btn primary" id="start-review">' + esc(t('review.all')) + '</button></div>' +
      '<div class="review-list">' + entries.map(function (e) {
        return '<div class="review-item">' +
          '<span class="chip plain">' + esc(e.emoji) + ' ' + esc(e.label) + '</span>' +
          '<div class="meta"><b>' + esc(preview(e.item)) + '</b>' +
          '<span>' + esc(e.title) + '</span></div></div>';
      }).join('') + '</div>' +
      '<section class="card" id="review-mount" style="display:none;margin-top:1rem"></section>';

    document.getElementById('start-review').addEventListener('click', function () {
      var box = document.getElementById('review-mount');
      box.style.display = 'block';
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
      runExercises(box, entries.map(function (e) { return e.item; }), {
        label: t('review.label'),
        exitLabel: t('result.finish'),
        onExit: renderReview,
        onDone: function (res) {
          var failedSet = res.failed;
          entries.forEach(function (e) {
            if (failedSet.indexOf(e.item) === -1) removeReview(e.sig);
          });
          markDay();
          state.xp += res.correct * 5;
          save();
          refreshHud();
          var b = box.querySelector('.result');
          if (b) b.insertAdjacentHTML('beforeend', '<p class="ex-hint">' + esc(t('result.reviewSaved', { n: res.correct * 5 })) + '</p>');
        }
      });
    });
  }

  /* =======================================================
     Simulacro de examen
     ======================================================= */

  var EXAMS = (COURSE.exam && COURSE.exam.levels) || [];
  var ORDER = ['A1', 'A2', 'B1', 'B2'];
  var ex = null;
  var exTimer = null;

  function examById(id) {
    return EXAMS.find(function (e) { return e.id === id; });
  }

  function clearExamTimer() {
    if (exTimer) { clearInterval(exTimer); exTimer = null; }
    if (ex && ex.tick) { clearInterval(ex.tick); ex.tick = null; }
  }

  function fmtClock(sec) {
    sec = Math.max(0, Math.ceil(sec));
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function ratioLevel(level, ratio) {
    var i = ORDER.indexOf(level);
    if (ratio >= 0.8) return level;
    if (ratio >= 0.55) return i > 0 ? ORDER[i - 1] : 'under';
    return 'under';
  }

  function levelText(level, lv) {
    return lv === 'under' ? t('exam.underLevel', { level: level }) : lv;
  }

  function wordCount(s) {
    return String(s || '').trim().split(/\s+/).filter(Boolean).length;
  }

  function readingTotal(lv) {
    return lv.reading.texts.reduce(function (n, tx) { return n + tx.questions.length; }, 0);
  }

  function examMinutes(lv) {
    return lv.reading.minutes + lv.listening.minutes + lv.writing.minutes + lv.speaking.minutes;
  }

  function checkedTotal(lv, skill) {
    return lv[skill].tasks.reduce(function (n, tk) { return n + tk.checklist.length; }, 0);
  }

  function checkedCount(skill) {
    var set = ex.checks[skill] || {};
    var n = 0;
    Object.keys(set).forEach(function (k) { if (set[k]) n++; });
    return n;
  }

  function examPartKey() {
    return ex.part === 'wcheck' || ex.part === 'scheck' ? 'check' : ex.part;
  }

  function startPartTimer(minutes, onEnd) {
    clearExamTimer();
    var end = Date.now() + minutes * 60000;
    ex.remaining = minutes * 60;
    exTimer = setInterval(function () {
      ex.remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000));
      var el = document.getElementById('exam-clock');
      if (el) {
        el.textContent = fmtClock(ex.remaining);
        el.classList.toggle('low', ex.remaining <= 60);
      }
      if (ex.remaining <= 0) {
        clearExamTimer();
        onEnd();
      }
    }, 250);
  }

  function goPart(part) {
    ex.part = part;
    clearExamTimer();
    if (part === 'reading') {
      ex.ti = ex.ti || 0;
      startPartTimer(ex.lv.reading.minutes, function () { ex.note = t('exam.timeUp'); goPart('listening'); });
    } else if (part === 'listening') {
      ex.li = ex.li || 0;
      startPartTimer(ex.lv.listening.minutes, function () { ex.note = t('exam.timeUp'); goPart('writing'); });
    } else if (part === 'writing') {
      ex.wi = ex.wi || 0;
      startPartTimer(ex.lv.writing.minutes, function () { ex.note = t('exam.timeUp'); goPart('wcheck'); });
    } else if (part === 'speaking') {
      ex.si = ex.si || 0;
      startPartTimer(ex.lv.speaking.minutes, function () { ex.note = t('exam.timeUp'); goPart('scheck'); });
    }
    renderExamPart();
  }

  function examShell(inner) {
    var timed = ['reading', 'listening', 'writing', 'speaking'].indexOf(ex.part) > -1;
    app.innerHTML =
      '<div class="crumbs"><a href="#/eksamen">' + esc(t('exam.crumb')) + '</a> <span>›</span> <span>' + esc(ex.lv.title) + '</span></div>' +
      (timed
        ? '<div class="exam-bar">' +
            '<span class="exam-part">' + esc(t('exam.part.' + examPartKey())) + '</span>' +
            '<span class="exam-timeleft">' + esc(t('exam.timeLeft')) + '</span>' +
            '<span class="exam-clock' + (ex.remaining <= 60 ? ' low' : '') + '" id="exam-clock">' + fmtClock(ex.remaining) + '</span>' +
          '</div>'
        : '') +
      (ex.note ? '<p class="exam-note">⏰ ' + esc(ex.note) + '</p>' : '') +
      inner;
  }

  function examOption(q, key, selected, group) {
    return '<div class="options">' + q.options.map(function (o, i) {
      return '<button class="opt' + (selected === i ? ' sel' : '') + '" aria-pressed="' + (selected === i ? 'true' : 'false') + '" data-exam-group="' + group + '" data-exam-key="' + esc(key) + '" data-exam-opt="' + i + '">' +
        '<span class="key">' + 'ABCD'[i] + '</span><span>' + esc(o) + '</span></button>';
    }).join('') + '</div>';
  }

  function bindExamOptions() {
    app.querySelectorAll('[data-exam-group]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var group = btn.dataset.examGroup;
        var key = btn.dataset.examKey;
        var val = Number(btn.dataset.examOpt);
        var store = group === 'r' ? ex.ans.r : ex.ans.l;
        store[key] = val;
        app.querySelectorAll('[data-exam-group="' + group + '"][data-exam-key="' + key + '"]').forEach(function (b) {
          var on = Number(b.dataset.examOpt) === val;
          b.classList.toggle('sel', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
      });
    });
  }

  function renderExamReading() {
    var lv = ex.lv;
    var tx = lv.reading.texts[ex.ti];
    var nTexts = lv.reading.texts.length;
    var body =
      '<header class="lesson-head"><div class="lesson-copy">' +
        '<div class="kicker"><span class="chip">' + esc(lv.level) + '</span>' +
        '<span class="chip plain">' + esc(t('exam.textN', { n: ex.ti + 1, total: nTexts })) + '</span></div>' +
        '<h1>' + esc(t('exam.part.reading')) + '</h1>' +
        '<p class="lead">' + esc(t('exam.readNote')) + '</p>' +
      '</div></header>' +
      '<section class="card exam-text">' +
        '<h2>' + esc(tx.title) + '</h2>' +
        '<div class="text-body">' + tx.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>' +
      '</section>' +
      '<section class="card">' + tx.questions.map(function (q, qi) {
        var key = ex.ti + ':' + qi;
        return '<div class="exam-q">' +
          '<p class="exam-q-text"><b>' + (qi + 1) + '.</b> ' + esc(q.q) + '</p>' +
          examOption(q, key, ex.ans.r[key], 'r') + '</div>';
      }).join('') + '</section>' +
      '<div class="actions exam-nav">' +
        (ex.ti > 0 ? '<button class="btn ghost" id="ex-prev">' + esc(t('exam.prev')) + '</button>' : '') +
        (ex.ti + 1 < nTexts
          ? '<button class="btn primary" id="ex-next">' + esc(t('exam.next')) + '</button>'
          : '<button class="btn primary" id="ex-finish">' + esc(t('exam.finishReading')) + '</button>') +
        (ex.ti + 1 < nTexts ? '<button class="btn ghost small" id="ex-finish">' + esc(t('exam.finishReading')) + '</button>' : '') +
      '</div>';
    examShell(body);
    bindExamOptions();
    var prev = document.getElementById('ex-prev');
    if (prev) prev.addEventListener('click', function () { ex.note = ''; ex.ti--; renderExamPart(); });
    var next = document.getElementById('ex-next');
    if (next) next.addEventListener('click', function () { ex.note = ''; ex.ti++; renderExamPart(); });
    var fin = document.getElementById('ex-finish');
    if (fin) fin.addEventListener('click', function () { ex.note = ''; goPart('listening'); });
  }

  function renderExamListening() {
    var lv = ex.lv;
    var it = lv.listening.items[ex.li];
    var n = lv.listening.items.length;
    var body =
      '<header class="lesson-head"><div class="lesson-copy">' +
        '<div class="kicker"><span class="chip">' + esc(lv.level) + '</span>' +
        '<span class="chip plain">' + esc(t('exam.questionN', { n: ex.li + 1, total: n })) + '</span></div>' +
        '<h1>' + esc(t('exam.part.listening')) + '</h1>' +
        '<p class="lead">' + esc(t('exam.listenNote')) + '</p>' +
      '</div></header>' +
      '<section class="card">' +
        '<div class="listen-box">' +
          '<button class="btn primary" data-say="' + esc(it.audio) + '">' + esc(t('ex.listen')) + '</button>' +
        '</div>' +
        '<div class="exam-q" style="margin-top:1rem">' +
          '<p class="exam-q-text">' + esc(it.q) + '</p>' +
          examOption(it, String(ex.li), ex.ans.l[String(ex.li)], 'l') +
        '</div>' +
      '</section>' +
      '<div class="actions exam-nav">' +
        (ex.li > 0 ? '<button class="btn ghost" id="ex-prev">' + esc(t('exam.prev')) + '</button>' : '') +
        (ex.li + 1 < n
          ? '<button class="btn primary" id="ex-next">' + esc(t('exam.next')) + '</button>'
          : '<button class="btn primary" id="ex-finish">' + esc(t('exam.finishListening')) + '</button>') +
        (ex.li + 1 < n ? '<button class="btn ghost small" id="ex-finish">' + esc(t('exam.finishListening')) + '</button>' : '') +
      '</div>';
    examShell(body);
    bindExamOptions();
    var prev = document.getElementById('ex-prev');
    if (prev) prev.addEventListener('click', function () { ex.note = ''; ex.li--; renderExamPart(); });
    var next = document.getElementById('ex-next');
    if (next) next.addEventListener('click', function () { ex.note = ''; ex.li++; renderExamPart(); });
    var fin = document.getElementById('ex-finish');
    if (fin) fin.addEventListener('click', function () { ex.note = ''; goPart('writing'); });
  }

  function renderExamWriting() {
    var lv = ex.lv;
    var tk = lv.writing.tasks[ex.wi];
    var n = lv.writing.tasks.length;
    var val = ex.txt[ex.wi] || '';
    var body =
      '<header class="lesson-head"><div class="lesson-copy">' +
        '<div class="kicker"><span class="chip">' + esc(lv.level) + '</span>' +
        '<span class="chip plain">' + esc(t('exam.taskN', { n: ex.wi + 1, total: n })) + '</span></div>' +
        '<h1>' + esc(t('exam.part.writing')) + '</h1>' +
        '<p class="lead">' + esc(t('exam.writeNote')) + '</p>' +
      '</div></header>' +
      '<section class="card">' +
        '<h2>' + esc(tk.title) + '</h2>' +
        '<p class="exam-prompt">' + esc(tk.prompt) + '</p>' +
        '<p class="ex-hint">' + esc(t('exam.wordsRange', { min: tk.minWords, max: tk.maxWords })) + '</p>' +
        '<textarea class="exam-ta" id="exam-ta" spellcheck="false" aria-label="' + esc(tk.title) + '">' + esc(val) + '</textarea>' +
        '<p class="ex-hint" id="exam-wc">' + esc(t('exam.words', { n: wordCount(val) })) + '</p>' +
      '</section>' +
      '<div class="actions exam-nav">' +
        (ex.wi > 0 ? '<button class="btn ghost" id="ex-prev">' + esc(t('exam.prev')) + '</button>' : '') +
        (ex.wi + 1 < n
          ? '<button class="btn primary" id="ex-next">' + esc(t('exam.next')) + '</button>'
          : '<button class="btn primary" id="ex-check">' + esc(t('exam.checkTitle')) + '</button>') +
        (ex.wi + 1 < n ? '<button class="btn ghost small" id="ex-check">' + esc(t('exam.checkTitle')) + '</button>' : '') +
      '</div>';
    examShell(body);
    var ta = document.getElementById('exam-ta');
    ta.addEventListener('input', function () {
      ex.txt[ex.wi] = ta.value;
      var wc = document.getElementById('exam-wc');
      if (wc) wc.textContent = t('exam.words', { n: wordCount(ta.value) });
    });
    ta.focus();
    var prev = document.getElementById('ex-prev');
    if (prev) prev.addEventListener('click', function () { ex.wi--; renderExamPart(); });
    var next = document.getElementById('ex-next');
    if (next) next.addEventListener('click', function () { ex.wi++; renderExamPart(); });
    var chk = document.getElementById('ex-check');
    if (chk) chk.addEventListener('click', function () { ex.note = ''; goPart('wcheck'); });
  }

  function renderExamCheck(skill, nextPart, finishKey) {
    var lv = ex.lv;
    var tasks = lv[skill].tasks;
    var store = ex.checks[skill] || (ex.checks[skill] = {});
    var body =
      '<header class="lesson-head"><div class="lesson-copy">' +
        '<div class="kicker"><span class="chip">' + esc(lv.level) + '</span>' +
        '<span class="chip plain">' + esc(t('exam.part.' + skill)) + '</span></div>' +
        '<h1>' + esc(t('exam.checkTitle')) + '</h1>' +
        '<p class="lead">' + esc(t('exam.checkIntro')) + '</p>' +
      '</div></header>' +
      tasks.map(function (tk, ti) {
        return '<section class="card"><h2>' + esc(tk.title) + '</h2>' +
          '<p class="exam-prompt">' + esc(tk.prompt) + '</p>' +
          (skill === 'writing'
            ? (ex.txt[ti]
              ? '<blockquote class="exam-usertext">' + esc(ex.txt[ti]) + '</blockquote>'
              : '<p class="ex-hint">' + esc(t('exam.noText')) + '</p>')
            : '') +
          '<div class="exam-check">' + tk.checklist.map(function (c, ci) {
            var key = ti + ':' + ci;
            return '<label><input type="checkbox" data-check-skill="' + skill + '" data-check-key="' + key + '"' +
              (store[key] ? ' checked' : '') + '> <span>' + esc(c) + '</span></label>';
          }).join('') + '</div></section>';
      }).join('') +
      '<div class="actions exam-nav"><button class="btn primary" id="ex-check-done">' + esc(t(finishKey)) + '</button></div>';
    examShell(body);
    app.querySelectorAll('[data-check-skill]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        store[cb.dataset.checkKey] = cb.checked;
      });
    });
    document.getElementById('ex-check-done').addEventListener('click', function () { ex.note = ''; goPart(nextPart); });
  }

  function renderExamSpeaking() {
    var lv = ex.lv;
    var tk = lv.speaking.tasks[ex.si];
    var n = lv.speaking.tasks.length;
    var body =
      '<header class="lesson-head"><div class="lesson-copy">' +
        '<div class="kicker"><span class="chip">' + esc(lv.level) + '</span>' +
        '<span class="chip plain">' + esc(t('exam.taskN', { n: ex.si + 1, total: n })) + '</span></div>' +
        '<h1>' + esc(t('exam.part.speaking')) + '</h1>' +
        '<p class="lead">' + esc(t('exam.speakNote')) + '</p>' +
      '</div></header>' +
      '<section class="card">' +
        '<h2>' + esc(tk.title) + '</h2>' +
        '<p class="exam-prompt">' + esc(tk.prompt) + '</p>' +
        '<div class="exam-speak">' +
          '<button class="btn ghost" id="ex-prep" data-s="' + tk.prepSeconds + '">' + esc(t('exam.prep', { s: tk.prepSeconds })) + '</button>' +
          '<button class="btn primary" id="ex-talk" data-s="' + tk.speakSeconds + '" hidden>' + esc(t('exam.speakNow', { s: tk.speakSeconds })) + '</button>' +
          '<span class="exam-count" id="ex-count"></span>' +
        '</div>' +
      '</section>' +
      '<div class="actions exam-nav">' +
        (ex.si > 0 ? '<button class="btn ghost" id="ex-prev">' + esc(t('exam.prev')) + '</button>' : '') +
        (ex.si + 1 < n
          ? '<button class="btn primary" id="ex-next">' + esc(t('exam.next')) + '</button>'
          : '<button class="btn primary" id="ex-check">' + esc(t('exam.checkTitle')) + '</button>') +
        (ex.si + 1 < n ? '<button class="btn ghost small" id="ex-check">' + esc(t('exam.checkTitle')) + '</button>' : '') +
      '</div>';
    examShell(body);
    var prep = document.getElementById('ex-prep');
    var talk = document.getElementById('ex-talk');
    var count = document.getElementById('ex-count');
    var tick = null;

    function countdown(sec, el, done) {
      if (tick) clearInterval(tick);
      var left = sec;
      if (el) el.textContent = fmtClock(left);
      tick = setInterval(function () {
        left--;
        if (el) el.textContent = fmtClock(left);
        if (left <= 0) {
          clearInterval(tick);
          tick = null;
          ex.tick = null;
          if (done) done();
        }
      }, 1000);
      ex.tick = tick;
    }

    prep.addEventListener('click', function () {
      prep.disabled = true;
      countdown(Number(prep.dataset.s), count, function () {
        talk.hidden = false;
        prep.hidden = true;
        if (count) count.textContent = t('exam.speakDone');
      });
    });

    talk.addEventListener('click', function () {
      talk.disabled = true;
      countdown(Number(talk.dataset.s), count, function () {
        talk.hidden = true;
        if (count) count.textContent = t('exam.speakDone');
      });
    });

    var prev = document.getElementById('ex-prev');
    if (prev) prev.addEventListener('click', function () { if (tick) clearInterval(tick); ex.si--; renderExamPart(); });
    var next = document.getElementById('ex-next');
    if (next) next.addEventListener('click', function () { if (tick) clearInterval(tick); ex.si++; renderExamPart(); });
    var chk = document.getElementById('ex-check');
    if (chk) chk.addEventListener('click', function () { if (tick) clearInterval(tick); ex.note = ''; goPart('scheck'); });
  }

  function examSummary() {
    var lv = ex.lv;
    var rTotal = readingTotal(lv);
    var rCorrect = 0;
    lv.reading.texts.forEach(function (tx, ti) {
      tx.questions.forEach(function (q, qi) {
        if (ex.ans.r[ti + ':' + qi] === q.answer) rCorrect++;
      });
    });
    var lTotal = lv.listening.items.length;
    var lCorrect = 0;
    lv.listening.items.forEach(function (it, i) {
      if (ex.ans.l[String(i)] === it.answer) lCorrect++;
    });
    var wTotal = checkedTotal(lv, 'writing');
    var wChecked = checkedCount('writing');
    var sTotal = checkedTotal(lv, 'speaking');
    var sChecked = checkedCount('speaking');
    return {
      reading: { correct: rCorrect, total: rTotal, level: ratioLevel(lv.level, rTotal ? rCorrect / rTotal : 0) },
      listening: { correct: lCorrect, total: lTotal, level: ratioLevel(lv.level, lTotal ? lCorrect / lTotal : 0) },
      writing: { correct: wChecked, total: wTotal, level: ratioLevel(lv.level, wTotal ? wChecked / wTotal : 0) },
      speaking: { correct: sChecked, total: sTotal, level: ratioLevel(lv.level, sTotal ? sChecked / sTotal : 0) }
    };
  }

  function renderExamResults() {
    var lv = ex.lv;
    var sum = examSummary();
    var skills = ['reading', 'listening', 'writing', 'speaking'];
    var rows = skills.map(function (k) {
      var s = sum[k];
      var pct = s.total ? Math.round((s.correct / s.total) * 100) : 0;
      return '<tr><td>' + esc(t('exam.skill.' + k)) + (k === 'writing' || k === 'speaking' ? ' <span class="ex-hint">(' + esc(t('exam.selfNote')) + ')</span>' : '') + '</td>' +
        '<td>' + s.correct + '/' + s.total + '</td>' +
        '<td><div class="meter"><i style="width:' + pct + '%"></i></div></td>' +
        '<td><b>' + esc(levelText(lv.level, s.level)) + '</b></td></tr>';
    }).join('');

    var wrong = [];
    lv.reading.texts.forEach(function (tx, ti) {
      tx.questions.forEach(function (q, qi) {
        var chosen = ex.ans.r[ti + ':' + qi];
        if (chosen !== q.answer) {
          wrong.push({ kind: t('exam.skill.reading'), q: q.q, chosen: chosen, right: q.answer, options: q.options, explain: q.explain });
        }
      });
    });
    lv.listening.items.forEach(function (it, i) {
      var chosen = ex.ans.l[String(i)];
      if (chosen !== it.answer) {
        wrong.push({ kind: t('exam.skill.listening'), q: it.q, chosen: chosen, right: it.answer, options: it.options, explain: it.explain });
      }
    });

    var review = wrong.length
      ? '<section class="card"><h2>' + esc(t('exam.reviewTitle')) + '</h2>' +
        wrong.map(function (w) {
          return '<div class="exam-wrong">' +
            '<p class="exam-q-text"><span class="chip plain">' + esc(w.kind) + '</span> ' + esc(w.q) + '</p>' +
            '<p class="ex-hint">' + esc(t('exam.yourAnswer')) + ': ' +
              (w.chosen == null ? esc(t('exam.noAnswer')) : esc(w.options[w.chosen])) + '</p>' +
            '<p class="exam-right"><b>' + esc(t('exam.correctAnswer')) + ':</b> ' + esc(w.options[w.right]) + '</p>' +
            (w.explain ? '<p class="ex-hint">' + esc(w.explain) + '</p>' : '') +
          '</div>';
        }).join('') + '</section>'
      : '';

    var models = '<section class="card"><h2>' + esc(t('exam.model')) + '</h2>' +
      lv.writing.tasks.map(function (tk) {
        return '<div class="exam-model"><p class="exam-q-text">' + esc(tk.title) + ' · ' + esc(t('exam.skill.writing')) + '</p>' +
          '<p class="exam-model-text">' + say(tk.model) + ' ' + esc(tk.model) + '</p></div>';
      }).join('') +
      lv.speaking.tasks.map(function (tk) {
        return '<div class="exam-model"><p class="exam-q-text">' + esc(tk.title) + ' · ' + esc(t('exam.skill.speaking')) + '</p>' +
          '<p class="exam-model-text">' + say(tk.model) + ' ' + esc(tk.model) + '</p></div>';
      }).join('') + '</section>';

    examShell(
      '<header class="lesson-head"><div class="lesson-copy">' +
        '<span class="eyebrow">' + esc(t('exam.resultsTitle')) + '</span>' +
        '<h1>' + esc(lv.title) + '</h1>' +
        '<p class="lead">' + esc(t('exam.resultsSub')) + '</p>' +
      '</div></header>' +
      '<section class="card"><div class="wtable-wrap"><table class="wtable exam-report"><thead><tr>' +
        '<th>' + esc(t('exam.skillLabel')) + '</th><th>' + esc(t('exam.scoreLabel')) + '</th><th></th><th>' + esc(t('exam.levelLabel')) + '</th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<p class="ex-hint" style="margin-top:.8rem">' + esc(COURSE.exam.disclaimer) + '</p></section>' +
      review + models +
      '<div class="actions exam-nav">' +
        '<button class="btn primary" id="ex-retry">' + esc(t('exam.retry')) + '</button>' +
        '<a class="btn ghost" href="#/eksamen">' + esc(t('exam.back')) + '</a>' +
      '</div>'
    );

    document.getElementById('ex-retry').addEventListener('click', function () {
      var lv2 = ex.lv;
      startExamSession(lv2);
    });

    if (!ex.saved) {
      ex.saved = true;
      var xp = (sum.reading.correct + sum.listening.correct) * 10 + (sum.writing.correct + sum.speaking.correct) * 2;
      state.exams[lv.id] = {
        at: Date.now(),
        reading: sum.reading,
        listening: sum.listening,
        writing: sum.writing,
        speaking: sum.speaking
      };
      state.xp += xp;
      markDay();
      save();
      refreshHud();
      var card = app.querySelector('.exam-report');
      if (card) card.insertAdjacentHTML('afterend',
        '<p class="ex-hint">' + esc(t('exam.saved', { n: xp })) + '</p>');
    }
  }

  function renderExamPart() {
    if (!ex) { renderExam(); return; }
    if (ex.part === 'reading') renderExamReading();
    else if (ex.part === 'listening') renderExamListening();
    else if (ex.part === 'writing') renderExamWriting();
    else if (ex.part === 'wcheck') renderExamCheck('writing', 'speaking', 'exam.toSpeaking');
    else if (ex.part === 'speaking') renderExamSpeaking();
    else if (ex.part === 'scheck') renderExamCheck('speaking', 'result', 'exam.seeReport');
    else renderExamResults();
  }

  function startExamSession(lv) {
    clearExamTimer();
    ex = {
      lv: lv,
      part: 'reading',
      ti: 0,
      li: 0,
      wi: 0,
      si: 0,
      remaining: 0,
      note: '',
      ans: { r: {}, l: {} },
      txt: {},
      checks: { writing: {}, speaking: {} },
      saved: false
    };
    if (location.hash !== '#/eksamen/' + lv.id) {
      location.hash = '#/eksamen/' + lv.id;
      return;
    }
    goPart('reading');
  }

  function examBestChips(id) {
    var r = state.exams[id];
    if (!r) return '';
    var order = [['reading', 'R'], ['listening', 'L'], ['writing', 'W'], ['speaking', 'M']];
    return '<div class="exam-best">' + order.map(function (p) {
      var s = r[p[0]];
      if (!s) return '';
      return '<span class="chip">' + p[1] + ' ' + esc(levelText(EXAMS.find(function (e) { return e.id === id; }).level, s.level)) + '</span>';
    }).join('') + '</div>';
  }

  function renderExam() {
    clearExamTimer();
    ex = null;
    app.innerHTML =
      '<section class="fun-hero exam-hero">' +
      '  <div class="fun-hero-text">' +
      '    <span class="eyebrow">' + esc(t('exam.eyebrow')) + '</span>' +
      '    <h1>' + esc(t('exam.title')) + '</h1>' +
      '    <p>' + esc(COURSE.exam.intro) + '</p>' +
      '    <div class="hero-actions">' +
      '      <a class="btn primary" href="#/eksamen/a1">' + esc(t('exam.startA1')) + '</a>' +
      '    </div>' +
      '  </div>' +
      '  <aside class="fun-hero-card">' +
      '    <div><h3>' + esc(t('exam.howtoTitle')) + '</h3>' +
      '      <ul class="exam-howto">' + COURSE.exam.howto.map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') + '</ul></div>' +
      '  </aside>' +
      '</section>' +
      '<p class="exam-note">ℹ️ ' + esc(COURSE.exam.disclaimer) + '</p>' +
      '<h2 class="section-title">' + esc(t('exam.levelsTitle')) + ' <span>' + esc(t('exam.levelsSub')) + '</span></h2>' +
      '<div class="exam-levels">' + EXAMS.map(function (lv) {
        return '<a class="exam-card" href="#/eksamen/' + lv.id + '">' +
          '<div class="exam-card-head"><span class="exam-level">' + esc(lv.level) + '</span>' +
          '<span class="chip plain">' + esc(t('exam.totalTime', { n: examMinutes(lv) })) + '</span></div>' +
          '<h3>' + esc(lv.title) + '</h3>' +
          '<p>' + esc(lv.blurb) + '</p>' +
          '<div class="exam-card-foot">' +
            '<span class="chip plain">' + esc(t('exam.questions', { n: readingTotal(lv) })) + '</span>' +
            '<span class="chip plain">' + esc(t('exam.audio', { n: lv.listening.items.length })) + '</span>' +
            '<span class="chip plain">' + esc(t('exam.tasks', { n: lv.writing.tasks.length + lv.speaking.tasks.length })) + '</span>' +
          '</div>' +
          examBestChips(lv.id) +
          '<span class="go">' + esc(t('exam.start')) + ' →</span>' +
        '</a>';
      }).join('') + '</div>';
  }

  function renderExamLevel(id) {
    var lv = examById(id);
    if (!lv) { renderExam(); return; }
    if (ex && ex.lv.id === id) { renderExamPart(); return; }
    clearExamTimer();
    app.innerHTML =
      '<div class="crumbs"><a href="#/eksamen">' + esc(t('exam.crumb')) + '</a> <span>›</span> <span>' + esc(lv.title) + '</span></div>' +
      '<header class="lesson-head"><div class="lesson-copy">' +
        '<div class="kicker"><span class="chip">' + esc(lv.level) + '</span></div>' +
        '<h1>' + esc(lv.title) + '</h1>' +
        '<p class="lead">' + esc(lv.blurb) + '</p>' +
        '<p class="ex-hint" style="margin-top:.6rem">' + esc(COURSE.exam.intro) + '</p>' +
      '</div></header>' +
      '<section class="card"><h2>' + esc(t('exam.briefing')) + '</h2>' +
        '<div class="exam-plan">' +
          '<div class="exam-plan-row"><b>' + esc(t('exam.part.reading')) + '</b><span>' + esc(t('exam.readMinutes', { n: lv.reading.minutes })) + '</span></div>' +
          '<div class="exam-plan-row"><b>' + esc(t('exam.part.listening')) + '</b><span>' + esc(t('exam.listenMinutes', { n: lv.listening.minutes })) + '</span></div>' +
          '<div class="exam-plan-row"><b>' + esc(t('exam.part.writing')) + '</b><span>' + esc(t('exam.writeMinutes', { n: lv.writing.minutes })) + '</span></div>' +
          '<div class="exam-plan-row"><b>' + esc(t('exam.part.speaking')) + '</b><span>' + esc(t('exam.speakMinutes', { n: lv.speaking.minutes })) + '</span></div>' +
        '</div>' +
        '<p class="ex-hint" style="margin-top:.8rem">' + esc(t('exam.note')) + '</p>' +
        '<div class="actions" style="margin-top:1rem">' +
          '<button class="btn primary" id="ex-start">' + esc(t('exam.startNow')) + '</button>' +
          '<a class="btn ghost" href="#/eksamen">' + esc(t('exam.back')) + '</a>' +
        '</div>' +
      '</section>';
    document.getElementById('ex-start').addEventListener('click', function () { startExamSession(lv); });
  }



  function route() {
    var raw = (location.hash || '').replace(/^#\/?/, '');
    var parts = raw.split('/');
    var name = parts[0] || '';
    var arg = parts[1] || '';

    if (window.TTS) window.TTS.stop();
    clearExamTimer();
    window.scrollTo({ top: 0, behavior: 'auto' });

    var active = name === 'coloquial' ? 'coloquial'
      : name === 'repaso' ? 'review'
        : name === 'tull' ? 'fun'
          : name === 'eksamen' ? 'exam'
            : (name === 'samtaler' || name === 'samtale') ? 'dialogues'
              : (name === 'meldinger' || name === 'melding') ? 'chats'
                : 'home';
    document.querySelectorAll('.nav a').forEach(function (a) {
      a.classList.toggle('active', a.dataset.route === active);
    });

    if (name === 'leksjon') {
      var lesson = LESSONS.find(function (l) { return l.id === arg; });
      renderLesson(lesson || LESSONS[0]);
    } else if (name === 'samtaler') {
      renderDialogues();
    } else if (name === 'meldinger') {
      renderChats();
    } else if (name === 'melding') {
      var chat = CHATS.find(function (c) { return c.id === arg; });
      if (chat) renderChat(chat);
      else renderChats();
    } else if (name === 'samtale') {
      var dialogue = DIALOGUES.find(function (d) { return d.id === arg; });
      if (dialogue) renderDialogue(dialogue);
      else renderDialogues();
    } else if (name === 'coloquial') {
      renderColoquial();
    } else if (name === 'tull') {
      renderFun(arg);
    } else if (name === 'eksamen') {
      if (arg) renderExamLevel(arg);
      else renderExam();
    } else if (name === 'repaso') {
      renderReview();
    } else {
      renderHome();
    }

    refreshHud();
  }

  /* =======================================================
     Eventos globales
     ======================================================= */

  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-skip]')) {
      e.preventDefault();
      app.focus();
      app.scrollIntoView({ block: 'start' });
      return;
    }
    var b = e.target.closest('[data-say]');
    if (b && window.TTS) {
      e.preventDefault();
      window.TTS.speak(b.getAttribute('data-say'));
    }
  });

  /* ---------------- velocidad del audio ---------------- */

  var speedSel = document.getElementById('speed');
  if (speedSel && window.TTS) {
    speedSel.value = String(window.TTS.getRate());
    speedSel.addEventListener('change', function () {
      window.TTS.setRate(parseFloat(speedSel.value));
      speedSel.blur();
    });
  }

  window.addEventListener('hashchange', route);
  route();
})();
