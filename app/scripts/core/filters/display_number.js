(function() {
  function Filter() {
    return function(input) {
      return format(input);
    };

    function format(num) {
      n = parseInt(num),
      nv = n;
      
      if (n < 999) {
        return nv;
      } else if (n >= 999 && n < 999999) {
        nv = (n/1000).toFixed(1) + 'K';
      } else if (n >= 999999 && n < 999999999) {
        nv = (n/1000000).toFixed(1) + 'M';
      };

      if(nv) {
        nv = nv.toString().replace('.0', ''); 
      };

      return nv;
    };
  };
  angular.module('ms.core.filters')
  .filter('displayNumber', [
    Filter
  ]);
}());

// num <= 999
// num
// 1,000 - 999,999
// 1k - 999K

// 1,000,000 - 999,999,999
// 1M - 999M

// 1,000,000,000 - 999,999,999,999
// 1B - 999B




