app.controller('gameCtrl', function($scope) {

	var _numRows = 6;
	var _numColumns = 7;




	function init() {
		$scope.data = {};

		var gameBoardObj = getGameBoardObj(_numRows, _numColumns);
		$scope.data.rows = gameBoardObj;

	}


	function getGameBoardObj(numRows, numColumns) {
		var rows = [];
		for(var row = 0; row < numRows; row++) {
			var line = [];
			for(var col = 0; col < numColumns; col++) {
				line.push(col);
			}
			rows.push(line);
		}
		return rows;
	}



	init();
});
