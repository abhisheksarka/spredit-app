(function(){
  var app = angular.module('ms.components.view.recorder');
  app.directive('msViewRecorder', [ function(){
    return{
      scope: {
        viewable: '=',
        viewableType: '='
      },
      replace: true,
      controllerAs: 'viewRecorderCtrl',
      template: '',
      controller: 'ViewRecorderController'
    }; 
  }]); 
}());
