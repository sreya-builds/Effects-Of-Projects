let txt = document.querySelector('#text')
let tree = document.querySelector('#tree-left')
let treeRight = document.querySelector('#tree-right')
let gate = document.querySelector('#gate-left')
let gateRight = document.querySelector('#gate-right')
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    txt.style.marginTop = value * 2.5 + 'px'
    tree.style.left = value * -1.5 + 'px'
    treeRight.style.left = value * 1.5 + 'px'
    gate.style.left = value * 0.5 + 'px'
     gateRight.style.left = value * -0.5 + 'px'
})