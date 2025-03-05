let menuitem = document.querySelectorAll('.item-menu')

function sele(){
    menuitem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
menuitem.forEach((item)=>
item.addEventListener('click',sele)
)
//fazer expandir

let exp = document.querySelector('#btn-exp')
let menuside = document.querySelector('.menu-lateral')
exp.addEventListener('click',function(){
    menuside.classList.toggle('expandir')
})


