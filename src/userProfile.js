function Profile(){
  this.div = document.getElementById('profile');
}

Profile.prototype.create = function (user) {
  this.div.textContent = '';

  var avatar = document.createElement('img'),
      p = document.createElement('p'),
      p2 = document.createElement('p'),
      h4 = document.createElement('h4'),
      h2 = document.createElement('h2'),
      hr = document.createElement('hr'),
      title = document.createTextNode('Repositories'),
      handle = document.createTextNode(user.username),
      fullName = presence(user.fullName, 'Full Name'),
      bio = presence(user.bio, 'This is the bio..');
      avatar.src = user.avatar;

  p.appendChild(handle);
  p2.appendChild(bio);
  h2.appendChild(fullName);
  h4.appendChild(title);
  this.div.appendChild(avatar);
  this.div.appendChild(p);
  this.div.appendChild(h2);
  this.div.appendChild(p2);
  this.div.appendChild(h4);
  this.div.appendChild(hr);
};

function presence(comparator, string){
  return comparator !== null ?
    document.createTextNode(comparator) :
    document.createTextNode(string);
}
