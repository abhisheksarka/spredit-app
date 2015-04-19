(function(){
  function Controller($scope, Session){
    function mappings() {
      return {
        comments: {
          label: 'Comments',
          glyphicon: 'glyphicon-comment',
          background: 'bg-comments'
        },
        statistics: {
          label: 'Stats',
          glyphicon: 'glyphicon-list-alt',
          background: 'bg-statistics'
        },
        propagation: {
          label: 'Map',
          glyphicon: 'glyphicon-map-marker',
          background: 'bg-propagation'
        }
      };
    };

    $scope.$watch('action', function(nv, ov) {
      $scope.currentMapping = mappings()[nv];
    });
  };

  angular.module('ms.components.post.details')
  .controller('PostDetailsController', [
    '$scope',  
    'SessionModel',
    Controller 
  ]);
}());
