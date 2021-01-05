let listHolder = document.getElementById("listHolder");
let nameInput = document.getElementById("nameInput");
let addNameBtn = document
  .getElementById("addNameBtn")
  .addEventListener("click", function () {
    console.log(`You've added a name! ${nameInput.value}`);
    addToList();
  });
let generateModal = document
  .getElementById("generateModal")
  .addEventListener("click", function () {
    console.log("How do you want to group?");
  });
let generateGroups = document
  .getElementById("generateGroups")
  .addEventListener("click", function () {
    console.log("Here are your groups!");
    //
  });

//local storage
//pull local storage
let listOfNames = JSON.parse(localStorage.getItem("names"));
if (listOfNames == null) {
  listOfNames = [];
}
console.log(listOfNames);

//function that sets item
function updateLS(namePassed) {
  listOfNames.push(namePassed);
  localStorage.setItem("names", JSON.stringify(listOfNames));
}

//on refresh, list of names will populate on front end from

let sortedArrays = [];
let arrayNum = 4;
for (let i = 0; i < arrayNum; i++) {
  sortedArrays.push([]);
  console.log(sortedArrays);
}

let randomNames = [
  "Joseph",
  "Aaron",
  "Racca",
  "Junior",
  "Amanda",
  "Laikenne",
  "Joey",
  "Nicole",
];

//shuffle names array into newArray;

function sort() {
  //now just needs a shuffle!
  let i = 0;
  randomNames.forEach((element) => {
    console.log(randomNames.indexOf(element) % arrayNum);
    sortedArrays[randomNames.indexOf(element) % arrayNum].push(element);
  });
}

sort();
// console.log(sortedArrays);
// listHolder.innerText = sortedArrays;

function printGroups() {
  let number = 1;
  sortedArrays.forEach((element) => {
    console.log(`Group ${number}`);
    number++;
    element.forEach((element) => {
      console.log(element);
      //here we can
    });
  });
}

printGroups();

//append li element
function addToList() {
  let li = document.createElement("li");
  li.classList = "list-group-item";
  li.innerText = nameInput.value;
  li.setAttribute('id', nameInput.value);


  listHolder.appendChild(li);

  li.addEventListener('click', function(){
    deleteName(li.innerText);
  })

  updateLS(nameInput.value);
}

function deleteName(idToDelete) {
  document.getElementById(idToDelete).remove();
  // updateLocal();
  // itemsAdded--;
}






let listHolder = document.getElementById("listHolder");
let nameInput = document.getElementById("nameInput");

let addNameBtn = document.getElementById("addNameBtn").addEventListener("click", function () {console.log(`You've added a name! ${nameInput.value}`);
    addToList(nameInput.value);
    console.log(listOfNames);

  });

let generateModal = document
  .getElementById("generateModal")
  .addEventListener("click", function () {
    console.log("How do you want to group?");
  });
let generateGroups = document
  .getElementById("generateGroups")
  .addEventListener("click", function () {
    console.log("Here are your groups!");
    //
  });

//local storage
//pull local storage
let listOfNames = JSON.parse(localStorage.getItem("names"));
if (listOfNames == null) {
  listOfNames = [];
}
console.log(listOfNames);

//function that sets item
function updateLS() {
  // if (!listOfNames.includes(namePassed)) {
    // listOfNames.push(namePassed);
    localStorage.setItem("names", JSON.stringify(listOfNames));
  // }
}

//on refresh, list of names will populate on front end from

let sortedArrays = [];
let arrayNum = 4;
for (let i = 0; i < arrayNum; i++) {
  sortedArrays.push([]);
  // console.log(sortedArrays);
}

let randomNames = [
  "Joseph",
  "Aaron",
  "Racca",
  "Junior",
  "Amanda",
  "Laikenne",
  "Joey",
  "Nicole",
];

//shuffle names array into newArray;

function sort() {
  //now just needs a shuffle!
  let i = 0;
  randomNames.forEach((element) => {
    // console.log(randomNames.indexOf(element) % arrayNum);
    sortedArrays[randomNames.indexOf(element) % arrayNum].push(element);
  });
}

sort();
// console.log(sortedArrays);
// listHolder.innerText = sortedArrays;

function printGroups() {
  let number = 1;
  sortedArrays.forEach((element) => {
    // console.log(`Group ${number}`);
    number++;
    element.forEach((element) => {
      // console.log(element);
      //here we can
    });
  });
}

printGroups();

//append li element
function addToList(nameEntry) {
  let li = document.createElement("li");
  li.classList = "list-group-item";
  li.innerText = nameEntry;
  li.setAttribute("id", nameEntry);

  listHolder.appendChild(li);
  // console.log(li.innerText);
  // debugger;
  li.addEventListener("click", function () {
    deleteFromArray(nameEntry);
    deleteName(nameEntry);
    // deleteFromArray(nameEntry);

  });

  updateLS();
}

function deleteName(idToDelete) {

  console.log(idToDelete);
  document.getElementById(idToDelete).remove();
  // debugger;
  updateLS();

}

function deleteFromArray(nameToDelete){
    listOfNames.splice(listOfNames.indexOf(nameToDelete),1);

  }

  //splice first then updateLS data

  //reg expression:
  if ((/^[a-zA-Z ]+$/).test(nameInput.value)) {}



//on refresh, list of names will populate on front end from

let sortedArrays = [];
let arrayNum = 4;
for (let i = 0; i < arrayNum; i++) {
  sortedArrays.push([]);
  // console.log(sortedArrays);
}

let randomNames = [
  "Joseph",
  "Aaron",
  "Racca",
  "Junior",
  "Amanda",
  "Laikenne",
  "Joey",
  "Nicole",
];

//shuffle names array into newArray;

function sort() {
  //now just needs a shuffle!
  let i = 0;
  randomNames.forEach((element) => {
    // console.log(randomNames.indexOf(element) % arrayNum);
    sortedArrays[randomNames.indexOf(element) % arrayNum].push(element);
  });
}

sort();
// console.log(sortedArrays);
// listHolder.innerText = sortedArrays;

function printGroups() {
  let number = 1;
  sortedArrays.forEach((element) => {
    console.log(`Group ${number}`);
    number++;
    element.forEach((element) => {
      console.log(element);
      //here we can
    });
  });
}

printGroups();