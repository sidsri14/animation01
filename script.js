const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


gsap.from("a",{
    stagger: .1,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0

})

Shery.textAnimate("#headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from("#hero",{
    y: 20,
    stagger: .2,
    opacity: 0,
    ease: Power3,
    duration: 1.6
  })

  Shery.imageEffect("#ephemeral img",{
    style: 4,
    config: {"uColor":{"value":true},"uSpeed":{"value":0.56,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.78,"range":[0,5]},"uFrequency":{"value":3.72,"range":[0,10]},"geoVertex":{"range":[1,64],"value":36.93},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500109366742611},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.36,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

  })

  Shery.imageEffect("#susimg img, #synergy img, #harmony img",{
    style: 5,
    
    config: {"a":{"value":1.49,"range":[0,30]},"b":{"value":-0.92,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6499683261819346},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.17,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

  })
   
    Shery.imageEffect("#bimg", {
      style: 4, 
      gooey: true, 
      config: {"uColor":{"value":false},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.65,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":2.04},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.7647371178330755},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":32}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
      
    })
    




  document.querySelector("#txt2 ")
  .addEventListener("mouseover",function (){
         gsap.to("#hero5 video",{
             opacity: 1,
             duration: 1.5,
             ease: Power4
    
         })
      
       })   

  document.querySelector("#txt2 ")
  .addEventListener("mouseleave",function (){
         gsap.to("#hero5 video",{
             opacity: 0,
             duration: 1.5,
             ease: Power4
    
         })
      
       })   
