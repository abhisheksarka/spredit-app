(function(){
  var app = angular.module('ms.components.spinner');
  app.directive('msSpinner', [function(){
    return{
      scope: {
        show: '=' 
      },
      replace: true,
      controllerAs: 'spinnerCtrl',
      templateUrl: 'app/scripts/components/spinner/template.html',
      controller: 'SpinnerController'
    }; 
  }]); 

}());
