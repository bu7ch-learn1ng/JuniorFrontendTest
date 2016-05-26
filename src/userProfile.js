function Profile(){
  this.div = document.getElementById('profile');
}

Profile.prototype.create = function (user) {
  this.div.textContent = '';

  var avatar = newElement('img'),
      p = newElement('p'),
      p2 = newElement('p'),
      h4 = newElement('h4'),
      h2 = newElement('h2'),
      hr = newElement('hr'),
      title = newTextNode('Repositories'),
      handle = newTextNode(user.username),
      fullName = presence(user.fullName, 'Full Name'),
      bio = presence(user.bio, 'This is the bio..');
      avatar.src = user.avatar;

  append(p, handle);
  append(p2, bio);
  append(h2, fullName);
  append(h4, title);
  append(this.div, avatar);
  append(this.div, p);
  append(this.div, h2);
  append(this.div, p2);
  append(this.div, h4);
  append(this.div, hr);
};
