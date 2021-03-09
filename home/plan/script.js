let text = document.querySelector(".input");
 function  add() {
  
  if (text.value.length<1){
return }
const element = document.querySelector(".mission ul");
const li = document.createElement('li');
// li.innerHTML = '<label><input type="checkbox">' + text.value + '<button onClick="del(this)" class="del">x</button></label>';
const label = document.createElement('label');
const input = document.createElement('input');
const textValue = document.createTextNode(text.value)

input.setAttribute('type','checkbox')
element.appendChild(li);
li.appendChild(label);
label.appendChild(input)
label.appendChild(textValue)
text.value = '';

const button = document.createElement('button')
button.classList.add('del')
button.innerText = 'x'
button.addEventListener('click', ev => {
del(button)
})
label.appendChild(button)
}
window.addEventListener('load', () => {
text.addEventListener("keypress", send)
})
function send(ev){
if (ev.key==="Enter"){
add()
}
}

function del (delButton){
 delButton.parentElement.remove()
}
