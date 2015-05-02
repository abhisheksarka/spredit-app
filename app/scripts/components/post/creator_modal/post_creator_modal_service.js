(function(){
  function Factory($modal){
    var res = Resource;
        proto = res.prototype;

    function Resource(config) { 
      this.config = config;
    };

    proto.open = function() { 
      var self = this;

      $modal.open({
        controller: 'PostCreatorModalController',
        templateUrl: 'app/scripts/components/post/creator_modal/template.html',
        backdropClass: self.config.backdropClass,
        windowClass: self.config.windowClass
      });
    };

    return {
      getInstance: function(config) {
        return new Resource(config);
      }
    };  
  };

  angular.module('ms.components.post.creatorModal')
  .factory('PostCreatorModalService', [
    '$modal',
    Factory
  ]);

}());