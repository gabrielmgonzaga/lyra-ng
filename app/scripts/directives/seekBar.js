(function() {
  function seekBar() {
    return {
      templateUrl: '/templates/directives/seek_bar.html',
      replace: true,
      restrict: 'E',
      scope: { },
      link: function(scope, element, attributes) {
        scope.value = 0
        scope.max = 100

        const percentString = function() {
          const value = scope.value
          const max = scope.max
          const percent = value / max * 100

          return percent + "%"
        }

        scope.fillStyle = function() {
          return { width: percentString() }
        }
      }
    }
  }

  angular
    .module('blocJams')
    .directive('seekBar', seekBar)
})()
