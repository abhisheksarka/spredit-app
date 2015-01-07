(function(){
  var app = angular.module('ms.components.locator.slider');
  app.directive('msLocatorSlider', [function(){
    return{
      scope: { 
        
      },
      replace: true,
      templateUrl: 'app/scripts/components/locator/slider/template.html',
      controller: 'LocatorSliderController'
    }; 
  }]); 

}());
