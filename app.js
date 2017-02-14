'use strict';

console.log('-----First and Pike Begins----');
var firstAndPike = {
  name: 'First and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  avgHours: [],
  cookiesPerHour: function() {
    for (var hours = 0; hours < 15; hours++) {
      console.log('Inside loop ' + hours);
      var mathStorage = Math.ceil(Math.floor(Math.random() * (this.maxCustomer + 1 - this.minCustomer) + this.minCustomer) * this.avgCookies);
      this.avgHours.push(mathStorage);
    }
  }
};

console.log(firstAndPike.cookiesPerHour());

var sectEl = document.getElementById('cookie-list');

var listElement = document.createElement('ul');

var headerEl = document.createElement('h1');
var currentHour = 6;
var currentTime = '';
var morning = true;

for (var i = 0; i < firstAndPike.avgHours.length; i++) {
  var listLiEl = document.createElement('li');
  if(morning) {
    currentTime = currentHour + ' :00am';
    if (currentHour === 11) {
      morning = false;
    }
  } else {
    currentTime = currentHour + ' :00pm';
  }
  listLiEl.textContent = currentTime + ' ' + firstAndPike.avgHours[i]; currentHour++;
  if(currentHour > 12) {
    currentHour = 1;
  }

  listElement.appendChild(listLiEl);
};
headerEl.textContent = firstAndPike.name;
sectEl.appendChild(headerEl);
sectEl.appendChild(listElement);

console.log('-----SeaTac Airport Begins-----');
var seaTacAirport = {
  name: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,
  avgHours: [],
  cookiesPerHour: function() {
    for (var hours = 0; hours < 15; hours++) {
      console.log('Inside loop ' + hours);
      var mathStorage = Math.ceil(Math.floor(Math.random() * (this.maxCustomer + 1 - this.minCustomer) + this.minCustomer) * this.avgCookies);
      this.avgHours.push(mathStorage);
    }
  }
};

console.log(seaTacAirport.cookiesPerHour());

var sectEl = document.getElementById('cookie-list');

var listElement = document.createElement('ul');

var headerEl = document.createElement('h1');
var currentHour = 6;
var currentTime = '';
var morning = true;
for (var i = 0; i < seaTacAirport.avgHours.length; i++) {
  var listLiEl = document.createElement('li');
  if(morning) {
    currentTime = currentHour + ' :00am';
    if (currentHour === 11) {
      morning = false;
    }
  } else {
    currentTime = currentHour + ' :00pm';
  }
  listLiEl.textContent = currentTime + ' ' + seaTacAirport.avgHours[i]; currentHour++;
  if(currentHour > 12) {
    currentHour = 1;
  }

  listElement.appendChild(listLiEl);
};
headerEl.textContent = seaTacAirport.name;
sectEl.appendChild(headerEl);
sectEl.appendChild(listElement);

console.log('----Seattle Center Begins-----');

var seattleCenter = {
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 3.7,
  avgHours: [],
  cookiesPerHour: function() {
    for (var hours = 0; hours < 15; hours++) {
      console.log('Inside loop ' + hours);
      var mathStorage = Math.ceil(Math.floor(Math.random() * (this.maxCustomer + 1 - this.minCustomer) + this.minCustomer) * this.avgCookies);
      this.avgHours.push(mathStorage);
    }
  }
};

console.log(seattleCenter.cookiesPerHour());

var sectEl = document.getElementById('cookie-list');

var listElement = document.createElement('ul');

var headerEl = document.createElement('h1');
var currentHour = 6;
var currentTime = '';
var morning = true;

for (var i = 0; i < seattleCenter.avgHours.length; i++) {
  var listLiEl = document.createElement('li');
  if (morning) {
    currentTime = currentHour + ':00 am';
    if (currentHour === 11) {
      morning = false;
    }
  } else {
    currentTime = currentHour + ':00 pm';
  }
  listLiEl.textContent = currentTime + ' ' + seattleCenter.avgHours[i];
  currentHour++;
  if (currentHour > 12) {
    currentHour = 1;
  }

//    currentTime
  listElement.appendChild(listLiEl);
};
headerEl.textContent = seattleCenter.name;
sectEl.appendChild(headerEl);
sectEl.appendChild(listElement);

console.log('-----Capitol Hill Begins-----');

var capitolHill = {
  name: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
  avgHours: [],
  cookiesPerHour: function() {
    for (var hours = 0; hours < 15; hours++) {
      console.log('Inside loop ' + hours);
      var mathStorage = Math.ceil(Math.floor(Math.random() * (this.maxCustomer + 1 - this.minCustomer) + this.minCustomer) * this.avgCookies);
      this.avgHours.push(mathStorage);
    }
  }
};

console.log(capitolHill.cookiesPerHour());

var sectEl = document.getElementById('cookie-list');

var listElement = document.createElement('ul');

var headerEl = document.createElement('h1');
var currentHour = 6;
var currentTime = '';
var morning = true;
for (var i = 0; i < capitolHill.avgHours.length; i++) {
  var listLiEl = document.createElement('li');
  if(morning) {
    currentTime = currentHour + ' :00am';
    if (currentHour === 11) {
      morning = false;
    }
  } else {
    currentTime = currentHour + ' :00pm';
  }
  listLiEl.textContent = currentTime + ' ' + capitolHill.avgHours[i]; currentHour++;
  if(currentHour > 12) {
    currentHour = 1;
  }
  listElement.appendChild(listLiEl);
};
headerEl.textContent = capitolHill.name;
sectEl.appendChild(headerEl);
sectEl.appendChild(listElement);

console.log('-----Alki Begins-----');

var alki = {
  name: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookies: 4.6,
  avgHours: [],
  cookiesPerHour: function() {
    for (var hours = 0; hours < 15; hours++) {
      console.log('Inside loop ' + hours);
      var mathStorage = Math.ceil(Math.floor(Math.random() * (this.maxCustomer + 1 - this.minCustomer) + this.minCustomer) * this.avgCookies);
      this.avgHours.push(mathStorage);
    }
  }
};

console.log(alki.cookiesPerHour());

var sectEl = document.getElementById('cookie-list');

var listElement = document.createElement('ul');

var headerEl = document.createElement('h1');

var currentHour = 6;
var currentTime = '';
var morning = true;
for (var i = 0; i < alki.avgHours.length; i++) {
  var listLiEl = document.createElement('li');
  if(morning) {
    currentTime = currentHour + ' :00am';
    if (currentHour === 11) {
      morning = false;
    }
  } else {
    currentTime = currentHour + ' :00pm';
  }
  listLiEl.textContent = currentTime + ' ' + alki.avgHours[i]; currentHour++;
  if(currentHour > 12) {
    currentHour = 1;
  }

  listElement.appendChild(listLiEl);
};
headerEl.textContent = alki.name;
sectEl.appendChild(headerEl);
sectEl.appendChild(listElement);
