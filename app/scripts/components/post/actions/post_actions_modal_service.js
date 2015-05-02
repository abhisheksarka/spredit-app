(function(){
  function Factory($modal){
    var res = Resource;
        proto = res.prototype;

    function Resource(post, config) { 
      this.post = post;
      this.config = config || { };
    };

    proto.open = function(action) {
      var self = this;

      $modal.open({
        templateUrl: 'app/scripts/components/post/actions/modal_template.html',
        controller: 'PostActionsModalController',
        backdropClass: self.config.backdropClass,
        windowClass: self.config.windowClass,
        resolve: {
          action: function() {
            return action;
          },
          post: function() {
            return self.post;
          } 
        }
      })
    };

    return {
      getInstance: function(post, config) {
        return new Resource(post, config);
      }
    };
  };

  angular.module('ms.components.post.actions')
  .factory('PostActionsModalService', [
    '$modal',
    Factory 
  ]);
}());
