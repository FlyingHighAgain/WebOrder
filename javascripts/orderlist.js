var app = angular.module('OrderListApp',['ui.bootstrap']);
app.controller("OrderListCtrl", function($scope){

    $scope.orderlist = 
    [
        {no:1,  acceptno:"", tokcd:12345, toknm:"システムリサーチ", syocd: "0110301", syonm: "協和 黒糖パウダー 20KG", suryo:"20", tanka:"13300", image:"", description:"", state:"カート"},
        {no:2,  acceptno:"", tokcd:12345, toknm:"システムリサーチ", syocd: "0120800", syonm: "中斜里澱粉 25KG", suryo:"5", tanka:"5150", image:"", description:"", state:"承認待"},
        {no:3,  acceptno:"", tokcd:12345, toknm:"システムリサーチ", syocd: "0200698", syonm: "ｱﾗｶﾜ 純 丹波産 栗ペースト 20KG", suryo:"20", tanka:"5100", image:"", description:"", state:"自動受付"},
        {no:4,  acceptno:123456, acceptdate:"14/07/28", accepttime:"14:15", tokcd:12345, toknm:"システムリサーチ", syocd: "0111701", syonm: "福谷 粉糖 2KG", suryo:"10", tanka:"780", image:"", description:"入り数:10", state:"未回答", response:"7/30発送予定です。"},
        {no:5,  acceptno:123456, acceptdate:"14/07/28", accepttime:"14:15", tokcd:12345, toknm:"システムリサーチ", syocd: "0120720", syonm: "有友 粉糖 3KG", suryo:"15", tanka:"975", image:"", description:"入り数:5", state:"回答済", response:"5/30発送予定です。"},
        
        {no:6,  acceptno:"", tokcd:12345, toknm:"システムリサーチ", syocd: "0110301", syonm: "協和 黒糖パウダー 20KG", suryo:"20", tanka:"13300", image:"", description:"", state:"カート"},
        {no:7,  acceptno:"", tokcd:12345, toknm:"システムリサーチ", syocd: "0120800", syonm: "中斜里澱粉 25KG", suryo:"5", tanka:"5150", image:"", description:"", state:"承認待"},
        {no:8,  acceptno:"", tokcd:12345, toknm:"システムリサーチ", syocd: "0200698", syonm: "ｱﾗｶﾜ 純 丹波産 栗ペースト 20KG", suryo:"20", tanka:"5100", image:"", description:"", state:"自動受付"},
        {no:9,  acceptno:123456, acceptdate:"14/07/28", accepttime:"14:15", tokcd:12345, toknm:"システムリサーチ", syocd: "0111701", syonm: "福谷 粉糖 2KG", suryo:"10", tanka:"780", image:"", description:"入り数:10", state:"未回答"},
        {no:10, acceptno:123456, acceptdate:"14/07/28", accepttime:"14:15", tokcd:12345, toknm:"システムリサーチ", syocd: "0120720", syonm: "有友 粉糖 3KG", suryo:"15", tanka:"975", image:"", description:"入り数:5", state:"回答済"},
        
        {no:11, acceptno:"", tokcd:12345, toknm:"システムリサーチ", syocd: "0110301", syonm: "協和 黒糖パウダー 20KG", suryo:"20", tanka:"13300", image:"", description:"", state:"カート"},
        {no:12, acceptno:"", tokcd:12345, toknm:"システムリサーチ", syocd: "0120800", syonm: "中斜里澱粉 25KG", suryo:"5", tanka:"5150", image:"", description:"", state:"承認待"},
        {no:13, acceptno:"", tokcd:12345, toknm:"システムリサーチ", syocd: "0200698", syonm: "ｱﾗｶﾜ 純 丹波産 栗ペースト 20KG", suryo:"20", tanka:"5100", image:"", description:"", state:"自動受付"},
        {no:14, acceptno:123456, acceptdate:"14/07/28", accepttime:"14:15", tokcd:12345, toknm:"システムリサーチ", syocd: "0111701", syonm: "福谷 粉糖 2KG", suryo:"10", tanka:"780", image:"", description:"入り数:10", state:"未回答"},
        {no:15, acceptno:123456, acceptdate:"14/07/28", accepttime:"14:15", tokcd:12345, toknm:"システムリサーチ", syocd: "0120720", syonm: "有友 粉糖 3KG", suryo:"15", tanka:"975", image:"", description:"入り数:5", state:"回答済"},
        
        {no:16, acceptno:"", tokcd:12345, toknm:"システムリサーチ", syocd: "0110301", syonm: "協和 黒糖パウダー 20KG", suryo:"20", tanka:"13300", image:"", description:"", state:"カート"},
        {no:17, acceptno:"", tokcd:12345, toknm:"システムリサーチ", syocd: "0120800", syonm: "中斜里澱粉 25KG", suryo:"5", tanka:"5150", image:"", description:"", state:"承認待"},
        {no:18, acceptno:"", tokcd:12345, toknm:"システムリサーチ", syocd: "0200698", syonm: "ｱﾗｶﾜ 純 丹波産 栗ペースト 20KG", suryo:"20", tanka:"5100", image:"", description:"", state:"自動受付"},
        {no:19, acceptno:123456, acceptdate:"14/07/28", accepttime:"14:15", tokcd:12345, toknm:"システムリサーチ", syocd: "0111701", syonm: "福谷 粉糖 2KG", suryo:"10", tanka:"780", image:"", description:"入り数:10", state:"未回答"},
        {no:20, acceptno:123456, acceptdate:"14/07/28", accepttime:"14:15", tokcd:12345, toknm:"システムリサーチ", syocd: "0120720", syonm: "有友 粉糖 3KG", suryo:"15", tanka:"975", image:"", description:"入り数:5", state:"回答済"},
        
        
    ];
    $scope.filteredOrderlist = [];
    $scope.currentPage = 1;
    $scope.numPerPage = 8;
    $scope.maxSize = 5;

    $scope.numPages = function () {
        return Math.ceil($scope.orderlist.length / $scope.numPerPage);
    };

    $scope.$watch('currentPage + numPerPage', function() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
        , end = begin + $scope.numPerPage;

        $scope.filteredOrderlist = $scope.orderlist.slice(begin, end);
    });    

    $scope.showResponseButton = function (order) {
        return (order.state == "未回答");
    };
  
});

