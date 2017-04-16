(function() {
  function seekBar() {

    const calculatePercent = function(seekBar, event) {
      const offsetX = event.pageX - seekBar.offset().left
      const seekBarWidth = seekBar.width()
      const offsetXPercent = offsetX / seekBarWidth
      offsetXPercent = Math.max(0, offsetXPercent)
      offsetXPercent = Math.min(1, offsetXPercent)

      return offsetX
    }

    return {
      templateUrl: '/templates/directives/seek_bar.html',
      replace: true,
      restrict: 'E',
      scope: { },
      link: function(scope, element, attributes) {
        scope.value = 0
        scope.max = 100

        const seekBar = $(element)

        const percentString = function() {
          const value = scope.value
          const max = scope.max
          const percent = value / max * 100

          return percent + "%"
        }

        scope.fillStyle = function() {
          return { width: percentString() }
        }

        scope.onClickSeekBar = function(event) {
          const percent = calculatePercent(seekBar, event)
          scope.value = percent * scope.max
        }
      }
    }
  }

  angular
    .module('blocJams')
    .directive('seekBar', seekBar)
})()
