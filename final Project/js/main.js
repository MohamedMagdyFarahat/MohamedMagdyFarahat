function ShowSetting() {
  let box = `  <div class="setting" id="setting">
<i class="fa-solid fa-gear gear"></i>
</div>
<div class="setting__box" id="setting__box">
<div class="Sett">
  <i class="fa-solid fa-xmark xclose" id="xclose"></i>
  <p class="set__ph">setting</p>
  <div class="btn__mood">
    <button class="mood" id="btnMood">
      <i class="fa-solid fa-moon"></i>
    </button>
    <button class="mood" id="btnlight">
      <i class="fa-solid fa-sun"></i>
    </button>
  </div>
  <div class="btn__lang">
    <button class="lang" id="En">en</button>
    <button class="lang" id="Ar">ar</button>
  </div>
</div>
</div>`;
  document.getElementById("settingPage").innerHTML = box;
}
ShowSetting();

// Action btnLang ***********************************
let langBtns = document.querySelectorAll(".lang");
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
active(langBtns);

// Action btnLang End ***********************************

// Start get Data *********************************
let tokens = [
  {
    Email: "Magdy@gmail.com",
    passWord: "123",
  },
];
let trusted = false;

let apiData = [];
let langPage = document.documentElement.lang;
let en = document.getElementById("En");
let ar = document.getElementById("Ar");
if (
  JSON.parse(localStorage.getItem("langPage")) === null ||
  JSON.parse(localStorage.getItem("langPage")) === "en"
) {
  langPage = "en";
  localStorage.setItem("langPage", JSON.stringify(langPage));
  apiData = JSON.parse(localStorage.getItem("data"));
  document.body.style.direction = "ltr";
  en.classList.add("active");
} else {
  langPage = JSON.parse(localStorage.getItem("langPage"));
  apiData = JSON.parse(localStorage.getItem("data"));
  document.body.style.direction = "rtl";
  ar.classList.add("active");
}

//**************************************** */
function fetching() {
  fetch(`../data/${langPage}Home.json`)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("data", JSON.stringify(data));
      apiData = data;
      console.log(apiData);
      en.addEventListener("click", function () {
        document.body.style.direction = "ltr";
        langPage = "en";
        console.log(langPage);
        localStorage.setItem("langPage", JSON.stringify(langPage));
        fetching();
        showDataPage();
        headNavBar();
        FootertData();
      });
      ar.addEventListener("click", function () {
        document.body.style.direction = "rtl";
        langPage = "ar";
        console.log(langPage);
        localStorage.setItem("langPage", JSON.stringify(langPage));
        fetching();
        showDataPage();
        headNavBar();
        FootertData();
      });
      let {
        header,
        navbar,
        login,
        homepage,
        aboutUS,
        chooseUs,
        popular,
        Footer,
      } = apiData;
      // End get Data *********************************

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
          <div class="login col-lg-6" id="login">
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
          <li class="links"><a href = "#">${navbar.links.about}</a></li>
          <li class="links plus">
            ${navbar.links.menu}
            <ul class="another">
              <li class="link_ano"><a href = "#">${navbar.another.menu.one}</a></li>
              <li class="link_ano"><a href = "#">${navbar.another.menu.two}</a></li>
            </ul>
          </li>
          <li class="links plus">
            ${navbar.links.shop}
            <ul class="another">
              <li class="link_ano"><a href ="shop.html">${navbar.another.shop.one}</a></li>
              <li class="link_ano">${navbar.another.shop.two}</li>
              <li class="link_ano"><a href ="ShopCart.html">${navbar.another.shop.three}</a></li>
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
<div class="over"></div>`;
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
      }
      headNavBar();
      function showDataPage() {
        let box = ` 
<section class="home">
      <div class="container-fluid">
        <div class="slider" id = "sli"></div>
        <div class="dot">
            <span class="indicator active" data-index="0">1</span>
            <span class="indicator" data-index="1">2</span>
            <span class="indicator" data-index="2">3</span>
        </div>
      </div>
    </section>
    <section class="about__us padd">
      <div class="container-fluid">
        <div class="row align-items-center justify-content-center" id = "aboutCard"></div>
        </div>
      <div class="container-fluid">
        <div class="reel__food">
          <div class="lite__box" id="lite__box">
            <i class="fa-solid fa-xmark xmark" id="xmark"></i>
            <video
              controls
              autoplay
              loop
              src="./img/awesome-video.mp4"
              class="vid"
            ></video>
          </div>
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-6 col-md-12">
              <img src="img/about_1_1.png" alt="sora" />
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="about__top">
                <h3 class="about__title">${aboutUS.aboutTitle}</h3>
                <div class="about__reels">
                  <span class="reel">${aboutUS.reel}</span>
                  <span class="sp_table">${aboutUS.sp_table}</span>
                </div>
                <div class="about__des">
                  <p class="about_comment">${aboutUS.aboutComment}</p>
                </div>
                <div class="about_video">
                  <div class="video__click col-lg-4">
                    <img src="img/about_1_2.jpg" alt="sora" />
                    <i class="fa-solid fa-play play" id="play"></i>
                  </div>
                  <div class="video__mark col-lg-6" id = "video__mark">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="choose__us padd">
    <div class="container">
      <div class="row rev">
        <div class="col-lg-6">
          <div class="why__choose__us">
            <div class="heading-sp">
              <h4 class="head-sp">${chooseUs.headSp}</h4>
              <p class="head__main">
                ${chooseUs.head__main}
                <span class="main__sp">${chooseUs.main__sp}</span>
              </p>
              <p class="head-des">${chooseUs.head_des}
              </p>
            </div>
          </div>
          <div id="chooseUSCard"></div>
          <hr />
          <button class="our__btn choose__btn">
            <a href="#">${chooseUs.choose__btn}</a>
          </button>
          <button class="our__play">
            <i class="fa-solid fa-play" id="openvideo"></i
            ><a href="#">${chooseUs.openvideo}</a>
          </button>
        </div>
        <div class="col-lg-6">
          <div class="chicken">
            <img src="img/why_1_1.png" alt="chicken" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="popular padd">
      <div class="container">
        <div class="pop__heading">
          <span class="pop__title">${popular.pop__title}</span>
          <h3 class="pop__Head">${popular.pop__Head}</h3>
        </div>
        <div class="filter__buttons">
          <div class="filter" id = "btnFlitertion"></div>
        </div>
        <div class="containerBox">
          <div class="row mt-5" id = "popCard"></div>
          <div class="sell__page_shop">
            <button class="sell__shop">
              <a href="shop.html" class="">${popular.sell__shop}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
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
    `;

        let layerSlider = "";
        for (let i = 0; i < homepage.slideText.length; i++) {
          layerSlider += `
      <div class="layer active">
            <img src="${homepage.slideText[i].img}" alt="sora" />
            <div class="slid">
              <div class="text__slider">
                <span class="title__slid">
                  ${homepage.slideText[i].titleSlide}</span
                >
                <span class="def">${homepage.slideText[i].def}</span>
              </div>
              <button class="order"><a href="#">${homepage.slideText[i].btnOrder}</a></button>
              <button class="menu"><a href="#">${homepage.slideText[i].menu}</a></button>
            </div>
          </div>
          `;
        }
        let secAbout = "";
        for (let i = 0; i < aboutUS.card.length; i++) {
          secAbout += `
    <div class="col-lg-4 col-md-6">
            <div class="card__food">
              <div class="card__food__img col-lg-2 col-md-4">
                <i class="${aboutUS.card[i].icon}"></i>
              </div>
              <div class="card__food_text col-lg-9 col-md-8">
                <h3 class="card__food_title">${aboutUS.card[i].cardTitle}</h3>
                <p class="card__food__des">${aboutUS.card[i].cardDes}</p>
              </div>
            </div>
          </div>
    `;
        }
        let phMarks = "";
        for (let i = 0; i < aboutUS.phMarks.length; i++) {
          phMarks += ` <p class="marks">${aboutUS.phMarks[i]}</p>`;
        }
        let chooseCard = "";
        for (let i = 0; i < chooseUs.choose__service.length; i++) {
          chooseCard += `
    <div class="choose__service">
                <div class="choose__icon">
                  <i class="${chooseUs.choose__service[i].icon}"></i>
                </div>
                <div class="choose__service__text">
                  <h5 class="beffet">${chooseUs.choose__service[i].beffet}</h5>
                  <p class="unleash">${chooseUs.choose__service[i].unleash}</p>
                </div>
              </div>
    `;
        }
        let btnNameFliter = "";
        for (let i = 0; i < popular.btnFliter.length; i++) {
          btnNameFliter += `<button class="filt__buttons">${popular.btnFliter[i]}</button>`;
        }

        document.getElementById("pageOne").innerHTML = box;
        document.getElementById("sli").innerHTML = layerSlider;
        document.getElementById("aboutCard").innerHTML = secAbout;
        document.getElementById("video__mark").innerHTML = phMarks;
        document.getElementById("chooseUSCard").innerHTML = chooseCard;
        document.getElementById("btnFlitertion").innerHTML = btnNameFliter;
        cardshow(popular.popularCard);
        checkOut();
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
      function cardshow(arr) {
        let popCardContent = "";
        for (let i = 0; i < arr.length; i++) {
          popCardContent += `
    <div class="col-lg-4 col-md-6 col-sm-6">
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
          <ul class="reat">
          <li class="pop__icon active">
          <i class="fa-solid fa-star"></i>
        </li>
        <li class="pop__icon active">
              <i class="fa-solid fa-star"></i>
            </li>
            <li class="pop__icon active">
              <i class="fa-solid fa-star"></i>
            </li>
            <li class="pop__icon active">
              <i class="fa-solid fa-star"></i>
            </li>
            <li class="pop__icon active">
              <i class="fa-solid fa-star"></i>
            </li>
            
          </ul>
        </div>
        <p class="pop__desc">${arr[i].pop__desc}</p>
        <div>
          <span class="pop__price">PRICE - $ ${arr[i].newPrice}<span class="price__old">/ $ ${arr[i].oldPrice}</</span></span>
        </div>
      </div>
    </div>
  </div>
  
    `;
        }
        document.getElementById("popCard").innerHTML = popCardContent;
        let cards = Array.from(document.querySelectorAll(".pop__card"));
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].new) {
            cards[i].classList.add("pop__new");
          }
          if (arr[i].dic) {
            cards[i].classList.add("pop__sel");
          }
        }
      }
      showDataPage();
      // window  open Setting********************************************
      let xclose = document.getElementById("xclose");
      let settingBox = document.getElementById("setting__box");
      let setting = document.getElementById("setting");
      setting.addEventListener("click", () => {
        settingBox.style.right = "0%";
      });
      xclose.addEventListener("click", () => {
        settingBox.style.right = "-100%";
      });
      // window  close Setting*******************************************
      let themePage = document.body;
      let btnlight = document.getElementById("btnlight");
      let btnMood = document.getElementById("btnMood");
      let theme = "";
      btnMood.addEventListener("click", () => {
        themePage.classList.add("dark-mode");
        theme = "dark";
        localStorage.setItem("mood", JSON.stringify(theme));
      });
      btnlight.addEventListener("click", () => {
        themePage.classList.remove("dark-mode");
        theme = "light";
        localStorage.setItem("mood", JSON.stringify(theme));
      });
      function getMood() {
        let mood = JSON.parse(localStorage.getItem("mood"));
        if (mood === "dark") {
          themePage.classList = "dark-mode";
          btnMood.classList.add("active");
        } else {
          themePage.classList = "";
          btnlight.classList.add("active");
        }
      }
      getMood();

      let mood = document.querySelectorAll(".mood");
      active(mood);

      //*************************************************************** */

      // nav bar Setting ********************************

      let togg = document.getElementById("togg");
      let over = document.querySelector(".over");
      let leftNav = document.getElementById("left_nav");
      let close = document.getElementById("close");

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

      // // slider  ****************************************************************************

      let slider = document.getElementsByClassName("layer");
      let indicator = Array.from(document.querySelectorAll(".indicator"));
      let ind = 0;

      // get index fot indcators
      for (let i = 0; i < indicator.length; i++) {
        indicator[i].onclick = function () {
          ind = indicator[i].getAttribute("data-index");
          console.log(ind);
          changeSlider();
        };
      }

      function changeSlider() {
        for (let i = 0; i < slider.length; i++) {
          slider[i].classList.remove("active");
          slider[ind].classList.add("active");
        }
        for (let i = 0; i < indicator.length; i++) {
          indicator[i].classList.remove("active");
          indicator[ind].classList.add("active");
        }
      }
      setInterval(function () {
        if (ind < slider.length - 1) {
          ind++;
          changeSlider();
        } else {
          ind = 0;
          changeSlider();
        }
      }, 5000);

      // // //***************************************************************** */ */

      // flitertion Card Start

      let {
        popular: { popularCard },
      } = apiData;
      let valueSearch = "";
      let btnFliter = document.querySelectorAll(".filt__buttons");
      active(btnFliter);
      btnFliter[0].classList.add("active");
      btnFliter.forEach((ele) => {
        ele.addEventListener("click", () => {
          valueSearch = ele.innerHTML.toLocaleLowerCase();
          filter(valueSearch);
        });
      });
      function filter(valueFilter) {
        let cardFliter = [];
        if (valueFilter === "all categories" || valueFilter === "جميع الفئات") {
          cardFliter = popularCard;
        } else {
          cardFliter = popularCard.filter((ele) => {
            return ele.nameFliter.toLocaleLowerCase() == valueFilter;
          });
        }
        cardshow(cardFliter);
        actionAdd();
      }

      // Star rate ***********************
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

      // addToCart Start **********************************
      let cardPage;
      let allshop = Array.from(document.querySelectorAll(".shop"));
      let cards = Array.from(document.querySelectorAll(".pop__card"));
      if (localStorage.getItem("pageCards") == null) {
        cardPage = [];
      } else {
        cardPage = JSON.parse(localStorage.getItem("pageCards"));
        document.getElementById("totalShopCard").innerHTML = cardPage.length;
        for (let i = 0; i < cardPage.length; i++) {
          allshop[cardPage[i].id].classList.add("active");
        }
      }
      function actionAdd() {
        let allshop = Array.from(document.querySelectorAll(".shop"));
        allshop.forEach((ele, index) => {
          ele.addEventListener("click", () => {
            if (ele.classList.contains("active")) {
              ele.classList.remove("active");
              removeCard(popularCard[index].id);
            } else {
              ele.classList.add("active");
              addTOCard(index);
            }
            localStorage.setItem("pageCards", JSON.stringify(cardPage));
            document.getElementById("totalShopCard").innerHTML =
              cardPage.length;
          });
        });
      }
      actionAdd();
      function addTOCard(index) {
        if (trusted) {
          cardPage.push(popularCard[index]);
          document.getElementById("Add").style.right = "0";
          setTimeout(() => {
            document.getElementById("Add").style.right = "-100%";
          }, 1000);
          active(allshop);
        } else {
          let login = document.getElementById("login");
          login.click();
        }
      }
      function removeCard(idRemover) {
        cardPage = cardPage.filter((ele) => {
          return ele.id !== idRemover;
        });
      }

      // addToCart End ************************************
      // flitertion Card End

      // // //***************************************************************** */ */

      // lite box
      let play = document.getElementById("play");
      let xmark = document.getElementById("xmark");
      let liteBox = document.getElementById("lite__box");
      let openvideo = document.getElementById("openvideo");

      openvideo.addEventListener("click", function () {
        liteBox.style.display = "flex";
      });
      play.addEventListener("click", function () {
        liteBox.style.display = "flex";
      });
      xmark.addEventListener("click", function () {
        liteBox.style.display = "none";
      });
    });
  // Start Login Setting *******************************************
  // Check *********************************************
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
  let login = document.getElementById("login");
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
        window.location.reload();
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
  // End Login Setting *******************************************
}

fetching();
// //***************************************************************************** */
