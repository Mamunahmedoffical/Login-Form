document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === "user" && password === "password") {
      alert("Login successful!");
      document.getElementById("error-message").textContent = "";
      // Redirect or perform other actions after successful login
    } else {
      document.getElementById("error-message").textContent =
        "Invalid username or password.";
    }
  });
