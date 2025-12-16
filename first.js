let gameseq=[];
let h2=document.querySelector("h2");
 let hscore=document.querySelector(".high")
let playerseq=[];
 let leveh=[];
let stared=false;
let level=0;
let btn=["btn1","btn2","btn3","btn4"];
document.addEventListener("keypress",function(){
    if(stared==false){
        console.log("Game stared");
        stared=true;
    };
    levelup();
});

function levelup(){
    playerseq=[];
    level++;
   h2.innerText=`Level ${level}`;

let rndomnum=Math.floor(Math.random()*4);
let randomclr=btn[rndomnum];
gameseq.push(randomclr);
console.log(gameseq);
let randombtn=document.querySelector(`.${randomclr}`);
btnflash(randombtn);
}




function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}
function match(idx){
  console.log("curr level",level);
    
    if(gameseq[idx]===playerseq[idx]){
        if(gameseq.length==playerseq.length){
            setTimeout(levelup,1000)
        }
    }else{
        h2.innerHTML=`Game over! your score was <b>${level-1}<b><br>press any key to start the game`;
        leveh.push(level-1);
        let hs=Math.max(...leveh);
       if(hs<=0){
       hscore.innerText=`High Score:${0}`;
       }else{
      hscore.innerText=`High Score:${hs}`;
     }
    setTimeout(()=>{   
        hscore.innerText=""},5000);
        reset();

    }
}
let bdy=document.querySelector("body")
function reset(){
    stared=false;
    gameseq=[];
    playerseq=[];
    level=0;
   
    bdy.classList.add("bgc");
    setTimeout(()=>{
       bdy.classList.remove("bgc")
    },250
    );
    
}

function btnpress(){
    console.log(this)
  let btn=this;//tells in which btn event is made
  userflash(btn)
  let usercolor=btn.getAttribute("id")
  playerseq.push(usercolor);
  match(playerseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(let btn of allbtn){
    btn.addEventListener("click",btnpress);
}

