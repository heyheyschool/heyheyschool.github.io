todoApp.controller('todoController', function($scope, DataFactory) {

  $scope.deleteItem = function(note) {

    var deleteIndex = -1; 
    var note;
    var commentIndex = -1;
    var categoryIndex = -1;

    console.log($scope.notes);
    $scope.notes.forEach(function(e, i) {
      if(e.name === note.name) {
        deleteIndex = i;
        console.log("note wid"+note.wid);
        console.log("note cid"+note.cid);
        commentIndex = commentIndex + note.wid;  
        categoryIndex = categoryIndex + note.cid;
        console.log(commentIndex);
        console.log(categoryIndex);
      }
    });

    $scope.notes.splice(deleteIndex, 1);
    $scope.comment.splice(commentIndex, 1);
    $scope.categories.splice(categoryIndex, 1);
    localStorage.setItem("notes", JSON.stringify($scope.notes));
    localStorage.setItem("comment", JSON.stringify($scope.comment));
    localStorage.setItem("categories", JSON.stringify($scope.categories));
  };

  $scope.updateItem = function(note, comment, category) {
    note.updating=false;
    var test = -1;
    commentId = test + note.wid; 
    categoryId = test + note.cid;

    console.log("note" + note);
    console.log("comm value" + comment);
    console.log("category value" + category);

    $scope.categories.splice(categoryId, 1, {"id": note.cid, "name": category});
    $scope.comment.splice(commentId, 1, {"id": note.wid, "note": comment});

    //console.log("splice " + $scope.comment.splice(test, 1, {"id": note.wid, "note": comm}));;
    console.log($scope.comment[0], $scope.comment[1], $scope.comment[2]);
    // $scope.comment[test].push({"id": "0", "note": "BLABLA"})
    //console.log($scope.comment.splice(1, test, "id": note.wid "note": comm));

    console.log($scope.notes[0], $scope.comment[0], $scope.categories[0]);

    localStorage.setItem("notes", JSON.stringify($scope.notes));
    localStorage.setItem("comment", JSON.stringify($scope.comment));
    localStorage.setItem("categories", JSON.stringify($scope.categories));
};
    
    $scope.categories = [{}];
    $scope.notes = [{}];
    $scope.prorities = [{}];
    $scope.comment = [{}];


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

});
 