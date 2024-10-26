const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', function() {
  if (playBtn.innerText === "LISTEN LIVE") {
    playBtn.innerText = "PAUSE";
  } else {
    playBtn.innerText = "LISTEN LIVE";
  }
});

// var data = {
//   'url': 'https://edge1.radyotvonline.net/shoutcast/play/loungefm',
//   'return': 'apple_music,spotify',
//   'api_token': 'test'}

// $.getJSON('https://api.audd.io/?jsonp=?', data, function(result){
//   console.log(result);
// });

