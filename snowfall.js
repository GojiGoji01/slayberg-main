document.addEventListener("DOMContentLoaded", function () {
    const snowflakesContainer = document.querySelector(".snowflakes");

    for (let i = 0; i < 50; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake"); 
        snowflake.innerHTML = "❅";
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * 3 + 10 + "px";

        snowflakesContainer.appendChild(snowflake);
        
        
        snowflake.addEventListener("animationiteration", function () {
            this.style.left = Math.random() * window.innerWidth + "px";
            this.style.animationDuration = Math.random() * 3 + 2 + "s";
        });
    }
});
