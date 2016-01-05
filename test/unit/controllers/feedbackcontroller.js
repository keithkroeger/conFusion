describe('Controller: FeedbackController', function () {

  // load the controller's module
  beforeEach(module('confusionApp'));

  var FeedbackController, scope, $httpBackend;

  //Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$httpBackend_,  $rootScope, feedbackFactory) {

    // place here mocked dependencies
    $httpBackend = _$httpBackend_;

    scope = $rootScope.$new();

    FeedbackController = $controller('FeedbackController', {
      $scope: scope, feedbackFactory: feedbackFactory
    });


  }));

  it('should save feedback', function(){
	  scope.feedback = {mychannel:"Email", firstName:"K", lastName:"K", agree:true, email:"a@anon.com" };
	  $httpBackend.expectPOST("http://localhost:3000/feedback",scope.feedback).respond({"id": 1});

	  scope.sendFeedback();
	  $httpBackend.flush();

      expect(!scope.feedback.agree).toBeTruthy();
  });

});