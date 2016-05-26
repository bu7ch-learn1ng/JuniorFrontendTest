var search = new Search(),
    result = document.getElementById('result'),
    button = document.getElementById('button'),
    message = document.getElementById('message');

message.style.display = 'none';
result.style.display  = 'none';

function runSearch(callback){
  var username = document.getElementById('text').value;
  search.fetchFromApi(username);
  callback;
}

function showResults(){
  result.style.display = '';
}
