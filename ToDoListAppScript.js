let timer = 3;
setInterval(function () {
  timer--;
}, 1000);

const buttonOne = document.getElementById("first-button");

buttonOne.addEventListener("click", () => {
    let userInput = document.querySelector("#textbox").value;
    
    // Check for blank input
    if (userInput === "") {
      alert("You cannot add an item that is blank!");
    } 
    
    // Check for short input
    else if (userInput.length <= 3) {
      alert("Your input is too short! It should be at least 4 letters long.");
    }
  
    // Check timer
    else if (timer > 0) {
      alert("You must wait. There is a timer.");
    } 
  
    // Add the item to the list
    else { 
      const listItem = document.createElement("li");
      listItem.innerHTML = userInput;
      document.querySelector("#to-do-list").append(listItem);
      document.querySelector("#textbox").value = "";
      
      // Reset the timer
      timer = 3;
    }
});

const buttonTwo = document.getElementById("second-button");

buttonTwo.addEventListener("click", () => {
  const list = document.querySelector("#to-do-list");
  list.removeChild(list.lastChild);
});

const buttonThree = document.getElementById("third-button");

buttonThree.addEventListener("click", () => {
  const list = document.querySelector("#to-do-list");
  list.innerHTML = "";
});
