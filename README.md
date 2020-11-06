# Basic POC for Last.fm api search by tag

 ```javascript
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
 ```
