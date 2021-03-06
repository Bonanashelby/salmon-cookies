'use strict';

function CookieStore(name, minCustomer, maxCustomer, avgCookies, hoursOpen){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.hoursOpen = [];
  this.dailyTotal = 0;
}

CookieStore.prototype.getAvgCookieCount = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var avgCookiesPerHour = Math.ceil(Math.floor((Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer) * this.avgCookies);
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

var storeHoursTotal = [];

var stores = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

//create table element HEADER FUNCTION BEGIN
var tableEl = document.createElement('table');
//create header elemenet
var headerRowEl = document.createElement('tr');
tableEl.appendChild(headerRowEl);
//create blank element for hours to begin
var blankEl = document.createElement('th');
headerRowEl.appendChild(blankEl);
//header row hours
for (var i = 0; i < storeHours.length; i++) {
  var headerHourEl = document.createElement('td');
  headerHourEl.textContent = storeHours[i];
  headerRowEl.appendChild(headerHourEl);
}
//header table data for daily totals
var headerDailyTotalEl = document.createElement('td');
headerDailyTotalEl.textContent = 'Daily Total';
headerRowEl.appendChild(headerDailyTotalEl);
//HEADER FUNCTION END
//for loop for stores average cookies MAIN CONTENT FUNCTION
for (var i = 0; i < stores.length; i++) {
  var currentStore = stores[i];
  currentStore.getAvgCookieCount();
//row element for store names
  var rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);
//store name element appending to the row
  var nameEl = document.createElement('th');
  nameEl.textContent = currentStore.name;
  rowEl.appendChild(nameEl);
//for loop for get the store hours avg for each store
  for (var j = 0; j < currentStore.hoursOpen.length; j++) {
    var storeHourEl = document.createElement('td');
    storeHourEl.textContent = currentStore.hoursOpen[j];
    rowEl.appendChild(storeHourEl);
  }
  //daily totals table data element
  var dailyTotalEl = document.createElement('td');
  dailyTotalEl.textContent = currentStore.dailyTotal;
  rowEl.appendChild(dailyTotalEl);
}
//MAIN CONTENT FUNCTION END
//creates total header element on the left column
//FOOTER FUNCTION
var totalsRowEl = document.createElement('tr');
//variable for totals header element that appends to the row then to the table
var headerStoreTotalsEl = document.createElement('td');
headerStoreTotalsEl.textContent = 'Totals';
totalsRowEl.appendChild(headerStoreTotalsEl);
tableEl.appendChild(totalsRowEl);
//variable for all totals
var allTotalsEl = 0;

//creates bottom total figures for ea hour at all stores
for (var i = 0; i < storeHours.length; i++) {
  var hourAllStoreTotals = 0;

//for loop for all the stores
  for (var j = 0; j < stores.length; j++) {
    var currentStore = stores[j];
    hourAllStoreTotals += currentStore.hoursOpen[i];
  }
  allTotalsEl += hourAllStoreTotals;//so that after the function ends the total stays
  //total column element
  var totalColumnEl = document.createElement('td');
  totalColumnEl.textContent = hourAllStoreTotals;
  totalsRowEl.appendChild(totalColumnEl);

}
//last totals element under display totals
var allTotalsLastEl = document.createElement('td');
allTotalsLastEl.textContent = allTotalsEl;
totalsRowEl.appendChild(allTotalsLastEl);
//FOOTER FUNCTION END
console.log(storeHoursTotal);
document.body.appendChild(tableEl);

console.log('————————— lab notes - event listeners—————————');

//ask the Dom for the form
var storeFormEl = document.getElementById('new-store-form');
//adding a submit action not connecting to html - storeFormEl^^ is an html node - holding an instance of an html element node -
storeFormEl.addEventListener('submit', handleSubmit); //adding false(force to bubble)/true(force to capture) as third parameter it swtiches them. stopPropagation in function negates needing this. addEventListener can be for any html element node

function handleSubmit(event){ //using this function to call addEventListener - it is waiting for the submit event to happen - we never actually call it - we hand it off to the addEventListener - passing the function into addEventListener
  event.preventDefault();
  //prevent the page from reloading & from trying to post date to back up server
  event.stopPropagation();
  //stops event bubbling in parent/child tags. kills capturing
  //^^any tiem you reference a function that's used with with dot notation - you know it's a method - .preventDefault & stopPropagation

  var name = event.target.cookieStoreName.value;
  //the event is the actual event listener - target node (form id = ) storeFromEl is the target in this example- cookieStoreName (name of input here) is the input node (the input field thats on the html that's coming from the DOM)- value associate to the input tag
  var minCustomers = parseInt(event.target.minCust.value);
  //target is the element node that the event itself is attached to
  var maxCustomers = parseInt(event.target.maxCust.value);//parses a string argument and returns an integer - value is the attribute that the user inputs into the input field. maxCust html element node reference. maxCustomers becomes an integar
  var avgCookies = parseFloat(event.target.avgCookies.value);
  console.log(name);
  console.log(minCustomers);
  console.log(maxCustomers);
  console.log(avgCookies);

  var store = new CookieStore(name, minCustomers, maxCustomers, avgCookies); //passing in the variables as arguments for the CookieStore construtors parameters- store is an instance of CookieStore which is also an object-1. object & 2. new instance of CookieStore and that instance is called store.
  //row element vv
  store.getAvgCookieCount();
  var rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);
  //heaader element
  var nameEl = document.createElement('th');
  nameEl.textContent = store.name;
  rowEl.appendChild(nameEl);
  //for loop for hoursOpen
  for (var j = 0; j < store.hoursOpen.length; j++) {
    var storeHourEl = document.createElement('td');
    storeHourEl.textContent = store.hoursOpen[j];
    rowEl.appendChild(storeHourEl);
  }
  //daily total element
  var dailyTotalEl = document.createElement('td');
  dailyTotalEl.textContent = store.dailyTotal;
  rowEl.appendChild(dailyTotalEl);

  //shows my new cookieStore - min, max and avg cookie sales
  stores.push(store);

  console.log(store);
  //console.log(store.getAvgCookieCount());

  console.log('User pressed submit button on form!');
}

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
