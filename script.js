// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Select the button by its ID
    const button = document.getElementById("exampleButton");

    // Add a click event listener to the button
    button.addEventListener("click", () => {
        // Display an alert message when the button is clicked
        alert("Hello! You just clicked the button!");
    });
});
