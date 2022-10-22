/*Hotel Datepicker code*/
var enddate = new Date();
enddate.setDate(enddate.getDate()+ 8);
new TinyPicker({ 
format: 'dd-mm-yyyy',
firstBox:document.getElementById('hotelcheckin'), // Required -- Overrides us finding the first input box
lastBox: document.getElementById('hotelcheckout'), // Required -- Overrides us finding the last input box
startDate: new Date(), // Needs to be a valid instance of Date   
endDate: enddate, // Needs to be a valid instance of Date
allowPast: false, // If you want the user to be able to select past dates
useCache: true, 
orientation: "top auto",
 horizontal: 'auto',
vertical: 'auto'
}).init();

/*Airport Datepicker code*/
var enddate = new Date();
enddate.setDate(enddate.getDate()+ 8);
new TinyPicker({ 
format: 'dd-mm-yyyy',
firstBox:document.getElementById('startDate'), // Required -- Overrides us finding the first input box
lastBox: document.getElementById('endDate'), // Required -- Overrides us finding the last input box
startDate: new Date(), // Needs to be a valid instance of Date   
endDate: enddate, // Needs to be a valid instance of Date
allowPast: false, // If you want the user to be able to select past dates
useCache: true, 
orientation: "top auto",
 horizontal: 'auto',
vertical: 'auto'
}).init();

/*Lounges Datepicker code*/
var enddate = new Date();
enddate.setDate(enddate.getDate()+ 8);
new TinyPicker({ 
format: 'dd-mm-yyyy',
firstBox:document.getElementById('LounesDate'), // Required -- Overrides us finding the first input box
// lastBox: document.getElementById('endDate'), // Required -- Overrides us finding the last input box
startDate: new Date(), // Needs to be a valid instance of Date   
endDate: enddate, // Needs to be a valid instance of Date
allowPast: false, // If you want the user to be able to select past dates
useCache: true, 
orientation: "top auto",
 horizontal: 'auto',
vertical: 'auto'
}).init();


//Hotel Detail page hide/show top form

function FromShow() {
  var form = document.getElementById("hotel-form");
  if (form.style.display === "none") {
    form.style.display = "block";
    form.style.animation = "fading 5s infinite";
  } else {
    form.style.display = "none";
  }
}

//Hotel Detail page sidebar hide/show dropdown

//Hotel Price
function priceshow() {
  var price = document.getElementById("price-dropdown");
  if (price.style.display === "none") {
    price.style.display = "block";
  } else {
    price.style.display = "none";
  }
}

//Hotel Rating
function ratingshow() {
  var rating = document.getElementById("hotel-rating");
  if (rating.style.display === "none") {
    rating.style.display = "block";
  } else {
    rating.style.display = "none";
  }
}

//Property Type
function typeshow() {
  var types = document.getElementById("hotel-types");
  if (types.style.display === "none") {
    types.style.display = "block";
  } else {
    types.style.display = "none";
  }
}

//Bed Type
function bedshow() {
  var bed = document.getElementById("bed-types");
  if (bed.style.display === "none") {
    bed.style.display = "block";
  } else {
    bed.style.display = "none";
  }
}

// Parking booking page radio buttons
function travelno(){
  document.getElementById('travel-detail').style.display ='none';
}
function travelyes(){
  document.getElementById('travel-detail').style.display = 'inline-flex';
}

function Carno(){
  document.getElementById('Car-detail').style.display ='none';
}
function Caryes(){
  document.getElementById('Car-detail').style.display = 'inline-flex';
}

