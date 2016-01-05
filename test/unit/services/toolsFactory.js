describe('Service: ToolsFactory', function () {

  // load the controller's module
  beforeEach(module('confusionApp'));

  var ToolsFactory, scope, $httpBackend;


//Initialize the controller and a mock scope
  beforeEach(inject(function ( _$httpBackend_,  $rootScope, toolsFactory) {

          // place here mocked dependencies
      $httpBackend = _$httpBackend_;

    scope = $rootScope.$new();
    ToolsFactory = toolsFactory;
//    $httpBackend.flush();

  }));
  
  it('return values', function(){
      expect(ToolsFactory.getList().length).toEqual(2);
  });

});