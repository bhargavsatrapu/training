
let userInput = document.querySelector(".serch-bar");
let displayList = document.querySelector(".display-list");
const URL = "https://jsonplaceholder.typicode.com/users";
let apiData;
let testNames = [];
let testName;

userInput.addEventListener("keyup", displayNames);

getApiRequest();

async function getApiRequest() {
    let response = await fetch(URL);
    apiData = await response.json();
}

function displayNames() {
    testNames = [];
    displayList.innerHTML = "";
    testName = userInput.value;
    if (testName == "") {
        displayList.innerHTML = "";
    } else {
        apiData.forEach(testFunction);
        console.log(testNames);
        let HTMLMarkup = testNames.map(cValue => `<li>${cValue}</li>`);
        displayList.innerHTML = HTMLMarkup.join("");
    }
}

function testFunction(cValue) {
    if (cValue.name.toLowerCase().includes(testName.toLowerCase())) {
        testNames.push(cValue.name)
    }
}