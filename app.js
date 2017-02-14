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
      var mathStorage = Math.floor(Math.random() * (this.maxCustomer + 1 - this.minCustomer) + this.minCustomer) * this.avgCookies;
      this.avgHours.push(mathStorage);
    }
  }
};

console.log(firstAndPike.cookiesPerHour());

var sectEl = document.getElementById('cookie-list');

var listElement = document.createElement('ul');

var headerEl = document.createElement('h1');

for (var i = 0; i < firstAndPike.avgHours.length; i++) {
  var listLiEl = document.createElement('li');

  listLiEl.textContent = firstAndPike.avgHours[i];

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
      var mathStorage = Math.floor(Math.random() * (this.maxCustomer + 1 - this.minCustomer) + this.minCustomer) * this.avgCookies;
      this.avgHours.push(mathStorage);
    }
  }
};

console.log(seaTacAirport.cookiesPerHour());

var sectEl = document.getElementById('cookie-list');

var listElement = document.createElement('ul');

var headerEl = document.createElement('h1');

for (var i = 0; i < seaTacAirport.avgHours.length; i++) {
  var listLiEl = document.createElement('li');

  listLiEl.textContent = seaTacAirport.avgHours[i];

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
      var mathStorage = Math.floor(Math.random() * (this.maxCustomer + 1 - this.minCustomer) + this.minCustomer) * this.avgCookies;
      this.avgHours.push(mathStorage);
    }
  }
};

console.log(seattleCenter.cookiesPerHour());

var sectEl = document.getElementById('cookie-list');

var listElement = document.createElement('ul');

var headerEl = document.createElement('h1');

for (var i = 0; i < seattleCenter.avgHours.length; i++) {
  var listLiEl = document.createElement('li');

  listLiEl.textContent = seattleCenter.avgHours[i];

  listElement.appendChild(listLiEl);
};
headerEl.textContent = seattleCenter.name;
sectEl.appendChild(headerEl);
sectEl.appendChild(listElement);

console.log('-----Capitol Hill Begins-----');

var capitolHill = {
  htmlId: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
  avgHours: [],
  cookiesPerHour: function() {
    for (var hours = 0; hours < 15; hours++) {
      console.log('Inside loop ' + hours);
      var mathStorage = Math.floor(Math.random() * (this.maxCustomer + 1 - this.minCustomer) + this.minCustomer) * this.avgCookies;
      this.avgHours.push(mathStorage);
    }
  }
};

console.log(capitolHill.cookiesPerHour());

var sectEl = document.getElementById('cookie-list');

var listElement = document.createElement('ul');

var headerEl = document.createElement('h1');

for (var i = 0; i < capitolHill.avgHours.length; i++) {
  var listLiEl = document.createElement('li');

  listLiEl.textContent = capitolHill.avgHours[i];

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
      var mathStorage = Math.floor(Math.random() * (this.maxCustomer + 1 - this.minCustomer) + this.minCustomer) * this.avgCookies;
      this.avgHours.push(mathStorage);
    }
  }
};

console.log(alki.cookiesPerHour());

var sectEl = document.getElementById('cookie-list');

var listElement = document.createElement('ul');

var headerEl = document.createElement('h1');

for (var i = 0; i < alki.avgHours.length; i++) {
  var listLiEl = document.createElement('li');

  listLiEl.textContent = alki.avgHours[i];

  listElement.appendChild(listLiEl);
};
headerEl.textContent = alki.name;
sectEl.appendChild(headerEl);
sectEl.appendChild(listElement);
