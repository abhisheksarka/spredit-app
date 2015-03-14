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
          label: 'More',
          glyphicon: 'glyphicon-list-alt',
          background: 'bg-statistics'
        },
        propagation: {
          label: 'Propagation',
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
