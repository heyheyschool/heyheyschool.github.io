todoApp.controller("addlistController", function ($scope) {

  $scope.saveNewItem = function() {

    $scope.notes.push({
      id: $scope.notes.length + 1,
      checked: false,
      name: $scope.newItem.name,
      wid: $scope.comment.length + 1,
      cid: $scope.categories.length + 1,
      pid: $scope.checkPriorityId($scope.newItem.priority)
    });

    $scope.categories.push({
      id: $scope.categories.length + 1,
      name: $scope.newItem.name2,
    });

    $scope.comment.push({
      id: $scope.comment.length + 1,
      note: $scope.newItem.comment
    })

    $scope.newItem = {};

    localStorage.setItem("notes", JSON.stringify($scope.notes));
    localStorage.setItem("categories", JSON.stringify($scope.categories));
    localStorage.setItem("comment", JSON.stringify($scope.comment));
  };

});