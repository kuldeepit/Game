/* 
    some logic reference taken from YouTube video by :  
    Abhishweta Gupta - The Tower Block Game
*/ 

for(var i=0;i<20;i++){
    document.getElementById("game").innerHTML=document.getElementById("game").innerHTML+"<div><div id='newDiv' class='1'></div><div class='2'></div><div class='3'></div><div class='4'></div><div class='5'></div><div class='6'></div><div class='7'></div><div class='8'></div><div class='9'></div><div class='10'></div></div>"
}
  
const backgroundSound = new Audio("./assets/bgsound.mp3");
backgroundSound.play()
backgroundSound.loop = true;   
  
var x=10;
var id;
var turn ='forward';
var size=10;
var score=0;
var s=0;

function start(){
    fill_box(x,size);
    move(x,size,s);
    document.getElementById("start").removeAttribute("onclick");
}
  
function fill_box(row,size) {
    for(var i=0;i<size;i++){
        document.getElementsByClassName(row.toString())[i].style.backgroundColor='fireBrick';
    }
}

// some logic reference taken from YouTube video by :  Abhishweta Gupta - The Tower Block Game

function move(row,size,s){
    id=setInterval(() => {
    if(size<20 && turn=='forward'){
        document.getElementsByClassName(row.toString())[size].style.backgroundColor='firebrick';
        size++;
        document.getElementsByClassName(row.toString())[s].style.backgroundColor='';
        s++;
    }
    else if(size==20 ){
        size=s-1
        s=19;
        turn='backward';
    }

    else if(size<20 && turn=='backward'){
        document.getElementsByClassName(row.toString())[size].style.backgroundColor='firebrick';
        size--;
        document.getElementsByClassName(row.toString())[s].style.backgroundColor='';
        s--;
        if(size==-1){
        size=s+1;
        s=0;
        turn='forward';
        }
    }
    
    }, 100);
}

document.getElementById("newDiv").addEventListener("click", () =>{

    x=x-1;
    if(x==0){
     
      location.href="./end.html"
    }
    s=0;

    turn='forward';

    var size=0;
    clearInterval(id);
    cutting_extra(x+1);
    start();

});

    function cutting_extra(block){
        var sum=0;
        if(block==10){
            sum=10;
        }
        else{
            for(var i=0;i<=19;i++){
                elem1=document.getElementsByClassName(block.toString())[i];
                elem2=document.getElementsByClassName((block+1).toString())[i];
                if(window.getComputedStyle(elem1).getPropertyValue("background-color")!=window.getComputedStyle(elem2).getPropertyValue("background-color")){
                    if(window.getComputedStyle(elem2).getPropertyValue("background-color")=='rgba(0, 0, 0, 0)'){
                        elem1.style.backgroundColor=elem2.style.backgroundColor;
                    }
                }
                else {
                    if(window.getComputedStyle(elem2).getPropertyValue("background-color")!='rgba(0, 0, 0, 0)')
                    sum++;
                }
            }
        }

        size=sum;

        if(size!=0){
            score=score+10;
            document.getElementById("screen").innerHTML=score;
        }
        else{
            setTimeout(() => {
            localStorage.setItem("score",score)
            location.href="./end.html"
            
            }, 100);
        }
    }
    

    
  