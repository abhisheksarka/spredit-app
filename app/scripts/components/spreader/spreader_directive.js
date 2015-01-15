(function(){
  var app = angular.module('ms.components.spreader');
  app.directive('msSpreader', [function(){
    return{
      scope: {
        spreadable: '=',
        type: '=',
        callback: '&' 
      },
      replace: true,
      controllerAs: 'spreaderCtrl',
      templateUrl: 'app/scripts/components/spreader/template.html',
      controller: 'SpreaderController'
    }; 
  }]); 

}());
