function playMusic() {
        var audio = document.getElementById("audiocontrol");
        // Check if the audio is paused or hasn't started playing yet
        if (audio.paused) {
          audio.play();
        }
      }
  
      // Disable pause functionality for the audio element
      document.getElementById("audiocontrol").addEventListener("pause", function(event) {
        event.preventDefault();
        return false;
      });
onload = () =>{
        document.body.classList.remove("container");
};
