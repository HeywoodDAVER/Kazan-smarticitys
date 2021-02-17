let acti1 = document.getElementById('acti1');
let acti2 = document.getElementById('acti2');
let acti3 = document.getElementById('acti3');
let acti4 = document.getElementById('acti4');
let acti5 = document.getElementById('acti5');
let acti6 = document.getElementById('acti6');
let acti7 = document.getElementById('acti7');
let acti8 = document.getElementById('acti8');
let acti9 = document.getElementById('acti9');
let acti10 = document.getElementById('acti10');
let acti11 = document.getElementById('acti11');
let acti12 = document.getElementById('acti12');



acti1.addEventListener("click", selectChild(acti1))

function selectChild(acti){
    let child1 = acti.childNodes[1];
    child1.classList.add('disable');
    console.log('bjr');
}

