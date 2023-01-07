//ads-section1
let myAdsContainer = document.querySelector("#myAdsBox");
let myAdsImgCover = document.querySelector("#myAdsImg1");
let myAdsImg1 = document.querySelector(".myAdsImg2");
let myAdsImg2 = document.createElement("img");
let myAdsImg3 = document.createElement("img");
let myAdsImg4 = document.createElement("img");
myAdsImg2.src = "https://cdn.cody.mn/img/147627/1300x0xwebp/gift-card-banner-2.jpg?h=0b76a8611491ebdb6d457fdccd12fbe4c9d2cdf5";
myAdsImg3.src = "https://cdn.cody.mn/img/147893/1300x0xwebp/gift-card-component-3.jpg?h=0b76a8611491ebdb6d457fdccd12fbe4c9d2cdf5";
myAdsImg4.src ="https://cdn.cody.mn/img/147892/1300x0xwebp/gift-card-component-2.jpg?h=0b76a8611491ebdb6d457fdccd12fbe4c9d2cdf5";



function myAdsFunc(){
    if(myAdsContainer.contains(myAdsImg1) == true){
        myAdsContainer.removeChild(myAdsImg1);
        myAdsContainer.appendChild(myAdsImg2).style = "width: 100%; position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: -1";
    }else if(myAdsContainer.contains(myAdsImg2) == true){
        myAdsContainer.removeChild(myAdsImg2);
        myAdsContainer.appendChild(myAdsImg3).style = "width: 100%; position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: -1";
    }else if(myAdsContainer.contains(myAdsImg3) == true){
        myAdsContainer.removeChild(myAdsImg3);
        myAdsContainer.appendChild(myAdsImg4).style = "width: 100%; position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: -1";
    }else if(myAdsContainer.contains(myAdsImg4) == true){
        myAdsContainer.removeChild(myAdsImg4);
        myAdsContainer.appendChild(myAdsImg1);
    }
}


function myAdsChange(){
    setTimeout( myAdsFunc , 3000);
}


function myAdsStop(){
   clearTimeout(myAdsChange);
}


myAdsContainer.addEventListener("mouseover" , ()=>{myAdsStop()})
myAdsContainer.addEventListener("mouseout" , ()=>{myAdsChange()})





//holidays-special-gift-section
let holidayBox = document.querySelector(".holidays-special-header");
let holidayImg = document.getElementById("new-year-img");
let holidayImg2 = document.createElement("img");
holidayImg2.src = "https://cdn.cody.mn/img/147800/2600x0xwebp/jinjil_chimeglel_1-100.jpg?h=09e579afc56e5e46bd5ca690e6dba4642e271098";

function myHolidaysImg(){
    setInterval(myHolidaysImgChange, 2000);
}

myHolidaysImg();

function myHolidaysImgChange(){
    if(holidayBox.contains(holidayImg) == true){
        holidayBox.removeChild(holidayImg);
        holidayBox.appendChild(holidayImg2).style = "width: 100%;";
        }else if(holidayBox.contains(holidayImg) == false){
        holidayBox.removeChild(holidayImg2).style = "width: 100%;";
        holidayBox.appendChild(holidayImg);
    }
}



//holidays-special-items section
//copy bolno
var swiper = new Swiper(".card-slider", {
    slidesPerView: 5,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });








//holidays-special-gift-man

var swiper = new Swiper(".myCardSlider", {
  slidesPerView: 5,
  spaceBetween: 15,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//something-interesting-section

var swiper = new Swiper(".Si-card-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


