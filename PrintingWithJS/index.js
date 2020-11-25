// music should be an object with title, artist, and album properties
const music = {
    title: "Wet Sand",
    artist: "Red Hot Chili Peppers",
    album: "21st Century",
  };
  
  // Write code between the <div> tags to output the data from the music object above.
  // Use an h2 element for the title and a p element for artist and title
  // const title = '${music.title}';
  // const artist = '${music.artist}';
  // const album = '{music.album}';
  
  const songSnippet = `<h2>${music.title}</h2> <p>${music.artist}</p> <p>${music.album}</p>`;

  const element = document.getElementById("music");
  element.innerHTML = songSnippet;
  
  console.log(songSnippet);