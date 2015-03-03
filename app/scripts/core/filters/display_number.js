(function() {
  function Filter() {
    return function(input) {
      return format(input);
    };

    function format(num) {
      n = parseInt(num);
      if(n <= 9 && n > 0) {
        return "0" + num;
      };
      return num;
    };
  };
  angular.module('ms.core.filters')
  .filter('displayNumber', [
    Filter
  ]);
}());