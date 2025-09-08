// Dark Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Shopping Cart Counter
let cartCount = 0;
const cartDisplay = document.getElementById("cartCount");
document.getElementById("addItem").addEventListener("click", () => {
  cartCount++;
  cartDisplay.textContent = cartCount;
});
document.getElementById("removeItem").addEventListener("click", () => {
  if (cartCount > 0) cartCount--;
  cartDisplay.textContent = cartCount;
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Form Validation
document.getElementById("feedbackForm").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  // Validation
  if (name.length < 3) {
    formMessage.textContent = "Name must be at least 3 characters long.";
    formMessage.style.color = "red";
    return;
  }
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
    return;
  }
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!password.match(passwordPattern)) {
    formMessage.textContent = "Password must be at least 6 characters long and include a number.";
    formMessage.style.color = "red";
    return;
  }
  if (message.length < 5) {
    formMessage.textContent = "Feedback must be at least 5 characters.";
    formMessage.style.color = "red";
    return;
  }

  // Success
  formMessage.textContent = "Thank you for your feedback, " + name + "!";
  formMessage.style.color = "green";
  document.getElementById("feedbackForm").reset();
});
