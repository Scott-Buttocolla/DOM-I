const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])

const bigLogo = document.getElementById('cta-img')
bigLogo.setAttribute('src', siteContent['cta']['img-src'])

const logo3 = document.getElementById("middle-img")
logo3.setAttribute('src', siteContent
["main-content"]["middle-img-src"])

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((item, i) => {
  console.log(item)
  item.textContent = siteContent["nav"][`nav-item-${i + 1}`]
})
const header =document.querySelector('header');
header.style.color = "green";

const logoh1 = document.querySelector('.cta-text h1');
logoh1.textContent = 'DOM Is Awesome';

const startButton = document.querySelector('.cta .cta-text button');
startButton.textContent = "Get Started";

//  Above picture content
const featuresH4 = document.querySelector('.top-content:nth-child(1) h4 ');
featuresH4.textContent = "Features";
const featuresText = document.querySelector('.top-content:nth-child(1) p');
featuresText.textContent = '"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."'
const aboutH4 = document.querySelector('.text-content:nth-child(2) h4 ');
aboutH4.textContent = "About";
const aboutText = document.querySelector('.text-content:nth-child(2) p');
aboutText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// const mainContentTop = document.querySelector(.main-content .top-content);
// mainContentTop.textContent = ""
// const productContent = document.querySelector( 'div .bottom-content .text-content:nth-of-typeof(2) p')
// productContent.textContent = ' Enter text here'


// createElement    node   ....???? cloneNode

const visionHeader = document.querySelector('div .bottom-content .text-content:nth-of-type-of(3) h4')
const visionContent =
visionHeader.textContent = "Vision";

// contactHeader.textContent = 'Contact'





const footer = document.querySelector('footer p')
console.log(footer)
footer.textContent = "Copyright Great Idea! 2018";