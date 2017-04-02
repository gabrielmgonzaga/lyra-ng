(function() {
   function Fixtures() {
     const Fixtures = {}

     const okComputer = {
       name: 'Ok Computer',
       artist: 'Radiohead',
       label: 'Parlophone',
       year: '1997',
       albumArtUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Radiohead.okcomputer.albumart.jpg',
       songs: [
         { number: '1', name: 'Fake Plastic Trees', length: '3:31', audioUrl: 'assets/FakePlasticTrees'}
       ]
     }

     Fixtures.getAlbum = function() {
       return okComputer
     }


      Fixtures.getCollection = function(numberOfAlbums) {
        var albums = []
        for (var i = 0; i < numberOfAlbums; i++) {
          albums.push(okComputer)
        }

        return albums
      }

     return Fixtures
   }

   angular
     .module('lyra')
     .factory('Fixtures', Fixtures)
 })()
