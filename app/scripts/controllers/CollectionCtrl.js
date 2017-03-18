(function() {
  angular
    .module('lyra')
    .controller('CollectionCtrl', CollectionCtrl)

  function CollectionCtrl() {
    console.log('hi')
    this.albums = []
    for (let i = 0 ; i < 1; i++) {
      this.albums.push(angular.copy(okComputer))
    }
  }

})()
