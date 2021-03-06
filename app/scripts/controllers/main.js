'use strict';

/**
 * @ngdoc function
 * @name d3OnAngularSeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the d3OnAngularSeedApp
 */
angular.module('d3OnAngularSeedApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.brushed = function(d){
        $scope.brush = d;
        $scope.$apply();
    };

    $scope.clicked = function(d) {
    	console.log(d);
    }

	$scope.items = [{"lane": 0, "id": "Qin", "start": 5, "end": 205, "mid": 150},
		{"lane": 0, "id": "Jin", "start": 265, "end": 420, "mid": 300},
		{"lane": 0, "id": "Sui", "start": 580, "end": 615, "mid": 600},
		{"lane": 0, "id": "Tang", "start": 620, "end": 900, "mid": 750},
		{"lane": 0, "id": "Song", "start": 960, "end": 1265, "mid": 1000},
		{"lane": 0, "id": "Yuan", "start": 1270, "end": 1365, "mid": 1300},
		{"lane": 0, "id": "Ming", "start": 1370, "end": 1640, "mid": 1500},
		{"lane": 0, "id": "Qing", "start": 1645, "end": 1910, "mid": 1800},
		{"lane": 1, "id": "Yamato", "start": 300, "end": 530, "mid": 350},
		{"lane": 1, "id": "Asuka", "start": 550, "end": 700, "mid": 600},
		{"lane": 1, "id": "Nara", "start": 710, "end": 790, "mid": 740},
		{"lane": 1, "id": "Heian", "start": 800, "end": 1180, "mid": 1000},
		{"lane": 1, "id": "Kamakura", "start": 1190, "end": 1330, "mid": 1250},
		{"lane": 1, "id": "Muromachi", "start": 1340, "end": 1560, "mid": 1400},
		{"lane": 1, "id": "Edo", "start": 1610, "end": 1860, "mid": 1700},
		{"lane": 1, "id": "Meiji", "start": 1870, "end": 1900, "mid": 1890},
		{"lane": 1, "id": "Taisho", "start": 1910, "end": 1920, "mid": 1915},
		{"lane": 1, "id": "Showa", "start": 1925, "end": 1985, "mid": 1960},
		{"lane": 1, "id": "Heisei", "start": 1990, "end": 1995, "mid": 1992},
		{"lane": 2, "id": "Three Kingdoms", "start": 10, "end": 670, "mid": 300},
		{"lane": 2, "id": "North and South States", "start": 690, "end": 900, "mid": 800},
		{"lane": 2, "id": "Goryeo", "start": 920, "end": 1380, "mid": 1000},
		{"lane": 2, "id": "Joseon", "start": 1390, "end": 1890, "mid": 1500},
		{"lane": 2, "id": "Korean Empire", "start": 1900, "end": 1945, "mid": 1930}];
  });
