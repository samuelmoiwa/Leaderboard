import './index.css';
import postData from './modules/post.js';
import getData from './modules/get.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7TGRfrete546nDR4yurtdeOa1/scores';

const name = document.querySelector('#leaderName');
const score = document.querySelector('#leaderScore');
const refresh = document.querySelector('.refresh_btn');
const addBTN = document.querySelector('.btn-submit');

addBTN.addEventListener('click', (e) => {
  e.preventDefault();

  const objLeader = {
    user: name.value,
    score: score.value,
  };

  postData(url, objLeader);

  name.value = '';
  score.value = '';
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  getData(url);
});
