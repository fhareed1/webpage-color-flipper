const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(e){
 
 
  const randomNumber = getRandomNumber();
  
  document.body.style.backgroundColor = colors[randomNumber];
  
  color.textContent = colors[randomNumber];

  e.preventDefault();
});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length)
}