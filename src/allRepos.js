function AllRepos(){
  this.div = document.getElementById('repos');
}

var profile = new Profile();

AllRepos.prototype.showList = function (repos, user) {
  profile.create(user);
  profile.div.style = '';
  var div = document.getElementById('repos');
  div.textContent = '';

  var ul = document.createElement('ul');

  for(var repo in repos){
    var info = repos[repo];
    var li = newElement('li'),
        span = newElement('span'),
        repoName = newTextNode(info.repo),
        hr = newElement('hr'),
        stars = newTextNode(' ' + info.stars + ' '),
        forks = newTextNode(' ' + info.forks + ' '),
        forkImg = newElement("img"),
        starImg = newElement("img");
        forkImg.src = 'public/images/fork.png';
        forkImg.style.height = '11px';
        starImg.src = 'public/images/star.png';
        starImg.style.height = '15px';
        starImg.style.margin = '-1px';

    append(span, starImg);
    append(span, stars);
    append(span, forkImg);
    append(span, forks);

    append(li, repoName);
    append(li, span);
    append(li, hr);
    append(ul, li);
  }
  append(this.div, ul);
};
