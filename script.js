const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');  
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup'); //การกดปุ่ม login แล้วมันจะเด้งหน้าล็อคอินขึ้น
const iconClose = document.querySelector('.icon-close'); //การกดปุ่มกากบาทแล้วจะทำการปิด

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});


