(function(){
  function Controller($scope, $modalInstance, Post, Session, ConfigPostCategory, StateHandler){
    var userCategories;

    function init() {
      userCategories = Session.currentUser.post_category_configuration;
      $scope.reqState = StateHandler.getInstance();

      $scope.categories = Post.allCategories; 
      $scope.save = save; 
      initializeSelection();
    };

    function initializeSelection() {
      angular.forEach($scope.categories, function(c) {
        if(userCategories.values.indexOf(c.value) >= 0) {
          c.checked = true;
        } else {
          c.checked = false;
        };
      });
    };

    function save() {
      var c = new ConfigPostCategory({
        id: userCategories.id, 
        values: getSelectedCategories()
      });
      $scope.reqState.initiate();

      c.$update()
      .then(function(response){
        $scope.reqState.success();
        userCategories.values = response.values;
      }, $scope.reqState.error);
    };

    function getSelectedCategories() {
      var arr = [ ]
      angular.forEach($scope.categories, function(c) {
        if(c.checked) {
          arr.push(c.value);
        };
      });
      return arr.join(',');
    };

    init();
  };

  angular.module('ms.components.post.categories')
  .controller('PostCategoriesModalController', [
    '$scope',  
    '$modalInstance',
    'PostModel',
    'SessionModel',
    'ConfigPostCategoryModel',
    'StateHandlerService',
    Controller 
  ]);
}());
;