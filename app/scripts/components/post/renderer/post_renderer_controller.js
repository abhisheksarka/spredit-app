(function(){
  function Controller($scope, Session, Post){
    
    function init() {
      $scope.currentUser = Session.currentUser;
      setStrippedContent();
      $scope.toggleFullMedia = toggleFullMedia;
      $scope.toggleFullContent = toggleFullContent;
    };

    function toggleFullMedia() {
      $scope.fullMedia = !$scope.fullMedia;
    };

    function toggleFullContent() {
      $scope.fullContent = !$scope.fullContent;
    }

    function setStrippedContent() {
      var c = $scope.post.content || "";
      if(c.length <= 255 || $scope.fullContent) {
        $scope.post.strippedContent = c;
        return;
      };
      $scope.post.isStripped = true;
      $scope.post.strippedContent = c.substr(0, 255);
    };
    $scope.$watch('post.id', function(nv){
      if(nv) {
        init();
      }
    })
  };

  angular.module('ms.components.post.renderer')
  .controller('PostRendererController', [
    '$scope',  
    'SessionModel',
    'PostModel',
    Controller 
  ]);
}());
