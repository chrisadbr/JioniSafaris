export const handleLike = (e) => {
  let cls = e.target.className["baseVal"];
  let fi_heart = document.querySelector(`.${cls}`);
  fi_heart.classList.toggle("selected");
  setTimeout(() => {
    fi_heart.classList.remove("selected");
  }, 1000);
};
