

const URL = "https://jsonplaceholder.typicode.com/users";
let apiData;
let testedNames = [];
let testName;
let timeOut;
let userInput = document.querySelector(".serch-bar");
let displayList = document.querySelector(".display-list");

userInput.addEventListener("keyup", displayNames);

getApiRequest();

async function getApiRequest() {
    let response = await fetch(URL);
    apiData = await response.json();
}

function displayNames() {
    clearTimeout(timeOut);
    testedNames = [];
    displayList.innerHTML = "";
    testName = userInput.value;
    if (testName == "") {
        displayList.innerHTML = "";
    } else {
        if (testName.length > 2) {
            testUsers();
        } else {
            timeOut = setTimeout(testUsers, 2000);
        }
    }
}

function testUsers() {
    apiData.forEach(searchUsers);
     markUp();
}

function searchUsers(cValue) {
    if (cValue.name.toLowerCase().includes(testName.toLowerCase())) {
        testedNames.push(cValue.name)
    }
}

function markUp() {
    let HTMLMarkup = testedNames.map(cValue => `<li>${cValue}</li>`);
    displayList.innerHTML = HTMLMarkup.join("");
}