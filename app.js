'use strict';

function CookieStore(name, minCustomer, maxCustomer, avgCookies, hoursOpen){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.hoursOpen = hoursOpen || [];
  this.dailyTotal = 0;
}

CookieStore.prototype.getAvgCookieCount = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var avgCookiesPerHour = Math.ceil(Math.floor((Math.random() * this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookies);
    this.hoursOpen.push(avgCookiesPerHour);
    this.dailyTotal += avgCookiesPerHour;
  }
};

var firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3);
var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);

var storeHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

var tableEl = document.createElement('table');

var headerRowEl = document.createElement('tr');
tableEl.appendChild(headerRowEl);

var blankEl = document.createElement('th');
headerRowEl.appendChild(blankEl);

for (var i = 0; i < storeHours.length; i++) {
  var headerHourEl = document.createElement('td');
  headerHourEl.textContent = storeHours[i];
  headerRowEl.appendChild(headerHourEl);
}

var headerDailyTotalEl = document.createElement('td');
headerDailyTotalEl.textContent = 'Daily Total';
headerRowEl.appendChild(headerDailyTotalEl);

for (var i = 0; i < stores.length; i++) {
  var currentStore = stores[i];
  currentStore.getAvgCookieCount();
  var rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);

  var nameEl = document.createElement('th');
  nameEl.textContent = currentStore.name;
  rowEl.appendChild(nameEl);

  for (var j = 0; j < currentStore.hoursOpen.length; j++) {
    var storeHourEl = document.createElement('td');
    storeHourEl.textContent = currentStore.hoursOpen[j];
    rowEl.appendChild(storeHourEl);
  }
  var dailyTotalEl = document.createElement('td');
  dailyTotalEl.textContent = currentStore.dailyTotal;
  rowEl.appendChild(dailyTotalEl);
}

document.body.appendChild(tableEl);
/*
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
*/
