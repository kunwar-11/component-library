let btn = document.getElementById('open-modal');
let modal = document.querySelector('.modal')
let modal_close = document.querySelector('.modal__close')
let close_modal = document.getElementById('btn-close-modal')
let modalBody = document.querySelector('.modal__body')
let openSnackbarSuccess = document.getElementById('open-snackbar-success')
let openSnackbarSecondary = document.getElementById('open-snackbar-secondary')
let snackbarPrimary = document.querySelector('.snackbar__primary')
let snackbarSecondary = document.querySelector('.snackbar__secondary')
let closeSnackbarPrimary = document.querySelector('.close__snackbar__primary');
let closeSnackbarSecondary = document.querySelector('.close__snackbar__secondary');


btn.addEventListener('click',() => {
    modal.style.display = 'block';
    
})
modal_close.addEventListener('click',() =>{
    modal.style.display = 'none';
    
})
close_modal.addEventListener('click',() =>{
    modal.style.display = 'none';
})
openSnackbarSuccess.addEventListener('click' , () => {
    snackbarPrimary.style.display = 'flex'
    setTimeout(() => snackbarPrimary.style.display = 'none' , 2500)
})
openSnackbarSecondary.addEventListener('click' , () => {
    snackbarSecondary.style.display = 'flex'
    setTimeout(() => snackbarSecondary.style.display = 'none' , 2500)
})
closeSnackbarPrimary.addEventListener('click' , () => {
    snackbarPrimary.style.display = 'none'
})
closeSnackbarSecondary.addEventListener('click' , () => {
    snackbarSecondary.style.display = 'none'
})