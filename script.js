//traversing the dom

var itemList=document.querySelector('#items');

// //parent node
// itemList.parentNode.style.backgroundColor='grey';



// console.log(itemList.parentElement);



// console.log(itemList.childNodes);


//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="red";


//firstchild

// console.log(itemList.firstChild);
// firstElementChild
// itemList.firstElementChild.style.backgroundColor="red";
// itemList.firstElementChild.textContent="red";

// lastElementChild
// itemList.lastElementChild.style.backgroundColor="purple";
// itemList.lastElementChild.textContent="purple";


//nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);


//previousSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);


//createElement

//create a div

var  newDiv=document.createElement('div');
//add class
newDiv.className="hello";
newDiv.id="helo1";

newDiv.setAttribute("tittle", "Hello div");

//create text node

var newDivText=document.createTextNode(" HEllo word");
newDiv.appendChild(newDivText);



var container=document.querySelector("header .container");
var h1=document.querySelector('header h1');
console.log(newDiv);

container.insertBefore(newDiv, h1);


var item1 = document.querySelector('#items li:first-child');
var hello = document.createTextNode('Hello world');
item1.parentNode.insertBefore(hello, item1);
