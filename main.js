const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle("inactive");
  //if(desktopMenu.className === "inactive") {
    //console.log("inactive existe");
  //}
}

navbarEmail.addEventListener("click", toggleDesktopMenu);
