(function() {
  angular
    .module('lyra')
    .controller('AlbumCtrl', AlbumCtrl)

  function AlbumCtrl() {
    this.albumData = angular.copy(okComputer)
  }
})()
