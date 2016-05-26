describe('Search', function(){
  var search, repos, user, div, spy;

  beforeEach(function() {
    search = new Search();
    username = 'bob123';
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    spyOn(XMLHttpRequest.prototype, 'send');
    div = 'text';
    document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(div);
  });

  it('should open request', function(){
    search.fetchFromApi(username);
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalled();
    expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
  });

});
