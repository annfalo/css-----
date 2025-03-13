const headerBtn = document.getElementById('header-btn');
const body = document.body;

headerBtn.addEventListener('click', () => {
    body.classList.toggle('is-openMenu');
});
//JQの場合
//$(function(){
//on = addEventListener
//$('#head-btn').on('click', ()=>{
//$('body').toggleClass('is-openMenu')})
//});