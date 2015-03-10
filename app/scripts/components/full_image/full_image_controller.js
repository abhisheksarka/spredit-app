(function(){
  function Controller($scope, $modal){
    
    function init() {
      $scope.openModal = openModal;
    };

    function openModal() {  
      $modal.open({
        controller: 'FullImageModalController',
        templateUrl: 'app/scripts/components/full_image/modal_template.html',
        windowClass: 'full-image-modal',
        resolve: {
          imageUrl: function () {
            return $scope.msFullImage;
          }
        }
      });
    };

    init();
  };

  angular.module('ms.components.fullImage')
  .controller('FullImageController', [
    '$scope',  
    '$modal',
    Controller 
  ]);
}());
