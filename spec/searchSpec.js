describe('Search', function(){
  var search, repos, user;

  beforeEach(function() {
    search = new Search();
    username = 'bob123';
    spyOn(XMLHttpRequest.prototype, 'open').and.callThrough();
    spyOn(XMLHttpRequest.prototype, 'send');
  });

  it('should open request', function(){
    search.fetchFromApi(username);
    expect(XMLHttpRequest.prototype.open).toHaveBeenCalled();
    expect(XMLHttpRequest.prototype.send).toHaveBeenCalled();
  });

});
