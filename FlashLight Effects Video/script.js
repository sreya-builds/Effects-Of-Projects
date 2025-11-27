var audio = document.getElementById('bgAudio')
addEventListener('mousemove',function(e){
   console.log(e.clientX,e.clientY);


   document.body.style.setProperty("--x",e.clientX+'px')
   document.body.style.setProperty("--y",e.clientY+'px')

   
});

 document.addEventListener('click',function(){
    audio.play()
 })





