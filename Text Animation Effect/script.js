const words = document.querySelectorAll(".word");
const ball = document.querySelector(".ball");
const container = document.querySelector(".stack")

const tl = gsap.timeline({ repeat: -1 });

words.forEach((word, index) => {

  const letters = word.textContent.split("");
  word.innerHTML = letters.map(l => `<span class="char">${l}</span>`).join("");

  const chars = word.querySelectorAll(".char");

  chars.forEach((char, i) => {
    tl.to(ball, {
      x: () => char.getBoundingClientRect().left 
             -container.getBoundingClientRect().left
              - ball.clientWidth/2,
      y: () => char.getBoundingClientRect().top
             -container.getBoundingClientRect().top
              - ball.clientHeight/2,
      duration: 0.30,
      ease: "power2.out"
    });
  });

  tl.to(word, {
    rotateZ: index % 2 === 0 ? 8 : -8,
    duration: 0.5,
    ease: "power1.inOut"
  });

  
  tl.to(ball, {
    y: "+=40",
    duration: 0.5,
    ease: "bounce.out"
  });
});
