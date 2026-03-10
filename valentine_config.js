// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name — appears in the page title
    // Example: "Sarah", "Alex", "Jamie"
    valentineName: "Your Name Here",

    // The title shown in the browser tab
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis in the background
    // Find more at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears:  ['🧸', '🐻']
    },

    // Questions and button labels
    questions: {
        first: {
            text:         "Do you like me?",
            yesBtn:       "Yes!",
            noBtn:        "No",
            secretAnswer: "I don't like you, I love you! ❤️"  // hidden hover message
        },
        second: {
            text:      "How much do you love me?",
            startText: "This much!",
            nextBtn:   "Next ❤️"
        },
        third: {
            text:   "Will you be my Valentine on February 14th? 🌹",
            yesBtn: "Yes!",
            noBtn:  "No"
        }
    },

    // Love meter messages — shown based on slider value
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // > 5000%
        high:    "To infinity and beyond! 🚀💝",            // > 1000%
        normal:  "And beyond! 🥰"                           // > 100%
    },

    // Celebration screen — shown after they click "Yes!"
    celebration: {
        title:   "Yay! I'm the luckiest person in the world! 🎉💝",
        message: "Now come get your hug! 🤗",
        emojis:  "🎁💖🤗💝💋❤️💕"
    },

    // Color scheme
    // Use https://colorhunt.co or https://coolors.co to find combinations
    colors: {
        backgroundStart:  "#ffafbd",  // gradient start (top-left)
        backgroundEnd:    "#ffc3a0",  // gradient end (bottom-right)
        buttonBackground: "#ff6b6b",  // button color
        buttonHover:      "#ff8787",  // button hover color
        textColor:        "#ff4757"   // main text color
    },

    // Animation settings
    animations: {
        floatDuration:      "15s",  // how long hearts take to float up (10-20s)
        floatDistance:      "50px", // horizontal drift (30-70px)
        bounceSpeed:        "0.5s", // bounce animation speed (0.3-0.7s)
        heartExplosionSize: 1.5     // size of final heart explosion (1.2-2.0)
    },

    // Background music (optional)
    // Upload your MP3 to Cloudinary (free) and paste the URL below
    music: {
        enabled:   true,
        autoplay:  true,
        musicUrl:  "YOUR_MUSIC_URL_HERE",  // e.g. https://res.cloudinary.com/...
        startText: "🎵 Play Music",
        stopText:  "🔇 Stop Music",
        volume:    0.5                      // 0.0 (silent) to 1.0 (full volume)
    }
};

// Do not modify below this line
window.VALENTINE_CONFIG = CONFIG;
