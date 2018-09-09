$( document ).ready(function(){
  var Random=Math.floor(Math.random()*120)
  
  
  // Appending random number to the randomNumber id in the html doc
  $('#randomNumber').text(Random);
  
  
   // Setting up random numbers for each jewel between 1 and 12
  var number1= Math.floor(Math.random()*12)
  var number2= Math.floor(Math.random()*12)
  var number3= Math.floor(Math.random()*12)
  var number4= Math.floor(Math.random()*12)

 
 //  Decaring variables for tallies  
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
	
//resets the game
function reset(){
      Random=Math.floor(Math.random()*120);
      console.log(Random)
      $('#randomNumber').text(Random);
      number1= Math.floor(Math.random()*12);
      number2= Math.floor(Math.random()*12);
      number3= Math.floor(Math.random()*12);
      number4= Math.floor(Math.random()*12);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
	  
//adds the wins to the userTotal
function winner(){
alert("You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}

//adds the losses to the userTotal
function loser(){
alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}

//sets up click for jewels
  $('#one').on ('click', function(){
    userTotal = userTotal + number1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
         
		 //sets win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + number2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
	
	//sets win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + number3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
	
//sets win/lose conditions
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  
  $('#four').on ('click', function(){
    userTotal = userTotal + number4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 

//sets win/lose conditions	
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 