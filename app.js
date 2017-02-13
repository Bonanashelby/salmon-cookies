'use strict';

var userFullName = prompt('Please enter your full name.');
var userEmail = prompt('Please enter your email');

var myUser = {
  fullName: userFullName,
  userEmail: userEmail,
  login: function(){
    console.log(this.fullName + ' has now logged in!');
  }
};

console.log('-------NEW USER-------');
console.log(myUser);

myUser.login();

console.log('-----present elements-----');

var userElement = document.createElement('h1');//Step 1
// userElement = <h1></h1> element node type

userElement.setAttribute('id', 'first-user-heading');//Step 2 - assign attributes can be multi attributes
// userElement = <h1 id='first-user-heading'></h1>

userElement.textContent = myUser.fullName;
// userElement = <h1 id='first-user-heading'>"someUserName"</h1>

var sectionEl = document.getElementById('main-content');//Got Reference
//<section id="main-content"></scection> //from our index.html

sectionEl.appendChild(userElement);//Step 3
