document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Валідація
    if (name === "" || email === "" || message === "") {
      alert("Будь ласка, заповніть всі поля!");
      return;
    }

    // Привітання
    alert(`Привіт, ${name}! Повідомлення успішно відправлено.`);

    // Консоль
    console.log("Ім'я:", name);
    console.log("Email:", email);
    console.log("Повідомлення:", message);

    // Очистка форми
    this.reset();
  });
