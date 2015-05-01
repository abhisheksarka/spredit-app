(function(){
  function Factory($modal){
    var res = Resource;
        proto = res.prototype;

    function Resource(post) { 
      this.post = post;
    };

    proto.open = function(action) {
      var self = this;

      $modal.open({
        templateUrl: 'app/scripts/components/post/actions/modal_template.html',
        controller: 'PostActionsModalController',
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
      getInstance: function(post) {
        return new Resource(post);
      }
    };
  };

  angular.module('ms.components.post.actions')
  .factory('PostActionsModalService', [
    '$modal',
    Factory 
  ]);
}());
