(function(){
  function Controller($scope, Conversation, Category, StateHandler){
    function init() {
      $scope.categories = Category.query();
      $scope.createConversation = createConversation;
      $scope.state = StateHandler.getInstance();
      reset();
    };

    function createConversation() {
      var c = angular.copy($scope.conversation);
      $scope.state.initiate();
      c.$save().then(function() {
        $scope.state.success();
        reset();
      }, function() {
        $scope.state.error();
      });
    };

    function reset() {
      $scope.conversation = new Conversation();
    }

    init();
  };

  angular.module('ms.components.conversation.createBox')
  .controller('CreateBoxController', [
    '$scope',
    'ConversationModel',
    'CategoryModel',
    'StateHandlerService',
    Controller 
  ]);
}());
