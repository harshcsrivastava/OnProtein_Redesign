/*=============================AYUSH===========================*/

gsap.to("#product #content",{
    transform:"translateX(-199.9%)",
    scrollTrigger:{
        trigger:"#product",
        scroller:"body",
        start:"top 0%",
        end:"+=3000",
        scrub:1,
        pin:true
    }
})
// for video slider navigation
const btns=document.querySelectorAll(".nav-btn");
const slides=document.querySelectorAll(".video-slide");
const contents=document.querySelectorAll(".content");
var sliderNav=function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    });

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    contents.forEach((content)=>{
        content.classList.remove("active");
    });
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}
btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        sliderNav(i);
    });
});

gsap.from(".energy-page .orange",{
    // transform:"translateX(-199.9%)",
    x:-800,
    duration:1,
    scrollTrigger:{
        trigger:".energy-page .orange",
        scroller:"body",
        start:"top 100%",
        end:"top 20 %" ,
        // markers:true,
        // end:"+=1000",
        scrub:2,
        // pin:true
    }
})
gsap.from(".energy-page .pineapple",{
    // transform:"translateX(-199.9%)",
    x:1000,
    duration:1,
    scrollTrigger:{
        trigger:".energy-page .pineapple",
        scroller:"body",
        start:"top 100%",
        end:"top 30 %" ,
        // markers:true,
        // end:"+=1000",
        scrub:2,
        // pin:true
    }
})

gsap.from(".pineapple img",{
    // transform:"translateX(-199.9%)",
    x:1000,
    rotate:360,
    duration:2,
    scrollTrigger:{
        trigger:".pineapple img",
        scroller:"body",
        start:"top 100%",
        end:"top 30 %" ,
        // markers:true,
        // end:"+=1000",
        scrub:2,
        // pin:true
    }
})
gsap.from(".orange img",{
    // transform:"translateX(-199.9%)",
    x:-800,
    rotate:-360,
    duration:2,
    scrollTrigger:{
        trigger:".orange img",
        scroller:"body",
        start:"top 100%",
        end:"top 30 %" ,
        // markers:true,
        // end:"+=1000",
        scrub:2,
        // pin:true
    }
})


/*=============================ARSALAN===========================*/


/*=============================loading page animation===========================*/

window.onload = function() {
    
    const changes = [
        { text: 'ISOLATE', color: 'yellow', buttonBgColor: 'yellow', buttonTextColor: 'black' },
        { text: 'MASS', color: 'green', buttonBgColor: 'green', buttonTextColor: 'white' },
        { text: 'CHOCOLATE', color: 'red', buttonBgColor: 'red', buttonTextColor: 'white' }
    ];

    const textColElement = document.getElementById('text_col');
    const shopButton = document.getElementById('shop_button');

    function changeTextAndButton() {
        let index = 0;

        setInterval(() => {
            const currentChange = changes[index];

            textColElement.textContent = currentChange.text;
            textColElement.style.color = currentChange.color;

            shopButton.style.backgroundColor = currentChange.buttonBgColor;
            shopButton.style.color = currentChange.buttonTextColor;

            index = (index + 1) % changes.length;
        }, 1500); 
    }


    gsap.set("#product1", { zIndex: 3 });
    gsap.set("#product2", { y: "100%", zIndex: 2 });
    gsap.set("#product3", { x: "100%", zIndex: 1 });

    function animateProducts() {
        gsap.timeline({ repeat: -1, repeatDelay: 2 })
            .to("#product1", { duration: 1.5, y: "-100%", rotation: 360, ease: "power1.inOut" })
            .to("#product1", { duration: 0.1, opacity: 0 })

            .fromTo("#product2", { y: "100%" }, { duration: 1.5, y: "0%", ease: "power1.inOut" }, "-=1.4")
            .to("#product2", { duration: 1.5, y: "-100%", rotation: 360, ease: "power1.inOut" })
            .to("#product2", { duration: 0.1, opacity: 0 })

            .fromTo("#product3", { x: "100%" }, { duration: 1.5, x: "0%", ease: "power1.inOut" }, "-=1.4")
            .to("#product3", { duration: 1.5, y: "-100%", rotation: 360, ease: "power1.inOut" })
            .to("#product3", { duration: 0.1, opacity: 0 })

            .set("#product1", { y: "100%", rotation: 0, opacity: 1 })
            .set("#product2", { y: "100%", rotation: 0, opacity: 1 })
            .set("#product3", { x: "100%", rotation: 0, opacity: 1 });
    }

    changeTextAndButton();
    animateProducts();
};






  /*================================navbar===========================================*/
  const nav = document.querySelector('nav');
  window.addEventListener("scroll",function(){
    if(this.document.documentElement.scrollTop >20){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
  })

   /*========================================recipe=========================================*/
   document.querySelector("#ftext button")
   .addEventListener("mouseover", function(){
    gsap.to(".recipe_video video",{
        opacity:1,
        duration:1,
        ease:Power4
    })

    
   })

   document.querySelector("#ftext button")
   .addEventListener("mouseleave", function(){
    gsap.to(".recipe_video video",{
        opacity:0,
        duration:1,
        ease:Power4
    })
   })





/*=============================infinite text scroller===========================*/

   window.addEventListener("wheel",function(dets){
    if(dets.deltaY > 0){
        gsap.to(".marque",{
            transform:"translateX(-200%)",
            repeat:-1,
            duration:4,
            ease:"none"
        })

        gsap.to(".marque img",{
            rotate:180
        })
    }else{
        gsap.to(".marque",{
            transform:"translateX(0)",
            repeat:-1,
            duration:4,
            ease:"none"
        })
        gsap.to(".marque img",{
            rotate:0
        })

    }
   })
