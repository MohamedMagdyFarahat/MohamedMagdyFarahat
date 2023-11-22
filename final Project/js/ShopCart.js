function active(forEachArray) {
  forEachArray.forEach((ele) => {
    ele.addEventListener("click", () => {
      forEachArray.forEach((ele) => {
        ele.classList.remove("active");
      });
      ele.classList.add("active");
    });
  });
}
let tokens = [
  {
    Email: "Magdy@gmail.com",
    passWord: "123",
  },
];
let trusted = false;

let langPage = document.documentElement.lang;
let myCart = [];

let TotalProdect = 0;
let totalPrice = 0;
let apiDataCheck = [];
if (
  JSON.parse(localStorage.getItem("langPage")) === null ||
  JSON.parse(localStorage.getItem("langPage")) === "en"
) {
  langPage = "en";
  localStorage.setItem("langPage", JSON.stringify(langPage));
  apiDataCheck = JSON.parse(localStorage.getItem("data"));
  document.body.style.direction = "ltr";
} else {
  langPage = JSON.parse(localStorage.getItem("langPage"));
  apiDataCheck = JSON.parse(localStorage.getItem("data"));
  document.body.style.direction = "rtl";
}
let themePage = document.body;
function getMood() {
  let mood = JSON.parse(localStorage.getItem("mood"));
  if (mood === "dark") {
    themePage.classList = "dark-mode";
  } else {
    themePage.classList = "";
  }
}
getMood();
function fatchCheckout() {
  fetch(`../data/${langPage}Home.json`)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("data", JSON.stringify(data));
      apiDataCheck = data;
      headNavBar();
      FootertData();
    });
}

let { header, navbar, Footer, ShopCart, login } = apiDataCheck;

function headNavBar() {
  box = `
<div class="header__top">
<div class="container">
<div class="welcome">
<div class="col d-none d-lg-block">
  <span class="header__welcome"
    >${header.wlecomeText}</span>
</div>
<div class="col">
  <div class="social__icon d-block d-sm-flex">
    <div class="icon col-lg-6" id = "linkes">
    </div>
    <div class="login col-lg-6" id = "login">
      <i class="fa-solid fa-user user"></i>
      <span class="log">${header.login}</span>
    </div>
  </div>
</div>
</div>
</div>
</div>
<div class="navgation">
<div class="container-fluid">
<nav class="nav__bar">
<div class="logo col-2">
  <a href="index.html">
    <img src="img/logo.svg" alt="logo" />
  </a>
</div>
<div class="navlinks col-8">
  <ul class="parent__links">
    <li class="links plus">
      ${navbar.links.home}
      <ul class="another">
      <li class="link_ano"><a href="index.html">${navbar.another.home.one}</a></li>
      <li class="link_ano"><a href="index.html">${navbar.another.home.two}</a></</li>
      <li class="link_ano"><a href="index.html">${navbar.another.home.three}</a></li>
      </ul>
    </li>
    <li class="links">${navbar.links.about}</li>
    <li class="links plus">
      ${navbar.links.menu}
      <ul class="another">
        <li class="link_ano">${navbar.another.menu.one}</li>
        <li class="link_ano">${navbar.another.menu.two}</li>
      </ul>
    </li>
    <li class="links plus">
      ${navbar.links.shop}
      <ul class="another">
      <li class="link_ano"><a href ="shop.html">${navbar.another.shop.one}</a></li>
      <li class="link_ano">${navbar.another.shop.two}</li>
      <li class="link_ano"><a href = "ShopCart.html">${navbar.another.shop.three}</a></li>
      <li class="link_ano"><a href = "CheckOut.html">${navbar.another.shop.four}</a></li>
      </ul>
    </li>
    <li class="links plus">
      ${navbar.links.pages}
      <ul class="another">
        <li class="link_ano">${navbar.another.pages.one}</li>
        <li class="link_ano">${navbar.another.pages.two}</li>
        <li class="link_ano">${navbar.another.pages.three}</li>
      </ul>
    </li>
    <li class="links">${navbar.links.blog}</li>
    <li class="links">${navbar.links.contactUs}</li>
  </ul>
  <div class="toggle" id="togg">
    <i class="fa-solid fa-bars"></i>
  </div>
</div>
<div class="search__bar col-2">
  <div class="search">
  <i class="fa-solid fa-heart"></i>
  <p class="totalShop" id ="totalLove">0</p>
  </div>
  <div class="shopping">
  <a href="ShopCart.html"><i class="fa-solid fa-cart-shopping"></i></a>
    <p class="totalShop" id="totalShopCard">0</p>
  </div>
</div>
</nav>
</div>
</div> 
<div class="left_nav" id="left_nav">
<div class="left_nav_Details">
<div class="logo-2">
<a href="index.html">
  <img src="img/logo.svg" alt="logo" />
</a>
</div>
<div class="left_navgtion">
<ul class="list__item_link">
  <li class="item__link">
    ${navbar.links.home}
    <ul class="inside__link">
    <li class="in__link"><a href="index.html">${navbar.another.home.one}</a></li>
    <li class="in__link"><a href = "index.html">${navbar.another.home.two}</a></li>
    <li class="in__link"><a href = "index.html">${navbar.another.home.three}</a></li>
    </ul>
  </li>
  <li class="item__link"> ${navbar.links.about}</li>
  <li class="item__link">
  ${navbar.links.menu}
    <ul class="inside__link">
      <li class="in__link">${navbar.another.menu.one}</li>
      <li class="in__link">${navbar.another.menu.two}</li>
    </ul>
  </li>
  <li class="item__link">
  ${navbar.links.shop}
    <ul class="inside__link">
    <li class="in__link"><a href ="shop.html">${navbar.another.shop.one}</a></li>
    <li class="in__link">${navbar.another.shop.two}</li>
    <li class="in__link"><a href ="ShopCart.html">${navbar.another.shop.three}</a></li>
    <li class="in__link"><a href = "CheckOut.html">${navbar.another.shop.four}</a></li>
    </ul>
  </li>
  <li class="item__link">
    ${navbar.links.pages}
    <ul class="inside__link">
      <li class="in__link">${navbar.another.pages.one}</li>
      <li class="in__link">${navbar.another.pages.two}</li>
      <li class="in__link">${navbar.another.pages.three}</li>
      <li class="in__link">${navbar.another.pages.four}</li>
    </ul>
  </li>
  <li class="item__link">${navbar.links.contactUs}</li>
</ul>
</div>
</div>
<i class="fa-solid fa-xmark close" id="close"></i>
</div>
<div class="over"></div>
<div class="okAdd" id ="Add">
<div class="add__Box">
<i class="fa-solid fa-circle-check"></i>
<p class="Succ">${login.Successful}</p>
</div>
</div>
<div class="From" id="fromData">
<i class="fa-solid fa-xmark closeLog" id="closeLog"></i>
<div class="Login">
  <div class="inputData active">
    <h3 class="TextLog">${login.login}</h3>
    <div class="Email inp">
      <input
        type="email"
        name="EmailLog"
        id="EmailLog"
        placeholder="${login.EnterEmail}"
      /><i class="fa-regular fa-envelope"></i>
    </div>
    <div class="password inp">
      <input
        type="password"
        name="passwordLog"
        id="passwordLog"
        placeholder="${login.EnterPass}"
      /><i class="fa-solid fa-lock"></i>
    </div>
    <button class= "checkin" id="checkin">${login.login}</button>
  </div>
  <div class="inputData">
    <h3 class="TextLog">${login.Registration}</h3>
    <div class="name inp">
      <input
        type="text"
        name="text"
        id="text"
        placeholder="${login.EnterName}"
      /><i class="fa-solid fa-user"></i>
    </div>
    <div class="Email inp">
      <input
        type="email"
        name="Email"
        id="Email"
        placeholder="${login.EnterEmail}""
      /><i class="fa-regular fa-envelope"></i>
    </div>
    <div class="password inp">
      <input
        type="password"
        name="password"
        id="password"
        placeholder="${login.EnterPass}"
      /><i class="fa-solid fa-lock"></i>
    </div>
    <button class= "reg"> ${login.add} </button>
  </div>
</div>
<button class="lo active">${login.log}</button>
<button class="lo">${login.Registration}</button>
</div>
<div class="From__logOut">
<i class="fa-solid fa-xmark closeLog" id="closeLogOut"></i>
<div class="Login">
  <div class="inputData active">
    <h3 class="TextLog">LogUot</h3>
    <div class="Email inp">
      <input
        type="email"
        name="EmailOut"
        id="EmailOut"
        placeholder="${login.EnterEmail}"
      /><i class="fa-regular fa-envelope"></i>
    </div>
    <div class="password inp">
      <input
        type="password"
        name="passwordOut"
        id="passwordOut"
        placeholder="${login.EnterPass}"
      /><i class="fa-solid fa-lock"></i>
    </div>
  </div>
</div>
<button class="lo active" id="OutMail">LogOut</button>
</div> 
<div class="second__home">
<div class="container">
  <div class="declear__page">
    <h1 class="name__page">${navbar.another.shop.three}</h1>
    <a href="index.html" class="link__page">${navbar.links.home} </a>
    <a href="ShopCart.html" class="link__page linkSp"> / ${navbar.another.shop.three}</a>
  </div>
</div>
</div>
`;
  document.getElementById("navbarPage").innerHTML = box;
  let linkes = "";
  for (let i = 0; i < header.linkes.length; i++) {
    linkes += `
<a href="${header.linkes[i]}"
        ><i class="${header.icon[i]}"></i
      ></a>
`;
  }
  document.getElementById("linkes").innerHTML = linkes;
  checkOut();
  ShowCart();
}

// Start Cart *********************************************************
function ShowCart() {
  let box = ``;
  if (
    JSON.parse(localStorage.getItem("pageCards")) == null ||
    JSON.parse(localStorage.getItem("pageCards")).length == 0
  ) {
    box = `  <div class="text">
    <p>${ShopCart.Emtpy}</p>
    <button><a href="shop.html">${ShopCart.goShopping}</</a></button>
  </div>`;
    document.getElementById("tableData").innerHTML = box;
  } else {
    myCart = JSON.parse(localStorage.getItem("pageCards"));
    TotalPro();
    for (let i = 0; i < myCart.length; i++) {
      box = `<div class="container">
      <div class="boxTabel">
      <table>
        <thead>
          <th class="head__title">${ShopCart.id}</th>
          <th class="head__title">${ShopCart.Prodect}</th>
          <th class="head__title">${ShopCart.Category}</th>
          <th class="head__title">${ShopCart.price}</th>
          <th class="head__title">${ShopCart.QUANTITY}</th>
          <th class="head__title">${ShopCart.SUBTOTAL}</th>
          <th class="head__title">${ShopCart.Delete}</th>
        </thead>
        <tbody id="data"></tbody>
      </table>
      </div>
      <div  class="btnCheck">
      <p class = "total">${ShopCart.totalVarieties} <span id="total__varieties" class="center"></span></p>
      <p class = "total">${ShopCart.totalprodect} <span id="total__information">${TotalProdect}</span></p>
      <p class = "total">${ShopCart.totalprice} <span id="total__price" class="center"></span></p>
      <button class = "RemoveAll"><a href ="CheckOut.html">${ShopCart.CheckOut} </a></button>
      <button class = "RemoveAll" id="clearCart">${ShopCart.ClearCart}</button>
      </div>
    </div>`;
    }
    document.getElementById("tableData").innerHTML = box;
    document.getElementById("total__varieties").innerHTML = myCart.length;
    document.getElementById("totalShopCard").innerHTML = myCart.length;
    addtotal();
    cart();
    totalPricefun();
    let clearCart = document.getElementById("clearCart");
    clearCart.addEventListener("click", () => {
      myCart = [];
      localStorage.setItem("pageCards", JSON.stringify(myCart));
      ShowCart();
    });
  }
}
function addtotal() {
  for (let i = 0; i < myCart.length; i++) {
    myCart[i].totalPrice = myCart[i].newPrice * myCart[i].QUANTITY;
  }
}
function cart() {
  let boxData = ``;
  for (let i = 0; i < myCart.length; i++) {
    boxData += `<tr class = "Row">
    <td class="bodyTable">${i + 1}</td>
          <td class="bodyTable"><img src="${myCart[i].img}" alt="sora" /></td>
          <td class="bodyTable">${myCart[i].nameFliter}</td>
          <td class="bodyTable">$ ${myCart[i].newPrice}</td>
          <td class="bodyTable">
            <button class="qunt" onclick= "countDown(${
              myCart[i].id
            })">-</button>
            <span>${myCart[i].QUANTITY}</span>
            <button class="qunt" onclick = "countUP(${myCart[i].id})">+</button>
          </td>
          <td class="bodyTable">${myCart[i].totalPrice} $</td>
          <td class="bodyTable" > 
          <i class="fa-solid fa-circle-xmark delete"onclick="DeletRow(${
            myCart[i].id
          })" ></i>
              </td>
    </tr>`;
  }
  document.getElementById("data").innerHTML = boxData;
}
// End Cart *********************************************************
// DeltetRow Start ************************************************
function DeletRow(id) {
  myCart = myCart.filter((ele) => {
    return ele.id !== id;
  });
  console.log(myCart);
  localStorage.setItem("pageCards", JSON.stringify(myCart));
  ShowCart();
}
// DeltetRow End ************************************************
// Start QUANTITY *****************************************

function countUP(id) {
  let dataIncrement = myCart.find(function (ele) {
    return ele.id === id;
  });
  dataIncrement.QUANTITY++;
  localStorage.setItem("pageCards", JSON.stringify(myCart));
  ShowCart();
}
function countDown(id) {
  let dataIncrement = myCart.find(function (ele) {
    return ele.id === id;
  });
  dataIncrement.QUANTITY--;
  if (dataIncrement.QUANTITY == 0) {
    DeletRow(id);
  }
  localStorage.setItem("pageCards", JSON.stringify(myCart));
  ShowCart();
}
function TotalPro() {
  TotalProdect = myCart.reduce((acc, cur) => {
    return acc + cur.QUANTITY;
  }, 0);
  localStorage.setItem("TotalProdect", JSON.stringify(TotalProdect));
}
function totalPricefun() {
  totalPrice = myCart.reduce((acc, cur) => {
    return acc + cur.totalPrice;
  }, 0);
  document.getElementById("total__price").innerHTML = totalPrice;
  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
}

// End QUANTITY *****************************************

function FootertData() {
  let box = `<footer class="padd">
<div class="container">
<div class="top__foot">
<h2 class="head__footer col-lg-7 col-md-6">${Footer.headFooter}</h2>
<div class="foot__data col-lg-5 col-md-6">
  <input
    type="text"
    placeholder="Enter Your Mail"
    class="inp__foot"
  />
  <button type="submit" class="submit__foot">${Footer.submitFoot}</button>
</div>
</div>
<div class="footer-center">
<div class="container">
  <div class="row">
    <div class="col-lg-4 col-md-6">
      <div class="foot__head__center">
        <h3>${Footer.footHeadH3}</</h3>
        <p>
          Lorem ipsum dolor sit consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
      <div class="foot__Opening">
        <div class="open__img">
          <img src="img/t_hour.png" alt="hours" />
        </div>
        <div class="open__heading">
          <h4>${Footer.footOpeningH4}</h4>
          <p>${Footer.footOpeningph}</p>
          <span>${Footer.footOpeningSpan}</span>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="foot__contect">
        <div class="foot__us">
          <h5>${Footer.footContectUS}</h5>
          <ul class="foot__contect__lists" id="foot__contect">
            
            
          </ul>
        </div>
      </div>
    </div>
    <div class="col-lg-2 col-md-6">
      <div class="foot__links">
        <h6>${Footer.HeadLinks}</h6>
        <ul class="links__foot" id="linksFoot">
          
        </ul>
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
      <div class="foot__blog">
        <h6>${Footer.footBlogText}</h6>
        <div id = "FootBlog"></div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</footer>`;
  let listFooter = "";
  for (let i = 0; i < Footer.item__title.length; i++) {
    listFooter += `<li class="foot__conect__item">
<span class="item__title">${Footer.item__title[i].span}</span>
${Footer.item__title[i].Text}
</li>`;
  }
  let linksPage = ``;
  for (let i = 0; i < Footer.linksFoot.length; i++) {
    linksPage += `<li>
<a href="${Footer.linksFoot[i].path}">${Footer.linksFoot[i].name}</a>
</li>`;
  }
  let blogLoop = ``;
  for (let i = 0; i < Footer.theBest.length; i++) {
    blogLoop += `<div class="foot__theBest">
<div class="theBest__img">
<img src="${Footer.theBest[i].img}" alt="sora" />
</div>
<div class="theBest__Content">
<h3>${Footer.theBest[i].head}</h3>
<span>${Footer.theBest[i].span}</span>
</div>
</div>`;
  }

  document.getElementById("footerPage").innerHTML = box;
  document.getElementById("foot__contect").innerHTML = listFooter;
  document.getElementById("linksFoot").innerHTML = linksPage;
  document.getElementById("FootBlog").innerHTML = blogLoop;
}

function checkOut() {
  if (JSON.parse(localStorage.getItem("tokenTrust"))) {
    trusted = JSON.parse(localStorage.getItem("tokenTrust"));
    let log = document.querySelector(".log");
    if (langPage == "en") {
      log.innerHTML = "log Out";
    } else {
      log.innerHTML = "تسجيل خروج";
    }
    let logOutDiv = document.querySelector(".login");
    logOutDiv.id = "out";
    logOut();
  } else {
    loginFunction();
  }
}
// // Check *********************************************
let overViwe = document.createElement("div");
// let login = document.getElementById("login");
function loginFunction() {
  let from = document.getElementById("fromData");
  let login = document.getElementById("login");
  let closeLog = document.getElementById("closeLog");
  let inputDataDom = Array.from(document.querySelectorAll(".inputData"));
  let logAndREg = document.querySelectorAll(".lo");
  active(logAndREg);
  let EmailLog = document.getElementById("EmailLog");
  let passwordLog = document.getElementById("passwordLog");
  let checkin = document.getElementById("checkin");
  EmailLog.addEventListener("click", () => {
    EmailLog.parentElement.classList.remove("error");
  });
  passwordLog.addEventListener("click", () => {
    passwordLog.parentElement.classList.remove("error");
  });
  checkin.addEventListener("click", () => {
    let tokenemail = false;
    let tokenepass = false;
    let checkToken = tokens.filter((ele) => {
      return ele.Email == EmailLog.value;
    });
    let checkpass = tokens.filter((ele) => {
      return ele.passWord == passwordLog.value;
    });
    if (
      EmailLog.value !== "" &&
      EmailLog.value.includes("@") &&
      checkToken.length > 0
    ) {
      EmailLog.value = "";
      tokenemail = true;
    } else {
      EmailLog.parentElement.classList.add("error");
    }
    if (passwordLog.value !== "" && checkpass.length > 0) {
      passwordLog.value = "";
      tokenepass = true;
    } else {
      passwordLog.parentElement.classList.add("error");
    }
    if (tokenemail && tokenepass) {
      trusted = true;
      localStorage.setItem("tokenTrust", JSON.stringify(trusted));
      from.style.display = "none";
      overViwe.style.display = "none";
      login.id = "out";
      let log = document.querySelector(".log");
      if (langPage == "en") {
        log.innerHTML = "log Out";
        console.log(log);
      } else {
        log.innerHTML = "تسجيل خروج";
      }
      logOut();
    }
  });
  inputDataDom.forEach((ele) => {
    logAndREg.forEach((btn, ind) => {
      btn.addEventListener("click", () => {
        ele.classList.remove("active");
        inputDataDom[ind].classList.add("active");
      });
    });
  });
  let overViwe = document.createElement("div");
  overViwe.classList.add("overViwe");
  document.body.appendChild(overViwe);
  login.addEventListener("click", () => {
    if (!trusted) {
      from.style.display = "block";
      overViwe.style.display = "block";
    }
  });
  closeLog.addEventListener("click", () => {
    from.style.display = "none";
    overViwe.style.display = "none";
  });
}

function logOut() {
  let logOut = document.getElementById("out");
  let closeLog = document.getElementById("closeLogOut");
  let inputLogOutEmali = document.getElementById("EmailOut");
  let inputLogOutPass = document.getElementById("passwordOut");
  let btnOutMail = document.getElementById("OutMail");
  let tokenemail = false;
  let tokenepass = false;
  logOut.addEventListener("click", () => {
    let divLogOut = document.querySelector(".From__logOut");
    divLogOut.style.display = "block";
    document.body.appendChild(overViwe);
    overViwe.style.display = "block";
    closeLog.addEventListener("click", () => {
      divLogOut.style.display = "none";
      overViwe.style.display = "none";
    });
    btnOutMail.addEventListener("click", () => {
      let trustedEmail = tokens.filter((ele) => {
        return ele.Email == inputLogOutEmali.value;
      });
      let trustedPass = tokens.filter((ele) => {
        return ele.passWord == inputLogOutPass.value;
      });
      if (
        inputLogOutEmali.value !== "" &&
        inputLogOutEmali.value.includes("@") &&
        trustedEmail.length > 0
      ) {
        inputLogOutEmali.value = "";
        tokenemail = true;
      } else {
        inputLogOutEmali.parentElement.classList.add("error");
      }
      if (inputLogOutPass.value !== "" && trustedPass.length > 0) {
        inputLogOutPass.value = "";
        tokenepass = true;
      } else {
        inputLogOutPass.parentElement.classList.add("error");
      }
      if (tokenemail && tokenepass) {
        trusted = false;
        localStorage.setItem("tokenTrust", JSON.stringify(trusted));
        divLogOut.style.display = "none";
        overViwe.style.display = "none";
        let login = document.getElementById("out");
        login.id = "login";
        let log = document.querySelector(".log");
        console.log(langPage);
        if (langPage == "en") {
          log.innerHTML = "Login";
        } else {
          log.innerHTML = "تسجيل الدخول";
        }
        loginFunction();
        window.location.reload();
        cardPage = [];
        localStorage.setItem("pageCards", JSON.stringify(cardPage));
      }
    });
  });
}
fatchCheckout();
// console.log(JSON.parse(localStorage.getItem("pageCards")));
