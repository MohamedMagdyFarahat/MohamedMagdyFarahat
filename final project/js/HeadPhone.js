let first =document.getElementById("frist")
let scond =document.getElementById("second")
let third =document.getElementById("third")
let forth =document.getElementById("forth")
const cartNum = document.querySelector(".header .cart-num");
const favonum = document.querySelector(".header .favo-num");

HeadPhone
let xmlhttp4=new XMLHttpRequest();
xmlhttp4.open("GET","main.json")
xmlhttp4.send();
xmlhttp4.addEventListener("readystatechange",function(){
    if(this.readyState==4 && this.status==200){
        data=JSON.parse(xmlhttp4.response);
        console.log(data);
        HeadPhone(60,66)
        cartPush ();
    }
})



 function HeadPhone(x,y){

    let containerHeadPhone=""
    for(let i = x; i < y; i++ )
     containerHeadPhone+=`
     <div  class="col-lg-4 col-md-6 parent"  data-id="${data[i].id}">
     <div class="card">
       <div class="overlay">
         <div class="btnss">
           <a><i    class="shop fa-solid fa-cart-flatbed"></i></a>
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
    
    document.getElementById("HeadPhone").innerHTML=containerHeadPhone;

 } 
 first.addEventListener("click",function(){
    HeadPhone(60,66)
 })
 scond.addEventListener("click",function(){
    HeadPhone(66,72)
    cartPush ()
 })
 third.addEventListener("click",function(){
    HeadPhone(72,78)
 })
 forth.addEventListener("click",function(){
    HeadPhone(78,data.length)
 })

 function searchProduct(term){
  let containerHeadPhone2=""
for (let index = 60; index < 80; index++) {
if (data[index].title.toLowerCase().includes(term.toLowerCase().trim())==true ){
  containerHeadPhone2+=`
  <div  class="col-lg-4 col-md-6 parent"  data-id="${data[index].id}">
  <div class="card">
    <div class="overlay">
      <div class="btnss">
        <a><i    class="shop fa-solid fa-cart-flatbed"></i></a>
      <a class="red"><i  onclick="favoriteProduct(${data[index].id})" class="fa-solid fa-heart"></i></a>
      </div>
    </div>
    <img src="${data[index].source_url}" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data[index].price}EGP</h5>
      <p class="card-text">${data[index].title}</p>
    </div>
  </div>
</div>
  
  `
 
 document.getElementById("HeadPhone").innerHTML=containerHeadPhone2;
}
}
}


 
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
    targetCArt.totalPrice =  +targetCArt.quntaty * +targetCArt.price
  }
  else{
    targetCArt.quntaty++
  }
  console.log(cart);
  localStorage.setItem("sandok",JSON.stringify(cart))
  
    })
  })
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




