


    accNumbers=["123456","456789"];
	passCodes=["akhi@123","bhargav@123"];
	initialBalance=[100,200];
	transactionHistory=[ [ ] , [ ] ];
	
	var currentUser=0;
	
	
	var firstPage=document.querySelector(".fpage");
	var secondPage=document.querySelector(".spage");
	var thirdPage=document.querySelector(".tpage");
	var fourthPage=document.querySelector(".fopage");
	var fifthPage=document.querySelector(".fipage");
		var lastPage=document.querySelector(".lpage");
	var buttons=document.getElementsByClassName("tButton");
	var sAc=document.getElementById("sAc");
	var sBl=document.getElementById("sBl");
	var cButton=document.querySelector(".tClose");
	var tble=document.getElementById("his");
	
	var lcButton=document.querySelector(".button");
	lcButton.addEventListener("click",validation);
	buttons[0].addEventListener("click",deposite);
	buttons[1].addEventListener("click",withdrawl);
	buttons[2].addEventListener("click",tranHistory);
	cButton.addEventListener("click",close);
	
	document.getElementById("logout-btn").onclick=function(){
		thirdPage.classList.remove("display");
		firstPage.classList.add("display");	
	}
	
	function initial(){
		
		    firstPage.onclick=function(){
			firstPage.classList.remove("display");
			secondPage.classList.add("display");
			
		}
		
	}

	initial();
	
	function validation(){
		
		var uAcNo=document.getElementById("AccNo").value;
		var uPwd=document.getElementById("pswd").value;
		
		var  i=accNumbers.indexOf(uAcNo);
				if(i==-1){
					alert("wrong accountNo");			
				}else{
						
						if(uPwd==passCodes[i]){
							alert("valid password");
							 currentUser=i;
							secondPage.classList.remove("display");
							 thirdPage.classList.add("display");
							 sAc.innerHTML=accNumbers[currentUser];
							  sBl.innerHTML=initialBalance[currentUser];
						}else{
							alert("Invalid password");
						}
				}
	}
	
	function deposite(){
		thirdPage.classList.remove("display");
		fourthPage.classList.add("display");
		document.querySelector(".deposite-btn").onclick=function(){
			var dAmount=document.querySelector(".amountd-area").value;
			
			if(dAmount==""){
				alert("enter amount");
			}else{
			initialBalance[currentUser]+=parseInt(dAmount);
			
			alert(initialBalance[currentUser]);	
			
			 sBl.innerHTML=initialBalance[currentUser];
			 
			transactionHistory[currentUser].push( {type:"deposit" ,amount:dAmount,total:initialBalance[currentUser]} );
			console.log(transactionHistory[currentUser]);
			
			
		     fourthPage.classList.remove("display");
			thirdPage.classList.add("display");
			}
		}
	}
	
	
	function withdrawl(){
		thirdPage.classList.remove("display");
		fifthPage.classList.add("display");
		
		document.querySelector(".withdrawl-btn").onclick=function(){
			var wAmount=document.querySelector(".amountw-area").value;
			
			if(wAmount==""){
				alert("enter amount");
			}	
		    else	if(wAmount>initialBalance[currentUser]){
				alert("InsufficientMoney");
			}else{
				
			initialBalance[currentUser]-=parseInt(wAmount);
			alert(initialBalance[currentUser]);	
			
			 sBl.innerHTML=initialBalance[currentUser];
			 
			transactionHistory[currentUser].push( {type:"withdrawl" ,amount:wAmount ,total:initialBalance[currentUser]} );
			console.log(transactionHistory[currentUser]);
			
			
		  fifthPage.classList.remove("display");
		 thirdPage.classList.add("display");
				
			}	
		}
	}
	
	function tranHistory(){
		
		thirdPage.classList.remove("display");
		lastPage.classList.add("display");
		
		
		
		
		for(var j=0;j<transactionHistory[currentUser].length;j++){
			
			var tdata=document.getElementsByTagName("tr");
			
			tble.innerHTML+=`<tr>
			<td>${j+1}</td>
			<td>${transactionHistory[currentUser][j].type}</td>
			<td>${transactionHistory[currentUser][j].amount}</td>
			<td>${transactionHistory[currentUser][j].total}</td>
			   </tr>`
			   
			   if(transactionHistory[currentUser][j].type==="withdrawl"){
				   tdata[j+1].style.color="red";
			   }else{
				    tdata[j+1].style.color="#4dff4d";
			   }
			   
		}
	
	}
	
	
	function close(){
		lastPage.classList.remove("display");
		thirdPage.classList.add("display");
		tble.innerHTML=`<tr >		
		    <th>S.No</th>
			<th>Transation Type</th>
			<th>Transation amount</th>
			<th>a/c Balance</th>
		</tr> `;
	}