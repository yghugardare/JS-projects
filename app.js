// hamburger nav icon design
const menuBtn = document.querySelector('.hamburger');
const navItems = document.querySelector('.navItems');
// navAnchortag is node list
const navAnchortag = document.querySelectorAll('.navItems>a');
function showNav(){
    navItems.classList.toggle('show');
}
menuBtn.addEventListener('click',showNav);
console.log(navAnchortag);
navAnchortag.forEach((aTag)=>{
    aTag.addEventListener('click',showNav);
})
// hanburger logic ends here
// changing navbar color from section to other.
// using scroll event
// offset height is height of the element
// offset top is height from body to that section
// scroll y tells the current position
const sections = document.querySelectorAll('section');
const nav = document.querySelector('nav');
function activateNav(){
    sections.forEach((section)=>{
        let sectionHeight = section.offsetHeight;
        let sectionStart = section.offsetTop;
        let curPosition = window.scrollY;
        
        if (curPosition >= sectionStart && curPosition < sectionStart + sectionHeight){
            let sectionId = section.getAttribute('id');
            navAnchortag.forEach((aTag)=>{
                aTag.classList.remove('active');
                document.querySelector(`.navItems a[href *= ${sectionId}]`).classList.add('active');
            });
        }
    });
}
window.addEventListener('scroll',activateNav);
// changing navbar color logic ends here