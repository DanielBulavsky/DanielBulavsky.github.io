angular.module('app').controller('playerCtrl', function (playerFactory) {
  // console.log('playerCtrl loaded');
  this.player = playerFactory.getPlayer();
});
