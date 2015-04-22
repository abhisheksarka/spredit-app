(function(){
  function Factory($modal){
    var res = Resource;
        proto = res.prototype;

    function Resource(templateUrl) { 
      this.templateUrl = templateUrl
    };

    proto.open = function(afterClose) {
      var self = this;
      afterClose = afterClose || angular.noop;

      $modal.open({
        templateUrl: 'app/scripts/components/dialog/template.html',
        controller: 'DialogController',
        resolve: {
          templateUrl: function() {
            return self.templateUrl;
          },
          afterClose: function() {
            return afterClose;
          } 
        }
      })
    };

    return {
      getInstance: function(templateUrl) {
        return new Resource(templateUrl);
      }
    };
  };

  angular.module('ms.components.dialog')
  .factory('DialogService', [
    '$modal',
    Factory 
  ]);
}());
