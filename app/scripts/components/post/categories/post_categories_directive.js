(function(){
  var app = angular.module('ms.components.post.categories');
  app.directive('msPostCategories', [function(){
    return{
      scope: {
        selectedCategories: '='
      },
      replace: true,
      controllerAs: 'postCategoriesCtrl',
      templateUrl: 'app/scripts/components/post/categories/template.html',
      controller: 'PostCategoriesController'
    }; 
  }]); 

}());
