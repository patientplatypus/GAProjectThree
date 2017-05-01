console.log('sanity check');

$(document).ready(function(){

  window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();


    function loadSound() {
      var request = new XMLHttpRequest();
      request.open("GET", "https://rocky-tor-16893.herokuapp.com/music/brunoSong", true);
      request.responseType = "arraybuffer";

      request.onload = function() {
          var Data = request.response;
          process(Data);
      };

      request.send();
    }

    function onEnded() {
      console.log('playback finished');
    }

   function process(Data) {
     source = context.createBufferSource(); // Create Sound Source
     source.onended = onEnded;
      context.decodeAudioData(Data, function(buffer){
        source.buffer = buffer;
        source.connect(context.destination);
        source.start(context.currentTime);
      })
    }


loadSound();
});
