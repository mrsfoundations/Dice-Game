var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomDiceImage ="dice" +  randomNumber1 + ".png";
var randomImageSource ="image/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
randomImageSource2 = "image/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//if player 1 wins
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Win's";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Win's";
}
else{
    document.querySelector("h1").innerHTML="Match Draw!!"; 
}