// This allows for the us to interact with the HTML Front end! 
const body = document.querySelector('body'); 
const container = document.querySelector('.container'); 
const message = document.querySelector('h1'); 

const backgroundColors = ['#78DFF2','#B2F7EF', '#EFF7F6', '#F7D6E0', '#F2B5D4']; 
const fontColors = ['#FFBFC5', '#FEE5E0', '#FFFFFF','#B3DBD8','#A8D1E7']; 
const emojis = ['&#128514;', '&#128515;', '&#128517;', '&#128516;', '&#128512;']
let index = 0;
 

// Allows us to control the colors at random per click! 
function designHandler(){
    index = Math.floor(Math.random()*5); 
    console.log(index); 
}

function eventHandler(){
    console.log("Working!");
    designHandler();
    body.style.background = backgroundColors[index];  
    console.log(`background color: ${body.style.background}`); 
    message.style.color = fontColors[index];
    console.log(`font color: ${message.style.color}`); 
}


window.addEventListener('click', eventHandler); 
window.addEventListener('keypress', eventHandler); 

container.appendChild(message); 
