const oList = document.querySelector('#list1') //ul

//ul 的第二个子元素节点
const oli =  oList.firstElementChild.nextElementSibling
//oli.style.backgroundColor = "red"
oli.style.cssText = 'border:1px solid red'

//background-color => backgroundcolor
//float ==> cssFloat

oli.style.backgroundColor = 'red'
oli.style.border = '4px solid blue'

const comStyle = window.getComputedStyle(oli)
console.log(comStyle);  //console.log(comStyle.borderStyle)  border 
console.log(comstyle.borderLeft);

