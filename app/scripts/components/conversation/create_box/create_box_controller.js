(function(){
  function Controller($scope, Conversation, Category, StateHandler){
    function init() {
      $scope.categories = Category.query();
      $scope.conversation = new Conversation();
      $scope.createConversation = createConversation;
      $scope.state = StateHandler.getInstance();
    };

    function createConversation() {
      $scope.state.initiate();
      $scope.conversation.$save().then(function() {
        $scope.state.success();
      }, function() {
        $scope.state.error();
      });
    };

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
