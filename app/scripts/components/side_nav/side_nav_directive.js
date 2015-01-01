(function(){
  function Directive(SideNavService){
    return{
      scope: { },
      replace: true,
      controllerAs: 'sideNavCtrl',
      templateUrl: 'app/scripts/components/side_nav/template.html',
      controller: 'SideNavController',
      link: function($scope, $element, $attributes) {
        $element.mmenu({});
        SideNavService.el = $element;

        // listen to events and set indicator on the service accordingly
        (function() {
          $element.on('opened.mm', function(){
          SideNavService.isOpen = true;
          });
          $element.on('closed.mm', function(){
            SideNavService.isOpen = false;
          });
        }());

        angular.element(window).resize(setOpen);
        function setOpen() {
          if (window.matchMedia('(min-width: 992px)').matches) {
            if(!SideNavService.isOpen) {
              SideNavService.open();
            } 
          };
        };
        setOpen();
      }
    }; 
  };
  angular
  .module('ms.components.sideNav')
  .directive('msSideNav', [
    'SideNavService', 
    Directive
  ]); 
}());
