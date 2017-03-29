todoApp.controller('localStorageController', function($scope, DataFactory) {

	var localCategories = JSON.parse(localStorage.getItem("categories"));
    var localComments = JSON.parse(localStorage.getItem("comment"));
    var localNotes = JSON.parse(localStorage.getItem("notes"));
    var localPriorities = JSON.parse(localStorage.getItem("priorities"));

    console.log("before"+localCategories);
    console.log("before"+localComments);
    console.log("before"+localNotes);
    console.log("before prio"+localPriorities);

    //Ik overschrijf de array en moet hem toevoegen.

    if(localCategories != undefined && localCategories.length>0) {

      //$scope.categories = $scope.categories.concat(localCategories);
      $scope.categories = localCategories;
      console.log($scope.categories);
    }else{
      $scope.categories = DataFactory.getAllCategories();
    }

    if(localComments != undefined && localComments.length>0) {
      $scope.comment = localComments;
      console.log($scope.comment);
    }else{
      $scope.comment = DataFactory.getAllComments();
    }

    if(localNotes != undefined && localNotes.length>0) {
      $scope.notes = localNotes;
      console.log($scope.notes);
    }else{
        $scope.notes = DataFactory.getAllNotes();
  }

    if(localPriorities != undefined && localPriorities.length>0) {

      $scope.priorities = localPriorities;
      console.log($scope.priorities);
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

    $scope.getColorByNote = function(note){
        var colors = "";
        angular.forEach($scope.prorities, function(value, key) {
            if(note.pid == value.id){
                colors = value.color;
                return false;
            }
        });
        return colors;
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

    $scope.checkPriorityId = function (caseStr) {
        switch (caseStr) {
            case 'High':
                return 1;
                console.log(1);
                break;
            case 'Medium':
                return 2;
                console.log(2);
                break;
            case 'Low':
                return 3;
                console.log(3);
                break;
        }
    };

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