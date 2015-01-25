(function(){
  function Factory(){
    return {
      comments: {
        label: 'Comments',
        glyphicon: 'glyphicon-comment',
        background: 'bg-comments'
      },
      statistics: {
        label: 'Statistics',
        glyphicon: 'glyphicon-list-alt',
        background: 'bg-statistics'
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