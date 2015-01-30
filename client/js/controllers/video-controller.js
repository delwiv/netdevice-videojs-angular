angular.module('App')
    .controller('VideoController', [
        '$rootScope',
        '$scope',
        '$sce',
        '$timeout',
        'VideoService',
        function($rootScope, $scope, $sce, $timeout, VideoService) {
            $scope.video = video = VideoService.video;
            $scope.playing = playing = false;
            $scope.checkpoints = checkpoints = {
                launched: false,
                points: []
            };
            $scope.checkpoint = checkpoint = {};

            localinterval = $timeout(function() {
                player = videojs('my-video-player', { /* Options */ }, function() {
                    console.log('Good to go!');
                });
            }, 1000);

            $scope.clickPlay = function() {
                if ($scope.playing) {
                    player.pause();
                } else {
                    player.play();
                }
                $scope.playing = !$scope.playing;
            };

            $scope.clickForward = function() {
                player.currentTime(player.currentTime() + 10);
            };
            $scope.clickBackward = function() {
                player.currentTime(player.currentTime() - 10);
            };

            $scope.startCheckpoint = function() {
                checkpoint.startTime = player.currentTime();
                player.play();
                checkpoints.launched = true;
            };

            $scope.stopCheckpoint = function() {
                checkpoint.endTime = player.currentTime();
                checkpoints.launched = false;
                checkpoints.points.push({
                    'start': checkpoint.startTime,
                    'end': checkpoint.endTime
                });
            };

            $scope.goToCheckpoint = function(index) {
                var cp = checkpoints.points[index];
                var endTime = cp.endTime;
                player.currentTime(cp.start);
                player.play();
                player.setTimeout(function() {
                    player.pause();
                }, (cp.end - cp.start) * 1000);
            };
        }
    ]);
