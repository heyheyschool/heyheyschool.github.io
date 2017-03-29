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

   /*  $scope.notes = [{
        "id": "1",
        checked: false,
        "name": "Lezen",
        "wid": "1",
        "cid": "2",
        "pid": "1",
    }, {
        "id": "2",
        checked: false,
        "name": "Studeren",
        "wid": "2",
        "cid": "1",
        "pid": "2",
    }];

     console.log($scope.notes);*/
    
    /*$scope.categories = [{
        "id": "1",
        "name": "School",
        //"pid": "1",
    }, {
        "id": "2",
        "name": "Werk",
        //"pid": "2",
    }]; */

    /*$scope.priorities = [{
        "id": "1",
        "name": "High",
        "color": "red",
    }, {
        "id": "2",
        "name": "Medium",
        "color": "blue",
    }, {
        "id": "3",
        "name": "Low",
        "color": "green",
    }];

    console.log($scope.priorities);

     $scope.comment = [{
        "id": "1",
        "note": "Architectuur boek",
      }, {
        "id": "2",
        "note": "SPA afmaken",
      }, {
        "id": "3",
        "note": "Test",
    }];*/


  /*var localCategories = JSON.parse(localStorage.getItem("categories"));
  var localComments = JSON.parse(localStorage.getItem("comment"));
  var localNotes = JSON.parse(localStorage.getItem("notes"));
  var localPriorities = JSON.parse(localStorage.getItem("priorities"));

  console.log("before"+localCategories);
  console.log("before"+localComments);
  console.log("before"+localNotes);
  console.log("before prio"+localPriorities);

  //Ik overschrijf de array en moet hem toevoegen.

  if(localCategories != undefined && localCategories.length>0) {
    $scope.categories = DataFactory.getAllCategories();
    console.log("factory"+$scope.categories);
    $scope.categories = $scope.categories.concat(localCategories);
    console.log($scope.categories);
  }

  if(localComments != undefined && localComments.length>0) {
    $scope.comment = DataFactory.getAllComments();
    console.log("factory"+$scope.comment);
    $scope.comment = $scope.comment.concat(localComments);
    console.log($scope.comment);
  }

  if(localNotes != undefined && localNotes.length>0) {
    $scope.notes = DataFactory.getAllNotes();
    console.log("factory"+$scope.notes);
    $scope.notes = $scope.notes.concat(localNotes);
    console.log($scope.notes);
  }

  if(localPriorities != undefined && localPriorities.length>0) {
    $scope.priorities = DataFactory.getAllPriorities();
    console.log("factory"+$scope.priorities);
    $scope.priorities = localPriorities;
    console.log($scope.priorities);
}*/

    /*var localCategories = localStorage.getItem("categories");
    var localComments = localStorage.getItem("comment");
    var localNotes = localStorage.getItem("notes");
    var localPriorities = localStorage.getItem("priorities");

    console.log("before"+localCategories);
    console.log("before"+localComments);
    console.log("before"+localNotes);
    console.log("before prio"+localPriorities);

    //Ik overschrijf de array en moet hem toevoegen.

    if(localCategories != undefined && localCategories.length>0) {

      //$scope.categories = $scope.categories.concat(localCategories);
      $scope.categories = JSON.parse(localCategories);
      console.log($scope.categories);
    }else{
      $scope.categories = DataFactory.getAllCategories();
    }

    if(localComments != undefined && localComments.length>0) {
      $scope.comment = JSON.parse(localComments);
      console.log($scope.comment);
    }else{
      $scope.comment = DataFactory.getAllComments();
    }

    if(localNotes != undefined && localNotes.length>0) {
      $scope.notes = JSON.parse(localNotes);
      console.log($scope.notes);
    }else{
        $scope.notes = DataFactory.getAllNotes();
  }

    if(localPriorities != undefined && localPriorities.length>0) {

      $scope.priorities = JSON.parse(localPriorities);
      console.log($scope.priorities);
    }else{
      $scope.priorities = DataFactory.getAllPriorities();
}*/

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
  /*$scope.uniqueItems = function(){
    var test = $scope.items.
    console.log(test);
    uniqueArray = jQuery.unique($scope.items.category);
    console.log(uniqueArray);
  return uniqueArray;

  }


  //gekopieerde code

  /*angular.module('ui.filters').filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});*/



 /* $scope.selected = {};
  
  $scope.category = [{id:"1",name:"work"}];

  $scope.data =  [
    {"id":"113000",
      "values":
          [{$scope.category.id = 1},
           {"note":"Loonstroken", "checked": false}]
    },
    {"id":"113002",
      "values":
          [{"category":"school"},
           {"note":"Blok H", "checked": true}]
    }
    ];
  
  $scope.$watch('selected.id', function(id){
    delete $scope.selected.value;
    angular.forEach($scope.data, function(attr){
      if(attr.id === id){
        $scope.selectedAttr = attr;
      }
    });
      });

*/

/*filter('unique', function() {
  return function(items, category) {
    var newitems =[];
    items.forEach(function(project){
      if(item.category === subProjectName)
        newitems.push(project);
    });
    return newitems;
  };
});*/

/*todoApp.filter('unique', function() {
    return function (arr, field) {
        return _.uniq(arr, function(a) { return a[field]; });
    };
});*/

/*todoApp.filter('unique', function () {
  return function (array) {
    uniqueArray = jQuery.unique(array);
    return uniqueArray;
  };
});*/