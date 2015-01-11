(function(){
  function Factory($modal){
    return {
      open: function() { 
        return $modal.open({
          controller: 'PostCreatorModalController',
          templateUrl: 'app/scripts/components/post/creator_modal/template.html'
        });
      }
    }  
  };

  angular.module('ms.components.post.creatorModal')
  .factory('PostCreatorModalService', [
    '$modal',
    Factory
  ]);

}());