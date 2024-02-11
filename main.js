const myDiv = document.getElementById("delay");
setTimeout(function() {
  myDiv.style.display ='block';
}, 6000);

function addClass(elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("mouseover", function (e) {
      const current = this;
      for (let i = 0; i < elem.length; i++) {
        if (current !== elem[i]) {
          elem[i].classList.remove("isActive");
          elem[i].classList.add("notActive");
        } else {
          current.classList.add("isActive");
          current.classList.remove("notActive");
        }
      }
      e.preventDefault();
    });
  }
}
addClass(document.querySelectorAll(".link"));

const textContainer = document.getElementById("text-container");
    const texts = ["FRONT-END DEVELOPER","BACK-END DEVELOPER","WEB APP DEVELOPER","SOFTWARE DEVELOPER","UI/UX DESIGNER","FULL STACK WEB DEVELOPER","YOUTUBER"];
    let currentTextIndex = 0;

    function changeTextWithDistortEffect() {
      const currentText = texts[currentTextIndex];

      textContainer.innerHTML = `<span class="distort">${currentText}</span>`;

      currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
    setInterval(changeTextWithDistortEffect,2500);

    const buttons = document.querySelectorAll(".cardpf-buttons button");
    const sections = document.querySelectorAll(".cardpf-section");
    const cardpf = document.querySelector(".cardpf");
    
    const handleButtonClick = e => {
      const targetSection = e.target.getAttribute("data-section");
      const section = document.querySelector(targetSection);
      targetSection !== "#about" ?
      cardpf.classList.add("is-active") :
      cardpf.classList.remove("is-active");
      cardpf.setAttribute("data-state", targetSection);
      sections.forEach(s => s.classList.remove("is-active"));
      buttons.forEach(b => b.classList.remove("is-active"));
      e.target.classList.add("is-active");
      section.classList.add("is-active");
    };
    
    buttons.forEach(btn => {
      btn.addEventListener("click", handleButtonClick);
    });

    console.clear();

    const { imagesLoaded } = window;
    
    const buttonpr = {
      prev: document.querySelector(".btn--left"),
      next: document.querySelector(".btn--right"),
    };
    const cardprsContainerEl = document.querySelector(".cardprs__wrapper");
    const appBgContainerEl = document.querySelector(".app__bg");
    
    const cardprInfosContainerEl = document.querySelector(".info__wrapper");
    
    buttonpr.next.addEventListener("click", () => swapcardprs("right"));
    
    buttonpr.prev.addEventListener("click", () => swapcardprs("left"));
    
    function swapcardprs(direction) {
      const currentcardprEl = cardprsContainerEl.querySelector(".current--cardpr");
      const previouscardprEl = cardprsContainerEl.querySelector(".previous--cardpr");
      const nextcardprEl = cardprsContainerEl.querySelector(".next--cardpr");
        const prepreviouscardprEl = cardprsContainerEl.querySelector(".preprevious--cardpr");
      const pprepreviouscardprEl = cardprsContainerEl.querySelector(".ppreprevious--cardpr");
        const ppprepreviouscardprEl = cardprsContainerEl.querySelector(".pppreprevious--cardpr");
      const nexnextcardprEl = cardprsContainerEl.querySelector(".nexnext--cardpr");
      const nnexnextcardprEl = cardprsContainerEl.querySelector(".nnexnext--cardpr");
      const nnnexnextcardprEl = cardprsContainerEl.querySelector(".nnnexnext--cardpr");
    
    
      const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
      const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
      const nextBgImageEl = appBgContainerEl.querySelector(".next--image");
      const prepreviousBgImageEl = appBgContainerEl.querySelector(".preprevious--image");
      const pprepreviousBgImageEl = appBgContainerEl.querySelector(".ppreprevious--image");
      const ppprepreviousBgImageEl = appBgContainerEl.querySelector(".pppreprevious--image");
      const nexnextBgImageEl = appBgContainerEl.querySelector(".nexnext--image");
      const nnexnextBgImageEl = appBgContainerEl.querySelector(".nnexnext--image");
      const nnnexnextBgImageEl = appBgContainerEl.querySelector(".nnnexnext--image");
    
      changeInfo(direction);
      swapcardprsClass();
    
      removecardprEvents(currentcardprEl);
    
      function swapcardprsClass() {
        currentcardprEl.classList.remove("current--cardpr");
        previouscardprEl.classList.remove("previous--cardpr");
        nextcardprEl.classList.remove("next--cardpr");
        prepreviouscardprEl.classList.remove("preprevious--cardpr");
        pprepreviouscardprEl.classList.remove("ppreprevious--cardpr");
        nexnextcardprEl.classList.remove("nexnext--cardpr");
        nnexnextcardprEl.classList.remove("nnexnext--cardpr");
        nnnexnextcardprEl.classList.remove("nnnexnext--cardpr");
        ppprepreviouscardprEl.classList.remove("pppreprevious--cardpr");
    
        currentBgImageEl.classList.remove("current--image");
        previousBgImageEl.classList.remove("previous--image");
        nextBgImageEl.classList.remove("next--image");
        prepreviousBgImageEl.classList.remove("preprevious--image");
        pprepreviousBgImageEl.classList.remove("ppreprevious--image");
        nexnextBgImageEl.classList.remove("nexnext--image");
        nnexnextBgImageEl.classList.remove("nnexnext--image");
        nnnexnextBgImageEl.classList.remove("nnnexnext--image");
        ppprepreviousBgImageEl.classList.remove("pppreprevious--image");
        
    
        currentcardprEl.style.zIndex = "50";
        currentBgImageEl.style.zIndex = "-2";
    
        if (direction === "right") {
          
    
          nextBgImageEl.style.zIndex = "-1";
    
          currentcardprEl.classList.add("previous--cardpr");
          previouscardprEl.classList.add("preprevious--cardpr");
          nextcardprEl.classList.add("current--cardpr");
          prepreviouscardprEl.classList.add("ppreprevious--cardpr");
          pprepreviouscardprEl.classList.add("pppreprevious--cardpr");
          ppprepreviouscardprEl.classList.add("nnnexnext--cardpr");
                nexnextcardprEl.classList.add("next--cardpr");
                nnexnextcardprEl.classList.add("nexnext--cardpr");
                nnnexnextcardprEl.classList.add("nnexnext--cardpr");
        
    
          currentBgImageEl.classList.add("previous--image");
          previousBgImageEl.classList.add("preprevious--image");
          nextBgImageEl.classList.add("current--image");
          prepreviousBgImageEl.classList.add("ppreprevious--image");
          pprepreviousBgImageEl.classList.add("pppreprevious--image");
          ppprepreviousBgImageEl.classList.add("nnnexnext--image");
          nexnextBgImageEl.classList.add("next--image");
          nnexnextBgImageEl.classList.add("nexnext--image");
          nnnexnextBgImageEl.classList.add("nnexnext--image");
    
        } 
        else if (direction === "left") {
          
    
          previousBgImageEl.style.zIndex = "-2";
    
          currentcardprEl.classList.add("next--cardpr");
          previouscardprEl.classList.add("current--cardpr");
          nextcardprEl.classList.add("nexnext--cardpr");
          prepreviouscardprEl.classList.add("previous--cardpr");
          pprepreviouscardprEl.classList.add("preprevious--cardpr");
          ppprepreviouscardprEl.classList.add("ppreprevious--cardpr");
                nexnextcardprEl.classList.add("nnexnext--cardpr");
                nnexnextcardprEl.classList.add("nnnexnext--cardpr");
                nnnexnextcardprEl.classList.add("pppreprevious--cardpr");
        
          
          
    
    
          currentBgImageEl.classList.add("next--image");
          previousBgImageEl.classList.add("current--image");
          nextBgImageEl.classList.add("nexnext--image");
          prepreviousBgImageEl.classList.add("previous--image");
          pprepreviousBgImageEl.classList.add("preprevious--image");
          ppprepreviousBgImageEl.classList.add("ppreprevious--image");
                nexnextBgImageEl.classList.add("nnexnext--image");
          nnexnextBgImageEl.classList.add("nnnexnext--image");
          nnnexnextBgImageEl.classList.add("pppreprevious--image");
        }
      }
    }
    
    function changeInfo(direction) {
      let currentInfoEl = cardprInfosContainerEl.querySelector(".current--info");
      let previousInfoEl = cardprInfosContainerEl.querySelector(".previous--info");
      let nextInfoEl = cardprInfosContainerEl.querySelector(".next--info");
      let prepreviousInfoEl = cardprInfosContainerEl.querySelector(".preprevious--info");
      let pprepreviousInfoEl = cardprInfosContainerEl.querySelector(".ppreprevious--info");
      let ppprepreviousInfoEl = cardprInfosContainerEl.querySelector(".pppreprevious--info");
      let nexnextInfoEl = cardprInfosContainerEl.querySelector(".nexnext--info");
      let nnexnextInfoEl = cardprInfosContainerEl.querySelector(".nnexnext--info");
      let nnnexnextInfoEl = cardprInfosContainerEl.querySelector(".nnnexnext--info");
    
      gsap.timeline()
        .to([buttonpr.prev, buttonpr.next], {
        duration: 0.2,
        opacity: 0.5,
        pointerEvents: "all",
      })
        .to(
        currentInfoEl.querySelectorAll(".text"),
        {
          duration: 0.4,
          stagger: 0.1,
          translateY: "-120px",
          opacity: 0,
        },
        "-="
      )
        .call(() => {
        swapInfosClass(direction);
      })
        .call(() => initcardprEvents())
        .fromTo(
        direction === "right"
        ? nextInfoEl.querySelectorAll(".text")
        : previousInfoEl.querySelectorAll(".text")
          ,
        {
          opacity: 0,
          translateY: "40px",
        },
        {
          duration: 0.4,
          stagger: 0.1,
          translateY: "0px",
          opacity: 1,
        }
      )
        .to([buttonpr.prev, buttonpr.next], {
        duration: 0.2,
        opacity: 1,
        pointerEvents: "all",
      });
    
      function swapInfosClass() {
        currentInfoEl.classList.remove("current--info");
        previousInfoEl.classList.remove("previous--info");
        nextInfoEl.classList.remove("next--info");
        prepreviousInfoEl.classList.remove("preprevious--info");
        pprepreviousInfoEl.classList.remove("ppreprevious--info");
        ppprepreviousInfoEl.classList.remove("pppreprevious--info");
        nexnextInfoEl.classList.remove("nexnext--info");
        nnexnextInfoEl.classList.remove("nnexnext--info");
        nnnexnextInfoEl.classList.remove("nnnexnext--info");
    
    
        if (direction === "right") {
          currentInfoEl.classList.add("previous--info");
          nextInfoEl.classList.add("current--info");
          previousInfoEl.classList.add("preprevious--info");
          prepreviousInfoEl.classList.add("ppreprevious--info");
          pprepreviousInfoEl.classList.add("pppreprevious--info");
          ppprepreviousInfoEl.classList.add("nnnexnext--info");
                nexnextInfoEl.classList.add("next--info");
                nnexnextInfoEl.classList.add("nexnext--info");
                nnnexnextInfoEl.classList.add("nnexnext--info");
          
        
    
    
    
    
        } else if (direction === "left") {
          currentInfoEl.classList.add("next--info");
          nextInfoEl.classList.add("nexnext--info");
          previousInfoEl.classList.add("current--info");
          prepreviousInfoEl.classList.add("previous--info");
          pprepreviousInfoEl.classList.add("preprevious--info");
          ppprepreviousInfoEl.classList.add("ppreprevious--info");
                nexnextInfoEl.classList.add("nnexnext--info");
                nnexnextInfoEl.classList.add("nnnexnext--info");
                nnnexnextInfoEl.classList.add("pppreprevious--info");
        }
      }
    }
    
    function updatecardpr(e) {
      const cardpr = e.currentTarget;
      const box = cardpr.getBoundingClientRect();
      const centerPosition = {
        x: box.left + box.width / 2,
        y: box.top + box.height / 2,
      };
      let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
      gsap.set(cardpr, {
        "--current-cardpr-rotation-offset": `${angle}deg`,
      });
      const currentInfoEl = cardprInfosContainerEl.querySelector(".current--info");
      gsap.set(currentInfoEl, {
        rotateY: `${angle}deg`,
      });
    }
    
    function resetcardprTransforms(e) {
      const cardpr = e.currentTarget;
      const currentInfoEl = cardprInfosContainerEl.querySelector(".current--info");
      gsap.set(cardpr, {
        "--current-cardpr-rotation-offset": 0,
      });
      gsap.set(currentInfoEl, {
        rotateY: 0,
      });
    }
    
    function initcardprEvents() {
      const currentcardprEl = cardprsContainerEl.querySelector(".current--cardpr");
      currentcardprEl.addEventListener("pointermove", updatecardpr);
      currentcardprEl.addEventListener("pointerout", (e) => {
        resetcardprTransforms(e);
      });
    }
    
    initcardprEvents();
    
    function removecardprEvents(cardpr) {
      cardpr.removeEventListener("pointermove", updatecardpr);
    }
    
    function init() {
    
      let tl = gsap.timeline();
    
      tl.to(cardprsContainerEl.children, {
        delay: 0.15,
        duration: 0.5,
        stagger: {
          ease: "power4.inOut",
          from: "right",
          amount: 0.1,
        },
        "--cardpr-translateY-offset": "0%",
      })
        .to(cardprInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
        delay: 0.5,
        duration: 0.4,
        stagger: 0.1,
        opacity: 1,
        translateY: 0,
      })
        .to(
        [buttonpr.prev, buttonpr.next],
        {
          duration: 0.4,
          opacity: 1,
          pointerEvents: "all",
        },
        "-=0.4"
      );
    }
    
    const waitForImages = () => {
      const images = [...document.querySelectorAll("img")];
      const totalImages = images.length;
      let loadedImages = 0;
      const loaderEl = document.querySelector(".loader span");
    
      
    
      images.forEach((image) => {
        imagesLoaded(image, (instance) => {
          if (instance.isComplete) {
            loadedImages++;
            let loadProgress = loadedImages / totalImages;
    
            gsap.to(loaderEl, {
              duration: 1,
              scaleX: loadProgress,
              backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
            });
    
            if (totalImages == loadedImages) {
              gsap.timeline()
                .to(".loading__wrapper", {
                duration: 0.2,
                opacity: 0,
                pointerEvents: "none",
              })
                .call(() => init());
            }
          }
        });
      });
    };
    
    waitForImages();
    
    function redirectToLink(link) {
      window.location.href = link;
    }
    function redirectToLink1(link) {
      window.location.href = link;
    }

    var site = site || {};
    site.window = $(window);
    site.document = $(document);
    site.Width = site.window.width();
    site.Height = site.window.height();
    


