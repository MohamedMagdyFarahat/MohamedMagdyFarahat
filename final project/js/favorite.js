let deleteAll=document.getElementById("DeleteAll")
let deletOne=document.getElementById("deleteOne")
const cartNum = document.querySelector(".header .cart-num");
const favonum = document.querySelector(".header .favo-num");

let favoriteCart;

if(localStorage.getItem("favoriteSandok")==null){
  favoriteCart=[];
   }
   else{
    favoriteCart=JSON.parse(localStorage.getItem('favoriteSandok'));
    favonum.textContent = favoriteCart.length;
   }
   
   if(localStorage.getItem("sandok")==null){
    cart=[];
     }
     else{
      cart=JSON.parse(localStorage.getItem('sandok'));
      // cartPush ()
      cartNum.textContent = cart.length;
     } 
     console.log(cart);
   console.log(favoriteCart)

   function Display(){
    let containerCart=""
for (let index = 0; index < favoriteCart.length; index++) {
      containerCart+=`
      <div  class="col-lg-4 col-md-6 parent">
      <div class="card">
      <i onclick="DeleteRow(${index})" class="fa-regular fa-circle-xmark"></i>
        <img src="${favoriteCart[index].source_url}" alt="...">
        <div class="card-body">
          <h5 class="card-title">${favoriteCart[index].price}EGP</h5>
          <p class="card-text">${favoriteCart[index].title}</p>
          <button  onclick="cartAdd(${index})" class="btn btn-danger" type="submit">Add to Cart</button>
        </div>
      </div>
    </div>
      `
      
}
document.getElementById("tBody").innerHTML=containerCart;
// totalPrice()
}
Display()

{/* <td><i onclick="DeleteRow(${index})" class="fa-regular fa-circle-xmark"></i></td> */}
{/* <td> <button  onclick="cartAdd(${index})" class="btn btn-danger" type="submit">Add to Cart</button></td> */}
let targetCArt=1;
function cartAdd(i){
    cart.push(favoriteCart[i])
    console.log(cart);
    localStorage.setItem("sandok",JSON.stringify(cart))
    localStorage.setItem("favoriteSandok",JSON.stringify(favoriteCart))
    DeleteRow(i)
    Display()
}


deleteAll.addEventListener("click",function(){
    favoriteCart.splice(0)
     localStorage.clear()
     Display()
 })
 
 function DeleteRow(i){
     favoriteCart.splice(i,1)
     localStorage.setItem("favoriteSandok",JSON.stringify(favoriteCart))
     Display()
 }
 