(function(){
	'use strict'
	angular
	.module('appRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS','ngFileUpload'])
	.config(configuration)
	.controller('tabCtrl', tabCtrl);

	configuration.$inject = ['$stateProvider','$urlRouterProvider'];

	function configuration($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('user',{
			url: '/usuarios',
			templateUrl: './components/users/user.view.html',
			css : './css/user.style.css',
			resolve: {
		    	load: ['$ocLazyLoad', function($ocLazyLoad){
		    		return $ocLazyLoad.load('./components/users/user.controller.js')
		    	}]
		    },
		    controller: 'userController',
		    controllerAs: 'vm'
		})
		.state('property',{
			url: '/propiedad',
			templateUrl: './components/property/property.view.html',
			css : './css/user.style.css',
			resolve: {
		    	load: ['$ocLazyLoad', function($ocLazyLoad){
		    		return $ocLazyLoad.load('./components/users/user.controller.js')
		    	}]
		    },
		    controller: 'userController',
		    controllerAs: 'vm'
		})
		.state('Listproperty',{
			url: '/propiedades',
			templateUrl: './components/property/propertyList.view.html',
			resolve: {
		    	load: ['$ocLazyLoad', function($ocLazyLoad){
		    		return $ocLazyLoad.load('./components/users/user.controller.js')
		    	}]
		    },
		    controller: 'userController',
		    controllerAs: 'vm'
		})
		.state('userList',{
			url: '/listaUsuarios',
			templateUrl: './components/users/userList.view.html',
			resolve: {
		    	load: ['$ocLazyLoad', function($ocLazyLoad){
		    		return $ocLazyLoad.load('./components/users/user.controller.js')
		    	}]
		    },
		    controller: 'userController',
		    controllerAs: 'vm'
		})

		$urlRouterProvider.otherwise('/usuarios');
	};

	function tabCtrl($scope, $location, $log) {
        $scope.selectedIndex = 0;

        $scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    $location.url("/usuarios");
                    break;
                case 1:
                    $location.url("/propiedad");
                    break;
                case 2:
                    $location.url("/propiedades");
                    break;
                case 3:
                    $location.url("/listaUsuarios");
                    break;
            }
        });
    }
})();