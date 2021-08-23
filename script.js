var list = [];

if (list.length == 0) {
  $(".list-group").visible = false;
}

var moduleA = angular.module("ModuleA", []);

moduleA.controller("MsgController", function ($scope) {
  $scope.Message = "測試一下";
  $scope.User = "World";
  $scope.response = { msgList: list };
  $scope.newMsg = function () {
    //console.log($("#txtNewMsg").val());
    list.push($("#txtNewMsg").val());
    $("#txtNewMsg").val("");
    //console.log(list);
  };

  $scope.deleteMsg = function (index) {
    list.splice(index, 1);
  };
});

moduleA.controller("UserController", function ($scope) { });