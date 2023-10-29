// hamburger nav icon design
const menuBtn = document.querySelector('.hamburger');
const navItems = document.querySelector('.navItems');
const navAnchortag = document.querySelectorAll('.navItems>a');
function showNav(){
    navItems.classList.toggle('show');
    // console.log("clicked")
}
menuBtn.addEventListener('click',showNav);
console.log(navAnchortag);
navAnchortag.forEach((aTag)=>{
    aTag.addEventListener('click',showNav);
})