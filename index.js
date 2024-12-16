const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage1);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "🚩 Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}