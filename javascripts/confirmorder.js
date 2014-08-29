var app = angular.module('ConfirmOrderApp',[]);
app.controller("ConfirmOrderCtrl", function($scope){

  $scope.items = 
  [
    {code: "0110301", name: "協和 黒糖パウダー 20KG", price:"30000", image:"", description:"", suryo:"1"},
    {code: "0111701", name: "福谷 粉糖 2KG", price:"1500", image:"", description:"入り数:10", suryo:"2"},
  ];

  $scope.deliverydates = [
    {name:" 7月23日"},
    {name:" 7月24日"},
    {name:" 7月25日"},
    {name:" 7月26日"},
    {name:" 7月27日"},
    {name:" 7月28日"},
    {name:" 7月29日"},
    {name:" 7月30日"},
    {name:" 7月31日"},
    {name:" 8月 1日"},
  ];

  $scope.quantities = [
    {name:"1"},
    {name:"2"},
    {name:"3"},
    {name:"4"},
    {name:"5"},
    {name:"6"},
    {name:"7"},
    {name:"8"},
    {name:"9"},
    {name:"10"},
  ];

  $scope.totalkingaku = function() {
      kingaku = 0;
      for (i=0;i<$scope.items.length;i++) {
        kingaku += $scope.items[i].price * $scope.items[i].suryo;
      }
      return kingaku;
  }
  
});

