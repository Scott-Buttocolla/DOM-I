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


// const navStyle = document.querySelectorAll("nav a");
// navLinks.forEach((item, i) => {
//   item.style.color = "green"
// })  works but does not included 2 added links with append and prepend

// link colors
document.querySelectorAll('a').forEach(e => e.style.color = "green");
// link colors

const logoh1 = document.querySelector('.cta-text h1');
logoh1.textContent = 'DOM Is Awesome';
logoh1.style.color = "darkblue";
document.querySelectorAll('h1').forEach(c => c.style.fontSize = "7rem")

const startButton = document.querySelector('.cta .cta-text button');
startButton.textContent = "Get Started";
document.querySelectorAll('button').forEach(b => b.style.borderRadius = "50%")
startButton.style.textDecoration = "underline"

//  Above picture content
// const featuresHeader = document.querySelectorAll('.text-content h4');
// featuresHeader[0].textContent = siteContent['main-content']['features-h4']
// const featuresContent = document.querySelectorAll('.text-content p');
// featuresContent[0].textContent = siteContent['main-content']['features-content']

const featureHeader = document.querySelectorAll('.text-content h4');
featureHeader[0].textContent = siteContent['main-content']['features-h4']
const featuresText = document.querySelectorAll('.text-content p');
featuresText[0].textContent = siteContent['main-content']['features-content']


// const featuresH4 = document.querySelector('.top-content:nth-child(1) h4 ');
// featuresH4.textContent = "Features";
// const featuresText = document.querySelector('.top-content:nth-child(1) p');
// featuresText.textContent = '"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."'

const aboutHeader = document.querySelectorAll('.text-content h4');
aboutHeader[1].textContent = siteContent['main-content']['about-h4']
const aboutContent = document.querySelectorAll('.text-content p');
aboutContent[1].textContent = siteContent['main-content']['about-content']

// const aboutText = document.querySelector('.text-content:nth-child(2) p');
// aboutText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// const aboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4 ');
// aboutH4.textContent = "About";
// const aboutText = document.querySelector('.text-content:nth-child(2) p');
// aboutText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."



// below picture content
const serviceHeader = document.querySelectorAll('.text-content h4');
serviceHeader[2].textContent = siteContent['main-content']['services-h4']
const serviceContent = document.querySelectorAll('.text-content p');
serviceContent[2].textContent = siteContent['main-content']['services-content'];
// const servicesH4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
// servicesH4.textContent = "Services";
// const servicesText = document.querySelector('.bottom-content .text-content:nth-child(1) p');
// servicesText.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
const productHeader = document.querySelectorAll('.text-content h4');
productHeader[3].textContent = siteContent['main-content']['product-h4'];
const productContent =document.querySelectorAll('.text-content p');
productContent[3].textContent = siteContent['main-content']['product-content'];
// const productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4 ');
// productH4.textContent = "Product";
// const productText = document.querySelector('.bottom-content .text-content:nth-child(2) p');
// productText.textContent = " Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
const visionHeader = document.querySelectorAll('.text-content h4');
visionHeader[4].textContent = siteContent['main-content']['vision-h4'];
const visionContent = document.querySelectorAll('.text-content p');
visionContent[4].textContent = siteContent['main-content']['vision-content'];
// const visionH4 = document.querySelector(".bottom-content .text-content:nth-child(3) h4")
// visionH4.textContent = "Vision";
// const visionText = document.querySelector(".bottom-content .text-content:nth-child(3) p")
// visionText.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


// Contact information
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4']
// const contactH4 = document.querySelector(".contact h4");
// contactH4.textContent = "Contact";
const contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = siteContent['contact']['address']
// var test = document.getElementById('someElementId');
// test.innerHTML = "The answer <br>to life, the universe, and everything...<br> is 42.";
// const address = document.querySelector(".contact p:nth-of-type(1)");
// address.textContent = "123 Way 456 Street Somewhere, USA"
const contactNum = document.querySelectorAll('.contact p');
contactNum[1].textContent = siteContent['contact']['phone']
// const phoneNum = document.querySelector(".contact p:nth-of-type(2)");
// phoneNum.textContent = "1 (888) 888-8888";
const contactEmail = document.querySelectorAll('.contact p');
contactEmail[2].textContent = siteContent['contact']['email']
// const emailAdd = document.querySelector(".contact p:nth-of-type(3)");
// emailAdd.textContent = "sales@greatidea.io"

document.querySelectorAll('h4').forEach(e => e.style.color = "blue");
document.querySelectorAll('h4').forEach(q => q.style.fontSize = "2rem")


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//Styles all elements inside the ('???')


const footer = document.querySelector('footer p')

footer.textContent = "Copyright Great Idea! 2018";