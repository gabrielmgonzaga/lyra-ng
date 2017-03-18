(function() {
  angular
    .module('lyra')
    .controller('CollectionCtrl', CollectionCtrl)

  function CollectionCtrl() {
    this.albums = []
    for (let i = 0 ; i < 1; i++) {
      this.albums.push(angular.copy(okComputer))
    }
  }

})()
