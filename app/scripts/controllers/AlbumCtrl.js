(function() {
  angular
    .module('lyra')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl])

  function AlbumCtrl(Fixtures, SongPlayer) {
    this.albumData = Fixtures.getAlbum()
    this.songPlayer = SongPlayer
  }

})()
