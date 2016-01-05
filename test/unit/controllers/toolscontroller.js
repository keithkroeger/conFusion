describe('Controller: ToolsController', function () {

  // load the controller's module
  beforeEach(module('confusionApp'));

  var ToolsController, scope, $httpBackend;


//Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$httpBackend_,  $rootScope, toolsFactory) {

          // place here mocked dependencies
      $httpBackend = _$httpBackend_;

    scope = $rootScope.$new();
    ToolsController = $controller('ToolsController', {
      $scope: scope, toolsFactory: toolsFactory
    });

  }));
  
  it('return values', function(){
      expect(scope.tools.length).toEqual(2);
  });

});