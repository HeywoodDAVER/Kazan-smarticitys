let search = document.getElementById('search');
let mainNav = document.getElementById('mainNav');
let children = mainNav.children
let bool = false


search.addEventListener('click', function(e){
    if(bool == false){
        bool = true
        addClass(children[0])
        addClass(children[1])
        addClass(children[2])
        addClass(children[3])
        removeClass(children[4])
    }else{
        removeClass(children[0])
        removeClass(children[1])
        removeClass(children[2])
        removeClass(children[3])
        addClass(children[4])
        bool = false
    }
})

function addClass (child){
    child.classList.add('disable')
}
function removeClass (child){
    child.classList.remove('disable')
}