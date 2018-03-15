'use strict';


 var StoreArray = []

 var storeTable = document.getElementById('Store')

 var openHours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
   var header = FUNCTION () {

    var trElement = document.createElement('tr'):
    var tdElement = document.createElement('td');

    trElement.textContent = 'Store';
    thElement.appendChild(trElement);

    for (var i = 0; i < OpenHours.length; i++) {

      theElement = document.createElement('th')

      tdElement.textContent = openHours[i];

      trElement.appendChild(tdElement);

      {
        tdElement = document.createElement('td');
        tdElement.textContent = 'Day Total';
        trElement.appendChild(tdElement);
      }
      }

  header();

  function StoreConstructor(location, custMini, custMaxi, aveCookieSale) {
    this.location = location;
    this.mini = custMini;
    this.Maxi = custMaxi;
    this.aveCookieSale = aveCookieSale;
    this.hourlySales =[]
    this.totalDailySales = 0;
    storeArray.push(this); //pushes the THIS items into the array.  The StoreArray is connected from the top of the coding chain
 

   }


 StoreConstructor.prototype.render = function () {

    //create tr
    var trElement = document.createElement('tr');
    //create td
    var tdElement = document.createElement('td');
    //give content name
    tdElement.textContent = this.location;
    //append td to tr
    trElement.appendChild(tdElement);
  
    for (var i = 0; i < hourlySales.length; i++) 
    tdElement = document.createElement('td');
    tdElement.textContent = this.totalDailySales[i];
    trElement.appendChild(tdElement);

 }

 
 StoreConstructor.prototype.storeSalesPerHr = function () {
   
  var totalDailySales = 0;
  for (var i = 0; i < OpenHours.length; i++) {

    var cusRadoNum= Math.random() * (this.custMaxi - this.custMini) + (this.custMini);

    var hourlySales = (Math.floor(cusRanoNum * this.aveSale));

    dayTotal += hourlySales;

    this.hourlySales.push(totalDailySales);

    this.hourlySales = totalDailySales;

}

 tdElement = document.createElement('td');
 tdElement.textContent = this.totalSales
 trElement.appendChild(tdElement);

 storeTable.appendChild(trElement);

};

//Array for locations
var pike = New StoreConstructor[23, 65, 6.3. '1st and Pike'];
pike.salesPerHr();
pike.render();

var Setac = New StoreConstructor[3, 24, 1.2 'SeaTac Airport'];
seatac.salesPerHr();
seatac.render();

var SeaCenter = New StoreConstructor[11, 38. 3.7. 'Seattle Center'];
SeaCenter.salesPerHr();
SeaCenter.render();

var CapitolHill = New StoreConstructor[20, 38, 2.3. 'Capitol Hill'];
pike.salesPerHr();
pike.render();

var Alki = New StoreConstructor[2, 16, 4.6,. 'Alki'];
Alki.salesPerHr();
Alki.render();

//SINGLE FUNCION THAT RENDER ALL OF THE INDIVIDUAL ROWS
function renderaAllCookies() {
  for(var i in allCookies) {
    allCookies[i].render();
  }

}

// event listener's callback function
function addNewCookie(event){
  //EVENT RETURNS AN OBJECT
  event.preventDefault();
  console.log(event.target.pikeLocation.value);

  /////change these to the cookie vice dog
  var newLocation= event.target.location.value;
  var newCustMin = event.target.miniCust.value;
  var newCustMax= event.target.MaxCust.value;
  var newAveCookSale = event.target.AvgCookieSale.value


// // new Dog(newName, newColor, newBreed, newNickname); ///same order as previousl
///location, custMini, custMaxi, aveCookieSale
dogTable.innerHTML = '';
makeHeaderRow();
renderaAllCookies();
}


// // add event lstener
// cookieForm.addEventListener('submit', addNewCookie);

// // //Erases everything and moves footer then re-adds everything including new item added
// // dogTable.innerHTML = ''; //now header is missing



// <form id="cookie form">
// <fieldset>
// <legend>Add a new location</legend>

// <label for= "cookie-name">:</label>
// <input type="text" name-"cookie-name">

// <label for= "cookie-name">Name:</label>
// <input type="text" name-"cookie-name">

// <label for= "cookie-name">Name:</label>
// <input type="text" name-"cookie-name">

// <label for= "cookie-name">Name:</label>
// <input type="text" name-"cookie-name">

// <button>Add a Store</button>

// </fieldset>

// </form>

// <textarea name="" id="" cols="30" rows="10"></textarea>


// </fieldset>

// </form>



// <table id="cookie"></table>

// <tr>
//             <th>Store</th>
//             <th></th>
//             <th></th>
//             <th></th>
//           </tr>
//         <tr>
//             <td></td>
//             <td>6am</td>
//             <td>7am</td>
//             <td>8am</td>
//             <td>9am</td>
//             <td>10am</td>
//             <td>11am</td>
//             <td>12pm</td>
//             <td>1pm</td>
//             <td>2pm</td>
//             <td>3pm</td>
//             <td>4pm</td>
//             <td>5pm</td>
//             <td>6pm</td>
//             <td>7pm</td>
//             <td>Daily Total</td>
//           </tr>

     
//       <p></p>
//       <tr>
//         <td>1st & Pike</td>
//         <td></td>
//         <td></td>
//         <td></td>
//       </tr>
//       <tr>
//         <td>Seatac Airport</td>
//         <td></td>
//         <td></td>
//         <td></td>
//       </tr>
//       <tr>
//         <td>Seattle Center</td>
//         <td></td>
//         <td> </td>
//         <td></td>
//       </tr>
//       <tr>
//         <td>Capitol Hill</td>
//         <td></td>
//         <td>-</td>
//         <td></td>
//       </tr>
//       <tr>
//         <td>Alki</td>
//         <td> </td>
//         <td> </td>
//         <td></td>
//       </tr>
//       <tr>
      
//         <td></td>
//       </tr>
     
//     </table>














