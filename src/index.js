import './index.css';

const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');

const addBtn = document.querySelector('.add_btn');
const refreshBtn = document.querySelector('.refresh_btn');

let taskList = [];

addBtn.addEventListener('click', () => {
  // eslint-disable-next-line eqeqeq
  if (inputName.value.trim() != 0 && inputScore.value.trim() != 0) {
    const localItems = JSON.parse(localStorage.getItem('localItem'));
    if (localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
    taskList.push(`${inputName.value} : ${inputScore.value}`);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    inputScore.value = '';
    inputName.value = '';
    // eslint-disable-next-line no-use-before-define
    ClassShowListItems.showItem();
  }
});

class ClassShowListItems {
  static showItem() {
    const localItems = JSON.parse(localStorage.getItem('localItem'));
    if (localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }

    let html = '';
    const itemShow = document.querySelector('.scoreLists');
    taskList.forEach((scoreItemList) => {
      html += `
    <div class="scoreListItems">
      <div class="scoreList">
        <p class="inputText">${scoreItemList}</p>
      </div>
    </div>
    `;
    });
    itemShow.innerHTML = html;
  }
}
ClassShowListItems.showItem();

refreshBtn.addEventListener('click', () => {
  window.location.reload();
});
