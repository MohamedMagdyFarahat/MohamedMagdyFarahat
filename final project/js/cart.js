// let deleteAll=document.getElementById("DeleteAll")
let deletOne=document.getElementById("deleteOne")
let totalPrices=0;
const cartNum = document.querySelector(".header .cart-num");
const favonum = document.querySelector(".header .favo-num");
const theTotalPrices=document.getElementById("total")
if(localStorage.getItem("sandok")==null){
    cart=[];
     }
     else{
      cart=JSON.parse(localStorage.getItem('sandok'));
      // console.log(cart[1].quntaty);
    //   cartNum.textContent = cart.length;
     }
     let favoriteCart;

if(localStorage.getItem("favoriteSandok")==null){
  favoriteCart=[];
   }
   else{
    favoriteCart=JSON.parse(localStorage.getItem('favoriteSandok'));
    favonum.textContent = favoriteCart.length;
   }

    // h1sss.textContent=customerName.value
    // h1sss.addEventListener("click",function(){
    //   alert("suiiiiiiiiiiiii")
    // })
     function Display(){
     let containerCart=""
for (let index = 0; index < cart.length; index++) {
  if (cart[index].quntaty==undefined ) {
    cart[index].quntaty=1;
  }
  cart[index].totalPrice= cart[index].quntaty* cart[index].price
       containerCart+=`
       <tr>
       <td>${index+1}</td>
       <td>  <div class="col-lg-8 col-md-6">
         <div class="card">
           <img src="${cart[index].source_url}" alt="">
           <div class="card-body">
             <p class="card-text">${cart[index].title}</p>
           </div>
         </div>
       </div></td>
    
       <td class="card-title">${cart[index].price} EGP</td>
       <td class="card-Amount">
       <i onclick="minus(${index})" class="fa-solid fa-minus"></i>
       ${cart[index].quntaty}
       <i onclick="piussss(${index})" class="fa-solid fa-plus"></i> 
       </td>
       <td class="card-title">${cart[index].totalPrice }EGP </td>
       <td><i onclick="DeleteRow(${index})" class="fa-regular fa-circle-xmark"></i> </td>
   </tr>
       `
       
}
document.getElementById("tBody").innerHTML=containerCart;

 }
 Display()
 totalPrice()
//  localStorage.setItem("quantaty",JSON.stringify(data))
let quantatyAmount;
if(localStorage.getItem("quantaty")==null){
  quantatyAmount=[];
   }
   else{
    quantatyAmount=JSON.parse(localStorage.getItem('quantaty'));
    // console.log(cart[1].quntaty);
  //   cartNum.textContent = cart.length;
   }

function piussss(index){
  if (cart[index].quntaty==undefined ) {
    cart[index].quntaty=1;
  }
  cart[index].quntaty++
  cart[index].totalPrice= cart[index].quntaty* cart[index].price
console.log( cart[index].totalPrice );

  quantatyAmount.push(cart[index].quntaty)
  localStorage.setItem("quantaty",JSON.stringify(quantatyAmount))
  console.log(cart[index].quntaty);

  Display()
  totalPrice()
}
function minus(index){
  if (cart[index].quntaty<2) {
   DeleteRow()
   totalPrice()
  }
  else{
    cart[index].quntaty--
    cart[index].totalPrice= cart[index].quntaty* cart[index].price
    console.log( cart[index].totalPrice );
  }

  // quantatyAmount.push(cart[index].quntaty)
  // cart.totalPrice = cart.quntaty * cart.price

  // localStorage.setItem("quantaty",JSON.stringify(quantatyAmount))
  // console.log(cart[index].quntaty);

  Display()
  totalPrice()
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

function deleteAll(){
  cart.splice(0)
  localStorage.clear()
  Display()
  totalPrice()
}
// deleteAll.addEventListener("click",function(){

  
// })
// if (  cart==0) {
//   deleteAll
// }
console.log(cart);
function DeleteRow(i){
    cart.splice(i,1)
    localStorage.setItem("sandok",JSON.stringify(cart))
    Display()
    totalPrice()
}

function totalPrice(){
for (let index = 1; index < cart.length; index++) {
  cart[0].totalPrice+=cart[index].totalPrice
}
// console.log( cart[0].totalPrice);
if (cart.length==0) {
  theTotalPrices.textContent =0
  // BuyTotalPrice.textContent=0

}else{
  theTotalPrices.textContent = cart[0].totalPrice
  // BuyTotalPrice.textContent=0= cart[0].totalPrice
}

//;
}

