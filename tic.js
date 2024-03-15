//this is simple javascript program done by raj pandith,when i was at beginner level at (29/july/2023)


let xplayer="X"
let oplayer="O"
let currentplayer=xplayer
document.querySelector(".playerbox").innerText="it's player "+currentplayer+" turn!.."

var arr=[null,null,null,  //to store values X/O and to calculate winning condition
         null,null,null,
         null,null,null]
win=0                    //to check winner



    for(i=0;i<9;i++){         //adding click event to all boxes
     document.getElementsByClassName("box")[i].addEventListener("click",gettag)
    }         
document.querySelector(".restart").addEventListener("click",reset) // adding click function on reset button

function gettag(e){
    const id=e.target.id  //getting the id containing box number
    if(arr[id]==null){
        arr[id]=currentplayer  //adding x/o value to array
        e.target.innerText=currentplayer  // displaying x/o on box
        winner()  // for every box checking the condition for winning the game 
        if(win==1){  //to identify that winner is found or not
          reset()  // when winner is found then restart the game
          win=0
        }
        
        if(currentplayer==xplayer){ // for changing the player's turn and displaying the x/o on box
              currentplayer=oplayer
              document.querySelector(".playerbox").innerText="it's player "+currentplayer+" turn!.."
      }else{
              currentplayer=xplayer
              document.querySelector(".playerbox").innerText="it's player "+currentplayer+" turn!.."
                }
            }
        }
        
        
   // to clear all boxes  and again changing the player turn to x     
        function reset(){
            arr=[null,null,null,
                null,null,null,
                null,null,null]
                
                for(i=0;i<9;i++){
                    document.querySelectorAll(".box")[i].innerText=null
                }    
                currentplayer=xplayer
                document.querySelector(".playerbox").innerText="it's player "+currentplayer+" turn!.."
            }

            //calculating wining condition using simple method as a beginner when i was learning at(29/july/2023)
function winner(){
if((arr[0]=="X")&&(arr[1]=="X")&&(arr[2]=="X")||(arr[3]=="X")&&(arr[4]=="X")&&(arr[5]=="X")||(arr[6]=="X")&&(arr[7]=="X")&&(arr[8]=="X")||(arr[0]=="X")&&(arr[3]=="X")&&(arr[6]=="X")||(arr[1]=="X")&&(arr[4]=="X")&&(arr[7]=="X")||(arr[2]=="X")&&(arr[5]=="X")&&(arr[8]=="X")||(arr[0]=="X")&&(arr[4]=="X")&&(arr[8]=="X")||(arr[6]=="X")&&(arr[4]=="X")&&(arr[2]=="X")){
 alert(`${currentplayer} won the match`)
   win=1
}else 
if((arr[0]=="O")&&(arr[1]=="O")&&(arr[2]=="O")||(arr[3]=="O")&&(arr[4]=="O")&&(arr[5]=="O")||(arr[6]=="O")&&(arr[7]=="O")&&(arr[8]=="O")||(arr[0]=="O")&&(arr[3]=="O")&&(arr[6]=="O")||(arr[1]=="O")&&(arr[4]=="O")&&(arr[7]=="O")||(arr[2]=="O")&&(arr[5]=="O")&&(arr[8]=="O")||(arr[0]=="O")&&(arr[4]=="O")&&(arr[8]=="O")||(arr[6]=="O")&&(arr[4]=="O")&&(arr[2]=="O")){
        alert(`${currentplayer} won the match`)
          win=1
}
}