describe('Controller: AboutController', function () {

  // load the controller's module
  beforeEach(module('confusionApp'));

  var AboutController, scope, $httpBackend;


//Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$httpBackend_,  $rootScope, corporateFactory) {

          // place here mocked dependencies
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET("http://localhost:3000/leadership").respond([
                                                                          {
                                                                        	    "id": 0,
                                                                        	    "name": "Peter Pan",
                                                                        	    "image": "images/alberto.png",
                                                                        	    "designation": "Chief Epicurious Officer",
                                                                        	    "abbr": "CEO",
                                                                        	    "description": "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
                                                                        	  },
                                                                        	  {
                                                                        	    "id": 1,
                                                                        	    "name": "Dhanasekaran Witherspoon",
                                                                        	    "image": "images/alberto.png",
                                                                        	    "designation": "Chief Food Officer",
                                                                        	    "abbr": "CFO",
                                                                        	    "description": "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
                                                                        	  },
                                                                        	  {
                                                                        	    "id": 3,
                                                                        	    "name": "Alberto Somayya",
                                                                        	    "image": "images/alberto.png",
                                                                        	    "designation": "Executive Chef",
                                                                        	    "abbr": "EXTRA",
                                                                        	    "description": "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"
                                                                        	  }
                                                                        	]);
      
      

    scope = $rootScope.$new();
    AboutController = $controller('AboutController', {
      $scope: scope, corporateFactory: corporateFactory
    });
    $httpBackend.flush();

  }));
  
  it('should retrieve leadership', function(){
      expect(scope.leaders.length).toEqual(3);
      expect(scope.leaders[2].abbr).toEqual('EXTRA');
      expect(scope.showLeaders).toBeTruthy();

  });

});