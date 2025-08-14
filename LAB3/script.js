const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const errors = document.querySelectorAll(".error");
  errors.forEach(el => el.textContent = ""); // Clear all errors

  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const age = document.getElementById("age");
  const eventType = document.getElementById("eventType");

  if (name.value.trim() === "" || !/^[A-Za-z\s]+$/.test(name.value)) {
    name.nextElementSibling.textContent = "Please enter a valid name";
    valid = false;
  }

  if (email.value.trim() === "" || !/^\S+@\S+\.\S+$/.test(email.value)) {
    email.nextElementSibling.textContent = "Please enter a valid email";
    valid = false;
  }

  if (phone.value.trim() !== "" && !/^\d{10}$/.test(phone.value)) {
    phone.nextElementSibling.textContent = "Phone must be 10 digits";
    valid = false;
  }

  if (age.value.trim() === "" || parseInt(age.value) < 18) {
    age.nextElementSibling.textContent = "Must be at least 18 years old";
    valid = false;
  }

  if (eventType.value === "") {
    eventType.nextElementSibling.textContent = "Please select an event type";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
