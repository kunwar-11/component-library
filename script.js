let btn = document.getElementById('open-modal');
let modal = document.querySelector('.modal')
let modal_close = document.querySelector('.modal__close')
let close_modal = document.getElementById('btn-close-modal')
let modalBody = document.querySelector('.modal__body')
btn.addEventListener('click',() => {
    modal.style.display = 'block';
    document.body.style.backgroundColor =' rgba(0,0,0,0.5)'
})
modal_close.addEventListener('click',() =>{
    modal.style.display = 'none';
    document.body.style.backgroundColor ='transparent'
})
close_modal.addEventListener('click',() =>{
    modal.style.display = 'none';
    document.body.style.backgroundColor ='transparent'
})