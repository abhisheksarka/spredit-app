(function() {
  function Factory(MapStyles) {
    return {
      default: {
        scrollwheel: false,
        panControl: false,
        mapTypeControl: false,
        scaleControl: false,
        rotateControl: false,
        streetViewControl: false,
        zoomControl: true,
        maxZoom: 18,
        styles: MapStyles.paleDawn
      }
    }
  };
  
  angular.module('ms.core.services')
  .factory('MapConfigService', [
    'MapStylesService',
    Factory
  ]);
}());