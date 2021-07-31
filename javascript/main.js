// // Gives a directory of everything in the document
// // console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// // document.title = 123;
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// // document.all[10].textContent = 'Hello'
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)

// GETELEMENTBYID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title')
// var header = document.getElementById('main-header')
// console.log(headerTitle)
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'Goodbye'
// headerTitle.innerHTML = '<h3>Hello</h3>'
// header.style.borderBottom = 'solid 3px #000'

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'
//     // Gives error
// // items.style.backgroundColor = '#f4f4f4'
//
// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// GETELEMENTSBYTAGNAME //

//  var li = document.getElementsByTagName('li')
//  console.log(li)
//  console.log(li[1])
//  li[1].textContent = 'Hello 2'
//  li[1].style.fontWeight = 'bold'
//  li[1].style.backgroundColor = 'yellow'
//      // Gives error
// // // items.style.backgroundColor = '#f4f4f4'
//
//  for(var i = 0; i < li.length; i++){
//      li[i].style.backgroundColor = '#f4f4f4'
//  }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px #ccc'
//
// const input = document.querySelector('input')
// input.value = 'Hello World'
//
// const submit = document.querySelector('input[type="submit"]')
// submit.value="SEND"
//
// const item = document.querySelector('.list-group-item')
// item.style.color = 'red'
//
// const lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'
//
// const secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'coral'


// QUERYSELECTORALL //
// const titles = document.querySelectorAll('.title')
//
// console.log(titles)
// titles[0].textContent = 'Hello'
//
// var odd = document.querySelectorAll('li:nth-child(odd)')
//
// for(var i =0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4'
// }

// Traversing The Dom //
// const itemList = document.querySelector('#items')
// parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'

// parentElement

// console.log(itemList.parentElement)
//  itemList.parentElement.style.backgroundColor = '#f4f4f4'

// childNodes
// console.log(itemList.childNodes)

// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'
//
// // firstChild
// console.log(itemList.firstChild)
// // firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello 1'
//
// // lastChild
// console.log(itemList.lastChild)
// // lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Hello 4'
//
// // nextSibling
// console.log(itemList.nextSibling)
// // next elementSibling
// console.log(itemList.nextElementSibling)

//previousSibling

// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'green'


// createElement
// create a div
// const newDiv = document.createElement('div')
// // Add Class
// newDiv.className = 'hello'
//
// // Add id
// newDiv.id = 'hello1'
//
// // add attr
// newDiv.setAttribute('title', 'Hello Div')
//
// // Create text node
// const newDivText = document.createTextNode('Hello World')
//
// // Add text to div
// newDiv.appendChild(newDivText)
//
// const container = document.querySelector('header .container')
// const h1 = document.querySelector('header h1')
//
// console.log(newDiv)
//
// container.insertBefore(newDiv, h1)

const button = document.getElementById('button').addEventListener
('click', buttonClick)


function buttonClick(){
    // console.log('button clicked')
    document.getElementById('header-title').textContent = 'changed'
}





