app.controller('SuggestionController', ['$scope', 'suggestions', '$routeParams',
	function($scope,suggestions,$routeParams){
		//$scope.posts = suggestions.posts;
		$scope.post = suggestions.posts[$routeParams.id];
		//$scope.comments = post.comments

		$scope.addComment = function(){
			if(!$scope.title || $scope.title === "")
				{
					return;
				}
			$scope.post.comments.push({
				title: $scope.title,
				upvotes: 0,
			});

			$scope.title = '';
		};

		$scope.upVoteComment = function (comment){
			  	comment.upvotes += 1; 
		};
		
	}]);