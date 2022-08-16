const localStorageText = document.querySelector('.local-storage-text')
const localStorageButton = document.querySelector('.local-storage-button')
const sessionStorageText = document.querySelector('.session-storage-text')
const sessionStorageButton = document.querySelector('.session-storage-button')

function onChangeLocalStorage() {
  localStorageButton.onclick = function() {
    if (localStorage.getItem('myLocalStorage')) {
      localStorageText.textContent = localStorage.getItem('myLocalStorage');
    } else {
      localStorageText.textContent = 'No data from local storage 🥲'
    }
  }
}

function onChangeSessionStorage() {
  sessionStorageButton.onclick = function() {
    if (sessionStorage.getItem('mySessionStorage')) {
      sessionStorageText.textContent = localStorage.getItem('mySessionStorage');
    } else {
      sessionStorageText.textContent = 'No data from session storage 🥲'
    }
  }
}

onChangeLocalStorage()
onChangeSessionStorage()