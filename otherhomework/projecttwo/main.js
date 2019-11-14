<script>
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
// <button onclick="setCurTime()" type="button">CLICK HERE FIRST</button>
//
// <p id="demo"></p>
//
// document.getElementById("myVideo").addEventListener("loadedmetadata", function() {
//      this.currentTime = 84;
// }, false);
