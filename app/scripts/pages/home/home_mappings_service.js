(function(){
  function Factory(){
    return {
      comments: {
        label: 'Comments',
        glyphicon: 'glyphicon-comment',
        background: 'bg-comments'
      },
      spreads: {
        label: 'Spreads',
        glyphicon: 'glyphicon-send',
        background: 'bg-spreads'
      },
      propagation: {
        label: 'Propagation',
        glyphicon: 'glyphicon-map-marker',
        background: 'bg-propagation'
      }
    };
  };
  angular.module('ms.pages.home')
  .factory('HomeMappingsService', [Factory]);

}());