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


var score1=0;
var score2=0;

var current1=0;
var current2=0;
 
  var r=document.getElementById("rollbtn");
	  
 var s=document.getElementById("holdbtn");
 
  var x=document.getElementById("player1");
	 
 var y=document.getElementById("player2");
	 
	          s.addEventListener("click",hold1); 
	   
	         r.addEventListener("click",diceRole1);  
 
 

function diceRole1(){
		
    var  rollNo=Math.floor(Math.random()*6)+1;
		  
    var x=document.querySelector(".dice");
	  
	  x.setAttribute("src",`dice-${rollNo}.png`);
	  
	   current1+=rollNo;
	  
	     currentAdd1(current1);
		
		if (rollNo==1){
							
				current1=0;	
						
			hold1();
			
		}
	
}


  function currentAdd1(current1){
	    	 
	  document.getElementById("current--0").innerHTML=current1;
	  	  
  }


function hold1(){
	
	score1+=current1;
	
	current1=0;
	
	     if(score1>99){
			 
		     win1();
	       }
	
	  document.getElementById("current--0").innerHTML=current1;
	  
	r.removeEventListener("click",diceRole1);
	
	s.removeEventListener("click",hold1);  
	
	document.getElementById("score--0").innerHTML=score1;
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
	  
	     current2+=rollNo;
	  
	     currentAdd2(current2);
		
		if (rollNo==1){
						
						current2=0;
						
			hold2(current2);
			
		}
	
}

  function currentAdd2(current2){
	   	  
	  document.getElementById("current--1").innerHTML=current2;
	  
  }


function hold2(){
	
	score2+=current2;
	
	current2=0;
	
	     if(score2>99){
		
		       win2();
	       }
	
	document.getElementById("current--1").innerHTML=current2;
	
	 r.removeEventListener("click",diceRole2);
	 
	 s.removeEventListener("click",hold2);  
	
	document.getElementById("score--1").innerHTML=score2;
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
	 
	 y.classList.remove("player--active"); 
	 
	  y.classList.add("player--winner");
	  	  
	    r.disabled=true;  
		
	  s.disabled=true;
	  
}
	



function reset(){
	
score1=0;
score2=0;

current1=0;
current2=0;

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


