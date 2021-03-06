import MakeConfig from '../MakeConfig';
import Category from '../Category';

export default MakeConfig(__dirname, {
  id: "libreAudio",
  name: "Libre Audio",
  description: "Allows creation and playback of tracks via their URL. Removes the 16 listener cap on My Audio Tracks. Refreshing the page is recommended after disabling/enabling this module in order to avoid issues.",
  category: Category.freedom,

  media: {
    "libre_audio.png": "Add by URL button",
  },

  mods: [
    /*
        { // play hook
            includes: "assets/app.js",
            find: `"My Audio"===r&&`,
            patch: `("My Audio" === r && window.r20es && window.r20es.canPlaySound && window.r20es.playSound && window.r20es.canPlaySound(n)) ? window.r20es.playSound(n) : "My Audio" === r &&`
        },
        { // play hook
            includes: "assets/app.js",
            find: `if("My Audio"===r){`,
            patch: `if(window.r20es && window.r20es.canPlaySound && window.r20es.playSound && window.r20es.canPlaySound(n)) { window.r20es.playSound(n) } else if("My Audio" === r) {`,
        },
        */

    // play libreaudio sounds
    {
      includes: "assets/app.js",
      find: `\`/audio_library/play/\${campaign_id}/\${n.split("-")[0]}\``,
      patch: `((window.r20es && window.r20es.canPlaySound && window.r20es.canPlaySound(i)) ? n : >>R20ES_MOD_FIND>>)`,
    },
    {
      includes: "assets/app.js",
      find: `d20.Campaign.players.filter(e=>e.get("online")).length>15`,
      patch: "false",
    }

  ]
});

