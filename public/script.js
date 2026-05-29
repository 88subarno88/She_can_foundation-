// Grab the form and the result message element
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

// Run this when the form is submitted
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // stop the page from reloading

  // Read the values from the input fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // client-side validation
  if (!name || !email || !message) {
    result.style.color = "red";
    result.textContent = "Please fill all the fields.";
    return;
  }
  if (!email.includes("@")) {
    result.style.color = "red";
    result.textContent = "Please enter a valid email.";
    return;
  }

  // Send the data to the backend
  const res = await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  // Show the success message and clear the form
  if (res.ok) {
    result.style.color = "green";
    result.textContent = "Form Submitted Successfully";
    form.reset();
  } else {
    result.style.color = "red";
    result.textContent = "Something went wrong. Try again.";
  }
});
