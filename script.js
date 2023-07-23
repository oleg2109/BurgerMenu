document.addEventListener('DOMContentLoaded', () => {
const wrapper = document.querySelector('.wrapper');  
const btn = document.querySelector('.btnMenu');
const line1 = document.querySelector('.icon1');
const line2 = document.querySelector('.icon2');
const line3 = document.querySelector('.icon3');
const header = document.querySelector('.header');
const headerHeigth = header.offsetHeight;

btn.addEventListener('click', () => {
line1.classList.toggle('change');
line2.classList.toggle('open');
line3.classList.toggle('change2');
btn.classList.toggle('changemenu');

if(!line1.classList.contains('change')){
    line1.classList.add('backchange');
    line2.classList.add('close');
    line3.classList.add('backchange2');
} else {
   line1.classList.remove('backchange');
   line2.classList.remove('close');
   line3.classList.remove('backchange2');
}


if(btn.classList.contains('changemenu')){
    const menu = create('div', 'menu', wrapper);
    const menuList = create('ul', 'meniList', menu);
    create('li', 'menuItem', menuList, 'SECTION1');
    create('li', 'menuItem', menuList, 'SECTION2');
    create('li', 'menuItem', menuList, 'SECTION3');
    create('li', 'menuItem', menuList, 'SECTION4');
    create('li', 'menuItem', menuList, 'SECTION5');
    create('li', 'menuItem', menuList, 'SECTION6');
    const menuHeight = menu.offsetHeight;

    menu.animate([{
        transform: `translateY(${-menuHeight - headerHeigth}px)`
    },{
        transform: `translateY(${0}px)` 
    }], 300);
    //menu.style = `transform: translateY(${0}px)`;
} else {
    const menu = document.querySelector('.menu');
    const menuHeight = menu.offsetHeight;
    menu.animate([{
        transform: `translateY(${0}px)`
    },{
        transform: `translateY(${-menuHeight - headerHeigth}px)` 
    }], 300);
    menu.style = `transform: translateY(${-menuHeight - headerHeigth}px)`;

   

    setTimeout(() => {
        wrapper.removeChild(menu);
    }, 300);
    
}

})



function create(tag, clas, append, inner) {
    const el = document.createElement(tag);
    el.className = clas;
    if(append) append.appendChild(el);
    if(inner) el.innerHTML = inner;
    return el
    }
})