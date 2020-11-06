const LASTFM_API_KEY = "174cadade97542fff7b88f7fc3b6a9ee";
const LASTFM_SHARED_SECRET = "d0a5f066262e0666df0adf9c1af172da";
let searchWord = "";
let apiURL = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${searchWord}&api_key=${LASTFM_API_KEY}&format=json`;

$(document).ready(function () {
  $("#music-word-form").on("submit", function (event) {
    event.preventDefault();
    searchWord = $("#weather-word-input").val();
    $("#music-list").empty();

    $.ajax({
      url: `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${searchWord}&api_key=${LASTFM_API_KEY}&format=json`,
      method: "POST",
    }).then(function (response) {
      let trackArray = response.tracks.track;
      for (let i = 0; i < trackArray.length; i++) {
        let li = $("<li>");
        li.text(`${trackArray[i].name}, ${trackArray[i].artist.name}`);
        $("#music-list").append(li);
      }
    });
  });
});
