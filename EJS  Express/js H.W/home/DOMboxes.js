// let boxes = document.body.childNodes[1]
// // boxes.firstElementChild.style.backgroundColor = 'red';
// // document.body.firstChild

// document.body.firstElementChild.style.backgroundColor="blue";
// console.log(boxes)
// let box = document.body.firstChildNodes[1]

// document.body.firstElementChild.children[0].style.backgroundColor="blue"
// 'blue'
// document.body.firstElementChild.children[0].style.color="aqua"
// 'aqua'
// document.body.firstElementChild.children[1].style.backgroundColor="green"
// 'green'
// document.body.firstElementChild.children[1].style.color="yellow"
// 'yellow'
// document.body.firstElementChild.children[2].style.backgroundColor="red"
// 'red'
// document.body.firstElementChild.children[2].style.color="pink"
// 'pink'
// document.body.firstElementChild.children[3].style.backgroundColor="voilet"
// 'voilet'
// document.body.firstElementChild.children[3].style.backgroundColor="violet"
// 'violet'
// document.body.firstElementChild.children[3].style.color="blue"
// 'blue'
// document.body.firstElementChild.children[4].style.backgroundColor="brown"
// 'brown'
// document.body.firstElementChild.children[4].style.color="yellow"
// 'yellow'

console.log("hi i am harshit");
console.log('hello');
let boxes = document.body.querySelector('.container').children;
console.log(boxes);

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1} , ${val2} , ${val3})`;
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})