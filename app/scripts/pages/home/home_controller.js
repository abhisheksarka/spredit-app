(function() {
  function Controller($scope, Session, Spread, $timeout){
    function init() {
      $scope.currentUser = Session.currentUser;
      $scope.masterCtrl.setBodyId('page-home');
      $scope.spreads = Spread.query();
      $scope.spreads.$promise.then(function(){
        $scope.currentPost = $scope.spreads[0].spreadable;
      });
      $scope.actions = {
        selected: 'comments'
      };
    };

    function mappings() {
      return {
        comments: {
          label: 'Comments',
          glyphicon: 'glyphicon-comment',
          background: 'bg-comments'
        },
        spreads: {
          label: 'Spreads',
          glyphicon: 'glyphicon-send',
          background: 'bg-spreads'
        },
        propagation: {
          label: 'Propagation',
          glyphicon: 'glyphicon-map-marker',
          background: 'bg-propagation'
        }
      };
    }

    $scope.$watch('actions.selected', function(nv, ov) {
      $scope.currentMapping = mappings()[nv];
    });

    init();
  };
  angular.module('ms.pages.home').controller('HomeController', [
    '$scope',
    'SessionModel',
    'SpreadModel',
    '$timeout',
    Controller
  ]);
}());