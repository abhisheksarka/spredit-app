(function(){
  function Factory(){
    return {
      elementClasses: {
        spread: {
          icon: 'glyphicon-send',
          btn: 'btn-success',
          text: 'text-success'  
        },
        contained: {
          icon: 'glyphicon-lock',
          btn: 'btn-danger',
          text: 'text-danger'  
        },
        commented: {
          icon: 'glyphicon-comment',
          btn: 'btn-info',
          text: 'text-info'  
        }
      },
      notificationMessages: {
        spread: function(params) {
          return {
            label: 'Your post is spreading...',
            desc: ''
          };
        },
        contained: function(params) {
          return {
            label: 'Your post was contained...',
            desc: ''
          };
        },
        commented: function(params) {
          return {
            
          }
        }
      }
    }  
  };

  angular.module('ms.core.services')
  .factory('ActionMappingService', [
    Factory
  ]);

}());