// =======================
// Part 1: Event Handling
// =======================

// Click event
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button was clicked!");
});

// Mouseover event
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
  hoverText.style.color = "blue";
  hoverText.textContent = "You hovered over me!";
});
hoverText.addEventListener("mouseout", () => {
  hoverText.style.color = "black";
  hoverText.textContent = "Hover over me!";
});

// Keyboard input event
const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");
keyInput.addEventListener("keyup", () => {
  keyOutput.textContent = `You typed: ${keyInput.value}`;
});


// =======================
// Part 2: Interactive Features
// =======================

// Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// FAQ Toggle
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  if (faqAnswer.style.display === "block") {
    faqAnswer.style.display = "none";
    faqQuestion.textContent = "What is JavaScript? ▼";
  } else {
    faqAnswer.style.display = "block";
    faqQuestion.textContent = "What is JavaScript? ▲";
  }
});


// =======================
// Part 3: Form Validation
// =======================

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form submission
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const messages = document.getElementById("formMessages");

  messages.innerHTML = ""; // Clear old messages

  let errors = [];

  // Name validation
  if (name.length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  // Email validation (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Password validation
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  if (password !== confirmPassword) {
    errors.push("Passwords do not match.");
  }

  // Show messages
  if (errors.length > 0) {
    messages.className = "error";
    messages.innerHTML = errors.join("<br>");
  } else {
    messages.className = "success";
    messages.textContent = "Form submitted successfully!";
    // In real projects, you could now send the data via AJAX or proceed further
  }
});
