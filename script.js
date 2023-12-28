const polka = document.getElementById("polka");
const stick = document.getElementById("stick");
const scoreDisplay = document.getElementById("score");


let count = 0;
let speed = 1;




document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
if (polka.classList!= "jump") {
    polka.classList.add("jump")
}
setTimeout ( function() {
    polka.classList.remove("jump")
    count += 100;
    scoreDisplay.textContent = count;

    if (count % 100 == 0 && speed > 0) {
        speed -= 0.01;
        stick.style.setProperty("animation", `stickMov ${speed}s  infinite linear`);
        
    }
}, 300) 
}
function resetGame() {
count = 0;
speed = 1;
scoreDisplay.textContent = count;
stick.style.setProperty("animation", "none");
polka.style.top = "240px";


}



let isAlive = setInterval(function() {

  let polkaTop = parseInt(window.getComputedStyle(polka).getPropertyValue("top"));
  let stickLeft = parseInt(window.getComputedStyle(stick).getPropertyValue("left"));

  if (stickLeft < 50 && stickLeft > 0 && polkaTop >= 140)  {
    stick.style.setProperty("animation", "none");
  
    Swal.fire({
        title: 'HOCHU',
        text: '',
        icon: 'fail',
        confirmButtonText: 'EWE'
    }).then(() => {
        resetGame();
    });
}
}, 10);



