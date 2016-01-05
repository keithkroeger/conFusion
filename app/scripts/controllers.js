'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;

            $scope.showMenu = false;
            $scope.message = "Loading ...";
            menuFactory.getDishes().query(
                function(response) {
                    $scope.dishes = response;
                    $scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });
            
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope', 'feedbackFactory', function($scope,feedbackFactory) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
//                    feedbackFactory.getFeedback().add($scope.feedback);
                    feedbackFactory.getFeedback().save($scope.feedback);

                	$scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    
                    if ($scope.feedbackForm){
                        $scope.feedbackForm.$setPristine();
                    }
                    console.log($scope.feedback);
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
        	$scope.showDish = false;
            $scope.message="Loading ...";
            $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)})
            	.$promise.then(
                            function(response){
                                $scope.dish = response;
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
            );
        }])

        .controller('DishCommentController', ['$scope', 'menuFactory', function($scope,menuFactory) {
            
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            
            $scope.ratingList = [{value:"1", label:"1"},
                {value:"2",label:"2"},
				{value:"3",label:"3"},
				{value:"4",label:"4"},
				{value:"5",label:"5"}
				];

            $scope.submitComment = function () {
                
                $scope.mycomment.date = new Date().toISOString();
                console.log($scope.mycomment);
                
                $scope.dish.comments.push($scope.mycomment);

                menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
                
                $scope.commentForm.$setPristine();
                
                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            };
        }])

        // implement the IndexController and About Controller here
        .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope,menuFactory,corporateFactory) {

        	// return featured dish
        	$scope.showDish = false;
            $scope.dishMessage="Loading ...";
            $scope.dish = menuFactory.getDishes().get({id:0})
            .$promise.then(
                function(response){
                    $scope.dish = response;
                    $scope.showDish = true;
                },
                function(response) {
                    $scope.dishMessage = "Error: "+response.status + " " + response.statusText;
                }
            );

            
            // return promotion
        	$scope.showPromotion = false;
            $scope.promotionMessage="Loading ...";
            menuFactory.getPromotions().get({id:0})
            .$promise.then(
                function(response){
                    $scope.promotion = response;
                    $scope.showPromotion = true;
                },
                function(response) {
                    $scope.promotionMessage = "Error: "+response.status + " " + response.statusText;
                }
            );
            
        	$scope.showExec = false;
            $scope.execMessage="Loading ...";
            corporateFactory.getLeaders().get({id:3})
            .$promise.then(
                function(response){
                    $scope.exec = response;
                    $scope.showExec = true;
                },
                function(response) {
                    $scope.execMessage = "Error: "+response.status + " " + response.statusText;
                }
            );

        }])

        
        .controller('AboutController', ['$scope', 'corporateFactory', function($scope,corporateFactory) {

        	$scope.showLeaders = false;
            $scope.leadersMessage="Loading ...";
            corporateFactory.getLeaders().query()
            .$promise.then(
                function(response){
                    $scope.leaders = response;
                    $scope.showLeaders = true;
                },
                function(response) {
                    $scope.leadersMessage = "Error: "+response.status + " " + response.statusText;
                }
            );
        }])

        .controller('ToolsController', ['$scope', 'toolsFactory', function($scope,toolsFactory) {
        	$scope.tools=toolsFactory.getList();
        }])


;
