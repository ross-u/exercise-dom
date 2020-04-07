const h1 = document.querySelector('h1');

const googleLink = document.getElementById('google-link');

// GET THE ATTRIBUTE VALUE
const headlineId = h1.getAttribute("id");
const headlineClass = h1.getAttribute("class");
const googleLinkUrl = googleLink.getAttribute('href');

console.log('headlineId :', headlineId);
console.log('headlineClass :', headlineClass);
console.log('googleLinkUrl :', googleLinkUrl);


// SET THE ATTRIBUTE VALUE
const contentDiv = document.querySelector('#content');

contentDiv.setAttribute('id', 'title-div');


const listElement = document.querySelector("#item-list");
listElement.removeAttribute("id");


// CREATE NEW ELEMENT - createElement()
const h2Tag = document.createElement('h2');

// Add content to the element using innerHTML
h2Tag.innerHTML = "Sub Title";


const body = document.querySelector('body');
body.appendChild(h2Tag)

// console.log(body);



const articleBrief = document.createElement('h3');
const articleContent = document.createElement('p');

const textContent1 = document.createTextNode('Article Headline');
const textContent2 = document.createTextNode('Lorem ipsum '.repeat(100));

articleBrief.appendChild(textContent1);
articleContent.appendChild(textContent2);

body.appendChild(articleBrief);
body.appendChild(articleContent);

