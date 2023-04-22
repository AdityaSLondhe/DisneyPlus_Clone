let movies=[
    {
        name:"Falcon and the Winter Soldier",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid magni eaque iure eligendi omnis facilis cum, libero vel voluptatum aliquam!",
        image:"images/slider 2.png"
    },
    {
        name:"Loki",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid magni eaque iure eligendi omnis facilis cum, libero vel voluptatum aliquam!",
        image:"images/slider 1.png"
    },
    {
        name:"W anda Vision",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid magni eaque iure eligendi omnis facilis cum, libero vel voluptatum aliquam!",
        image:"images/slider 3.png"
    },
    {
        name:"Raya and the Last Dragon",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid magni eaque iure eligendi omnis facilis cum, libero vel voluptatum aliquam!",
        image:"images/slider 4.png"
    },
    {
        name:"Luca",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid magni eaque iure eligendi omnis facilis cum, libero vel voluptatum aliquam!",
        image:"images/slider 5.png"
    }
];
const carousel =document.querySelector(".carousel");
let sliders=[];

let slideIndex=0; // Track the current slide

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    // create DOM elements 
    let slide=document.createElement("div");
    let imageElement=document.createElement("img");
    let content=document.createElement("div");
    let h1=document.createElement("h1");
    let p=document.createElement("p");

    // Attaching all elements
    imageElement.appendChild(document.createTextNode("")); 
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].description));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imageElement);
    carousel.appendChild(slide);

    // setting images
    imageElement.src=movies[slideIndex].image;
    slideIndex++;

    // setting elements classnames
    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-description";

    sliders.push(slide);

    if(sliders.length){
        sliders
        sliders[0].style.marginLeft= `calc(-${100 * (sliders.length - 2)}% - ${30*(sliders.length-2)
        }px)`;
    }
};

for(let i=0;i<3;i++){
    createSlide();
}
setInterval(()=>{
    createSlide();
},3000);

// Video cards
const videoCards=[...document.querySelectorAll(".video-card")];

videoCards.forEach(item =>{
    item.addEventListener("mouseover",() =>{
        let video =item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave",()=>{
        let video=item.children[1];
        video.pause();
    });
});

// card-sliders
let  cardContainers=[...document.querySelectorAll(".card-container")];
let  preBtns=[...document.querySelectorAll(".pre-btn")];
let  nxtBtns=[...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtBtns[i].addEventListener("click",()=>{
        item.scrollLeft += containerWidth-200;
    });

    preBtns[i].addEventListener("click",()=>{
        item.scrollLeft -=containerWidth-200;
    });
});