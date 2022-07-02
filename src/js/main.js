const harmbuger = document.getElementById("menu");
const body = document.getElementById("container");
const bar = document.querySelector(".bar");
const fullMenu = document.querySelector(".slide-menu");



harmbuger.addEventListener("click", () => {
    if (bar.style.transform === "rotate(130deg)") {
      // fullMenu.style.transform = "scale(0)";
      bar.style.transform = "rotate(0deg)";
      harmbuger.setAttribute("class", "menu mobile");
    } else {
      // fullMenu.style.transform = "scale(1)";
      bar.style.transform = "rotate(130deg)";
      harmbuger.setAttribute("class", "menu mobile rotate");
    //   body.style.filter = "blur(10px)";
    }
  });