const p = document.querySelector('.text');
const ol = document.querySelector('.ol');
const btnPiada = document.querySelector('.btn');
const btnAdd = document.querySelector('.add');
const btnSave = document.querySelector('.save');
const btnDelete = document.querySelector('.delete');
const select = document.querySelector('#category');


btnPiada.addEventListener('click', async () => {
  const category = select.value;
  p.innerText = 'Loading...'
  const api = await apiSearch(category);
  p.innerText = api.value
})

btnAdd.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'lis';
  if (p.innerText !== '') {
    if (ol.childNodes.length === 0) {
      li.innerText = p.innerText;
      ol.appendChild(li);
    }

    const arr = ol.childNodes.length - 1;
    if (p.innerText !== ol.childNodes[arr].innerText) {
      li.innerText = p.innerText;
      ol.appendChild(li);
    }
  }
})

btnSave.addEventListener('click', () => {
  if (ol.innerHTML !== '') {
    localStorage.setItem('joke', ol.innerHTML)
  }
})

btnDelete.addEventListener('click', () => {
  ol.textContent = ''
  localStorage.clear()
})

const restoreList = () => {
  if (localStorage.getItem('joke')) {
    ol.innerHTML = localStorage.getItem('joke');
  }
}

restoreList();