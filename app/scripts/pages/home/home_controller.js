(function() {
  function Controller($scope, Session){
    function init() {
      $scope.currentUser = Session.currentUser;
      $scope.masterCtrl.setBodyId('page-home');
      $scope.currentMapping = null;
    };

    function mappings() {
      return {
        comments: {
          label: 'Comments',
          glyphicon: 'glyphicon-comment',
          background: 'bg-primary'
        },
        spreads: {
          label: 'Spreads',
          glyphicon: 'glyphicon-send',
          background: 'bg-warning'
        },
        propagation: {
          label: 'Propagation',
          glyphicon: 'glyphicon-map-marker',
          background: 'bg-danger'
        }
      };
    }

    $scope.$watch(function(){
      return $scope.selectedAction;
    }, function(nv, ov) {
      $scope.currentMapping = mappings()[nv];
    });

    init();
  };
  angular.module('ms.pages.home').controller('HomeController', [
    '$scope',
    'SessionModel',
    Controller
  ]);
}());