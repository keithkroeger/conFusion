describe('Controller: IndexController', function () {

  // load the controller's module
  beforeEach(module('confusionApp'));

  var IndexController, scope, $httpBackend;


//Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$httpBackend_,  $rootScope, menuFactory,corporateFactory) {

          // place here mocked dependencies
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET("http://localhost:3000/dishes/0").respond({
    	  "id": 0,
    	  "name": "Uthapizza",
    	  "image": "images/uthapizza.png",
    	  "category": "mains",
    	  "label": "Hot",
    	  "price": 4.99,
    	  "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
    	  "comments": [
    	    {
    	      "rating": 5,
    	      "comment": "Imagine all the eatables, living in conFusion!",
    	      "author": "John Lemon",
    	      "date": "2012-10-16T17:57:28.556094Z"
    	    },
    	    {
    	      "rating": 4,
    	      "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
    	      "author": "Paul McVites",
    	      "date": "2014-09-05T17:57:28.556094Z"
    	    },
    	    {
    	      "rating": 3,
    	      "comment": "Eat it, just eat it!",
    	      "author": "Michael Jaikishan",
    	      "date": "2015-02-13T17:57:28.556094Z"
    	    },
    	    {
    	      "rating": 4,
    	      "comment": "Ultimate, Reaching for the stars!",
    	      "author": "Ringo Starry",
    	      "date": "2013-12-02T17:57:28.556094Z"
    	    },
    	    {
    	      "rating": 2,
    	      "comment": "It's your birthday, we're gonna party!",
    	      "author": "25 Cent",
    	      "date": "2011-12-02T17:57:28.556094Z"
    	    }
    	  ]
    	});
      $httpBackend.expectGET("http://localhost:3000/promotions/0").respond({
                                                                        	    "id": 0,
                                                                        	    "name": "Weekend Grand Buffet",
                                                                        	    "image": "images/buffet.png",
                                                                        	    "label": "New",
                                                                        	    "price": "29.99",
                                                                        	    "description": "Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person "
                                                                        	  });

      $httpBackend.expectGET("http://localhost:3000/leadership/3").respond({
    	  "id": 3,
    	  "name": "Alberto Somayya",
    	  "image": "images/alberto.png",
    	  "designation": "Executive Chef",
    	  "abbr": "EXTRA",
    	  "description": "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"
    	});
      

    scope = $rootScope.$new();

    IndexController = $controller('IndexController', {
      $scope: scope, menuFactory: menuFactory, corporateFactory: corporateFactory
    });

    $httpBackend.flush();

  }));
  

  it('should retrieve promotions', function(){
      expect(scope.promotion.price).toEqual('29.99');
      expect(scope.promotion.id).toEqual(0);
      expect(scope.showPromotion).toBeTruthy();
  });

  it('should retrieve leadership', function(){
      expect(scope.exec.abbr).toEqual('EXTRA');
      expect(scope.exec.id).toEqual(3);
      expect(scope.showExec).toBeTruthy();
  });

});