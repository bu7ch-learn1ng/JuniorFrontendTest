function AllRepos(){}

var profile = new Profile();

AllRepos.prototype.showList = function (repos, user) {
  profile.create(user);
  profile.div.style = '';
  var div = document.getElementById('repos');
  div.textContent = '';

  var ul = document.createElement('ul');

  for(var repo in repos){
    var info = repos[repo];
    var li = document.createElement('li'),
        span = document.createElement('span'),
        repoName = document.createTextNode(info.repo),
        hr = document.createElement('hr'),
        stars = document.createTextNode(' ' + info.stars + ' '),
        forks = document.createTextNode(' ' + info.forks + ' '),
        forkImg = document.createElement("img"),
        starImg = document.createElement("img");
        forkImg.src = 'public/images/fork.png';
        forkImg.style.height = '11px';
        starImg.src = 'public/images/star.png';
        starImg.style.height = '15px';
        starImg.style.margin = '-1px';

    span.appendChild(starImg);
    span.appendChild(stars);
    span.appendChild(forkImg);
    span.appendChild(forks);

    li.appendChild(repoName);
    li.appendChild(span);
    li.appendChild(hr);
    ul.appendChild(li);
  }
  div.appendChild(ul);
};
