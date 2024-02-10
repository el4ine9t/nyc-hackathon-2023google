document.addEventListener('DOMContentLoaded', priceIsTight, false);

function priceIsTight() {

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".q1Results");
  let userAnswer = document.querySelector(".q1");
  let questionImage = document.querySelector(".question1");
  let question = "Guess the price of this house per month. Don't use any commas";
  let nextQuestion = document.querySelector(".next");


  let images = ['https://photos.zillowstatic.com/fp/4879d5756d27f3052f3f98874643d9ab-uncropped_scaled_within_1536_1152.webp', 'https://photos.zillowstatic.com/fp/3f212f345ac83a9466d19356e942266a-uncropped_scaled_within_1344_1008.webp','https://photos.zillowstatic.com/fp/974eb730cf641977ce46331f0709031c-cc_ft_1344.webp','https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/054b34d52aadc82d9a4722ef9012af99-full.webp','https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/f3e49a1f49fe99a2a3b2e6d5ca413af6-full.webp','https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/bfb0d4bcebd6a96b6b5b5a5e27a17cb1-full.webp','https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/52c7e8168f1761a0b5a366f628ba8661-full.webp','https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/d6364cb50ff7abc56bd9a114adea0f95-full.webp','https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/594bf24c7eae1711554f6cba172234d6-full.webp'];
  let actualRent = [2700,10917,14683,3846,4177,2395,1666,2310,3600];
  let descriptions = ['Legal Two Family With Two Driveways. 50X100 Lot. Four Floors, Finished Basement, Walk-Up Attic. New Boiler. A Must See. Close To Train. Detached Garage.', 'Unfinished multi-story historic Harlem townhouse sandwiched between two other historic Harlem townhouses.','2800 square foot apartment home located in Brookln','A two bedroom three bathroom home located in Staten Island','This detached 1 family house welcomes you with nice living room, dining room, half bath, kitchen on first floor. The 2nd floor consists 3 bedroom and full bathroom, Finished basement with outside entrance.','3beds/1bath with separate living room. heat and hot water included','Studio apartment in Jamaica NY.','One bedroom apartment located in the heart of much desired Hells Kitchen. Super close to fabulous and fun 9th Ave. Minutes from the 50th St 1, 9, C and E trains.','Studio apartment located in Greenwich Village.'];

  let percentError;
  let currentIndex = 0;

  questionImage.innerHTML = `<img src=${images[0]} width="50%"> <p>${descriptions[0]}</p> <h3>${question}</h3>`;
  

  
  
  console.log(actualRent[0]);

  button.onclick = function() {
    let answer = Number(userAnswer.value);
    
    if(answer == actualRent[currentIndex]) {
      
      displayResult.insertAdjacentHTML("beforeend" , `<p class="results">You got it exactly right!!</p>`);
      
    } else if(answer > actualRent[currentIndex] || answer < actualRent[currentIndex]) {
      
      percentError = ((answer - actualRent[currentIndex]) / actualRent[currentIndex]) * 100;

      percentError = percentError.toFixed(2);
      
      displayResult.insertAdjacentHTML("beforeend" , `<p class="results">The actual price was ${actualRent[currentIndex]} per month. Your answer was off by ${percentError}%</p>`);
      
    }
  }

  nextQuestion.onclick = function () {
    let temp = document.querySelector(".results");
    temp.remove();
    currentIndex += 1;
    console.log(currentIndex);
    questionImage.innerHTML = `<img src=${images[currentIndex]} width="50%"> <p>${descriptions[currentIndex]}</p> <h3>${question}</h3>`;
    
  }

}