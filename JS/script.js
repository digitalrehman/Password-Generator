let input = document.getElementById("input");
let btn = document.getElementById("btn");
let copy = document.getElementById("copy");

btn.addEventListener("click", () => {
  let charSet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i <= 12; i++) {
    let randomPasword = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomPasword);
  }
  input.value = password;
});

copy.addEventListener("click", () => {
  input.select();
  document.execCommand("copy");

  const copyIcon = copy;
  copyIcon.classList.add("fa-check");
  copyIcon.classList.remove("fa-copy");

  const tooltip = document.createElement("span");
  tooltip.textContent = "Copied!";
  tooltip.classList.add("tooltip");
  copyIcon.appendChild(tooltip);

  setTimeout(() => {
    copyIcon.classList.remove("fa-check");
    copyIcon.classList.add("fa-copy");
    copyIcon.removeChild(tooltip);
  }, 2000);
});
