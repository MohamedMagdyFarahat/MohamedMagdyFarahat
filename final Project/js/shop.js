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
// ActivetionFunction*******************************
let tokens = [
  {
    Email: "Magdy@gmail.com",
    passWord: "123",
  },
];
let trusted = false;
let apiDatashop = [];
let sortValue = 4;
let langPage = document.documentElement.lang;
let themePage = document.body;
if (
  JSON.parse(localStorage.getItem("langPage")) === null ||
  JSON.parse(localStorage.getItem("langPage")) === "en"
) {
  langPage = "en";
  localStorage.setItem("langPage", JSON.stringify(langPage));
  //   apiData = JSON.parse(localStorage.getItem("data"));
  document.body.style.direction = "ltr";
} else {
  langPage = JSON.parse(localStorage.getItem("langPage"));
  //   apiData = JSON.parse(localStorage.getItem("data"));
  document.body.style.direction = "rtl";
}
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
      apiDatashop = data;
      let { header, navbar, Footer, shopPage, login } = apiDatashop;
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
          <div class="login col-lg-6" id ="login">
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
<div class="second__home">
      <div class="container">
        <div class="declear__page">
          <h1 class="name__page">${navbar.links.shop}</h1>
          <a href="index.html" class="link__page">${navbar.links.home} </a>
          <a href="shop.html" class="link__page linkSp"> / ${navbar.links.shop}</a>
        </div>
      </div>
    </div>
<div class="over"></div>
<section class="shopSection mb-5">
<div class="container-fluid">
  <div class="row">
    <div class="col-lg-9 ">
      <div class="row mt-5" id="popCard"></div>
      <div class="pagnation">
        <button class="prev btn__page" id="prev">${shopPage.prev}</button>
        <div class="numpages" id ="numpages">
        </div>
        <button class="next btn__page" id="next">${shopPage.next}</button>
      </div>
    </div>
    <div class="col-lg-3">
      <div class="Search__input">
        <h3 class="titleSearch">${shopPage.ShearchHere}</h3>
        <div class="form">
          <input class="inpSearch" type="text" placeholder="Search" id="inpSearch"/>
          <button class="insideInput">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div class = "sortBox d-md-block d-lg-none">
      <h3 class="titleSearch">${shopPage.sortpage}</h3>
      <div class="boxSort">
      <button class="sort active" id="smallSort">
      <i class="fa-solid fa-chart-bar"></i>
          </button>
      <button class="sort" id="bigSort">
      <i class="fa-solid fa-bars"></i>
          </button>
      </div>
      </div>
      <div class="Search__input">
        <h3 class="titleSearch">${shopPage.CATEGORIES}</h3>
        <div class="categoie" id = "categoie">
         
        </div>
      </div>
      <div class="Search__input">
        <h3 class="titleSearch">${shopPage.PRICEFILTER}</h3>
        <input type="range" id="range" class="range" value="0"/>
        <p>$ 0 - <span class="price__range" id="price__range"> 0</span></p>
      </div>
    </div>
  </div>
</div>
</section>
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
    </div> `;
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
      }
      headNavBar();
      let btnFliter = ``;
      for (let i = 0; i < shopPage.btnFliterShop.length; i++) {
        btnFliter += `<button class="btnFilterShop">
          ${shopPage.btnFliterShop[i].name} <i class="${shopPage.btnFliterShop[i].icon} "></i>
        </button>`;
      }
      document.getElementById("categoie").innerHTML = btnFliter;

      let prev = document.getElementById("prev");
      let next = document.getElementById("next");
      let cardIPage = 9;
      let Start = 0;
      let End = cardIPage;
      function MathPagg(arr) {
        let totalPage = Math.ceil(arr.length / cardIPage);
        let btnPage = "";
        for (let i = 0; i < totalPage; i++) {
          btnPage += `<button class="num__page btn__page ">${i + 1}</button>`;
        }
        document.getElementById("numpages").innerHTML = btnPage;
        let pageBtn = Array.from(document.querySelectorAll(".num__page"));
        pageBtn.forEach((ele) => {
          pageBtn[0].classList.add("active");
          ele.addEventListener("click", () => {
            pageBtn.forEach((btn) => {
              btn.classList.remove("active");
            });
            ele.classList.add("active");
            chengePage(ele.innerHTML);
          });
        });
        function chengePage(NumberPage) {
          End = End * NumberPage;
          Start = End - cardIPage;
          cardshow(shopPage.ShopCards, Start, End);
          End = cardIPage;
          loveCard();
        }
        next.addEventListener("click", () => {
          let indexBtn = 0;
          for (let i = 0; i < pageBtn.length; i++) {
            if (pageBtn[i].classList.contains("active")) {
              indexBtn = pageBtn.indexOf(pageBtn[i]);
              indexBtn++;
            }
          }
          if (indexBtn == pageBtn.length) {
            indexBtn = 0;
          }
          pageBtn[indexBtn].click();
        });
        prev.addEventListener("click", () => {
          let indexBtn = 0;
          for (let i = 0; i < pageBtn.length; i++) {
            if (pageBtn[i].classList.contains("active")) {
              indexBtn = pageBtn.indexOf(pageBtn[i]);
              indexBtn--;
            }
          }
          if (indexBtn < 0) {
            indexBtn = pageBtn.length - 1;
          }
          pageBtn[indexBtn].click();
        });

        // Sort Cards Start ********************************
        let btnSort = document.querySelectorAll(".sort");
        active(btnSort);
        let smallSort = document.getElementById("smallSort");
        let bigSort = document.getElementById("bigSort");
        smallSort.addEventListener("click", () => {
          sortValue = 4;
          cardshow(shopPage.ShopCards, Start, End);
        });
        bigSort.addEventListener("click", () => {
          sortValue = 6;
          cardshow(shopPage.ShopCards, Start, End);
        });
        // Sort Cards Start End********************************
        cardshow(shopPage.ShopCards, Start, End);
      }
      MathPagg(shopPage.ShopCards);
      // Start Filter ***************************************************
      let range = document.getElementById("range");
      range.addEventListener("input", () => {
        let value = range.value;
        filter(value);
        document.getElementById("price__range").innerHTML = value;
      });
      let Search = document.getElementById("inpSearch");
      Search.addEventListener("input", () => {
        let SearchFilter = Search.value.toLocaleLowerCase();
        console.log(SearchFilter);
        filter(SearchFilter);
      });
      let buttonFilter = document.querySelectorAll(".btnFilterShop");
      buttonFilter[0].classList.add("active");
      active(buttonFilter);
      buttonFilter.forEach((ele) => {
        ele.addEventListener("click", () => {
          let valueSearch = ``;
          if (
            ele.textContent.trim() == "new & discount" ||
            ele.textContent.trim() == "وخصم جديد"
          ) {
            valueSearch = true;
          } else {
            valueSearch = ele.textContent.trim().toLocaleLowerCase();
          }
          filter(valueSearch);
        });
      });
      let cardFilter = [];
      function filter(valueFilter) {
        if (valueFilter === "all categories" || valueFilter === "جميع الفئات") {
          cardFilter = shopPage.ShopCards;
          MathPagg(cardFilter);
        } else {
          cardFilter = shopPage.ShopCards.filter((ele) => {
            return (
              ele.nameFliter.toLocaleLowerCase() == valueFilter ||
              ele.newPrice < valueFilter ||
              ele.new == valueFilter ||
              ele.dic == valueFilter ||
              ele.pop__desc.toLocaleLowerCase().includes(valueFilter)
            );
          });
          MathPagg(cardFilter);
        }
        // checkOut();
        cardshow(cardFilter, Start, End);
      }
      // End Filter ***************************************************

      // Start AddCard **********************************************
      function loveCard() {
        let allLoves = 0;
        let allHeart = document.querySelectorAll(".heart");
        allHeart.forEach((ele) => {
          ele.addEventListener("click", () => {
            if (ele.classList.contains("active")) {
              ele.classList.remove("active");
              allLoves--;
            } else {
              ele.classList.add("active");
              allLoves++;
            }
            document.getElementById("totalLove").innerHTML = allLoves;
          });
        });
      }
      loveCard();
      // get item Start *******************************************
      allshop = Array.from(document.querySelectorAll(".shop"));
      let allCart;
      if (JSON.parse(localStorage.getItem("pageCards") == null)) {
        allCart = [];
      } else {
        allCart = JSON.parse(localStorage.getItem("pageCards"));
      }
      for (let i = 0; i < allCart.length; i++) {
        allshop[shopPage.ShopCards[i].id].classList.add("active");
      }

      document.getElementById("totalShopCard").innerHTML = allCart.length;
      function addTOCard(index) {
        if (trusted) {
          allCart.push(shopPage.ShopCards[index]);
          document.getElementById("Add").style.right = "0";
          setTimeout(() => {
            document.getElementById("Add").style.right = "-100%";
          }, 1000);
        } else {
          let login = document.getElementById("login");
          login.click();
        }
      }
      function removeCard(idRemover) {
        allCart = allCart.filter((ele) => {
          return ele.id !== idRemover;
        });
      }
      // get item  End *******************************************
      // End AddCard **********************************************
      let togg = document.getElementById("togg");
      let over = document.querySelector(".over");
      let leftNav = document.getElementById("left_nav");
      let close = document.getElementById("close");
      // nav bar Setting ********************************
      togg.addEventListener("click", function () {
        leftNav.style.left = 0;
        over.style.opacity = 1;
        over.style.visibility = "visible";
      });
      over.addEventListener("click", () => {
        leftNav.style.left = `-100%`;
        over.style.visibility = "hidden";
        over.style.opacity = 0;
      });
      close.addEventListener("click", function () {
        leftNav.style.left = `-100%`;
        over.style.visibility = "hidden";
        over.style.opacity = 0;
      });
      // End nav bar Setting ********************************
      function cardshow(arr, valueI, valueLsat) {
        let popCardContent = "";
        let i = valueI;
        for (i; i < arr.length; i++) {
          if (i !== valueLsat) {
            popCardContent += `
          <div class="col-lg-4 col-md-${sortValue}  col-sm-6">
          <div class="pop__card">
            <div class="pop__overlay">
              <i class="fa-solid fa-cart-shopping shop")></i>
              <i class="fa-regular fa-heart heart"></i>
            </div>
            <div class="pop__img">
              <img src="${arr[i].img}" alt="sora" />
            </div>
            <div class="pop__content">
              <div class="name__reat">
                <span class="name__item__pop">${arr[i].nameFliter}</span>
              </div>
              <p class="pop__desc">${arr[i].pop__desc}</p>
              <div>
                <span class="pop__price">PRICE - $ ${arr[i].newPrice}<span class="price__old">/ $ ${arr[i].oldPrice}</</span></span>
              </div>
            </div>
          </div>
        </div>
        
          `;
          } else {
            break;
          }
        }
        document.getElementById("popCard").innerHTML = popCardContent;
        allshop = Array.from(document.querySelectorAll(".shop"));
        allshop.forEach((ele, index) => {
          ele.addEventListener("click", () => {
            if (ele.classList.contains("active")) {
              ele.classList.remove("active");
              removeCard(shopPage.ShopCards[index].id);
            } else {
              ele.classList.add("active");
              addTOCard(index);
            }
            localStorage.setItem("pageCards", JSON.stringify(allCart));
            document.getElementById("totalShopCard").innerHTML = allCart.length;
          });
        });
        let cards = Array.from(document.querySelectorAll(".pop__card"));
        for (let i = 0; i < arr.length; i++) {
          if (cards[i] !== undefined) {
            if (arr[i].new) {
              cards[i].classList.add("pop__new");
            }
            if (arr[i].dic) {
              cards[i].classList.add("pop__sel");
            }
          }
        }
      }
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
      FootertData();
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
      function loginFunction() {
        let from = document.getElementById("fromData");
        let login = document.getElementById("login");
        console.log(login);
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
            window.location.reload();
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
    });
}

// console.log(JSON.parse(localStorage.getItem("pageCards")));
fatchCheckout();

// range price /************************************ */
