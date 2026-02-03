(function () {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  function isEmail(value) {
    const v = String(value || "").trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || name.length < 2) {
      msg.textContent = "Enter your name.";
      return;
    }

    if (!isEmail(email)) {
      msg.textContent = "Enter a valid email.";
      return;
    }

    if (!message || message.length < 10) {
      msg.textContent = "Message must be at least 10 characters.";
      return;
    }

    msg.textContent = "Success.  Form validated.  Demo complete.";
    form.reset();
  });
})();
