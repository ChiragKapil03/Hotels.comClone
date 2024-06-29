
       const carousel= function(){
       const prevButton = document.querySelector('.prev-carousel');
        const nextButton = document.querySelector('.next-carousel');
        const carouselTracker = document.querySelector('.carousel-tracker');
        const carouselSlides = document.querySelectorAll('.carousel-slide');
        const slidesToShow = 5; 
        let slideWidth = carouselSlides[0].offsetWidth + 16; 
        let currentIndex = 0;

        function updateCarousel() {
            const maxIndex = carouselSlides.length - slidesToShow;
            const offset = currentIndex * slideWidth;
            carouselTracker.style.transform = `translateX(-${offset}px)`;

           
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex >= maxIndex;
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex -= slidesToShow;
                if (currentIndex < 0) currentIndex = 0;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', () => {
            const maxIndex = carouselSlides.length - slidesToShow;
            if (currentIndex < maxIndex) {
                currentIndex += slidesToShow;
                if (currentIndex > maxIndex) currentIndex = maxIndex;
                updateCarousel();
            }
        });

        window.addEventListener('resize', () => {
            slideWidth = carouselSlides[0].offsetWidth + 16; 
            updateCarousel();
        });

        updateCarousel(); 
       }
       carousel();
       const explore= function(){
        const prevButton = document.querySelector('.prev-explore');
         const nextButton = document.querySelector('.next-explore');
         const carouselTracker = document.querySelector('.explore-cards');
         const carouselSlides = document.querySelectorAll('.explore-card');
         const slidesToShow = 5; 
         let slideWidth = carouselSlides[0].offsetWidth + 16; 
         let currentIndex = 0;
 
         function updateCarousel() {
             const maxIndex = carouselSlides.length - slidesToShow;
             const offset = currentIndex * slideWidth;
             carouselTracker.style.transform = `translateX(-${offset}px)`;
 
            
             prevButton.disabled = currentIndex === 0;
             nextButton.disabled = currentIndex >= maxIndex;
         }
 
         prevButton.addEventListener('click', () => {
             if (currentIndex > 0) {
                 currentIndex -= slidesToShow;
                 if (currentIndex < 0) currentIndex = 0;
                 updateCarousel();
             }
         });
 
         nextButton.addEventListener('click', () => {
             const maxIndex = carouselSlides.length - slidesToShow;
             if (currentIndex < maxIndex) {
                 currentIndex += slidesToShow;
                 if (currentIndex > maxIndex) currentIndex = maxIndex;
                 updateCarousel();
             }
         });
 
         window.addEventListener('resize', () => {
             slideWidth = carouselSlides[0].offsetWidth + 16; 
             updateCarousel();
         });
 
         updateCarousel(); 
        }
        explore();
        const weekend= function(){
            const prevButton = document.querySelector('.prev-weekend');
             const nextButton = document.querySelector('.next-weekend');
             const carouselTracker = document.querySelector('.weekend-cards');
             const carouselSlides = document.querySelectorAll('.weekend-card');
             const slidesToShow = 4; 
             let slideWidth = carouselSlides[0].offsetWidth + 16; 
             let currentIndex = 0;
     
             function updateCarousel() {
                 const maxIndex = carouselSlides.length - slidesToShow;
                 const offset = currentIndex * slideWidth;
                 carouselTracker.style.transform = `translateX(-${offset}px)`;
     
                
                 prevButton.disabled = currentIndex === 0;
                 nextButton.disabled = currentIndex >= maxIndex;
             }
     
             prevButton.addEventListener('click', () => {
                 if (currentIndex > 0) {
                     currentIndex -= slidesToShow;
                     if (currentIndex < 0) currentIndex = 0;
                     updateCarousel();
                 }
             });
     
             nextButton.addEventListener('click', () => {
                 const maxIndex = carouselSlides.length - slidesToShow;
                 if (currentIndex < maxIndex) {
                     currentIndex += slidesToShow;
                     if (currentIndex > maxIndex) currentIndex = maxIndex;
                     updateCarousel();
                 }
             });
     
             window.addEventListener('resize', () => {
                 slideWidth = carouselSlides[0].offsetWidth + 16; 
                 updateCarousel();
             });
     
             updateCarousel(); 
            }
            weekend();
            const unique= function(){
                const prevButton = document.querySelector('.prev-unique');
                 const nextButton = document.querySelector('.next-unique');
                 const carouselTracker = document.querySelector('.unique-cards');
                 const carouselSlides = document.querySelectorAll('.unique-card');
                 const slidesToShow = 4; 
                 let slideWidth = carouselSlides[0].offsetWidth + 16; 
                 let currentIndex = 0;
         
                 function updateCarousel() {
                     const maxIndex = carouselSlides.length - slidesToShow;
                     const offset = currentIndex * slideWidth;
                     carouselTracker.style.transform = `translateX(-${offset}px)`;
         
                    
                     prevButton.disabled = currentIndex === 0;
                     nextButton.disabled = currentIndex >= maxIndex;
                 }
         
                 prevButton.addEventListener('click', () => {
                     if (currentIndex > 0) {
                         currentIndex -= slidesToShow;
                         if (currentIndex < 0) currentIndex = 0;
                         updateCarousel();
                     }
                 });
         
                 nextButton.addEventListener('click', () => {
                     const maxIndex = carouselSlides.length - slidesToShow;
                     if (currentIndex < maxIndex) {
                         currentIndex += slidesToShow;
                         if (currentIndex > maxIndex) currentIndex = maxIndex;
                         updateCarousel();
                     }
                 });
         
                 window.addEventListener('resize', () => {
                     slideWidth = carouselSlides[0].offsetWidth + 16; 
                     updateCarousel();
                 });
         
                 updateCarousel(); 
                }
                unique();