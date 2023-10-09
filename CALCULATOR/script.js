// Function to add input to the display
function addToScreen(value) {
    document.getElementById("result").value += value;
}

// Function to clear the display
function clearScreen() {
    document.getElementById("result").value = "";
}

// Function to calculate the result
function calculateResult() {
    try {
        const expression = document.getElementById("result").value;
        const result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

// Function to update the clock
function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial update
