function handleNav() {
  const btn = document.getElementById("btn");
  const nav = document.getElementById("nav");

  if (!btn.classList.contains("on")) {
    btn.classList.add("on");
    nav.classList.add("on");
  } else {
    btn.classList.remove("on");
    nav.classList.remove("on");
  }
}
