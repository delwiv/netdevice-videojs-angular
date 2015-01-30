angular.module('App.services').factory('VideoService', [
    '$rootScope',
    '$sce',
    function($rootScope, $sce) {
        var VideoService = {};
        VideoService.video = {
            poster: "http://video-js.zencoder.com/oceans-clip.png",
            sources: [{
                src: $sce.trustAsResourceUrl("http://video-js.zencoder.com/oceans-clip.mp4"),
                type: "video/mp4"
            }, {
                src: $sce.trustAsResourceUrl("http://video-js.zencoder.com/oceans-clip.webm"),
                type: "video/webm"
            }, {
                src: $sce.trustAsResourceUrl("http://video-js.zencoder.com/oceans-clip.ogv"),
                type: "video/ogv"
            }]
        };

        return VideoService;
    }
]);
