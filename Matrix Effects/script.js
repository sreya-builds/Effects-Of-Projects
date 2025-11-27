var para = document.querySelector('p')
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
var text = para.innerText

let iteration = 0

function randomText(){
    var str = text.split('').map((char,index)=>{
        if(index < iteration){
            return char
        }
        return characters.split('')[Math.floor(Math.random()*52)]
    }).join('')

    para.innerText = str

    iteration += 0.2
}


setInterval(randomText,100)
