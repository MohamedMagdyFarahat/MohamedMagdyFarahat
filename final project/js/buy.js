let customerName=document.getElementById("customerName")
let customerNumber=document.getElementById("customernumber")
let customerEmail=document.getElementById("exampleFormControlInput2")
let customerAdderss=document.getElementById("exampleForm")
let customerBtn=document.getElementById("customerBtn")
let h1sss=document.getElementById("h1sss")
// console.log(customerAdderss);
if(localStorage.getItem("sandok")==null){
    cart=[];
     }
     else{
      cart=JSON.parse(localStorage.getItem('sandok'));
      // console.log(cart[1].quntaty);
    //   cartNum.textContent = cart.length;
     }

customerBtn.addEventListener("click",function(){
    document.getElementById("biss").innerHTML=`
    <h1 >Thank You </h1>
    <h1 class="h1sss">${customerName.value}</h1>
    <p>Your product will arrive after 48h</p>
    <p>in${customerAdderss.value} </p>
    <a href="index.html"><button class="btn btn-dark okey"> ok</button></a>

    `
    biss.style.display="block"
    deleteAll()
})
for (let index = 0; index < cart.length; index++) {
    cart.totalPrice+= +cart[index].totalPrice
  }
  function deleteAll(){
    cart.splice(0)
    localStorage.clear()
    Display()
    totalPrice()
  }

console.log(cart.theTotalPrices);