let is_game_running = false; 
let score = 0;
let time =10
let coins=0;
//Declared variables
let end;
let start;
let boundaries;
let status_display; 
let timerbox;
let coinbox;
let btn;



document.addEventListener("DOMContentLoaded", loadPage);

function displayScore(message){
    if(message != "")
        status_display.innerHTML = message + "<br/>" + "Your Score is: " + score;
    
}

function gameOver(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(243, 159, 159)"; 
        if(score > 0)
            score = score - 1;
        displayScore("Game Over!");
        is_game_running = false;
        time=0
        timerbox.textContent=time;
    }
}

function startGame(){
    displayScore("");
    is_game_running = true;
    for(let i = 0; i < boundaries.length; i++)
        boundaries[i].style.backgroundColor = "#eeeeee"; 
    time=10
}

function endGame(){
    if(is_game_running){
        for(let i = 0; i < boundaries.length; i++)
            boundaries[i].style.backgroundColor = "rgb(113 225 141)"; 
        score = score + 5;
        displayScore("You Won!");
        is_game_running = false;
        
        collect_coin()

        if(coins===4){
            alert("bay")
            score+=10
            coins=0

        }
       

    }
}
function timer(){
    if(is_game_running){
        timerbox.textContent=time;
    time--;
    if (time===0){
        gameOver();
        
       
    }
   
}
}

function collect_coin(){
    
    coins++
    coinbox.innerHTML=coins
    
}


function reload(){
    score=0
    coins=0
    status_display.textContent=""
    timerbox.textContent=""
    coinbox.textContent=""
    for(let i=0;i<boundaries.length;i++){
        boundaries[i].style.backgroundColor="#eeeeee"
    }
    is_game_running=false
   
}

function loadPage(){
    end = document.getElementById("end");
    start = document.getElementById("start");
    boundaries = document.getElementsByClassName("boundary");
    status_display =  document.getElementById("status");
    timerbox=document.getElementById("timer")
   coinbox=document.getElementById("coin") 
   btn=document.getElementById("btn")  
   
    end.addEventListener("mouseover", endGame);

    start.addEventListener("click", startGame);
    intervalid=setInterval(timer,1000)
    for(let i = 0; i < boundaries.length; i++){
        boundaries[i].addEventListener("mouseover", gameOver);
    }
    btn.addEventListener("click",reload)
}