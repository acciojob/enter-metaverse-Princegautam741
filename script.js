// Get references to the HTML elements
const statusParagraph = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");
const outputHeading = document.getElementById("output");

// Add a click event listener to the button
enterButton.addEventListener("click", function() {
    // Update the text in the status paragraph
    statusParagraph.textContent = "Entered Metaverse";

    // Display the updated text in the h1 tag
    outputHeading.textContent = statusParagraph.textContent;
});
