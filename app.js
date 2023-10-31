import { fiveQuizData,tenQuizData } from "./quizData";
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
/*--------------------------------------------------------------------------------------------------------*/
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
        
        if (curPosition >= sectionStart && curPosition <= sectionStart + sectionHeight-10){
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
/*--------------------------------------------------------------------------------------------------------*/
// Notes app starts here
// DOMContentLoaded event is commonly used in JavaScript to 
// ensure that your code runs only after the HTML document has
// been fully loaded, which is essential for web applications 
// to prevent JavaScript from trying to access elements that don't yet exist 
// in the DOM. 
document.addEventListener('DOMContentLoaded',function(){
    const notesForm = document.querySelector("#noteForm");
    const noteInput = document.querySelector("#noteInput");
    const viewNote = document.querySelector("#viewNotes");
    // add notes
    notesForm.addEventListener('submit',function(evt){
        evt.preventDefault();
        let noteText = noteInput.value;
        console.log(noteText)
        noteText.trim()!=="" ? addNoteToLocalStorage(noteText) :alert("Please Enter Something!") 
        noteInput.value=""; 
    });
    function addNote(noteText){
        const note = document.createElement('div');
        note.classList.add('note');
        note.innerHTML=`
        <span>${noteText}</span>
        <div class="action-buttons">
        <button class="edit">✍️</button>
        <button class="delete">🗑️</button>
        </div>
        `
        viewNote.appendChild(note);
        // we deleted note here
        const delteBtn = note.querySelector('.delete');
        delteBtn.addEventListener('click',()=>{
            viewNote.removeChild(note);
            updateLocalStorage();
        });
        // edit the note
        const editBtn = note.querySelector(".edit");
        editBtn.addEventListener('click', () => {
            const noteText = note.querySelector('span');
            const newText = prompt("Edit text: ", noteText.innerText);
            if (newText !== null && newText != "") {
                noteText.innerText = newText;
                updateLocalStorage();
            }
        });
        
    };
    function addNoteToLocalStorage(noteText){
        const notes = getLocalStorageItem();
        notes.push(noteText);
        localStorage.setItem('notes',JSON.stringify(notes));
        addNote(noteText);
    }
    function getLocalStorageItem(){
        const storedNotes = localStorage.getItem('notes');
        return storedNotes? JSON.parse(storedNotes):[];
    }
    function updateLocalStorage(){
        // noteList is not an array but DOM nodeList
        const noteList = document.querySelectorAll('.note span');
        // convert noteList to array and store each spans text content
        // to notes array
        // 2nd way use Arrays.from(notes)
        const notes = [...noteList].map(note=>note.textContent);
        localStorage.setItem('notes',JSON.stringify(notes))
    }
    // display local storage items
    function loadLocalStorageItems(){
        const notes = getLocalStorageItem();
        notes.forEach(note=>addNote(note));
    }
    loadLocalStorageItems();
});
// Notes app ends here
/*--------------------------------------------------------------------------------------------------------*/
// Quiz app logic starts here
let noOfQuestionsValue = document.querySelector("#noOfQuestions");
let topicName = document.querySelector("#topic");
let time = document.querySelector("#timer");
let difficultyValue = document.querySelector("#difficulty");
let startBtn = document.querySelector("#startBtn");
startBtn.addEventListener('click',()=>{
    console.log(noOfQuestionsValue.value)
})