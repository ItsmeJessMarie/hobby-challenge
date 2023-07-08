function displaySong(text) {
  text.preventDefault();
  let songAnswer = document.querySelector("#song-input").value;
  let askForm = document.querySelector("#ask-form");
  if (songAnswer.length > 0) {
    askForm.innerHTML = `<center><h4>Search for and listen to that amazing song <a href="https://open.spotify.com/search" target="_blank" style="text-decoration: none; color:rgb(117, 90, 170)">here</a><h4><center>`;
  } else {
    askForm.innerHTML = `<center><h4>Please enter a <a href="index.html" style="text-decoration: none; color:rgb(117, 90, 170)">song name</a><h4><center>`;
  }
}

let searchSong = document.querySelector("#ask-form");
searchSong.addEventListener("submit", displaySong);
