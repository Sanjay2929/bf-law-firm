function showNav() {
  document.getElementById("navBar").classList.toggle("showNav");
  document.body.classList.toggle("nav_mobile_scroll");
  document.getElementById("navToggleIcon").src = navBar.classList.contains(
    "showNav"
  )
    ? "/assets/images/icons/Cross.svg"
    : "/assets/images/icons/nav-toggle.svg";
}
