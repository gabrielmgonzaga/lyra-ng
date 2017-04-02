(function() {
  angular
    .module('lyra')
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl])

  function AlbumCtrl(Fixtures) {
    this.albumData = Fixtures.getAlbum()
  }
})()
