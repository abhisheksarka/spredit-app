(function(){
  function Factory(){
    return {
      open: function() {
        this.el.trigger("open.mm");
      }, 
      close: function() {
        this.el.trigger("close.mm");
      },
      toggle: function() {
        var self = this;
        if(self.isOpen) {
          self.close();
        } else {
          self.open();
        };
      },
      el: null
    }
  };

  angular.module('ms.components.sideNav')
  .factory('SideNavService', [Factory]);

}());