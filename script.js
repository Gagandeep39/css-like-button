const likeMe = document.querySelector('.likeMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

likeMe.addEventListener('click', (e) => {
  // Initial Click
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  }
  // Following CLick
  else {
    // Consider double click if diffrence between 2 click is less than 500ms
    if (new Date().getTime() - clickTime < 500) {
      // Like
      createHeart(e);
      clickTime = 0;
    } else {
      // Reset Timer
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(event) {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  // Get postion of Click w.r.t Page
  const x = event.clientX;
  const y = event.clientY;

  // LeftMost and topMost position of image
  const left = event.target.offsetLeft;
  const top = event.target.offsetTop;

  // Position Inside Image
  const xInside = x - left;
  const yInside = y - top;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  likeMe.appendChild(heart);

  times.innerHTML = ++timesClicked;
}
