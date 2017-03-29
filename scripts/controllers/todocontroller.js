todoApp.controller('todoController', function($scope, DataFactory) {

  $scope.deleteItem = function(note) {

    var deleteIndex = -1; 
    var note;
    var commentIndex = -1;
    var categoryIndex = -1;
    $scope.notes.forEach(function(e, i) {
      if(e.name === note.name) {
        deleteIndex = i;
        commentIndex = commentIndex + note.wid;  
        categoryIndex = categoryIndex + note.cid;
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

    $scope.categories.splice(categoryId, 1, {"id": note.cid, "name": category});
    $scope.comment.splice(commentId, 1, {"id": note.wid, "note": comment});

    localStorage.setItem("notes", JSON.stringify($scope.notes));
    localStorage.setItem("comment", JSON.stringify($scope.comment));
    localStorage.setItem("categories", JSON.stringify($scope.categories));
  };
    
    $scope.categories = [{}];
    $scope.notes = [{}];
    $scope.prorities = [{}];
    $scope.comment = [{}];

});
 