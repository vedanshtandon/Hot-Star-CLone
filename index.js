let movies = [
    {
        name: 'Falcon and the winter soldier',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero! fty',
        image: 'images/slider 2.PNG'
    },
    {
        name: 'loki',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 1.PNG'
    },
    {
        name: 'wanda vision',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 3.PNG'
    },
    {
        name: 'raya and the last dragon',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 4.PNG'
    },
    {
        name: 'luca',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 5.PNG'
    }
];

const contains=document.querySelector('.contains');
let sliders=[];
let slideIndex=0;



 const createSlide = () =>{
    
    if(slideIndex>=movies.length)
    {
        slideIndex=0;
    }
    console.log(slideIndex);
    // ceating a DOM element
    let slide=document.createElement('div');
    var imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h2=document.createElement('h2');
    let p=document.createElement('p');

    // attachong allelements
    imgElement.appendChild(document.createTextNode(''));
    h2.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h2);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    contains.appendChild(slide);

    //setting up image
    imgElement.src=movies[slideIndex].image;
    slideIndex++;
    

    // setting up class name
    slide.className='slider';
    content.className='slider-content';
    h2.className='movies-title';
    p.className='movies-des';
    imgElement.className='movies-img';
    
    sliders.push(slide);


    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
          30 * (sliders.length - 2)
        }px)`;
      }
 }

 for(let i=0;i<3;i++)
 {
    createSlide();
 }


 setInterval(()=>{
    createSlide();
 },5000);




 const videoCards=document.querySelectorAll('.video-cards');
 
videoCards.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video=item.children[1];
        video.play();
    })

    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    })
})




const cardContainer=document.querySelectorAll('.cards-container');
const prebtn=document.querySelectorAll('.prebtn');
const nxtbtn=document.querySelectorAll('.nxtbtn');


cardContainer.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtbtn[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth-200;
    })

    prebtn[i].addEventListener('click',()=>{
        item.scrollLeft-=containerWidth+200;
    })
})