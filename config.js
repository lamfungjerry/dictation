window.APP_CONFIG = {
  // 1. Google Apps Script 部署網址 (/exec)
  GAS_URL: "https://script.google.com/macros/s/AKfycbxXD65cEBUuioQKLSDFb9K6_yCobRej7uKjmkRrKINWRYbbp-vFL2K3NiOUgQvFaLaI/exec",  
  
  // 2. 存放音檔與 lessons.json 的公開 GitHub 倉庫 (格式: 帳號/倉庫名)
  GITHUB_REPO: "lamfungjerry/dictation-assets",
  GITHUB_BRANCH: "main",
    
  // 3. Gemini 模型清單 (免經 GAS 查詢，0 毫秒載入)
  DEFAULT_GEMINI_MODEL: "gemini-3.6-flash",
  GEMINI_MODELS: [
    { id: "gemini-3.6-flash", name: "Gemini 3.6 Flash" },
    { id: "gemini-3.8-flash", name: "Gemini 3.8 Flash" }
  ],

  // 4. Google Cloud TTS 語音清單 (Chirp 3 HD)
  DEFAULT_TTS_VOICE: "en-US-Chirp3-HD-Fenrir,en-US",
  TTS_VOICES: [
    { value: "en-US-Chirp3-HD-Fenrir,en-US", label: "Chirp3 男聲" },
    { value: "en-US-Chirp3-HD-Leda,en-US", label: "Chirp3 女聲" },
    { value: "en-US-Neural2-F,en-US", label: "Neural2 女聲" },
    { value: "en-US-Studio-O,en-US", label: "Studio 女聲" }
  ],

  // 5. 系統行為與播放參數
  TTS_BATCH_SIZE: 8,       // 每次平行併發生成語音的句子數量
  DEFAULT_SPEED: 0.80,     // 預設播放語速 (0.50 ~ 1.20)
  DEFAULT_PAUSE_SEC: 5,    // 連播預設停頓秒數
  BLIND_REVEAL_SEC: 5,     // 盲聽點擊單句偷看秒數

  // 6. OCR 圖片辨識與港澳標點讀音轉換 Prompt
  OCR_PROMPT: [
    "Extract all English text from this image accurately for a Hong Kong / Macau primary school dictation.",
    "Return ONLY a valid raw JSON object (no markdown code fences, no extra text) with the exact schema below:",
    "{",
    '  "title": "Main Title Here",',
    '  "paragraphs": [',
    "    [",
    '      { "d": "Sentence 1 with normal punctuation.", "s": "Sentence 1 with spoken punctuation full stop" }',
    "    ]",
    "  ]",
    "}",
    "Rules:",
    "1. 'title': Identify the main title of the passage.",
    "2. 'paragraphs': Group the body text into logical paragraphs (outer array), and split each paragraph into individual sentences (inner array). Ignore original physical line wraps.",
    "3. Each sentence object MUST contain:",
    "   - 'd': Original sentence with normal English punctuation.",
    "   - 's': Exact same sentence for TTS reading, converting punctuation marks into spoken English words with spaces around them:",
    '     * "," -> comma',
    '     * "." (sentence-ending) -> full stop',
    '     * "?" -> question mark',
    '     * "!" -> exclamation mark',
    '     * ":" (not time) -> colon',
    '     * ";" -> semicolon',
    '     * Opening \'"\' -> open quotation mark',
    '     * Closing \'"\' -> close quotation mark',
    "4. Keep apostrophes in contractions/possessives (e.g., don't, Tim's), hyphens, times (e.g., 7:30), and title abbreviations (e.g., Mr., Mrs., Dr.) unchanged in both 'd' and 's'."
  ]
};
