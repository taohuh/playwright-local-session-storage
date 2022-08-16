const localStorageText = document.querySelector('.local-storage-text')
const sessionStorageText = document.querySelector('.session-storage-text')

function onChangeLocalStorage() {
  localStorageText.textContent = localStorage.getItem('myLocalStorage');
}

function onChangeSessionStorage() {
  sessionStorageText.textContent = sessionStorage.getItem('mySessionStorage');
}

onChangeLocalStorage()
onChangeSessionStorage()