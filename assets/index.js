const buttonDiv = document.querySelector("#buttonDiv");
const modalDiv = document.querySelector("#modalDiv");
const modalFormDiv = document.querySelector("#modalFormDiv");
const formQuestion = document.querySelector("#formQuestion");
let workoutDataArray = [];
let workoutObject = {
  name: "empty",
};

function clickMe(e) {
  formQuestion.textContent = "What would you like to call this day/workout?";
  modalDiv.classList.toggle("hidden");
  buttonDiv.classList.toggle("hidden");
}

buttonDiv.addEventListener("click", (e) => clickMe(e));

modalFormDiv.addEventListener("submit", (e) => {
  e.preventDefault();
  workoutObject.name = e.target.children[1].value;
});
