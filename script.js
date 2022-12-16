


accNumbers = ["123456", "456789", "147258", "258369", "159487"];
passCodes = ["akhi@123", "bhargav@123", "chandra@123", "jagadish@123", "setu@123"];
initialBalance = [0, 0, 0, 0, 0];
acHolderName = ["akhil", "bhargav", "chandrashekar", "jagadish", "setam naidu"];
transactionHistory = [[], [], [], [], []];

var currentUser = 0;


var firstPage = document.querySelector(".fpage");
var secondPage = document.querySelector(".spage");
var thirdPage = document.querySelector(".tpage");
var fourthPage = document.querySelector(".fopage");
var fifthPage = document.querySelector(".fipage");
var lastPage = document.querySelector(".lpage");
var buttons = document.getElementsByClassName("tButton");
var sAc = document.getElementById("sAc");
var sBl = document.getElementById("sBl");
var cButton = document.querySelector(".tClose");
var tble = document.getElementById("his");
var lcButton = document.querySelector(".button");
var errorText = document.getElementById("error-text");
var modalVlidation = document.querySelector(".modal-vlidation");
var modalClose = document.querySelector(".modal-close");
var closeDepositBtn = document.querySelector(".close-deposit-btn");
var closeWithdrawlBtn = document.querySelector(".close-withdrawl-btn");
var historyDiposit = document.querySelector(".history-diposit");
var historyWithdrawl = document.querySelector(".history-withdrawl");
var tCell = document.getElementsByTagName("td");


lcButton.addEventListener("click", validation);
buttons[0].addEventListener("click", deposite);
buttons[1].addEventListener("click", withdrawl);
//buttons[2].addEventListener("click",tranHistory);
cButton.addEventListener("click", close);



modalClose.onclick = function () {

	modalVlidation.classList.remove("display");

}

document.getElementById("logout-btn").onclick = function () {
	thirdPage.classList.remove("display");
	firstPage.classList.add("display");
}

function initial() {

	firstPage.onclick = function () {
		firstPage.classList.remove("display");
		secondPage.classList.add("display");
	}

}

initial();

function validation() {

	var uAcNo = document.getElementById("AccNo").value;
	var uPwd = document.getElementById("pswd").value;



	if (uAcNo == "" || uPwd == "") {
		if (uAcNo == "" && uPwd == "") {
			errorText.innerHTML = "Enter account number and password...";
			modalVlidation.classList.add("display");
		}
		else if (uAcNo == "") {
			errorText.innerHTML = "Enter account number...";
			modalVlidation.classList.add("display");
		} else if (uPwd == "") {
			errorText.innerHTML = "Enter password...";
			modalVlidation.classList.add("display");
		}
	}
	else if (accNumbers.indexOf(uAcNo) == -1) {
		errorText.innerHTML = "Invalid account details...";
		modalVlidation.classList.add("display");
	} else {

		if (uPwd == passCodes[accNumbers.indexOf(uAcNo)]) {
			alert("valid password");

			currentUser = accNumbers.indexOf(uAcNo);
			modalVlidation.classList.remove("display");
			secondPage.classList.remove("display");
			thirdPage.classList.add("display");
			sAc.innerHTML = acHolderName[currentUser];
			sBl.innerHTML = initialBalance[currentUser];

		} else {
			errorText.innerHTML = "Invalid password...";
			modalVlidation.classList.add("display");
		}
	}
}

function deposite() {
	thirdPage.classList.remove("display");
	fourthPage.classList.add("display");

	closeDepositBtn.onclick = function () {
		thirdPage.classList.add("display");
		fourthPage.classList.remove("display");
	}

	document.querySelector(".deposite-btn").onclick = function () {
		var dAmount = document.querySelector(".amountd-area").value;

		if (dAmount == "") {
			alert("enter amount");
		}/*else if(typeof dAmount=="string"){
				alert("enter a valid amount");
				}*/else {
			initialBalance[currentUser] += parseInt(dAmount);

			alert(initialBalance[currentUser]);

			sBl.innerHTML = initialBalance[currentUser];

			transactionHistory[currentUser].push({ type: "deposit", amount: dAmount, total: initialBalance[currentUser] });
			console.log(transactionHistory[currentUser]);


			fourthPage.classList.remove("display");
			thirdPage.classList.add("display");
		}
	}
}


function withdrawl() {
	thirdPage.classList.remove("display");
	fifthPage.classList.add("display");

	closeWithdrawlBtn.onclick = function () {
		thirdPage.classList.add("display");
		fifthPage.classList.remove("display");
	}

	document.querySelector(".withdrawl-btn").onclick = function () {
		var wAmount = document.querySelector(".amountw-area").value;

		if (wAmount == "") {
			alert("enter amount");
		}/*else if(typeof wAmount=="string"){
				alert("enter a valid amount");
				}*/else if (wAmount > initialBalance[currentUser]) {
			alert("InsufficientMoney");
		} else {

			initialBalance[currentUser] -= parseInt(wAmount);
			alert(initialBalance[currentUser]);

			sBl.innerHTML = initialBalance[currentUser];

			transactionHistory[currentUser].push({ type: "withdrawl", amount: wAmount, total: initialBalance[currentUser] });
			console.log(transactionHistory[currentUser]);


			fifthPage.classList.remove("display");
			thirdPage.classList.add("display");

		}
	}
}


buttons[2].onclick = function () {
	tranHistory("all");
}

historyDiposit.onclick = function () {
	close();
	tranHistory("d");
};


historyWithdrawl.onclick = function () {
	close();
	tranHistory("w");
};

function tranHistory(type) {


	alert(type);

	var sNo=1;

	thirdPage.classList.remove("display");
	lastPage.classList.add("display");

	for (var j = 0; j < transactionHistory[currentUser].length; j++) {

		var tdata = document.getElementsByTagName("tr");
		

		tble.innerHTML += `<tr>
			<td>${j + 1}</td>
			<td>${transactionHistory[currentUser][j].type}</td>
			<td>${transactionHistory[currentUser][j].amount}</td>
			<td>${transactionHistory[currentUser][j].total}</td>
			   </tr>`

		if (type == "all") {

			if (transactionHistory[currentUser][j].type === "withdrawl") {
				tdata[j + 1].style.color = "red";
			} else {
				
				tdata[j + 1].style.color = "#4dff4d";
			}

		} else if (type == "d") {

			if (transactionHistory[currentUser][j].type === "withdrawl") {
				tdata[j + 1].style.display = "none";
			} else {
				tdata[j + 1].style.color = "#4dff4d";
				tCell[j*4].innerHTML=sNo;
				sNo++;
			}

		} else {

			if (transactionHistory[currentUser][j].type === "withdrawl") {
				
				tdata[j + 1].style.color = "red";
				tCell[j*4].innerHTML=sNo;
				sNo++;
			} else {
				tdata[j + 1].style.display = "none";
			}
		}

	}

}


function close() {
	lastPage.classList.remove("display");
	thirdPage.classList.add("display");
	tble.innerHTML = `<tr >		
		    <th>S.No</th>
			<th>Transation Type</th>
			<th>Transation amount</th>
			<th>a/c Balance</th>
		</tr> `;
}