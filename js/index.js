

//변수 생성
const subNav = document.querySelectorAll('.sub_nav')
const mainNav = document.querySelectorAll('.main_nav > li')
const bg0 = document.querySelector('.bg0')
const header = document.querySelector('header')
console.log(mainNav,bg0,subNav)

navs('none')
function navs(status){
    bg0.style.display = status
    for(let i of subNav){
        i.style.display = status
    }
}
for(let j of mainNav){
    j.addEventListener('mouseover',function(){
        navs('block')
    })
    bg0.addEventListener('mouseout',function(){
        navs('none')
    })
}
// phon============================================================
const phon = document.querySelector('.phon')
const btn = document.querySelector('header > a ')
const close = document.querySelector('header .phon > a')
console.log(btn,phon,close)
phon.style.display='none'
btn.addEventListener('click',function(e){
    e.preventDefault(),
    phon.style.display='block'
})
close.addEventListener('click',function(e){
    e.preventDefault(),
    phon.style.display='none'
})

