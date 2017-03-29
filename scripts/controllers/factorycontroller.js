todoApp.controller("HomeController", function($scope, DataFactory) {
    $scope.data = DataFactory.getAllData();
    $scope.categories = DataFactory.getAllCategories();
});

    todoApp.factory('DataFactory', function() {
    var data = [
        "Op deze website kan je todo lijsten aanmaken",
    	"Ook kan je ze wijzigen en verwijderen",
    	"Op deze pagina zie je afbeeldingen"
    ];

    var categories = [{
        "id": "1",
        "name": "School",
    }, {
        "id": "2",
        "name": "Werk",
    }];

    var notes = [{
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

    var priorities = [{
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

    var comment = [{
        "id": "1",
        "note": "Architectuur boek",
      }, {
        "id": "2",
        "note": "SPA afmaken",
      }, {
        "id": "3",
        "note": "Test",
    }];

    function getAllData() {
        return data;
    }

    function getAllCategories(){
        return categories; 
    }

    function getAllNotes(){
        return notes;
    }

    function getAllPriorities(){
        return priorities;
    }

    function getAllComments(){
        return comment;
    }

    return {
        getAllData: getAllData,
        getAllCategories: getAllCategories,
        getAllNotes: getAllNotes,
        getAllPriorities: getAllPriorities,
        getAllComments: getAllComments
    };

});