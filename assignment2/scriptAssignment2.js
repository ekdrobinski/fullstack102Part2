//1. update "Apples" to "Granny Smith Apples"
document.getElementById("apples").textContent = "Granny Smith Apples";


//2. remove "Oat Milk" from list
    var oatMilk = document.querySelector("#list li:nth-child(4)");
    oatMilk.parentNode.removeChild(oatMilk);


//add item to "Kombucha"
    let kombucha = document.createElement("li");
    kombucha.textContent = "Kombucha";
    document.getElementById("list").appendChild(kombucha);


//clears list
let list = document.getElementById("list");
while (list.firstChild) {
    list.firstChild.remove();
}

//programmatic add items from the array [protein bars, almonds, peanut butter]
let items = ["protein bars", "almonds", "peanut butter"];
for (var i = 0; i < items.length; i++) {
    var newItem = document.createElement("li");
    newItem.textContent = items[i];
     list.appendChild(newItem);
}

//add "important" class to the almonds item
let almonds = document.querySelector("#list li:nth-child(2)");
almonds.classList.add("important");