document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("enterBtn");
    const para = document.getElementById("status");

    button.addEventListener("click", () => {
        para.innerText = "Entered Metaverse";
    });
});
