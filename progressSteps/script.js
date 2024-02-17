const progress = document.querySelector(`#progress`);
const prior = document.querySelector(`#prior`);
const next = document.querySelector(`#next`);
const circles = document.querySelectorAll(`.circle`);

let currentActive = 1;
next.addEventListener(`click`, function () {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
prior.addEventListener(`click`, function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  let index = 0;
  for (const circle of circles) {
    if (index < currentActive) {
      circle.classList.add(`active`);
    } else {
      circle.classList.remove(`active`);
    }
    index++;
  }
  const dynamic = document.querySelectorAll(`.active`);
  progress.style.width =
    ((dynamic.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prior.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prior.disabled = false;
    next.disabled = false;
  }
}
