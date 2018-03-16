'use strict';

var grantTotal = [];

var openHours = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8'];

var cookieStoreTable = document.getElementById('Cookies');
var cookieForm = document.getElementById('storeForm');

function Locations (location, custMini, custMaxi, aveCookieSale) {
  this.location = location;
  this.mini = custMini;
  this.Maxi = custMaxi;
  this.aveCookieSale = aveCookieSale;
  this.hourlySales = [];

  this.calculateHourlySales();
  this.addTotalCookiesPerHr();
  this.totalCookie();

  // Locations.push(this);
}

Locations.prototype.custNumPerHr = function() {
  return Math.floor(Math.random() * ((this.maxCustPerHr - this.minCustPerHr) + 1) + this.minCustPerHr);

};

Locations.prototype.aveCookiePerCust = function() {  
  return Math.round(this.aveCookieSale * this.custNumPerHr());

};

Locations.prototype.calculateHourlySales = function() {
  for (var i = 0; i < this.hourlySales.length; i++) {
    this.hourlyCookieSales.push(this.aveCookiePercust());
  }
};

Locations.prototype.totalCookie = function() {
  var total = 0
  for (var i =0;i< this.hourlySales.length;i++) {
    total=total + this.hourlyCookieSales[i];
  }

  grantTotal.push(total);

  return total;
};

Locations.prototype.addTotalCookiesPerHr = function() {
  for (var i = 0; i < this.hourlySales.length; i++) {
    this.hourlySales[i] = this.hourlySales[i] + this.hourlySales[i];

  }
};

cookieForm.addEventListener('submit', addNewLocation);

function addNewLocation(event){
  event.preventDefault();

  console.log(event.target);

  var newLocation = event.target.location.value;
  var newCustMini = event.target.minCust.value;
  var newCustMaxi = event.target.maxCust.value;
  var newAveCookieSale = event.target.avgSales.value;

  // makeHeaderRow();
  // renderaAllCookies();
  // makeFooterRow();
}

function makeHeaderRow() {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  var thElement = document.createElement('th');
  var myTable = document.getElementById('cookies');


  // thElement.textContent = 'HI THERE';
  // myTable.appendChild(thElement);

  for (var i = 0; i < openHours.length; i++) {
    thElement = document.createElement('th')
    tdElement.textContent = openHours[i];
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Location Total';
  trElement.appendChild(thElement);
  cookieStoreTable.appendChild(trElement);

}

var grantTotals = function() {
  var total = 0;
  for (var i = 0; i < grantTotal.length; i++) {
    total = total + grantTotal[i];

    return total;

  };

  Location.prototype.render = function() {
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.location;
    trElement.appendChild(tdElement);
  }

  for (var i = 0; i < this.hourlySales.length; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.hourlySales[i];
    trElement.appendChild(tdElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.totalCookie();
  trElement.appendChild(tdElement);

  cookieStoreTable.appendChild(trElement);

  new Locations('first & Pike', 23, 65, 6.3);
  new Locations('Seatac Airport', 3, 24, 1.2);
  new Location('Seattle Center', 11, 38, 3.7);
  new Location('Capitol Hill', 20, 38, 2.3);
  new Location('Alki', 2, 16, 4.6);

  function makeHeaderRow() {
    var trEl = document.createElement('tr');
    var thEL = document.createElement('th');
    thEl.textContent = '';
    trEl.appendChild(thElement);
    for (var i = 0; i < openHours.length; i++) {
      thEl = document.createElement('th')
      thEl.textContent = openHours[i];
      trEl.appendChild(thEl);
    }
    thEl = document.createElement('th');
    thEl.textContent = 'Daily Location Total';
    teEl.appendChild(thEl);
    cookieStoreTable.appendChild(trEl);

  }

  function makeFooterRow() {
    var trEL = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = '';
    trEl.appendChild(tdEl);

    for (var i = 0; i < hours.length; i++)
      tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td');
    tdEl.textContent = "daily Location Total";
    trEl.appendChild(trEl);
    cookieStoreTable.appendChild(TrEl);

    cookieStoreTable.appendChild(TrEl);
  }

  function renderaAllCookies() {
    for (var i =0; i<allLocations.length;i++) {
      allCookies[i].render();
      console.log(allCookies)
    }

  }



  cookieForm.addEventListener('submit', addNewLocation);

  makeHeaderRow();
  makeFooterRow();
  // renderAllLocations();
};
