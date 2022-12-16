
var phNo = document.querySelector(".ph-no");
var fName = document.querySelector(".f-name");
var lName = document.querySelector(".l-name");
var eMail = document.querySelector(".e-mail");
var URL;
var method1;
var body;

var submitButton = document.querySelector(".submit-button");
var viewData = document.querySelector(".view-data");
var viewTable = document.querySelector(".view-table");
var secondPage = document.querySelector(".second-page");
var thirdPage = document.querySelector(".third-page");

submitButton.addEventListener("click", userDataCollector);
viewData.addEventListener("click", viewContacts);

function userDataCollector() {

    URL = "http://localhost:3000/user_info";
    body = {
        phone_number: phNo.value,
        first_name: fName.value,
        last_name: lName.value,
        e_mail: eMail.value
    };
    method1 = "POST";
    postDataApi(URL, body, method1);
}

async function postDataApi(URL, body, method1) {
    let response = await fetch(URL, {
        method: method1,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    let postedData = await response.json();
    console.log(postedData);
}

function viewContacts() {
    secondPage.classList.add("display");
    thirdPage.classList.remove("display");
    URL = "http://localhost:3000/user_info";
    getContactDetails(URL);
}

async function getContactDetails(URL) {
    let response = await fetch(URL);
    let postedData = await response.json();
    console.log(postedData);
    for (var i = 0; i < postedData.length; i++) {
        viewTable.innerHTML += `<tr>
                             <td>${i + 1}</td>
                             <td>${postedData[i].last_name} ${postedData[i].first_name}</td>
                             <td>${postedData[i].phone_number}</td>
                             <td>${postedData[i].e_mail}</td>
                             <td><button onclick="editFunction('${postedData[i].id}')">edit</button>
                             <button onclick="deleteFunction('${postedData[i].id}')">delete</button></td>
                            </tr>`
    }
}

function editFunction(id) {
    viewTable.innerHTML =`<tr>
    <th>S.No</th>
    <th>Name</th>
    <th>Phone number</th>
    <th>e-mail</th>
</tr>`;
    URL = "http://localhost:3000/user_info/" + id;
    replaceUserData(id);
}

async function replaceUserData(id) {
    let response = await fetch(URL);
    let postedData = await response.json();
    console.log(postedData.phone_number);
    phNo.value = postedData.phone_number;
    fName.value = postedData.first_name;
    lName.value = postedData.last_name;
    eMail.value = postedData.e_mail;
    secondPage.classList.remove("display");
    thirdPage.classList.add("display");
    submitButton.removeEventListener("click", userDataCollector);
    submitButton.addEventListener("click", function(){
       
        putMethod(id);
    });
}

function putMethod(id){
    URL = "http://localhost:3000/user_info/"+id;
    body = {
        phone_number: phNo.value,
        first_name: fName.value,
        last_name: lName.value,
        e_mail: eMail.value
    };
    method1 = "PUT";
    postDataApi(URL, body, method1);
}

function deleteFunction(id) {
    viewTable.innerHTML =`<tr>
    <th>S.No</th>
    <th>Name</th>
    <th>Phone number</th>
    <th>e-mail</th>
</tr>`;
    URL = "http://localhost:3000/user_info/" + id;
    method1="DELETE";
    postDataApi(URL, body, method1);
    viewContacts();
}