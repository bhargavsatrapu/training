/*
GAME RULES:
-------------------------------------------------
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

functions in brief:
------------------------------------------------
1. Roll the dice: The current player has to roll the dice and then a random number will be generated. If current player gets any number other than 1 on the dice then that number will be added to the current score (initially the current score will be 0) and then the new score will be displayed under Current Score section.  Note: If the current player gets 1 on the dice then the players will be switched i.e. the current player will become in-active and vice-versa.


2. Hold: If the current player clicks on HOLD, then the Current Score will be added to the Total Score. When the active player clicks the Hold button then the total score is evaluated. If the Total Score >= 100 then the current player wins else the players are switched.

3. Reset: All the scores are set to 0 and Player 1 is set as the starting player (current player).


Tasks:
---------------------
1. Add script and CSS files to HTML
2. Generate random roll dice and display dice roll
3. Set active player,(CSS class name: player--active) Add dice roll to current score and display score
4. Hold: Add current score to total score and Switch player
5. Win screen: Add "player--winner" to winner player section
6. Reset/New game.
*/


var pl1=0;
var pl2=0;

var cr1=0;
var cr2=0;
 
  var r=document.getElementById("btn");
	  
 var s=document.getElementById("btn2");
 
  var x=document.getElementById("s1");
	 
 var y=document.getElementById("s2");
	 
	         s.addEventListener("click",hold1);  
	   
	         r.addEventListener("click",diceRole1);  
 
 

function diceRole1(){
		
    var  rollNo=Math.floor(Math.random()*6)+1;
		  
    var x=document.querySelector(".dice");
	  
	  x.setAttribute("src",`dice-${rollNo}.png`);
	  
	   cr1+=rollNo;
	  
	     currentAdd1(cr1);
		
		if (rollNo==1){
							
						cr1=0;	
						
			hold1(cr1);
			
		}
	
}


  function currentAdd1(cr1){
	    	 
	  document.getElementById("current--0").innerHTML=cr1;
	  	  
  }


function hold1(rollNo){
	
	pl1+=cr1;
	
	cr1=0;
	
	     if(pl1>99){
			 
		     win1();
	       }
	
	  document.getElementById("current--0").innerHTML=cr1;
	  
	r.removeEventListener("click",diceRole1);
	
	s.removeEventListener("click",hold1);  
	
	document.getElementById("score--0").innerHTML=pl1;
	document.getElementById("current--0").innerHTML=0;
		 
	 x.classList.remove("player--active");
	  
	 y.classList.add("player--active");
	 
	   r.addEventListener("click",diceRole2);
	   
	   s.addEventListener("click",hold2);  
     
}

function diceRole2(){
	
    var  rollNo=Math.floor(Math.random()*6)+1;
  
	  var x=document.querySelector(".dice");
	  
	  x.setAttribute("src",`dice-${rollNo}.png`);
	  
	     cr2+=rollNo;
	  
	     currentAdd2(cr2);
		
		if (rollNo==1){
						
						cr2=0;
						
			hold2(cr2);
			
		}
	
}

  function currentAdd2(cr2){
	   	  
	  document.getElementById("current--1").innerHTML=cr2;
	  
  }


function hold2(rollNo){
	
	pl2+=cr2;
	
	cr2=0;
	
	     if(pl2>99){
		
		       win2();
	       }
	
	document.getElementById("current--1").innerHTML=cr2;
	
	 r.removeEventListener("click",diceRole2);
	 
	 s.removeEventListener("click",hold2);  
	
	document.getElementById("score--1").innerHTML=pl2;
	document.getElementById("current--1").innerHTML=0;

	 y.classList.remove("player--active");
	 	 
	 x.classList.add("player--active");
	  
	   r.addEventListener("click",diceRole1);
	   
	    s.addEventListener("click",hold1);  
	 
}

function win1(){
	
	 x.classList.remove("player--active");
	 
	  x.classList.add("player--winner");
	  
	  r.disabled=true;
	  
	  s.disabled=true;
	  
}

function win2(){
	
	var k=document.getElementById("s2");
	 
	 y.classList.remove("player--active");
	 
	  y.classList.add("player--winner");
	  	  
	    r.disabled=true;
	  
	  s.disabled=true;
	  
}
	



function reset(){
	
pl1=0;
pl2=0;

cr1=0;
cr2=0;

document.getElementById("score--1").innerHTML=0;
	document.getElementById("current--1").innerHTML=0;

document.getElementById("score--0").innerHTML=0;
	document.getElementById("current--0").innerHTML=0;

	 x.classList.add("player--active");
	 
	 y.classList.add("player");
	
	y.classList.remove("player--active");
	 
	  y.classList.remove("player--winner");
	  
	  x.classList.remove("player--winner");
	  
	  
	  r.disabled=false;
	  
	  s.disabled=false;
	  
}


