const btn = document.querySelectorAll('main .drink_list div .drink_poji .poji_title > a')
const txt = document.querySelectorAll('main .drink_list > div .drink_txt')
const div = document.querySelectorAll('main .drink_list > div')
console.log(btn,txt,div)
for(let i of txt){i.style.display = 'none'}
btn.forEach(function(t,i,a){
    t.addEventListener('click',function(e){
        e.preventDefault()
        console.log(txt)
        txt[i].style.display ='block'
    })/* 
    div[i].addEventListener('mouseout',function(){
        txt[i].style.display = 'none'
    }) */
})
