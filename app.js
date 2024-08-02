let plus=document.querySelector('.plus')
let minus=document.querySelector('.minus')
let cont=document.querySelector('.cont')
let conut=0
plus.addEventListener('click',()=>{
    conut++
    cont.innerHTML=conut
    
}
)
minus.addEventListener('click',()=>{
    conut--
    cont.innerHTML=conut
}
)