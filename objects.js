var playlist = {
  cher: 'song1',
  segar: 'song2'
};



function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({playlist}, artistName, songTitle);
}