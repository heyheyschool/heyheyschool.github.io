todoApp.controller('localStorageController', function($scope, DataFactory) {

	var localCategories = JSON.parse(localStorage.getItem("categories"));
    var localComments = JSON.parse(localStorage.getItem("comment"));
    var localNotes = JSON.parse(localStorage.getItem("notes"));
    var localPriorities = JSON.parse(localStorage.getItem("priorities"));

    if(localCategories != undefined && localCategories.length>0) {
      $scope.categories = localCategories;
    }else{
      $scope.categories = DataFactory.getAllCategories();
    }

    if(localComments != undefined && localComments.length>0) {
      $scope.comment = localComments;
    }else{
      $scope.comment = DataFactory.getAllComments();
    }

    if(localNotes != undefined && localNotes.length>0) {
      $scope.notes = localNotes;
    }else{
        $scope.notes = DataFactory.getAllNotes();
  }

    if(localPriorities != undefined && localPriorities.length>0) {

      $scope.priorities = localPriorities;
    }else{
      $scope.priorities = DataFactory.getAllPriorities();
}

	$scope.getCategoryByNote = function(note){
        var categories = "";
        angular.forEach($scope.categories, function(value, key) {
            if(note.cid == value.id){
                categories = value.name;
                return false;
            }
        });
        return categories;
    }

    $scope.getPriorityByNote = function(note){
        var priorities = "";
        angular.forEach($scope.priorities, function(value, key) {
            if(note.pid == value.id){
                priorities = value.name;
                return false;
            }
        });
        return priorities;
    }

    $scope.getCommentByNote = function(note){
        var comment = "";
        angular.forEach($scope.comment, function(value, key) {
            if(note.wid == value.id){
                comment = value.note;
                return false;
            }
        });
        return comment;
    }

    $scope.checkPriorityColor = function (caseStr) {
        switch (caseStr) {
            case 'High':
                return "red";
                console.log("red");
                break;
            case 'Medium':
                return "blue";
                console.log("blue");
                break;
            case 'Low':
                return "green";
                console.log("green");
                break;
        }
    };


});