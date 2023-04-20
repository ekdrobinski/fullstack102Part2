//get references to HTML elements and creates storage locations
const inputBox = document.getElementById("inputBox");
const addButton = document.getElementById("addButton");
const list = document.getElementById("list");

//an empty array to store to-do items typed in by the user
let toDoList = [];

//adds event listener to the add button on click
addButton.addEventListener("click", () => {
  //gets the input value from the user and trims whitespace if there is any
  const newToDo = inputBox.value.trim();

  //if the input value is not empty on click then this adds it to the to-do list and updates the UI
  if (newToDo !== "") {
    // Add the new to-do item to the array
    toDoList.push(newToDo); //pushes the new to-do item into the array

    //create a new list item and appends(adds) it to the unordered list
    const listItem = document.createElement("li");
    listItem.innerText = newToDo;
    list.appendChild(listItem);

    inputBox.value = "";//clears the input box with ""
  }
});

//add event listener to the unordered list
list.addEventListener("click", (event) => {
 
  const clickedItem = event.target; //Get the clicked list item and saves it as clickedItem Element
  const itemIndex = toDoList.indexOf(clickedItem.innerText); //saves the index pf the clicked item
  //and remove it(the clicked list item) from the array and the UI
  toDoList.splice(itemIndex, 1); //removes the to-do item at array's index for the item//splice is nice
  clickedItem.remove(); //removes from the UI //Element.remove() method removes the element from the DOM
});
