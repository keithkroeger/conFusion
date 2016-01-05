"use strict";
angular.module('confusionApp', [])

.controller('MenuController', ['$scope', function($scope) {
	$scope.showDetails = false;
	$scope.tab = 1;
	$scope.filtText = '';
	$scope.dishes = [{
		name: 'Uthapizza',
		image: 'images/uthapizza.png',
		category: 'mains',
		label: 'Hot',
		price: '4.99',
		description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
		comment: ''
	}, {
		name: 'Zucchipakoda',
		image: 'images/zucchipakoda.png',
		category: 'appetizer',
		label: '',
		price: '1.99',
		description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
		comment: ''
	}, {
		name: 'Vadonut',
		image: 'images/vadonut.png',
		category: 'appetizer',
		label: 'New',
		price: '1.99',
		description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
		comment: ''
	}, {
		name: 'ElaiCheese Cake',
		image: 'images/elaicheesecake.png',
		category: 'dessert',
		label: '',
		price: '2.99',
		description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
		comment: ''
	}];
	// this.dishes = dishes;  Not needed since $scope object is now our container for all variables in controller.  Meaning variables in controller can be members of $scope object using $scope.memberName.

	$scope.select = function(setTab) {
		$scope.tab = setTab;
		if (setTab === 2) {
			$scope.filtText = "appetizer";
		} else if (setTab === 3) {
			$scope.filtText = "mains";
		} else if (setTab === 4) {
			$scope.filtText = "dessert";
		} else {
			$scope.filtText = "";
		}
	};
	$scope.isSelected = function(checkTab) {
		return ($scope.tab === checkTab);
	};

    $scope.toggleDetails = function() {
        $scope.showDetails = !$scope.showDetails;
    };
}])
// Adding Controllers
   // .controller('ContactController', ['$scope', function($scope) {
   //      $scope.feedback = {mychannel:"", firstName:"", lastName:"",
   //                         agree:false, email:"" };
   //  }])
   //
   //  .controller('FeedbackController', ['$scope', function($scope) {
   //
   //  }]);

.controller('ContactController', ['$scope', function($scope) {
    $scope.feedback = {mychannel:"", firstName:"", lastName:"",
						agree:false, email:"" };
    var channels = [{value1:"tel", label1:"Tel1."}, 									                         {value1:"email",label1:"Email1"}];
    $scope.channels = channels;
    $scope.invalidChannelSelection = false;
}])
.controller('FeedbackController', ['$scope', function($scope) {
                $scope.sendFeedback = function() {
                        console.log($scope.feedback);
                        if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
            $scope.invalidChannelSelection = true;
            console.log('incorrect');
        }
        else {
            $scope.invalidChannelSelection = false;
            $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                               agree:false, email:"" };
            $scope.feedback.mychannel="";

            $scope.feedbackForm.$setPristine();
            console.log($scope.feedback);
        }
    };
}])
.controller("dishDetailController", [ '$scope',function($scope){
	$scope.dish={
	          name:'Uthapizza',
	          image: 'images/uthapizza.png',
	          category: 'mains',
	          label:'Hot',
	          price:'4.99',
	          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
	           comments: [
	               {
	                   rating:5,
	                   comment:"Imagine all the eatables, living in conFusion!",
	                   author:"John Lemon",
	                   date:"2012-10-16T17:57:28.556094Z"
	               },
	               {
	                   rating:4,
	                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
	                   author:"Paul McVites",
	                   date:"2014-09-05T17:57:28.556094Z"
	               },
	               {
	                   rating:3,
	                   comment:"Eat it, just eat it!",
	                   author:"Michael Jaikishan",
	                   date:"2015-02-13T17:57:28.556094Z"
	               },
	               {
	                   rating:4,
	                   comment:"Ultimate, Reaching for the stars!",
	                   author:"Ringo Starry",
	                   date:"2013-12-02T17:57:28.556094Z"
	               },
	               {
	                   rating:2,
	                   comment:"It's your birthday, we're gonna party!",
	                   author:"25 Cent",
	                   date:"2011-12-02T17:57:28.556094Z"
	               }

	           ]
	    };//dish
} // function('scope'){}
])

.controller('DishCommentController', ['$scope', function($scope){
// Do NOT use camelCase variables if they are also used in html tags.
// since html is cae insensitive!
	$scope.comment_new = { author:'', rating:5, comment:'', date:''};
	// $scope.comment_new.rating= 3;
	$scope.submitComment = function(){
		$scope.comment_new.date = new Date();
		var temp = {};
		angular.copy( $scope.comment_new, temp);// need deep copy!
		$scope.dish.comments.push( temp );
		console.log('comment_new: ');
		console.log($scope.comment_new);
		console.log('dish array: ');
		console.log($scope.dish.comments);
		$scope.comment_new.author = "";
		$scope.comment_new.rating = 5;
		$scope.comment_new.comment = '';
		$scope.comment_new.date = '';
		$scope.commentForm.$setPristine();// Reset Error & Warning messages
	};
} // function('scope'){}
])

; // Controller termination
