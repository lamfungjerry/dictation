window.APP_CONFIG = {
  // 1. Google Apps Script 部署網址 (/exec)
  GAS_URL: "https://script.google.com/macros/s/AKfycbxXD65cEBUuioQKLSDFb9K6_yCobRej7uKjmkRrKINWRYbbp-vFL2K3NiOUgQvFaLaI/exec",  
  
  // 2. 存放音檔與 lessons.json 的公開 GitHub 倉庫 (格式: 帳號/倉庫名)
  GITHUB_REPO: "lamfungjerry/dictation-assets",
  GITHUB_BRANCH: "main"
    
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
    { value: "en-US-Studio-O,en-US", label: "Studio 女聲" },
  ]
};
