"use strict";

const body = document.querySelector("body");
const form = document.querySelector("form");
const heading = document.querySelector(".heading");
const changeThemeButton = document.querySelector(".change-theme-button");
// const submitButton = form.querySelector(".submit-button");

const savedThemeInLs = localStorage.getItem("theme");

const theme = {
  darkTheme: "dark-theme",
  whiteTheme: "white-theme",
};

if (savedThemeInLs) {
  body.className = savedThemeInLs;
}

changeThemeButton.addEventListener("click", () => {
  if (body.className.includes(theme.whiteTheme)) {
    body.className = theme.darkTheme;

    localStorage.setItem("theme", theme.darkTheme);
  } else {
    body.className.includes(theme.darkTheme);
    body.className = theme.whiteTheme;

    localStorage.setItem("theme", theme.whiteTheme);
  }
});

// submitButton.addEventListener("mouseover", (event) => {
//   submitButton.style.borderColor = "green";
// });

// submitButton.addEventListener("mouseout", (event) => {
//   submitButton.style.borderColor = "purple";
// });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputValue = event.target.querySelector("input").value;

  console.log("inputValue: ", inputValue);
  console.log("event: ", event.target);
  console.log("input.value: ", typeof inputValue);
  console.log("bla bla: ", inputValue !== "");

  if (inputValue !== "" && isNaN(inputValue)) {
    if (heading.classList.contains("move-animation-from-left")) {
      heading.classList.remove("move-animation-from-left");
      heading.classList.add("move-animation-from-right");
      heading.textContent = `Happy Birthday: ${inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}!!!`;
    } else  {
       heading.classList.remove("move-animation-from-right");
       heading.classList.add("move-animation-from-left");
       heading.textContent = `Happy Birthday: ${inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}!!!`;
    }
    form.reset();
  }
});
