function historyController($scope) {

		$scope.listOfSites=[{name:'Tara', era:'iron-age', access: 'public'}, 
		{name:'Rathcroghan', era:'iron-age', access: 'public'},
		{name:'Rock of Dunamase', era:'Medieval', access: 'public'},
		{name:'Dun Ailaine', era:'Iron Age', access: 'private'}]						


		$scope.addSite = function () {
			$scope.listOfSites.push(

				{
					name: $scope.newSite.name,
					era: $scope.newSite.era,
					access: $scope.newSite.access
				}
			);
		}


$scope.delete = function ( index ) {

    $scope.listOfSites.splice(index, 1);

};

	}

	console.log('got it...........');