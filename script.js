<!DOCTYPE html>
<html>

<head>
  <title>Metaverse Example</title>
</head>

<body>
  <p id="status">Enter the Metaverse</p>
  <button id="enterBtn">Enter</button>

  <script>
    const button = document.getElementById("enterBtn");
    const para = document.getElementById("status");

    button.addEventListener("click", () => {
      para.innerText = "Entered Metaverse";
    });
  </script>
</body>

</html>
