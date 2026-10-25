/* Norsk Kjekt — app (sin dependencias) */
(function () {
  'use strict';

  var COURSE = window.COURSE;
  var LESSONS = COURSE.lessons;
  var app = document.getElementById('app');
  var hudStreak = document.getElementById('hud-streak');
  var hudXp = document.getElementById('hud-xp');

  /* =======================================================
     Estado / persistencia
     ======================================================= */

  var KEY = 'norsk-kjekt-v1';

  function defaults() {
    return { lessons: {}, xp: 0, days: {}, review: [], version: 1 };
  }

  var state = (function load() {
    try {
      var raw = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!raw || typeof raw !== 'object') return defaults();
      var d = defaults();
      var lessons = {};
      Object.keys(raw.lessons || {}).forEach(function (id) {
        var v = raw.lessons[id];
        if (v && typeof v === 'object') {
          lessons[id] = { best: Number(v.best) || 0, total: Number(v.total) || 0, at: Number(v.at) || 0 };
        }
      });
      return {
        lessons: lessons,
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
      'aria-label="Escuchar en noruego" title="Escuchar">🔊</button>';
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
    if (item.type === 'order') return 'Ordena: ' + item.words.join(' ');
    return item.prompt;
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
      return '<div class="ex-top"><span class="ex-label">' + esc(opts.label || 'Práctica') + '</span>' +
        '<span class="ex-count">' + Math.min(idx + 1, list.length) + ' / ' + list.length + '</span></div>' +
        '<div class="dots">' + dots + '</div>';
    }

    function showFeedback(ok, item, solution) {
      results[idx] = ok;
      if (ok) correct++;
      var fb = mount.querySelector('#fb');
      var next = mount.querySelector('#next');
      if (!fb) return;
      fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
      fb.innerHTML =
        '<div class="head">' + (ok ? '✅ ¡Riktig! (correcto)' : '❌ Casi — mira la respuesta') + '</div>' +
        (item.explain ? '<div>' + esc(item.explain) + '</div>' : '') +
        '<div class="answer-line">' + say(solution) + ' ' + esc(solution) + '</div>' +
        (item.es ? '<div class="trad">' + esc(item.es) + '</div>' : '');
      if (next) {
        next.hidden = false;
        next.textContent = idx + 1 === list.length ? 'Ver resultado →' : 'Siguiente →';
      }
      locked = true;
    }

    function draw() {
      locked = false;
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
          '<p class="ex-prompt">' + esc(item.prompt || 'Completa la frase:') + '</p>' +
          '<p class="sentence">' + esc(parts[0]) +
          '<input class="blank-input" id="gap" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" ' +
          'style="width:' + width + 'ch" placeholder="…" aria-label="Palabra que falta">' +
          esc(parts[1] || '') + '</p>' +
          (item.bank ? '<div class="bank" id="bank">' + item.bank.map(function (w) {
            return '<button class="word" data-w="' + esc(w) + '">' + esc(w) + '</button>';
          }).join('') + '</div>' : '') +
          '<div class="actions"><button class="btn primary" id="check">Comprobar</button></div>';
      } else {
        body =
          '<p class="ex-prompt">' + esc(item.prompt || 'Ordena la frase:') + '</p>' +
          '<p class="ex-hint">Toca las palabras en el orden correcto.</p>' +
          '<div class="order-answer" id="ans"><span class="placeholder">Tu frase…</span></div>' +
          '<div class="bank" id="bank"></div>' +
          '<div class="actions">' +
          '<button class="btn ghost small" id="reset">Borrar</button>' +
          '<button class="btn primary" id="check">Comprobar</button></div>';
      }

      mount.innerHTML =
        '<div class="exercise">' + header() + body +
        '<div class="feedback" id="fb"></div>' +
        '<div class="actions"><button class="btn primary" id="next" hidden>Siguiente →</button></div>' +
        '</div>';

      var nextBtn = mount.querySelector('#next');
      nextBtn.addEventListener('click', function () {
        idx++;
        if (idx < list.length) draw();
        else showResult();
      });

      if (item.type === 'mcq') bindMcq(item);
      else if (item.type === 'gap') bindGap(item);
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
          : '<span class="placeholder">Tu frase…</span>';
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

    /* ---- resultado ---- */
    function showResult() {
      var total = list.length;
      var pct = total ? Math.round((correct / total) * 100) : 0;
      var msg = pct === 100
        ? '¡Perfekt! Te has salido. 🎉'
        : pct >= 80
          ? '¡Bra jobba! Muy bien, ya casi lo tienes.'
          : pct >= 50
            ? 'No está mal. Repite los fallos y se queda.'
            : 'Tranquilo: nadie aprende noruego en una tarde. Repite y verás.';

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
        '<button class="btn primary" data-act="again">Repetir</button>' +
        (failed.length ? '<button class="btn ghost" data-act="failed">Repasar ' + failed.length + '</button>' : '') +
        (opts.onExit ? '<button class="btn ghost" data-act="exit">' + esc(opts.exitLabel || 'Seguir') + '</button>' : '') +
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

  function renderHome() {
    var done = completedCount();
    var total = LESSONS.length;
    var pct = Math.round((done / total) * 100);
    var nl = nextLesson();
    var w = wordOfDay();

    app.innerHTML =
      '<section class="hero">' +
      '  <div class="hero-text">' +
      '    <span class="eyebrow">Bokmål · A1–A2 · sin prisa</span>' +
      '    <h1>Noruego que se usa <em>de verdad</em>.</h1>' +
      '    <p>Cinco lecciones con textos cortos, ejercicios que corrigen al instante y el noruego de calle que no sale en los libros.</p>' +
      '    <div class="hero-actions">' +
      '      <a class="btn primary" href="#/leksjon/' + nl.id + '">' + (done ? 'Seguir' : 'Empezar') + ' · ' + esc(nl.title) + '</a>' +
      '      <a class="btn ghost" href="#/coloquial">Ver coloquial</a>' +
      '    </div>' +
      '  </div>' +
      '  <aside class="hero-card">' +
      '    <div><h3>Racha</h3><div class="big-num">' + currentStreak() + ' <small>días</small></div></div>' +
      '    <div><h3>Lecciones</h3><div class="big-num">' + done + ' <small>de ' + total + '</small></div>' +
      '      <div class="meter" style="margin-top:.5rem"><i style="width:' + pct + '%"></i></div></div>' +
      '    <div class="wotd">' +
      '      <div class="w-label">Palabra del día</div>' +
      '      <div class="w-no">' + esc(w.no) + ' ' + say(w.no) + '</div>' +
      '      <div class="w-es">' + esc(w.es) + '</div>' +
      '    </div>' +
      '  </aside>' +
      '</section>' +

      '<h2 class="section-title">Lecciones <span>empieza por donde quieras</span></h2>' +
      '<div class="grid">' + LESSONS.map(function (l) {
        var st = state.lessons[l.id];
        return '<a class="lesson-card" href="#/leksjon/' + l.id + '">' +
          '<div class="top"><span class="emoji">' + l.emoji + '</span>' +
          '<span class="num">Lección ' + l.num + ' · ' + l.level + '</span></div>' +
          '<h3>' + esc(l.title) + '</h3>' +
          '<p class="sub">' + esc(l.subtitle) + '</p>' +
          '<div class="foot">' +
          (st ? '<span class="chip done">✓ ' + st.best + '/' + st.total + '</span>' : '<span class="chip">nueva</span>') +
          '<span class="chip plain">' + l.exercises.length + ' ejercicios</span>' +
          '</div></a>';
      }).join('') + '</div>' +

      '<h2 class="section-title">De la calle <span>sin diccionario</span></h2>' +
      '<div class="colo-grid">' + COURSE.colloquial.slice(0, 3).map(function (c) {
        return '<div class="colo-card">' +
          '<div class="head"><span class="term">' + esc(c.term) + '</span>' + say(c.term) +
          '<span class="reg ' + regBucket(c.register) + '">' + esc(c.register) + '</span></div>' +
          '<p class="meaning">' + esc(c.meaning) + '</p></div>';
      }).join('') + '</div>' +
      '<div class="actions" style="margin-top:1rem"><a class="btn ghost" href="#/coloquial">Ver las ' +
      COURSE.colloquial.length + ' expresiones →</a></div>';
  }

  function renderLesson(lesson) {
    var st = state.lessons[lesson.id];

    app.innerHTML =
      '<div class="crumbs"><a href="#/">Lecciones</a> <span>›</span> <span>Lección ' + lesson.num + '</span></div>' +

      '<header class="lesson-head">' +
      '  <div class="kicker"><span class="emoji">' + lesson.emoji + '</span>' +
      '    <span class="chip">' + lesson.level + '</span>' +
      '    <span class="chip plain">' + lesson.exercises.length + ' ejercicios</span></div>' +
      '  <h1>' + esc(lesson.title) + '</h1>' +
      '  <p class="lead">' + esc(lesson.subtitle) + '</p>' +
      '  <div class="goals">' + lesson.goals.map(function (g) { return '<span class="goal">' + esc(g) + '</span>'; }).join('') + '</div>' +
      '</header>' +

      '<section class="card"><h2>Texto</h2><div class="text-body">' +
      lesson.text.map(function (p) {
        return '<div class="para">' + say(p.no) +
          '<div class="lines"><span class="no">' + esc(p.no) + '</span>' +
          '<span class="es">' + esc(p.es) + '</span></div></div>';
      }).join('') +
      '</div></section>' +

      '<section class="card"><h2>Vocabulario</h2><div class="vocab">' +
      lesson.vocab.map(function (v) {
        return '<div class="row">' + say(v.no) +
          '<span class="txt"><span class="w">' + esc(v.no) + '</span>' +
          '<span class="t">' + esc(v.es) + (v.note ? ' · ' + esc(v.note) : '') + '</span></span></div>';
      }).join('') +
      '</div></section>' +

      '<section class="card"><h2>Frases clave</h2><div class="phrases">' +
      lesson.phrases.map(function (p) {
        return '<div class="phrase">' + say(p.no) +
          '<span class="txt"><span class="no">' + esc(p.no) + '</span>' +
          '<span class="es">' + esc(p.es) + '</span></span></div>';
      }).join('') +
      '</div></section>' +

      '<section class="card"><div class="tip">💡 <b>Truco:</b> ' + esc(lesson.tip) + '</div></section>' +

      '<section class="card" id="practice"><h2>Práctica</h2><div id="ex-mount"></div></section>';

    var mount = document.getElementById('ex-mount');
    mount.innerHTML =
      '<div class="actions">' +
      '<button class="btn primary" id="start-ex">Empezar práctica · ' + lesson.exercises.length + ' ejercicios</button>' +
      (st ? '<span class="ex-hint">Tu mejor resultado: ' + st.best + '/' + st.total + '</span>' : '') +
      '</div>';

    document.getElementById('start-ex').addEventListener('click', function () {
      document.getElementById('practice').scrollIntoView({ behavior: 'smooth', block: 'start' });
      runExercises(mount, lesson.exercises, {
        label: 'Lección ' + lesson.num,
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
              '<p class="ex-hint">Progreso guardado · +' + (res.correct * 10) + ' XP</p>');
          }
        }
      });
    });
  }

  /* ---------------- coloquial ---------------- */

  var REG_LABEL = { neutro: 'Neutro', informal: 'Informal', 'muy informal': 'Muy informal', fuerte: 'Informal fuerte', vulgar: 'Vulgar', oral: 'Oral' };

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
      return '<div class="empty"><span class="big">🔍</span>Nada por aquí. Prueba otra palabra.</div>';
    }
    return '<div class="colo-grid">' + items.map(function (c) {
      return '<article class="colo-card">' +
        '<div class="head"><span class="term">' + esc(c.term) + '</span>' + say(c.term) +
        '<span class="reg ' + regBucket(c.register) + '">' + esc(c.register) + '</span></div>' +
        '<span class="literal">lit.: ' + esc(c.literal) + '</span>' +
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
      { key: 'all', label: 'Todo' },
      { key: 'neutro', label: 'Neutro' },
      { key: 'informal', label: 'Informal' },
      { key: 'fuerte', label: 'Fuerte' },
      { key: 'vulgar', label: 'Vulgar' },
      { key: 'oral', label: 'Oral' }
    ];

    app.innerHTML =
      '<section class="colo-intro">' +
      '  <h1>Noruego de la calle, sin filtro</h1>' +
      '  <p>Esto es bokmål real, el que aparece en mensajes, cafeterías y grupos de WhatsApp. ' +
      'Ojo con el registro: lo que suena perfecto entre amigos puede quedar fatal en una entrevista.</p>' +
      '</section>' +
      '<div class="filters">' +
      '  <input id="q" type="search" placeholder="Buscar expresión, significado…" value="' + esc(colo.q) + '" aria-label="Buscar">' +
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
      var lesson = LESSONS.find(function (l) { return l.id === parts[0]; });
      var item = lesson && lesson.exercises[Number(parts[1])];
      if (lesson && item) out.push({ sig: sig, lesson: lesson, item: item });
    });
    return out;
  }

  function renderReview() {
    var entries = reviewEntries();

    if (!entries.length) {
      app.innerHTML =
        '<div class="review-head"><div><h1>Repaso</h1>' +
        '<p>Aquí caen los ejercicios que fallas, para que no se te escapen.</p></div></div>' +
        '<div class="empty"><span class="big">🌱</span>' +
        'Todavía no hay nada que repasar.<br>Haz una lección y lo que falles aparecerá aquí.</div>';
      return;
    }

    app.innerHTML =
      '<div class="review-head"><div><h1>Repaso</h1>' +
      '<p>' + entries.length + ' ejercicio' + (entries.length === 1 ? '' : 's') + ' pendiente' + (entries.length === 1 ? '' : 's') + '. Los que aciertes desaparecen.</p></div>' +
      '<button class="btn primary" id="start-review">Repasar todo</button></div>' +
      '<div class="review-list">' + entries.map(function (e) {
        return '<div class="review-item">' +
          '<span class="chip plain">' + esc(e.lesson.emoji) + ' L' + e.lesson.num + '</span>' +
          '<div class="meta"><b>' + esc(preview(e.item)) + '</b>' +
          '<span>' + esc(e.lesson.title) + '</span></div></div>';
      }).join('') + '</div>' +
      '<section class="card" id="review-mount" style="display:none;margin-top:1rem"></section>';

    document.getElementById('start-review').addEventListener('click', function () {
      var box = document.getElementById('review-mount');
      box.style.display = 'block';
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
      runExercises(box, entries.map(function (e) { return e.item; }), {
        label: 'Repaso',
        exitLabel: 'Terminar',
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
          if (b) b.insertAdjacentHTML('beforeend', '<p class="ex-hint">Repaso guardado · +' + (res.correct * 5) + ' XP</p>');
        }
      });
    });
  }

  /* =======================================================
     Router
     ======================================================= */

  function route() {
    var raw = (location.hash || '').replace(/^#\/?/, '');
    var parts = raw.split('/');
    var name = parts[0] || '';
    var arg = parts[1] || '';

    if (window.TTS) window.TTS.stop();
    window.scrollTo({ top: 0, behavior: 'auto' });

    var active = name === 'coloquial' ? 'coloquial'
      : name === 'repaso' ? 'review'
        : 'home';
    document.querySelectorAll('.nav a').forEach(function (a) {
      a.classList.toggle('active', a.dataset.route === active);
    });

    if (name === 'leksjon') {
      var lesson = LESSONS.find(function (l) { return l.id === arg; });
      renderLesson(lesson || LESSONS[0]);
    } else if (name === 'coloquial') {
      renderColoquial();
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

  window.addEventListener('hashchange', route);
  route();
})();
