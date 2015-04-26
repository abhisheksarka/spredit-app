(function(){
  function Controller($scope, $modal){
    function init() {
      $scope.openModal = openModal;
    };

    function openModal() {
      $modal.open({
        controller: 'PostCategoriesModalController',
        templateUrl: 'app/scripts/components/post/categories/modal_template.html'
      })
    }

    init();
  };

  angular.module('ms.components.post.categories')
  .controller('PostCategoriesController', [
    '$scope',  
    '$modal',
    Controller 
  ]);
}());
