const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const nameUser = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_text = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img src="1.jpg" alt="laptop" />`;
  title.innerHTML = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fuga?';
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="man" />`;
  nameUser.innerHTML = 'John Doe';
  date.innerHTML = 'Feb 23, 2021';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bgs_text.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
