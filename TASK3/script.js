function displayData() {
  // Get the form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create a new div element
  const newUser = document.createElement("div");

  // Add the user data to the div element
  newUser.innerHTML =
    "<p>Name: " +
    name +
    "</p>" +
    "<p>Email: " +
    email +
    "</p>" +
    "<p>Password: " +
    password +
    "</p>";

  // Add the div element to the userData div
  document.getElementById("userData").appendChild(newUser);

  // Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
