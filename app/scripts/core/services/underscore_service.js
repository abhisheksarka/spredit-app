(function() {
  function Factory() {
    return _;
  };
  angular.module('ms.core.services')
  .factory('UnderscoreService', [
    Factory
  ]);
}());