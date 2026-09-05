(function () {
  // Local Groq chat widget. Same look as the old floating icon.
  const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
  const MODEL = 'openai/gpt-oss-20b';
  const MAX_HISTORY = 20;
  const PROMPT_URL = 'docs/chatbot-system-prompt-v2.json';
  const WELCOME =
    "Hi there! 👋 I'm Bishal's AI assistant. How can I help you today?";
  const FAIL_TEXT =
    'Sorry, I could not reply. Please try again or email bishalranjitofficial@gmail.com.';
  const KEY_MISSING_TEXT =
    'The chat key is not set. Copy .env.example to .env, add your Groq key, then reload this page.';

  const wrap = document.querySelector('.chat-window-wrapper');
  const toggle = document.querySelector('.chat-window-toggle');
  const closeBtn = document.querySelector('.chat-close-button');
  const list = document.querySelector('.chat-messages-list');
  const form = document.querySelector('.chat-input-form');
  const input = document.querySelector('.chat-input-text');
  const sendBtn = document.querySelector('.chat-input-send-button');

  if (!wrap || !toggle || !list || !form || !input || !sendBtn) return;

  let systemPrompt = '';
  let history = [];
  let busy = false;
  let promptReady = false;

  function getKey() {
    const key = window.GROQ_API_KEY;
    if (!key || key === 'YOUR_GROQ_API_KEY') return '';
    return String(key).trim();
  }

  function cleanBotText(text) {
    if (!text) return '';
    let out = String(text);
    out = out.replace(/<function=[^>]*\/>/gi, '');
    out = out.replace(/<function=[^>]*>[\s\S]*?<\/function>/gi, '');
    out = out.replace(/```(?:json|JSON)?\s*([\s\S]*?)```/g, '$1');
    out = unwrapJsonReply(out.trim());
    out = out.replace(/\*\*/g, '').replace(/\*/g, '');
    out = out.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    out = out.replace(/^#{1,6}\s+/gm, '');
    out = out.replace(/\n{3,}/g, '\n\n');
    return out.trim();
  }

  function unwrapJsonReply(text) {
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start === -1 || end <= start) return text;
    try {
      const data = JSON.parse(text.slice(start, end + 1));
      if (!data || typeof data.answer !== 'string' || !data.answer.trim()) {
        return text;
      }
      const parts = [data.answer.trim()];
      if (Array.isArray(data.key_points)) {
        const points = data.key_points.filter(function (item) {
          return typeof item === 'string' && item.trim();
        });
        if (points.length) parts.push(points.join('\n'));
      }
      if (data.recommended_next_step) {
        parts.push(String(data.recommended_next_step).trim());
      }
      return parts.join('\n\n');
    } catch (err) {
      return text;
    }
  }

  function setOpen(open) {
    wrap.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) input.focus();
  }

  function addMessage(role, text) {
    const bubble = document.createElement('div');
    bubble.className =
      role === 'user'
        ? 'chat-message chat-message-from-user'
        : 'chat-message chat-message-from-bot';
    const p = document.createElement('p');
    p.textContent = text;
    bubble.appendChild(p);
    list.appendChild(bubble);
    list.parentElement.scrollTop = list.parentElement.scrollHeight;
    return bubble;
  }

  function showTyping() {
    const bubble = document.createElement('div');
    bubble.className =
      'chat-message chat-message-from-bot chat-message-typing';
    bubble.setAttribute('aria-label', 'The assistant is typing');
    bubble.innerHTML =
      '<div class="chat-message-typing-body">' +
      '<span class="chat-message-typing-circle"></span>' +
      '<span class="chat-message-typing-circle"></span>' +
      '<span class="chat-message-typing-circle"></span>' +
      '</div>';
    list.appendChild(bubble);
    list.parentElement.scrollTop = list.parentElement.scrollHeight;
    return bubble;
  }

  function setBusy(next) {
    busy = next;
    input.disabled = next;
    sendBtn.disabled = next;
  }

  async function loadSystemPrompt() {
    const res = await fetch(PROMPT_URL);
    if (!res.ok) throw new Error('prompt');
    const data = await res.json();
    systemPrompt =
      JSON.stringify(data) +
      '\n\nAlways reply in plain text only. Never return JSON.';
    promptReady = true;
  }

  async function askGroq(userText) {
    const key = getKey();
    history.push({ role: 'user', content: userText });
    if (history.length > MAX_HISTORY) {
      history = history.slice(-MAX_HISTORY);
    }

    const res = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + key
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.7,
        messages: [
          { role: 'system', content: systemPrompt },
          ...history
        ]
      })
    });

    if (!res.ok) throw new Error('groq');
    const data = await res.json();
    const message =
      data && data.choices && data.choices[0] ? data.choices[0].message : null;
    let raw = '';
    if (message) {
      if (typeof message.content === 'string') {
        raw = message.content;
      } else if (Array.isArray(message.content)) {
        raw = message.content
          .map(function (part) {
            if (typeof part === 'string') return part;
            return (part && part.text) || '';
          })
          .join('');
      }
    }
    const cleaned = cleanBotText(raw);
    if (!cleaned) throw new Error('empty');
    history.push({ role: 'assistant', content: cleaned });
    if (history.length > MAX_HISTORY) {
      history = history.slice(-MAX_HISTORY);
    }
    return cleaned;
  }

  async function handleSend(text) {
    const userText = text.trim();
    if (!userText || busy) return;

    input.value = '';
    addMessage('user', userText);
    setBusy(true);
    const typing = showTyping();
    try {
      if (!getKey()) {
        typing.remove();
        addMessage('bot', KEY_MISSING_TEXT);
        return;
      }
      if (!promptReady) await loadSystemPrompt();
      const reply = await askGroq(userText);
      typing.remove();
      addMessage('bot', reply);
    } catch (err) {
      if (history.length && history[history.length - 1].role === 'user') {
        history.pop();
      }
      typing.remove();
      addMessage('bot', FAIL_TEXT);
    } finally {
      setBusy(false);
      input.focus();
    }
  }

  function bindEvents() {
    toggle.addEventListener('click', function () {
      setOpen(!wrap.classList.contains('is-open'));
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        setOpen(false);
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      handleSend(input.value);
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend(input.value);
      }
    });
  }

  function loadScript(src) {
    return new Promise(function (resolve) {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = resolve;
      document.head.appendChild(script);
    });
  }

  function parseEnv(text) {
    String(text)
      .split(/\r?\n/)
      .forEach(function (line) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.charAt(0) === '#') return;
        const eq = trimmed.indexOf('=');
        if (eq < 1) return;
        const name = trimmed.slice(0, eq).trim();
        let value = trimmed.slice(eq + 1).trim();
        if (
          (value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') ||
          (value.charAt(0) === "'" && value.charAt(value.length - 1) === "'")
        ) {
          value = value.slice(1, -1);
        }
        if (name === 'GROQ_API_KEY' && value) {
          window.GROQ_API_KEY = value;
        }
      });
  }

  function loadEnvFile() {
    return fetch('.env')
      .then(function (res) {
        if (!res.ok) return '';
        return res.text();
      })
      .then(function (text) {
        if (text) parseEnv(text);
      })
      .catch(function () {});
  }

  loadScript('config.local.js')
    .then(function () {
      const host = location.hostname;
      const local = host === 'localhost' || host === '127.0.0.1';
      if (local) return loadEnvFile();
    })
    .then(function () {
      bindEvents();
      addMessage('bot', WELCOME);
      loadSystemPrompt().catch(function () {
        promptReady = false;
      });
    });
})();
