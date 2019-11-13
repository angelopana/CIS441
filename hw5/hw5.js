/* 
    Angelo Pana
    CIS444
    Javascript Code
    Fall 2019
*/

var position; //position of the text
var obj;    //object i.e the sentence
var left, right, flag = false; //left right position & a bool flag to set the movement


//function to start moving the sentence
function move(){
    //getting the sentence/object id
    obj = document.getElementById("sentence");
    left = parseInt(document.getElementById("startPoint").value); //start 
    right = parseInt(document.getElementById("endPoint").value); //the position set start of input 

    //little interval loop to begin the loop movement of the text
    setInterval(function(){startMove(); }, 1);
}

function startMove(){

    position = obj.style.left; //current position of the text in #px from left side
    position = position.match(/\d+/); //regex to just parse numbers and not the px part
    
    colorChange(position)
    //if flag is true start to move right else left
    if (flag ? rMove() : lMove());

}//end of startMove function

/* Change the color between red & blue every 5th move 
    input i: is the position 
*/
function colorChange(i) {
        //do module to find every 5th move
        if(i % 5 == 0){
            //if state ment to change the color of the text
            if((obj.style.color == "red") ? (obj.style.color = "blue") : (obj.style.color = "red"));
        }


}

/* Function to move object to the right */
function rMove(){

    if (position == left){
        flag = false; //flag set to false when it needs to start moving right
    }

    if (position > left) {
        position--;
    }
    
    obj.style.left = position + "px"; //adds the value px i.e #px
}//end of right move function

/* Function to move object to the left */
function lMove(){

    if( position == right){
        flag = true; //set to true when movement needs to move back to left
    }
    //moving right
    if (position < right){
        position++;
    }

    obj.style.left = position + "px"; //adds the value px i.e #px
}//end of left move function

/* This sets the numbers the user inputs in the box  */
function setInput(){

    //set the user input to stay in the user input box
    left = parseInt(document.getElementById("startPoint").value);
    //setns the end point input to stay in the user inbox
    right = parseInt(document.getElementById("endPoint").value);

    obj.style.left = left + "px"; //sets the new start from the user input
    //set flag to false
    flag = false; //ready to move right

}//end of setInput
