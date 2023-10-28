document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("nav");
  nav.className = "redNav";
  const navBtn = document.createElement("button");
  const txt = document.createElement("p");
  txt.classList.contains("nav__txt-on");
  const data = localStorage.getItem("personajes");

  const sendInformationToNav = (cont) => {
    if (localStorage.getItem("personajes")) {
      const parseData = JSON.parse(data);
      txt.textContent = `me llamo ${parseData.first_name} ${parseData.last_name}`;
      cont.appendChild(txt);
    } else {
      console.log("no hay nadie");
    }
  };

  const toggleBtn = (btn) => {
    btn.addEventListener("click", function () {
      if (nav.classList.contains("redNav")) {
        nav.classList.remove("redNav");
        txt.classList.remove("nav__txt-on");
        nav.classList.add("blueNav");
        txt.classList.add("nav__txt-off");
      } else {
        nav.classList.remove("blueNav");
        txt.classList.remove("nav__txt-off");
        nav.classList.add("redNav");
        txt.classList.add("nav__txt-on");
      }
    });
  };
  const getNavClass = () => {};

  toggleBtn(navBtn);
  getNavClass();
  nav.appendChild(navBtn);
  navBtn.className = "whiteBtn";
  sendInformationToNav(nav);
});
