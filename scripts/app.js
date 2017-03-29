var todoApp = angular.module('todoApp', ['todoApp.filters', 'ngRoute'])

todoApp.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
    .when("/home", {
        templateUrl : "views/home.html"
    })
    .when("/addlist", {
        templateUrl : "views/Addlist.html",
        controller: "addlistController"
    })
    .when("/info", {
        templateUrl : "views/info.html",
        controller: "HomeController"
    })
    .otherwise({
        redirectTo: 'home.html',
    });
});

