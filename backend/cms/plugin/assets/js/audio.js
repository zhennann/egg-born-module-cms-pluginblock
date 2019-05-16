$(document).ready(function() {
  _renderAudios();
});

function _renderAudioLoadResource(callback) {
  if (window.APlayer) return callback();
  util.loadLink('https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css', function() {
    util.loadScript('https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js', function() {
      return callback();
    });
  });
}
function _renderAudio($block) {
  // ele
  const $template = $('.template', $block);
  const $container = $('.aplayer', $block);
  // options
  const options = JSON.parse($template.html());
  if (!options.audio) return;
  options.container = $container[0];
  // audio
  if (options.audio.concat) {
    for (let i = 0; i < options.audio.length; i++) {
      if (!options.audio[i].cover) options.audio[i].cover = 'https://cdn.cabloy.com/assets/audio/cover.jpg';
    }
  } else {
    if (!options.audio.cover) options.audio.cover = 'https://cdn.cabloy.com/assets/audio/cover.jpg';
  }
  // create
  new window.APlayer(options);
}
function _renderAudios() {
  // blocks
  const $blocks = $('.block-audio-aplayer');
  if ($blocks.length === 0) return;
  // load resource
  _renderAudioLoadResource(function() {
    for (const $block of $blocks) {
      _renderAudio($block);
    }
  });
}
