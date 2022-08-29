import {data} from "./data.js" 

let selectedProduct=data[0];

const navItems=document.querySelectorAll('.navBottom h3')
const slideWrapper=document.querySelector('.sliderWrapper')
const imgBack = document.querySelector('.imgBack')
const productImg = document.querySelector('.productImg img')
const productTitle = document.querySelector('.productDetails h1')
const productPrice=document.querySelector('.productDetails span')
const colors = document.querySelectorAll('.color')


navItems.forEach((navItem, index)=>{
    navItem.addEventListener('click',()=>{
        selectedProduct=data[index];
        slideWrapper.style.transform=`translateX(-${100*index}vw)`
        productImg.src = selectedProduct.colors[0].image
        productTitle.textContent=selectedProduct.name
        productPrice.textContent = selectedProduct.price
        
        colors.forEach((color, index) => { 
            color.style.background = selectedProduct.colors[index].color
            color.addEventListener('click', () => {
                productImg.src=selectedProduct.colors[index].image
            })
        })
    
})
        
    })



//bay buitton handling
const bayBtn = document.querySelector('.bayBtn')
const modal = document.querySelector('.modal')

bayBtn.addEventListener('click', () => {      

    modal.style.display = "flex"
    modal.style.flexDirection = "column"
    console.log(modal.style)
})

//closing modal box

const close = document.querySelector('.close')

close.addEventListener('click', () => {
    modal.style.display="none"
})

//sizes buttons click handling
const sizes = document.querySelectorAll('.size')
sizes.forEach((size) => {
    size.addEventListener('click', () => {
        sizes.forEach((size) => {            
            size.style.background = 'wheat'    
            size.style.color='black'            
        })
        size.style.color='white'
        size.style.background='red'
    })
})

//colors buttons click handling
