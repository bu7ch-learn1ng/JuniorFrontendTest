function Search(){}

var allRepos = new AllRepos();

Search.prototype.fetchFromApi = function(username) {

  document.getElementById('text').value = '';

  var request = new XMLHttpRequest();
  var url = 'https://api.github.com/users/';

  request.open('GET', url + username, true);

  request.onload = function(){
    var message = document.getElementById('message');
    message.innerHTML = '';
    try {
    if(request.status === 404) throw 'Does not exist';
    if(request.status >= 200 && request.status < 400){
      message.style.display = 'none';
      var data = JSON.parse(request.responseText),
          repos = data.repos_url,
          user = {
            username: '@' + data.login,
            fullName: data.name,
            bio: data.bio,
            avatar: data.avatar_url
          };
          console.log(data);
      _fetchRepoDetails(user, repos);
      }
    }  catch(err) {
        message.style.display = '';
        message.innerHTML = err;
        profile.div.style.display = 'none';
        allRepos.div.style.display = 'none';
      }
  };

  request.send();

};

function _fetchRepoDetails(user, repos) {
  var details = new XMLHttpRequest();

  details.open('GET', repos, true);

  details.onload = function(){
    if (details.status >= 200 && details.status < 400){
      var data = JSON.parse(details.responseText);
      _storeRepoDetails(data, user);
    }
  };

  details.send();
}

function _storeRepoDetails(data, user){
  var repoDetails = [];
  for(var repo in data) {
    var info = data[repo];
    repoDetails.push({
      repo: info.name,
      stars: info.watchers_count,
      forks: info.forks_count
    });
  }

  allRepos.showList(repoDetails, user);
}
