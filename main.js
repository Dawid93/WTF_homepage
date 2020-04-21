console.log('elo!')
const name = 'Dave Donor';
const age = 27;

console.log(hello(name, age));

function hello(name, age ) {
    return `Hi i'm ${name} and my age is ${age}`;
}

const navigationSwitcher = document.querySelector(".navigation__switcher--js");

navigationSwitcher.addEventListener('click',(e)=> {
    const navigationList = document.querySelector(".navigation__list--js");
    navigationList.classList.toggle("navigation__list--visible");
});