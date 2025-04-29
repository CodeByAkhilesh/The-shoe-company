function heroSectionAnimation() {
  let tl= gsap.timeline();

tl.from(".navbar", {
    height: "0%",
    duration: 0.5,
  });
  tl.from(".navbar .logo", {
    x: "-100%",
    duration: 0.8,
    opacity: 0,
    ease: "power2.out"
  });
  tl.from(".navbar ul li", {
    y: "-100%",
    duration: 0.5,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2
  });
  tl.from(".hadding-container h1", {
    x: "-100%",
    duration: 0.5,
    opacity: 0,
    stagger: 0.3    ,
    ease: "power2.out"
  });
  tl.from("#shoe-main-img",{
    x: "150%",
    duration: 0.5,
    rotate: 360,
  });
};

function howItWorkAnimation(){
  let tl2= gsap.timeline({
    scrollTrigger: {
        scrooller: "body",
        trigger: ".page-2",
        start: "top 50%",
      },
});

  tl2.from(".section-2-hedding", {
    y: "100%",
    duration: 0.5,
    opacity: 0,
  });

  tl2.from(".detail-shoe-img",{
    y: "-100%",
    opacity: 0,
  })
  tl2.from(".arrow-img-1",{
    left: "-100%",
    rotate: 660,
    opacity: 0,
  })
  tl2.from(".detail-first",{
    left: "-100%",
    opacity: 0,
  })
  tl2.from(".arrow-img-2",{
    right: "-100%",
    rotate: 360,
    opacity: 0,
  })
  tl2.from(".detail-second",{
    right: "-100%",
    opacity: 0,
  })
  tl2.from(".arrow-img-3",{
    top: "100%",
    rotate: 360,
    opacity: 0,
  })
  tl2.from(".detail-third",{
    left: "-100%",
    opacity: 0,
  })
};

  function aboutSectionAnimation(){
    let tl3= gsap.timeline({
      scrollTrigger: {
          scroller: "body",
          trigger: ".about",
          start: "top 50%",
        },
  });
  
  tl3.from(".about-png",{
      x: "-100%",
      duration: 1,
  });
  
  tl3.from(".about h2",{
      x: "200%",
      duration: 0.2,
  });
  tl3.from(".about p",{
      x: "200%",
      duration: 0.2,
      stagger: 0.1,
  });
  };

function testimonialSectionAnimation(){
  let tl4 = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: "#testimonials",
        start: "top 50%",
      },
});

tl4.from(".testimonials-main-heading h2",{
    y: "100%",
    opacity: 0,
})

tl4.from("#testimonials img",{
    y: "50%",
    opacity: 0,
});

tl4.from("#testimonials p",{
    y: "50%",
    opacity: 0,
});
};

function contectSectionAnimation(){
  let tl5= gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: "#contact",
        start: "top 50%",
      },
  });
  
  tl5.from("#contact h2", {
    x: "-100%",
    opacity: 0,
    duration: 0.5,
  });
  
  tl5.from(".address", {
    x: "-100%",
    duration: 0.1,
    opacity: 0,
  });
  tl5.from(".social-media a", {
    x: "-100%",
    opacity: 0,
    stagger: 0.2,
  });
  tl5.from(".map", {
    x: "100%",
    opacity: 0,
  });
};


heroSectionAnimation();
howItWorkAnimation();
aboutSectionAnimation();
testimonialSectionAnimation();
contectSectionAnimation();
