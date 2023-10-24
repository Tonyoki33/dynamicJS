document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  nav.className = "redNav";
  const navBtn = document.createElement("button");

  const toggleBtn = (btn) => {
    btn.addEventListener("click", function () {
      if (nav.classList.contains("redNav")) {
        nav.classList.remove("redNav");
        nav.classList.add("blueNav");
      } else {
        nav.classList.remove("blueNav");
        nav.classList.add("redNav");
      }
    });
  };
  const getNavClass = () => {};

  toggleBtn(navBtn);
  getNavClass();
  nav.appendChild(navBtn);
  navBtn.className = "whiteBtn";
  console.log(navContent);
});
