var playlist = {artistName : songTitle};

function updatePlaylist(playlist, artistName, songTitle) {
    playlist.assign({artistName: songTitle})
    return playlist
}
