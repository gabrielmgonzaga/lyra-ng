(function() {
  angular
    .module('lyra')
    .controller('CollectionCtrl', ['Fixtures', CollectionCtrl])

  function CollectionCtrl(Fixtures) {
    this.albums = Fixtures.getCollection(1)
  }

})()
