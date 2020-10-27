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
  item.textContent = siteContent["nav"][`nav-item-${i + 1}`]
})

// new link
const blogLink = document.createElement("a");
blogLink.textContent = "Blog"
blogLink.href = "#";
document.querySelector("nav").appendChild(blogLink);

const visitLink =document.createElement("a");
visitLink.textContent = "Visit";
visitLink.href = "#";
document.querySelector("nav").prepend(visitLink);

// link colors
console.log(navLinks)
const navColor = document.querySelectorAll("nav a");
console.log(navColor)
//navColor.style.color ="green";

// .style.color = "green";

const logoh1 = document.querySelector('.cta-text h1');
logoh1.textContent = 'DOM Is Awesome';
logoh1.style.color = "green";

const startButton = document.querySelector('.cta .cta-text button');
startButton.textContent = "Get Started";

//  Above picture content
const featuresH4 = document.querySelector('.top-content:nth-child(1) h4 ');
featuresH4.textContent = "Features";

const featuresText = document.querySelector('.top-content:nth-child(1) p');
featuresText.textContent = '"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."'

const aboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4 ');
aboutH4.textContent = "About";
const aboutText = document.querySelector('.text-content:nth-child(2) p');
aboutText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."



// below picture content

const servicesH4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
servicesH4.textContent = "Services";
const servicesText = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servicesText.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4 ');
productH4.textContent = "Product";
const productText = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productText.textContent = " Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const visionH4 = document.querySelector(".bottom-content .text-content:nth-child(3) h4")
visionH4.textContent = "Vision";
const visionText = document.querySelector(".bottom-content .text-content:nth-child(3) p")
visionText.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// Contact information

const contactH4 = document.querySelector(".container .contact h4");
contactH4.textContent = "Contact";

const address = document.querySelector(".container .contact p:nth-of-type(1)");
address.textContent = "123 Way 456 Street Somewhere, USA"

const phoneNum = document.querySelector(".container .contact p:nth-of-type(2)");
phoneNum.textContent = "1 (888) 888-8888";

const emailAdd = document.querySelector(".container .contact p:nth-of-type(3)");
emailAdd.textContent = "sales@greatidea.io"





const footer = document.querySelector('footer p')

footer.textContent = "Copyright Great Idea! 2018";