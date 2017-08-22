
$("#query").on("change",function(event){
  console.log(event.target.value)
  $.get(
    'https://www.googleapis.com/youtube/v3/search', {
      part: "snippet, id",
      type: "video",
      q: event.target.value,
      maxResults: 5,
      key: 'AIzaSyChGVehvu6lheNEb4cAt80vX50dnypEZFA'
    })
    .then(function (data){
      console.log(data.items)
      var videos = data.items
      $("#videos").empty()
      for (var video of videos) {
        console.log(video.snippet.title)
        $("#videos").append(`
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
        `)
      }

    })
})
