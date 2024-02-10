var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to support H.R.4229 Broadband Deployment Accuracy and Technological Availability (DATA) Act for more accurate broadband maps. As a student, my learning now depends on my access to the internet. For example, " + learning + ". Please support H.R.4229 Broadband Deployment Accuracy and Technological Availability (DATA) Act for more accurate broadband maps.";
}


//Move these variables to the top
var factList = [
  "More than half of all renters in NYC are rent-burdened, meaning they spend more than 30% of their income on housing.", 
  "The median rent for a one-bedroom apartment in NYC is $2,900 per month, making it one of the most expensive rental markets in the country.", 
  "Only 40% of low-income households in NYC that are eligible for housing subsidies receive them due to limited funding.", 
  "There is a shortage of over 400,000 affordable housing units in NYC, and the waiting list for affordable housing can be as long as 10 years.", 
  "Nearly 60,000 people sleep in NYC homeless shelters each night, with many more sleeping on the streets or in other unstable housing situations.", 
  "Racial and ethnic minorities are disproportionately affected by the lack of affordable housing in NYC, with Black and Hispanic households experiencing higher levels of housing insecurity." ,
    "The COVID-19 pandemic has exacerbated the affordable housing crisis in NYC, with job losses and income reductions leading to more families struggling to pay rent." ,
    "Gentrification and the rapid development of luxury housing in many neighborhoods has driven up housing costs and led to the displacement of low-income residents." ,
  "Overcrowding is a common problem in affordable housing units, with many families sharing small apartments with multiple generations or unrelated roommates." ,
  "Maintenance issues, such as leaks, mold, and pest infestations, are common in affordable housing units due to limited funding for repairs and renovations."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
