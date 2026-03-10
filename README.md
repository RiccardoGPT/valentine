# 💝 Valentine's Day Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An interactive Valentine's Day website to ask your special someone to be your Valentine. Fully customizable — change the name, questions, colors, and music in a single config file. No coding required.

🌐 **[Live Demo](https://riccardogpt.github.io/valentine)**

---

## ✨ Features

- 💖 Floating hearts and bears in the background
- 🏃 "No" button that runs away when you try to click it
- 📏 Love meter that goes beyond 100%
- 🎵 Optional background music
- 🎉 Celebration screen with heart explosion
- 🎨 Fully customizable colors, text, and animations
- 📱 Works on mobile and desktop

---

## 🚀 How to Use

### Option 1 — Fork this repository (recommended)

1. Click **Fork** at the top right of this page
2. Open `config.js` in your fork
3. Click the pencil ✏️ icon to edit
4. Change the values to personalize your website (see below)
5. Commit the changes
6. Enable GitHub Pages (Settings → Pages → Source: main) to get a live URL

### Option 2 — Download and run locally

1. Click **Code → Download ZIP**
2. Extract the folder
3. Open `config.js` in any text editor and customize it
4. Open `index.html` in your browser to preview
5. Upload to any static host (GitHub Pages, Netlify, Vercel — all free)

---

## 🎨 Customization

Everything is controlled by **`config.js`**. Open it and change the values:

```javascript
// Your Valentine's name
valentineName: "Sarah",

// Browser tab title
pageTitle: "Will You Be My Valentine? 💝",

// Questions and button text
questions: {
    first:  { text: "Do you like me?", yesBtn: "Yes!", noBtn: "No" },
    second: { text: "How much do you love me?", startText: "This much!" },
    third:  { text: "Will you be my Valentine? 🌹", yesBtn: "Yes!", noBtn: "No" }
},

// Celebration message when they say Yes!
celebration: {
    title:   "Yay! I'm the luckiest person! 🎉",
    message: "Now come get your hug! 🤗",
    emojis:  "🎁💖🤗💝💋❤️💕"
},

// Colors — use https://colorhunt.co to find combinations
colors: {
    backgroundStart:  "#ffafbd",
    backgroundEnd:    "#ffc3a0",
    buttonBackground: "#ff6b6b",
    textColor:        "#ff4757"
},

// Background music
music: {
    enabled:  true,
    musicUrl: "YOUR_CLOUDINARY_URL_HERE",
    volume:   0.5
}
```

---

## 🎵 Adding Background Music

1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. Upload your MP3 file (keep it under 10MB)
3. Copy the file URL from the Media Library
4. Paste it in `config.js` under `music.musicUrl`

---

## 🌐 Publishing Online (Free)

### GitHub Pages
1. Go to your repository **Settings → Pages**
2. Under Source, select **main** branch
3. Click **Save**
4. Your site will be live at `https://your-username.github.io/valentine`

### Netlify (custom URL)
1. Go to [netlify.com](https://netlify.com) and sign up free
2. Click **Add new site → Import an existing project**
3. Connect your GitHub repository
4. Click **Deploy** — live in seconds
5. Go to **Domain settings** to choose a custom URL (e.g. `my-valentine.netlify.app`)

---

## 🔧 Troubleshooting

**Music does not play automatically**
Most browsers block autoplay until the user interacts with the page. The music button will appear — they just need to click it once.

**The site looks broken locally**
Open `index.html` directly in Chrome or Firefox. Some browsers restrict local file access — if issues persist, use a simple local server:
```bash
cd valentine
python3 -m http.server 8000
# then open http://localhost:8000
```

**How do I change the floating emojis?**
Edit the `floatingEmojis` section in `config.js`. Find emojis at [emojipedia.org](https://emojipedia.org).

---

## 📜 License

MIT — free to use, modify, and share.
