(function() {
    function seekBar($document) {
        /**
        * @function calculatePercent
        * @desc calculates horizontal percent along the seek bar where the event occurs
        */
        var calculatePercent = function(seekBar, event) {
            var offsetX = event.pageX - seekBar.offset().left;
            var seekBarWidth = seekBar.width();
            var offsetXPercent = offsetX / seekBarWidth;
            offsetXPercent = Math.max(0, offsetXPercent);
            offsetXPercent = Math.min(1,offsetXPercent);
            return offsetXPercent;
        };

        return {
            templateUrl: '/templates/directives/seek_bar.html',
            replace: true,
            restrict: 'E',
            scope: {
                onChange: '&'
            },
            link: function(scope, element, attributes) {
                scope.value = 0; // currently playing song time or current volume
                scope.max = 100; // max value for song and volume

                /**
                * @desc holds element that matches the directive <seek-bar> as a jQuery object so we can call jQuery methods on it
                */
                var seekBar = $(element);

                /**
                *@ desc This code observes the values of the attributes we declare in the HTML by specifying the attribute name in the first argument. When the observed attribute is set or changed, we execute a callback (the second argument) that sets a new scope value (newValue) for the scope.value and scope.max attributes. We use the directive's scope to determine the location of the seek bar thumb, and correspondingly, the playback position of the song.
                */
                attributes.$observe('value', function(newValue) {
                    scope.value = newValue;
                });

                attributes.$observe('max', function(newValue) {
                    scope.max = newValue;
                });

                /**
                * @function percentString
                * @desc calculates percent based on the value and max value of a seek bar
                */
                var percentString = function() {
                    var value = scope.value;
                    var max = scope.max;
                    var percent = value / max * 100;
                    return percent + '%';
                };

                /**
                * @function fillStyle
                * @desc returns the width of the seek bar fill element based on the calculated percent
                */
                scope.fillStyle = function() {
                    return {width: percentString()};
                };

                /**
                * @function thumbStyle
                * @desc updates the position of the seekbar thumb
                */
                scope.thumbStyle = function() {
                    return {left: percentString()};
                };

                /**
                * @function onClickSeekBar
                * @desc updates the seek bar value based on the seek bars width and the location of the users click on the seek bar
                */
                scope.onClickSeekBar = function(event) {
                    var percent = calculatePercent(seekBar, event);
                    scope.value = percent * scope.max;
                    notifyOnChange(scope.value);
                };

                /**
                * @function trackThumb
                * @desc uses $apply to constantly apply the change in value of scope.value as the user drags the seekbar thumb
                */
                scope.trackThumb = function() {
                    $document.bind('mousemove.thumb', function(event) {
                        var percent = calculatePercent(seekBar, event);
                        scope.$apply(function() {
                            scope.value = percent * scope.max;
                            notifyOnChange(scope.value);
                        });
                    });

                    $document.bind('mouseup.thumb', function() {
                        $document.unbind('mousemove.thumb');
                        $document.unbind('mouseup.thumb');
                    });
                };

                /**
                * @desc This function is short but dense. Let's break it down:
We test to make sure that scope.onChange is a function. If a future developer fails to pass a function to the on-change attribute in the HTML, the next line will not be reached, and no error will be thrown.
We pass a full function call to the on-change attribute in the HTML – scope.onChange() calls the function in the attribute.
The function we pass in the HTML has an argument, value, which isn't defined in the view (remember that it's not the same as scope.value). Using built-in Angular functionality, we specify the value of this argument using hash syntax. Effectively, we're telling Angular to insert the local newValue variable as the value argument we pass into the SongPlayer.setCurrentTime() function called in the view.
                */
                var notifyOnChange = function(newValue) {
                    if (typeof scope.onChange === 'function') {
                        scope.onChange({value: newValue});
                    }
                };
            }
        };
    };

    angular
        .module('blocJams')
        .directive('seekBar', ['$document', seekBar])
})();
