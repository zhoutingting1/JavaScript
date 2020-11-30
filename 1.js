/*
动态添加节点 */

//<li>swift</li>
const OList = document.querySelector('#list1')

const oliElement = document.createElement('li')
oliElement.textContent = 'swift'
// const oTextNode = document.createElement('swift')
// oliElement.appendChild(oTextNode)
// oliElement.textContent = 'swift'
// oliElement.textContent = 'swift'
// OList.append(oliElement)
//OList.prepend(oliElement)

//插入成第二个节点
//OList.firstElementChild.after(oliElement)

//插入成倒数第二个子节点
//OList.lastElementChild.before(oliElement)

//oList.lastElementChild.remove()

//替换JavaScript节点
//OList.lastElementChild.previousElementSibling.replaceWith(oliElement)

OList.lastElementChild.classList.add('list1')
OList.lastElementChild.previousElementSibling.classList.add('list')
OList.firstElementChild.classList.toggle('list1')

OList.addEventListener('mouseover',(event) => {
    event .target.classList.toggle('list1')
})