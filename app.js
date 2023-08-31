const opneBtn = document.querySelector('.OpenBtn');
const CloseBtn = document.querySelector('.CloseBtn');
const wrap = document.querySelectorAll('.wrap');

opneBtn.addEventListener('click' , function(){
    for(let x = 0; x < wrap.length; x++){
        wrap[x].classList.add('visible');
    }
})

CloseBtn.addEventListener('click' , function(){
    for(let x = 0; x < wrap.length; x++){
        wrap[x].classList.remove('visible');
    }
})