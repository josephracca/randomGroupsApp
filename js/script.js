let listHolder = document.getElementById("listHolder");
let nameInput = document.getElementById("nameInput");
let addNameBtn = document
  .getElementById("addNameBtn")
  .addEventListener("click", function () {
    //data validation for nameInput.value
    if (/^[a-zA-Z ]+$/.test(nameInput.value)) {
      addToList(nameInput.value);
      nameInput.value = "";
      totalDisplay.innerText = `Number of People in List: ${listOfNames.length}`;
    } else {
      alert(
        "Invalid character detected. Try again using ONLY spaces and letters."
      );
    }
  });

let generateGroups = document
  .getElementById("generateGroups")
  .addEventListener("click", function () {
    formationPlease.innerHTML = "";
  });

let listOfNames = JSON.parse(localStorage.getItem("names"));
if (listOfNames == null) {
  listOfNames = [];
}

let slider = document.getElementById("slider");

const setNewMinMax = () => {
  slider.setAttribute("min", 2);
  slider.setAttribute("max", Math.floor(listOfNames.length / 2));
};
setNewMinMax();

function updateTextInput(val) {
  document.getElementById("valDisplay").innerText = val;

  let arrayNum = val;

  if ((byNumPeople.checked = true)) {
    arrayNum = Math.ceil(listOfNames.length / passNumberGroup(slider.value));
  } else if ((byGroup.checked = true)) {
    arrayNum = val;
  }

  // ****needs to check to see if the ratios are good
  if (
    arrayNum > listOfNames.length ||
    arrayNum == listOfNames.length ||
    arrayNum <= 0
  ) {
    alert("Invalid group number selected.");
  } else {
    let formationPlease = document.getElementById("formationPlease");
    formationPlease.innerHTML = "";
    randomizer(listOfNames);
    let sortedArrays = [];
    for (let i = 0; i < arrayNum; i++) {
      sortedArrays.push([]);
    }

    function sort() {
      let i = 0;
      listOfNames.forEach((element) => {
        sortedArrays[listOfNames.indexOf(element) % arrayNum].push(element);
      });
    }

    sort();
    function printGroups() {
      let number = 1;
      sortedArrays.forEach((element) => {
        let hr = document.createElement("hr");
        let div = document.createElement("div");
        div.setAttribute("id", `Group ${number}`);
        div.classList = "row groupName px-4";
        div.innerText = `Group ${number}`;
        formationPlease.appendChild(hr);
        formationPlease.appendChild(div);
        let currentDiv = document.getElementById(`Group ${number}`);
        element.forEach((element) => {
          let colDiv = document.createElement("col");
          colDiv.innerText = element;
          colDiv.classList = "groupNames";
          currentDiv.appendChild(colDiv);
        });
        number++;
      });
    }
    printGroups();
  }
}

function addToList(namePassed) {
  if (!listOfNames.includes(namePassed)) {
    listOfNames.push(namePassed);
    localStorage.setItem("names", JSON.stringify(listOfNames));
    addToDisplayList(nameInput.value);
  } else {
  }
}

function addToDisplayList(nameToCreate) {
  let li = document.createElement("li");
  li.classList = "list-group-item blackText";
  li.innerText = nameToCreate;
  li.setAttribute("id", nameToCreate);
  listHolder.appendChild(li);
  li.addEventListener("click", function () {
    deleteFromArray(li.innerText);
    deleteElement(li.innerText);
  });
}

function deleteElement(idToDelete) {
  document.getElementById(idToDelete).remove();
  updateLocal();
  totalDisplay.innerText = `Number of People in List: ${listOfNames.length}`;
}

function deleteFromArray(param) {
  listOfNames.splice(listOfNames.indexOf(param), 1);
}

function updateLocal() {
  localStorage.setItem("names", JSON.stringify(listOfNames));
}

function loadList() {
  listOfNames.forEach((element) => {
    addToDisplayList(element);
  });
}

loadList();

let randomNameBtn = document
  .getElementById("randomNameBtn")
  .addEventListener("click", function generateRandom() {
    let randomNameDisplay = document.getElementById("randomNameDisplay");
    if (listOfNames == null || listOfNames == "") {
      randomNameDisplay.innerText =
        "You haven't entered anything. Add some names to your list above ^...";
    } else {
      let randomNumber = Math.floor(Math.random() * listOfNames.length);
      let randomName = listOfNames[randomNumber];
      randomNameDisplay.innerHTML = "<h2>" + randomName + "</h2>";
    }
  });

function randomizer(arrayToShuffle) {
  for (let i = arrayToShuffle.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = arrayToShuffle[i];
    arrayToShuffle[i] = arrayToShuffle[randomIndex];
    arrayToShuffle[randomIndex] = temp;
  }
}

let byGroup = document.getElementById("byGroup");

function passNumberGroup(val) {
  // debugger;
  return val;
}

let byNumPeople = document.getElementById("byNumPeople");

function passNumberPeople(val) {
  // debugger;
  return Math.ceil(listOfNames.length / val);
}

let totalDisplay = document.getElementById("totalDisplay");

totalDisplay.innerText = `Number of People in List: ${listOfNames.length}`;
