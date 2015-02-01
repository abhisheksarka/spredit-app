(function() {
  function Factory(MapStyles) {
    return {
      default: function(mapStyle) {
        mapStyle = mapStyle || 'paleDawn';
        return {
          scrollwheel: false,
          panControl: false,
          mapTypeControl: false,
          scaleControl: false,
          rotateControl: false,
          streetViewControl: false,
          zoomControl: true,
          maxZoom: 18,
          styles: MapStyles[mapStyle]
        };
      }
    };
  };
  angular.module('ms.core.services')
  .factory('MapConfigService', [
    'MapStylesService',
    Factory
  ]);
}());