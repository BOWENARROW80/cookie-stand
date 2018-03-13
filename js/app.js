function cookie()
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