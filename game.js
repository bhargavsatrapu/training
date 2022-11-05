
  var randomNo=Math.floor(Math.random()*20)+1;
  
  var score=20;
  
 var  heighScore=0;
  
   
  console.log(randomNo);
  

 function  inputCollector(){
	 
     var userNo=document.querySelector(".input").value;
	 
              console.log(typeof userNo);
			
			     if(userNo ==" " ){
					 
					 

				  alert("please  enter any number");	
				  
                  			//inputCollector();
			  }	
			  
		      else if(userNo>20){
				  alert("enter number  between 1 -20")	;	  
			  }	
			  
			
			  
			else  if(userNo>randomNo){
				  greater();
				  
			  }			  
			  else if(userNo<randomNo){
				  
				  lesser();
			  }	
			  
			  else if(userNo==randomNo){
				  equal();				  
			  }	
			  
           else if(typeof userNo ==="string" ){
				  alert("please  enter number");
				 
			  }	
			     
  clear();
			  
 }
 
 
 function greater(){
	 
	 document.getElementById("sGuess").innerHTML="Too greater..";
	 score--;
	 document.getElementById("sScore").innerHTML=" 💯️ score :"+score;
	 //scor();
 }
 
 function lesser(){
	 
	 document.getElementById("sGuess").innerHTML="Too smaler..";
	 score--;
	 document.getElementById("sScore").innerHTML=" 💯️ score :"+score;
	// scor();
 }
 
 
 function equal(){
	 
	  document.getElementById("sGuess").innerHTML="equal";
	  
	  if (score> heighScore){
		  
	    heighScore=score;
	  
	   document.getElementById("sHScore").innerHTML=" 🥇️ HeighScore:"+heighScore;
	    
	  }
	  else{
		  
	  }
	  
	   document.getElementById("body").style.backgroundColor="green";
	    
	    document.getElementById("bottom").style.backgroundColor="green";
		document.getElementById("d1").style.backgroundColor="green";
		document.getElementById("d2").style.backgroundColor="green";
		document.getElementById("d3").style.backgroundColor="green";
		document.getElementById("d4").style.backgroundColor="green";
		document.getElementById("final").innerHTML=randomNo;
		document.querySelector(".game").style.backgroundColor="green";
		
		
 }
 
 function  again(){
	 
	      score=20;

	  document.getElementById("body").style.backgroundColor="black";
	  document.getElementById("sScore").innerHTML=" 💯️ score :"+score;
	  document.getElementById("sGuess").innerHTML="Start guessing..";
      document.getElementById("bottom").style.backgroundColor="black";
	  document.querySelector(".game").style.backgroundColor="black";
	  document.getElementById("d1").style.backgroundColor="black";
		document.getElementById("d2").style.backgroundColor="black";
		document.getElementById("d3").style.backgroundColor="black";
		document.getElementById("d4").style.backgroundColor="black";
	  document.getElementById("final").innerHTML="?";
	   randomNo=Math.floor(Math.random()*20)+1;
	    console.log(randomNo);
 }
 
 function clear(){
	 document.querySelector(".input").value=" ";
 }
 
 function scor(){
	 
	 if(score==1){
		 alert("gameover");
		 document.getElementById("body").style.backgroundColor="red";
		score=20;
	 }
 }