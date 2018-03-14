'use strinct';

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

// First and Pike

 var FristAndPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  aveCookiePerSale: 6.3
  cookieSales: [], 
  rumSum 0,

  showSales: function()
[

  
]
 }
 'use strinct';

 var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
 var pikeStore = cookie.store ('pike place', 16, 88, 5.2);
 var seaTacStore = cookie.store ('SeaTac Airport', 3, 24, 1.2);
 var seaCenterStore = cookie.store ('Seattle Center', 11, 38, 3.7);
 var capitolHillstore = cookie.store ('Capitol Hill', 20, 38, 2.3);
 var alki = cookie.store ('Alki', 2, 16, 4.6); 

//store info
function Stores (location, custMini, custMaxi, aveCookieSale) {
  this.location = location;
  this.custMini = custMini;
  this.custMaxi = custMaxi;
  this.aveCookieSale = aveCookieSale;
  this.totalSales = 0;
  this.hourSales = [0];
}
//Customers
Stores.prototype.storeCustomer = function () {
  return Math.random() * (this.custMaxi - this.custMini) + this.custMini;
}
//Sales Per Hour
Stores.prototype.storeSalesPerHr = function () {
  for (var i = 0; i < OpenHours.length; i++){
    var cookieGen = math.floor(this.aveCookieSale * thisStoreRandomCustomer());
    this.hourSales.push(randCookies);
    this.totalSales += randCookies;
  }
};

//Array for locations
var PikeLocation = NewStore[6am, 7am 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm, Daily Location Total];
var SeatacLocation = NewStore[6am, 7am 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm, Daily Location Total];
var SeatleCLocation = NewStore[6am, 7am 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm, Daily Location Total];
var CapitolLocation = NewStore[6am, 7am 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm, Daily Location Total];
var AlkiLocation = NewStore[6am, 7am 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm, Daily Location Total];
var LocationTotal = NewStore[6am, 7am 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm, Daily Location Total];



var cookieTable = document.getElementById('cookie');
function cookie(location, time, dailySales); {
 this.location = location;
 this.time = time;
 this.dailySales = dailySales;
allCookieLocations.push(this);

Cookie.prototype.render = function () {


}
//create tr
var trElement = document.createElement('tr');
//create td
var tdElement = document.createElement('td');
//give content name
tdElement.textContent = this.location;
//append td to tr
trElement.appendChild(tdElement);

tdElement = document.createElement('td');
tdElement.textContent = this.time;
trElement.appendChild(tdElement);

trElement.appendChild(tdElement);

tdElement = document.createElement('td');
tdElement.textContent = this.dailySales;
trElement.appendChild(tdElement);

//append TR to table
cookieTable.appendChild(trElement);
};


var PikeLocation = new Cookie('6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm', '4pm','5pm','6pm','7pm', 'Daily Total');
var SeaTacLocation = new Cookie('6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm', '4pm','5pm','6pm','7pm', 'Daily Total');
var SeattleCenterLocation = new Cookie('6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm', '4pm','5pm','6pm','7pm', 'Daily Total');
var CapitolHill = new cookie('6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm', '4pm','5pm','6pm','7pm', 'Daily Total');
var Alki = new cookie('6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm', '4pm','5pm','6pm','7pm', 'Daily Total');
var total = new cookie ()

// 1 // We need an array to hold our dogs
// // var gary = newdog(gary, white, westie, gare bear);
// // var charlote= new dog(blah, blah, blah, blah)

// 2. // Let's refactor so that render() method is on the constructor's prototype; this will tidy up the way things look on the screen


render = function (TableRows) {
  var PikeLocation = document.getElementById('Pike');




  store.prototype.render=function () {
var trElement = document.createElement('tr');
var tdElement = document.createElement('td');
tdElement.textContent = this.location
trElement.appendChild(tdElement);
salesTable.appendChild(trElement);



// 3  // create tr
// var trElement = document.createElement('tr');

//   // create td
// var tdElement = document.createElement('td');

//   // give td content (name, then color, then breed, the nickname) <- eventually do it in a for loop
// tdElement.textContent = this.name;

//   // append td to tr
// trElement.appendChild(tdElement);

// tdEL = document.createELement('td');
//   tdElement.textContent = this.color
//   trElement.appendChild(tdElement)
  
//    tdEL = document.createELement('td');
//   tdElement.textContent = this.breed
//   trElement.appendChild(tdElement)
  
//    tdEL = document.createELement('td');
//   tdElement.textContent = this.nickname
//   trElement.appendChild(tdElement)

//   // append tr to table
// dogTable.appendChild(trElement);

/* To see what we need to do to build a HTML table with JS, let's take a look at the HTML needed to start the table and make the top two rows:
<table>                 PUT THIS AND ONLY THIS IN THE HTML, WITH AN ID
  <tr>                  create tr
    <th>Name</th>       create a th, give it content, append it to tr
    <th>Color</th>      create a th, give it content, append it to tr
    <th>Breed</th>      create a th, give it content, append it to tr
    <th>Nickname</th>   create a th, give it content, append it to tr
  </tr>                 append tr to the table
  <tr>
    <td>Gary</td>
    <td>White</td>
    <td>Westie</td>
    <td>Gare Bear</td>
  </tr>
</table>
Tables are built in the same way that a typewriter types: left-to-right, top-to-bottom.
Thus, we'll want to create and append HTML elements in the same order.
We have already put an empty <table> element in the HTML, with id="dogs" */

// // We need an array to hold our dogs
// var gary = newdog(gary, white, westie, gare bear);
// var charlote= new dog(blah, blah, blah, blah)

// We need to access the table that is in the DOM

// We need a constructor to make our dog objects

// // Let's refactor so that render() method is on the constructor's prototype; this will tidy up the way things look on the screen
// render = function () {
//   dog.prototype.render=function () {

  // }
//   // create tr
// var trElement = document.createElement('tr');

//   // create td
// var tdElement = document.createElement('td');

//   // give td content (name, then color, then breed, the nickname) <- eventually do it in a for loop
// tdElement.textContent = this.name;

//   // append td to tr
// trElement.appendChild(tdElement);

// tdEL = document.createELement('td');
//   tdElement.textContent = this.color
//   trElement.appendChild(tdElement)
  
//    tdEL = document.createELement('td');
//   tdElement.textContent = this.breed
//   trElement.appendChild(tdElement)
  
//    tdEL = document.createELement('td');
//   tdElement.textContent = this.nickname
//   trElement.appendChild(tdElement)

//   // append tr to table
// dogTable.appendChild(trElement);

// };

// We need to create our Dog instances

// We need a separate function to make the table header

// It would be nice to have a single function that renders all of the individual dog rows

// Now we need to call our functions: the one for the header row, and the one for generating the individual dog rows