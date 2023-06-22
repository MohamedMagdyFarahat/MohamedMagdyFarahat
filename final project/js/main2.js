const newCart = JSON.parse(localStorage.getItem('cart')) || [];
const cartNum = document.querySelector('.buy');
async function getData(){
    const res = await fetch('main.json');
    const data = await res.json();
    console.log(data);

    for (let i = 0; i <3; i++) {
      let containerBox=""
      for(let i = 0; i < 3; i++ ){
       containerBox+=`
       <div class=" product col-lg-4 col-md-6  data-id=${i.id}">
         <div class="card" style="width: 18rem;">
           <div class="overlay">
             <div class="btnss">
               <a><i add-to-cart class="fa-solid fa-cart-flatbed"></i></a>
             <a class="red"><i class="fa-solid fa-heart bts"></i></a>
             </div>
           </div>
           <img src="${data[i].source_url}" alt="...">
           <div class="card-body">
             <h5 class="card-title">${data[i].price}</h5>
             <p class="card-text">${data[i].title}</p>
           </div>
         </div>
       </div>
       
       `
      }
      document.getElementById("HotCategory").innerHTML=containerBox;
      let addToCart = document.querySelectorAll('.add-to-cart');
      addToCart.forEach(bts => {
        bts.addEventListener('click', handleBtnClick)
      })
     
      }
      
 
      
    }
    async function handleBtnClick(e){
      const parent = e.target.closest('.product')
      const id = parent.getAttribute('data-id');
      const res = await fetch(`main.json${id}`);
      const data = await res.json();
      data.count = 1;
    
      const obj = newCart.find(ele => ele.id == id);
      
      if(obj){
        obj.count += 1;
      } else {
        newCart.push(data);
      }
      cartNum.textContent = newCart.length;
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
    getData()
    // data.products.forEach((ele) => {
    //   prodContainer.innerHTML += `
    //   <div class='product col-12 col-md-4 col-lg-3' data-id=${ele.id}>
    //     <div class="card">
    //       <img src=${ele.thumbnail} class="card-img-top">
    //       <div class="card-body">
    //         <h5 class="card-title">${ele.title}</h5>
    //         <p class="card-text">${ele.description}</p>
    //       </div>
    //       <div class="card-footer product-footer">
    //         <p class='card-price m-0'>$${ele.price}</p>
    //         <button href="#" class="btn btn-primary add-to-cart" >Add to cart</button>
    //       </div>
    //     </div>
    //   </div> 
    //   `
    // })
  


  