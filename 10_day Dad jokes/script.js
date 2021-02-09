const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// USING ASYNC/AWAIT
const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const response = await fetch('https://icanhazdadjoke.com', config);
  const data = await response.json();
  jokeEl.textContent = data.joke;
};

// USING .then()
// const generateJoke = () => {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };
//   fetch('https://icanhazdadjoke.com', config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.textContent = data.joke;
//     });
// };

jokeBtn.addEventListener('click', generateJoke);

generateJoke();
