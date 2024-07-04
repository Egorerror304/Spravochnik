alert("Сайт был сделан при поддержке моего учителя Самагана")
document.addEventListener("DOMContentLoaded", () => {
    let regBtn = document.getElementById("register");
    let regModal = document.getElementById("regMod");
    let close = document.getElementById("close");
  
    regBtn.addEventListener("click", () => {
      regModal.style.display = "block";
    });
  
    close.addEventListener("click", () => {
      regModal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target == regModal) {
        regModal.style.display = "none";
      }
    });
  
    let regForm = document.getElementById("regForm");
    regForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let username = document.getElementById("username").value;
      let email = document.getElementById("email").value;
  
      console.log("Username:", username);
      console.log("Email:", email);
  
      registerModal.style.display = "none";
    });
  });
  // !
  document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
      document.body.style.opacity = 1;
    }, 50);
  });
  