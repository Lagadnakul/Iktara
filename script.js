document.getElementById("playButton").addEventListener("click", function() {
    let flower = document.getElementById("flowerImg");
    let song = document.getElementById("loveSong");
    let playButton = document.getElementById("playButton");
    let stopButton = document.getElementById("stopButton");
    let question = document.getElementById("question");
    let message = document.getElementById("message");
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "";
    document.body.appendChild(heart);

    // Change the image to an open flower
    flower.src = "tulips have my heart.jpg"; // Replace with an open flower image
    flower.style.transform = "scale(1.2)";

    // Play the song
    song.play();

    // Hide question and show message
    question.style.display = "none";
    message.style.display = "block";

    // Hide play button and show stop button
    playButton.style.display = "none";
    stopButton.style.display = "block";

    // Create a function to generate falling kisses and flowers
    function generateFallingElements() {
        for (let i = 0; i < 50; i++) {
            let element = document.createElement("div");
            element.className = "falling-element";
            element.style.top = Math.random() * 100 + "%";
            element.style.left = Math.random() * 100 + "%";
            element.style.transform = "rotate(" + Math.random() * 360 + "deg)";
            element.style.animationDuration = Math.random() * 5 + "s";
            element.style.animationDelay = Math.random() * 2 + "s";
            if (Math.random() < 0.5) {
                element.innerHTML = "";
            } else {
                element.innerHTML = "";
            }
            document.body.appendChild(element);
        }
    }

    // Call the function to generate falling kisses and flowers
    generateFallingElements();

    // Add event listener to remove falling elements when song stops
    song.addEventListener("ended", function() {
        let fallingElements = document.querySelectorAll(".falling-element");
        fallingElements.forEach(function(element) {
            document.body.removeChild(element);
        });
    });
});

document.getElementById("stopButton").addEventListener("click", function() {
    let song = document.getElementById("loveSong");
    let playButton = document.getElementById("playButton");
    let stopButton = document.getElementById("stopButton");
    let flower = document.getElementById("flowerImg");
    let heart = document.querySelector(".heart");
    let question = document.getElementById("question");
    let message = document.getElementById("message");

    // Stop the song
    song.pause();
    song.currentTime = 0;

    // Reset flower image
    flower.src = "tulips have my heart.jpg"; // Replace with a closed flower image
    flower.style.transform = "scale(1)";

    // Hide message and show question
    message.style.display = "none";
    question.style.display = "block";

    // Hide stop button and show play button
    stopButton.style.display = "none";
    playButton.style.display = "block";

    // Remove heart animation
    if (heart) {
        document.body.removeChild(heart);
    }

    // Remove falling elements
    let fallingElements = document.querySelectorAll(".falling-element");
    fallingElements.forEach(function(element) {
        document.body.removeChild(element);
    });
});