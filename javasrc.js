"use strict";


let secretnumber;
let score; 


function secret()
{
 secretnumber = (Math.random() * 20)+1;
secretnumber = Math.trunc(secretnumber);
console.log(secretnumber);
 score =20;
 console.log(score)
}


secret();


document.querySelector(".again").addEventListener('click', function ()
{
  secret()
  document.querySelector(".number").textContent= "?";
  

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = 'โ Guess the number ! ';
  document.querySelector('video').style.visibility = "hidden";


  

})

document.querySelector(".submit").addEventListener('click', function () {
  
  
  
  
  let guessednumber = Number(document.querySelector(".in").value);
  console.log(typeof guessednumber, guessednumber);

  let hscore = document.querySelector(".hscore").textContent ;

 

  if (!guessednumber)
  {
    document.querySelector(".message").textContent = 'โPlease Enter Number'
  
  }else if (secretnumber === guessednumber )
  {
    document.querySelector(".message").textContent = '๐You win'
  }else if(score > 0) 
  {
    if(guessednumber > secretnumber)
  {
    document.querySelector(".message").textContent = '๐ Too high'
    score--;
    document.querySelector(".score").textContent = score;
    console.log("score" + score);


  }else if (guessednumber < secretnumber){
    document.querySelector(".message").textContent = '๐ Too Low'
    score--;
    document.querySelector(".score").textContent = score;
  } 
  } 
  if (score === 0)
  {

    document.querySelector(".message").textContent = '๐ข You lose'
  }
  
  if (document.querySelector(".message").textContent === '๐You win')
  {
    let higscore = Number(document.querySelector(".hscore").textContent);
    console.log(higscore , typeof higscore)
    document.querySelector('video').style.visibility = "visible";
    console.log(document.querySelector('video').style);
    document.querySelector(".number").textContent= secretnumber;

  


    if (higscore < score)
{
  document.querySelector(".hscore").textContent=score;
    console.log(document.querySelector(".hscore").textContent);
}


console.log(score);

    
    
  }
  




 
});






