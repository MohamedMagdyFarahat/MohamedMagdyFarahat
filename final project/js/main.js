const cartNum = document.querySelector(".header .cart-num");
let customerName=document.getElementById("customerName")
let customerNumber=document.getElementById("customernumber")
let customerEmail=document.getElementById("exampleFormControlInput2")
let customerAdderss=document.getElementById("exampleForm")
let customerBtn=document.getElementById("customerBtn")
const favonum = document.querySelector(".header .favo-num");
let data=JSON.parse(localStorage.getItem("ourProduct"))||[];
let xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","main.json")
xmlhttp.send();
xmlhttp.addEventListener("readystatechange",function(){
    if(this.readyState==4 && this.status==200){
 data=JSON.parse(xmlhttp.response);
        
        localStorage.setItem("ourProduct",JSON.stringify(data))
        HotCatrgory();
        Product(); 
        cartPush ();
    }
  
    // console.log(JSON.parse(localStorage.getItem("sandok"))) customerBtn

})

console.log(customerBtn);
 
//  customerBtn.addEventListener("click",function(){
//   document.getElementById("biss").innerHTML=`
// <h1>Thank You ${customerName.value}</h1>
//     <p>Your product will arrive after 48h </p>
//     <p>total price = </p>
//     <button class="btn btn-dark"> ok</button> 
// `
//  })


function HotCatrgory(){
   let containerBox=""
   for(let i = 0; i < 3; i++ ){
    containerBox+=`
    <div class="col-lg-4 col-md-6 parent"  data-id="${data[i].id}">
      <div class="card">
        <div class="overlay">
          <div class="btnss">
            <a><i class="shop fa-solid fa-cart-flatbed"></i></a>
          <a class="red"><i  onclick="favoriteProduct(${data[i].id})" class="fa-solid fa-heart"></i></a>
          </div>
        </div>
        <img src="${data[i].source_url}" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[i].price}EGP</h5>
          <p class="card-text">${data[i].title}</p>
        </div>
      </div>
    </div>
    
    `
   }
   document.getElementById("HotCategory").innerHTML=containerBox;
} 
function Product(){
    let containerProduct=""
    for(let i = 80; i < data.length; i++ ){
     containerProduct+=`
     <div  class="col-lg-4 col-md-6 parent"  data-id="${data[i].id}">
       <div class="card">
       <span class="discount-num">${data[i].discount} %</span>
         <div class="overlay">
           <div class="btnss">
             <a><i    class="shop fa-solid fa-cart-flatbed"></i></a>
           <a class="red"><i  onclick="favoriteProduct(${data[i].id})" class="fa-solid fa-heart"></i></a>
           </div>
         </div>
         <img src="${data[i].source_url}" alt="...">
         <div class="card-body">
     
         <span class="discount-num">${data[i].discount} %</span>
         <del> <h5  class="card-title2">${data[i].price2} EGP
         </h5></del>
          
           <h5 class="card-title">${data[i].price} EGP</h5>
           <p class="card-text Dell">${data[i].title}</p>
         </div>
       </div>
     </div>
     
     `
    }
    document.getElementById("Product").innerHTML=containerProduct;

 } 
 let cart ;

 if(localStorage.getItem("sandok")==null){
cart=[];
 }
 else{
  cart=JSON.parse(localStorage.getItem('sandok'));
  cartNum.textContent = cart.length;
 }
 function cartPush (){
let buttomShop=document.querySelectorAll(".shop")
// console.log(buttomShop)
buttomShop.forEach(btn =>{
  btn.addEventListener("click",function(){
let idCart=btn.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.id;
let targetCArt=data.find(Element =>{
  return  Element.id==idCart

})
if(targetCArt.quntaty==undefined){
  cart.push(targetCArt)
  cartNum.textContent = cart.length;
  targetCArt.quntaty=1;
  console.log(+targetCArt.price);

}
else{
  targetCArt.quntaty++
    targetCArt.totalPrice = targetCArt.quntaty * targetCArt.price
}
console.log(cart);
localStorage.setItem("sandok",JSON.stringify(cart))

  })
})
       console.log(cart[cart.length-1])
 
 }
 
let favoriteCart;

if(localStorage.getItem("favoriteSandok")==null){
  favoriteCart=[];
   }
   else{
    favoriteCart=JSON.parse(localStorage.getItem('favoriteSandok'));
    favonum.textContent = favoriteCart.length;
   }
   

function favoriteProduct(id){
  favoriteCart.push(data[id-1])
  favonum.textContent = favoriteCart.length;
  console.log(favoriteCart[favoriteCart.length-1].title)
  console.log(id);
  localStorage.setItem("favoriteSandok",JSON.stringify(favoriteCart))
 
}

//  function productCart(){
//   for (let i = 0; i < cart.length; i++) {
// console.log(cart[i])
    
//   }
//  }


//  productCart()











window.onscroll=function(){
    if(scrollY>250){
        header.classList.add("headerFixed")
        backToTop.classList.add("showBtn")
    }
    else{
        header.classList.remove("headerFixed")
        backToTop.classList.remove("showBtn")
    }
}
backToTop.addEventListener("click",function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})

