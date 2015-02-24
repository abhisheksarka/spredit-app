(function(){
  var app = angular.module('ms.components.navBar');
  app.directive('msNavBar', [function(){
    return{
      scope: {
        display: '=',
        signedIn: '=' 
      },
      replace: true,
      controllerAs: 'navBarCtrl',
      templateUrl: 'app/scripts/components/nav_bar/template.html',
      controller: 'NavBarController'
    }; 
  }]); 

}());
