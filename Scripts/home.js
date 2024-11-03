const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 300;

const currentFrame = (index) => `../Animation/${(index + 1).toString()}.jpg`;

//---------------Index declaration---------------//
let renders = document.querySelector("#renders")
let figurines = document.querySelector("#figurines")
let helmets = document.querySelector("#helmets")

let btn1 = document.querySelector("#start1")
let btn2 = document.querySelector("#start2")
let btn3 = document.querySelector("#start3")
//---------------Index declaration---------------//

const images = [];
let moment = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(moment, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "500%",
  },
  onUpdate: render,
});

gsap.fromTo(
  ".text",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: true,
      start: "50%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".text", { opacity: 0 });
    },
  }
);

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[moment.frame], 0, 0);

  //---------------Start buttons---------------//
  if(moment.frame >= 2 && moment.frame <= 35){
    btn1.style.opacity = 1;
    btn1.style.pointerEvents = 'auto';
  } else{
    btn1.style.opacity = 0;
    btn1.style.pointerEvents = 'none';
  }

  if(moment.frame >= 2 && moment.frame <= 35){
    btn2.style.opacity = 1;
    btn2.style.pointerEvents = 'auto';
  } else{
    btn2.style.opacity = 0;
    btn2.style.pointerEvents = 'none';
  }

  if(moment.frame >= 2 && moment.frame <= 35){
    btn3.style.opacity = 1;
    btn3.style.pointerEvents = 'auto';
  } else{
    btn3.style.opacity = 0;
    renders.style.pointerEvents = 'none';
  }btn3
  //---------------Start buttons---------------//


  
  //---------------Renders---------------//
  if(moment.frame >= 65 && moment.frame <= 88){
    renders.style.opacity = 1;
    renders.style.pointerEvents = 'auto';
  } else{
    renders.style.opacity = 0;
    renders.style.pointerEvents = 'none';
  }
  //---------------Renders---------------//



  //---------------Figurines---------------//
  if(moment.frame >= 150 && moment.frame <= 180){
    figurines.style.opacity = 1;
    figurines.style.pointerEvents = 'auto';
  } else{
    figurines.style.opacity = 0;
    figurines.style.pointerEvents = 'none';
  }
  //---------------Figurines---------------//



  //---------------Helmets---------------//
  if(moment.frame >= 210 && moment.frame <= 240){
    helmets.style.opacity = 1;
    helmets.style.pointerEvents = 'auto';
  } else{
    helmets.style.opacity = 0;
    helmets.style.pointerEvents = 'none';
  }
  //---------------Helmets---------------//
}
