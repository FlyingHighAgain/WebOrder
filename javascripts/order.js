var app = angular.module('OrderApp',[]);
app.controller("OrderCtrl", function($scope){

  $scope.items = 
  [
    {code: "0110301", name: "協和 黒糖パウダー 20KG", price:"13300", image:"", description:""},
    {code: "0111701", name: "福谷 粉糖 2KG", price:"780", image:"", description:"入り数:10"},
    {code: "0120720", name: "有友 粉糖 3KG", price:"975", image:"", description:"入り数:5"},
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
  
});

