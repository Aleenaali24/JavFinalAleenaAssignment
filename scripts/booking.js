/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be .clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35;
let dayCounter = 0;
const calculateCostElement=document.getElementById("calculated-cost");
const daySelectors=document.querySelectorAll('.day-selector .blue-hover');
const fullDayButton=document.getElementById("full");
const halfDayButton=document.getElementById("half");
const clearButton=document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are .clicked, we will apply the ".clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is .clicked more than once. hint: .classList.contains() might be helpful here!
daySelectors.forEach(function(selector){
  selector.addEventListener('click',function(){
    const isClicked=selector.classList.toggle('clicked');
    if (isClicked){
      selector.style.backgroundColor = 'mustard';
      dayCounter++;
    }
      else{
        selector.style.backgroundColor = '';
        if (dayCounter>0){
        dayCounter--;
      }
    }
      calculateCost();
  });
});


/********* clear days *********/
// when the clear-button is .clicked, the ".clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener('click',function(){
  daySelectors.forEach(function(selector) {
    selector.classList.remove('clicked');
    selector.style.backgroundColor = '';
  });
  dayCounter=0;
  fullDayButton.classList.add('clicked');
  halfDayButton.classList.remove('clicked');
  calculateCost();
});


/********* change rate *********/
// when the half-day button is .clicked, set the daily rate to $20, add the ".clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDayButton.addEventListener('click',function(){
  costPerDay=20;
  fullDayButton.classList.remove('clicked');
  halfDayButton.classList.add('clicked');
  calculateCost();
});



// when the full-day button is .clicked, the daily rate is set back to $35, the .clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDayButton.addEventListener('click',function(){
  costPerDay=35;
  fullDayButton.classList.add('clicked');
  halfDayButton.classList.remove('clicked');
  calculateCost();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
// function calculateCost(){
//   const totalCost=dayCounter*costPerDay;
//   calculateCostElement.textContent=totalCost;
//   }

function calculateCost(){
  let totalCost=dayCounter*costPerDay;
  if (totalCost<0){
    totalCost=0;
  }
  calculateCostElement.textContent=(totalCost);
  }