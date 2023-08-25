const buttonDiv = document.querySelector("#buttonDiv");
const modalDiv = document.querySelector("#modalDiv");
const modalFormDiv = document.querySelector("#modalFormDiv");
const formQuestion = document.querySelector("#formQuestion");
const formInput = document.querySelector("#formInput");
const buttonYes = document.querySelector("#formButtonYes");
const buttonNo = document.querySelector("#formButtonNo");

let workoutDataArray = [];
let workoutObject = {
  name: "empty",
};

function clickMe(e) {
  formQuestion.textContent = "What would you like to call this day/workout?";
  modalDiv.classList.toggle("hidden");
  buttonDiv.classList.toggle("hidden");
}
function question() {
  formQuestion.textContent = "Would you like to add an exercise?";
  formInput.classList.toggle("hidden");
  buttonNo.classList.toggle("hidden");
  buttonYes.classList.toggle("hidden");
}

buttonDiv.addEventListener("click", (e) => clickMe(e));

modalFormDiv.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  workoutObject.name = e.target.children[1].value;
  console.log(workoutObject);
  question();
});
