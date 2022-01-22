const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
   modal.style.display = 'block'
}

function closeModal() {
   modal.style.display = 'none'
}

function outsideClick(e) {
   if (e.target == modal) {
      closeModal()
   }
}

// if ('serviceWorker' in navigator) {
//    console.log('Service Worker is supported')
//    window.addEventListener('load', () => {
//       navigator.serviceWorker
//           .register('/sw.js')
//          .then((reg) => console.log('Service Worker registered' + reg))
//          .catch((err) => console.log('Service Worker not registered', err))
//    })
// }