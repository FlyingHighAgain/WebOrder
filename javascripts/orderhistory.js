var app = angular.module('OrderHistoryApp',['ui.bootstrap']);
app.controller("OrderHistoryCtrl", function($scope){


    $scope.orderhistory = 
    [
        {no:1,  acceptno:123456, orderdate:"14/07/28", deliverydate:"14/08/02", syocd: "0110301", syonm: "協和 黒糖パウダー 20KG", suryo:"20", tanka:"13300", image:"", description:"", state:"配送準備中"},
        {no:2,  acceptno:123456, orderdate:"14/07/25", deliverydate:"14/07/29", syocd: "0120800", syonm: "中斜里澱粉 25KG", suryo:"5", tanka:"5150", image:"", description:"", state:"配送中"},
        {no:3,  acceptno:123456, orderdate:"14/07/21", deliverydate:"14/07/25", syocd: "0200698", syonm: "ｱﾗｶﾜ 純 丹波産 栗ペースト 20KG", suryo:"20", tanka:"5100", image:"", description:"", state:"納品を完了しました"},
        {no:4,  acceptno:123456, orderdate:"14/07/21", deliverydate:"14/07/24", syocd: "0111701", syonm: "福谷 粉糖 2KG", suryo:"10", tanka:"780", image:"", description:"入り数:10", state:"納品を完了しました", response:"7/30発送予定です。"},
        {no:5,  acceptno:123456, orderdate:"14/07/20", deliverydate:"14/07/23", syocd: "0120720", syonm: "有友 粉糖 3KG", suryo:"15", tanka:"975", image:"", description:"入り数:5", state:"納品を完了しました", response:"5/30発送予定です。"},
        
        {no:1,  acceptno:123456, orderdate:"14/07/28", deliverydate:"14/08/02", syocd: "0110301", syonm: "協和 黒糖パウダー 20KG", suryo:"20", tanka:"13300", image:"", description:"", state:"配送準備中"},
        {no:2,  acceptno:123456, orderdate:"14/07/25", deliverydate:"14/07/29", syocd: "0120800", syonm: "中斜里澱粉 25KG", suryo:"5", tanka:"5150", image:"", description:"", state:"配送中"},
        {no:3,  acceptno:123456, orderdate:"14/07/21", deliverydate:"14/07/25", syocd: "0200698", syonm: "ｱﾗｶﾜ 純 丹波産 栗ペースト 20KG", suryo:"20", tanka:"5100", image:"", description:"", state:"納品を完了しました"},
        {no:4,  acceptno:123456, orderdate:"14/07/21", deliverydate:"14/07/24", syocd: "0111701", syonm: "福谷 粉糖 2KG", suryo:"10", tanka:"780", image:"", description:"入り数:10", state:"納品を完了しました", response:"7/30発送予定です。"},
        {no:5,  acceptno:123456, orderdate:"14/07/20", deliverydate:"14/07/23", syocd: "0120720", syonm: "有友 粉糖 3KG", suryo:"15", tanka:"975", image:"", description:"入り数:5", state:"納品を完了しました", response:"5/30発送予定です。"},

        {no:1,  acceptno:123456, orderdate:"14/07/28", deliverydate:"14/08/02", syocd: "0110301", syonm: "協和 黒糖パウダー 20KG", suryo:"20", tanka:"13300", image:"", description:"", state:"配送準備中"},
        {no:2,  acceptno:123456, orderdate:"14/07/25", deliverydate:"14/07/29", syocd: "0120800", syonm: "中斜里澱粉 25KG", suryo:"5", tanka:"5150", image:"", description:"", state:"配送中"},
        {no:3,  acceptno:123456, orderdate:"14/07/21", deliverydate:"14/07/25", syocd: "0200698", syonm: "ｱﾗｶﾜ 純 丹波産 栗ペースト 20KG", suryo:"20", tanka:"5100", image:"", description:"", state:"納品を完了しました"},
        {no:4,  acceptno:123456, orderdate:"14/07/21", deliverydate:"14/07/24", syocd: "0111701", syonm: "福谷 粉糖 2KG", suryo:"10", tanka:"780", image:"", description:"入り数:10", state:"納品を完了しました", response:"7/30発送予定です。"},
        {no:5,  acceptno:123456, orderdate:"14/07/20", deliverydate:"14/07/23", syocd: "0120720", syonm: "有友 粉糖 3KG", suryo:"15", tanka:"975", image:"", description:"入り数:5", state:"納品を完了しました", response:"5/30発送予定です。"},

        {no:1,  acceptno:123456, orderdate:"14/07/28", deliverydate:"14/08/02", syocd: "0110301", syonm: "協和 黒糖パウダー 20KG", suryo:"20", tanka:"13300", image:"", description:"", state:"配送準備中"},
        {no:2,  acceptno:123456, orderdate:"14/07/25", deliverydate:"14/07/29", syocd: "0120800", syonm: "中斜里澱粉 25KG", suryo:"5", tanka:"5150", image:"", description:"", state:"配送中"},
        {no:3,  acceptno:123456, orderdate:"14/07/21", deliverydate:"14/07/25", syocd: "0200698", syonm: "ｱﾗｶﾜ 純 丹波産 栗ペースト 20KG", suryo:"20", tanka:"5100", image:"", description:"", state:"納品を完了しました"},
        {no:4,  acceptno:123456, orderdate:"14/07/21", deliverydate:"14/07/24", syocd: "0111701", syonm: "福谷 粉糖 2KG", suryo:"10", tanka:"780", image:"", description:"入り数:10", state:"納品を完了しました", response:"7/30発送予定です。"},
        {no:5,  acceptno:123456, orderdate:"14/07/20", deliverydate:"14/07/23", syocd: "0120720", syonm: "有友 粉糖 3KG", suryo:"15", tanka:"975", image:"", description:"入り数:5", state:"納品を完了しました", response:"5/30発送予定です。"},
    ];

    $scope.filteredOrderhistory = [];
    $scope.currentPage = 1;
    $scope.numPerPage = 5;
    $scope.maxSize = 1;

    $scope.numPages = function () {
        return Math.ceil($scope.orderhistory.length / $scope.numPerPage);
    };

    $scope.$watch('currentPage + numPerPage', function() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
        , end = begin + $scope.numPerPage;

        $scope.filteredOrderhistory = $scope.orderhistory.slice(begin, end);
    });    

});

