function btn_hide() {
  let add_margin = document.querySelector(".lan_btn_eng");
  add_margin.style.marginRight = "-100px";
}

function btn_show() {
  let add_margin = document.querySelector(".lan_btn_eng");
  add_margin.style.marginRight = "-25px";
}

function responsive_menu() {
  let active = document.querySelector("#nav");
  let times = document.querySelector(".bar_all_times");
  let bars = document.querySelector(".bar_all");

  if (active.className === "nav_menu_sec") {
    active.classList.remove("nav_menu_sec");
    times.style.display = "block";
    bars.style.display = "none";
  } else {
    active.classList.add("nav_menu_sec");
    times.style.display = "none";
    bars.style.display = "block";
  }
}
