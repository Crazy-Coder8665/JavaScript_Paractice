'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let counter = 20;
            
            let highscore = 0;


document.querySelector('.check').addEventListener('click',function(){

     const guess = Number(document.querySelector('.guess').value);
        //When no input
     if(!guess){
        document.querySelector('.message').textContent ='😒 No Number!';

        //When win
     }else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent ='🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width = '30rem';
        if(counter > highscore){
            highscore = counter;
            document.querySelector('.highscore').textContent = highscore;
        }

     }//WHEN THE GUESS IS WRONG
     else if(guess!== secretNumber){
        if(counter>1){
            document.querySelector('.message').textContent = guess>secretNumber?'Too High!': 'Too low';
            counter--;
            document.querySelector('.score').textContent =counter;
             }else{
                document.querySelector('.message').textContent ='😭 You Lost!';
                document.querySelector('.score').textContent =0;
                document.querySelector('body').style.backgroundColor='red';
             }

     } 
    
});

document.querySelector('.again').addEventListener('click',function(){
    counter = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value ='';
    document.querySelector('.number').textContent ='?';
    document.querySelector('body').style.backgroundColor='#222';
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').style.width = '15rem';
})
