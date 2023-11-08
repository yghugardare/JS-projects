import { fiveQ,tenQ } from "./quizData.js";
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
// Quiz DATA

// Quiz app logic starts here
let noOfQuestionsValue = document.querySelector("#noOfQuestions");
let topicName = document.querySelector("#topic");
let time = document.querySelector("#timer");
let difficultyValue = document.querySelector("#difficulty");
let startBtn = document.querySelector("#startBtn");
let quizForm = document.querySelector(".startQuiz");
let quizQna = document.querySelector(".quizQna");
quizForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let numOfQ = parseInt(noOfQuestionsValue.value);
    let topic = topicName.value
    let timer = time.value;
    let dif = difficultyValue.value;
    quizForm.classList.toggle('hide');
    quizQna.classList.toggle('hide');
    if(numOfQ === 5){
        startQuiz(fiveQ,topic,timer,dif,5);
    }
    else{startQuiz(tenQ,topic,timer,dif,10); }
    startTimer(timer);
});

let intervalId ;
function showTimeOnScreen(time,actualTime){
    let percent = ((time/actualTime)*100).toFixed(0);
    let progressBar = document.querySelector(".progressBar");
    let progressText = document.querySelector(".progressText");
    progressBar.style.width= `${percent}%`;
    progressText.innerText=`${time}`;
}
// function to play audio when time is 3 sec
function playAudio(src){
    const audio = new Audio(src);
    audio.play();
}
function stopAudio(src){
    const audio =  new Audio(src);
    audio.pause();
}
function stopTimer(){
    clearInterval(intervalId);
    stopAudio("countdown.mp3");
            // hide the submit btn
    document.querySelector("#answerSubmitBtn").style.display = "none";
    document.querySelector("#nextQuestionBtn").style.display ="block";
    document.querySelectorAll(".ans").forEach((ansDiv)=>{
        ansDiv.classList.remove('selected');
        ansDiv.style.pointerEvents = "none";
    })
}
function startTimer(timer){
    let time = parseInt(timer);
    let actualTime = parseInt(timer);
    intervalId = setInterval(()=>{
        if(time === 5){
            playAudio("countdown.mp3")
        }
        if(time>0){
            time--;
            showTimeOnScreen(time,actualTime);
        }else{
            stopTimer();
        }
    },1000)
}
function fillQnaOneByOne(quizData,currQ,totalQ){
    document.querySelectorAll(".ans").forEach((ansDiv)=>{
        ansDiv.style.pointerEvents = "auto";
    })
    let questionText = document.querySelector(".questionText");
    let currQText = document.querySelector(".currQ");
    // let currQ = parseInt(currQText.innerText);
    if(currQ > totalQ) return;
    let answereBoxs = document.querySelectorAll(".ans") ;
    // fill current question and answer
    let currentQnA = quizData[currQ-1];
    console.log(currentQnA)
    // fill the question
    questionText.innerHTML= currentQnA?.question;
    currQText.innerText = currQ;
    // fill the answer
    answereBoxs.forEach((ansDiv,index)=>{
        ansDiv.innerHTML = `
        <span class="text">${currentQnA.options[index]}</span>
        <span class="checkbox">
                <i class="fas fa-check"></i>
        </span>
        `
    })
}
function answerSubmitFunction(selectedOptions,currentQnA,marks,currQu){

    let selectedOption = selectedOptions[selectedOptions.length-1];
    console.log("Insdie function", selectedOption)
    // console.log(typeof selectedOption)
    // getting the answer btn
    let answerSubmitBtn = document.querySelector('#answerSubmitBtn');
    let nextQuestionBtn = document.querySelector("#nextQuestionBtn");
    let answereBoxs = document.querySelectorAll(".ans");
    answereBoxs[selectedOption].classList.add('checked');
    if(selectedOption !== undefined){
        answerSubmitBtn.removeAttribute('disabled');
    }
    // answer submisstion logic
   let correctAnswer = currentQnA.correctAnswer;
   let checkedOption = -1;
    answerSubmitBtn.addEventListener("click", () => {
        stopTimer();
        answerSubmitBtn.style.display = "none";
        nextQuestionBtn.style.display = "block"; 
        checkedOption = [...answereBoxs].findIndex(ansDiv=> ansDiv.classList.contains('checked'));
        //  when all checks done hide the submit btn
    // and show the next Btn
          
        console.log("in func now",selectedOption)
        console.log("in func now",checkedOption)
        console.log("curr",currQu, typeof currQu)
        let key = currQu;
        marks[key] = (selectedOption === correctAnswer)? 1 : 0;
        if(checkedOption === correctAnswer){
            answereBoxs[checkedOption].classList.remove('selected');
            answereBoxs[checkedOption].classList.add('correct');
        }
        else{
            
            answereBoxs[checkedOption].classList.add('wrong');
            answereBoxs[correctAnswer].classList.add('correct');
            answereBoxs[checkedOption].classList.remove('selected');
        }
        
        console.log("marks are",marks)
        console.log("CheckedOption",checkedOption)
    
    

    });
    // selectedOption = undefined;
}

// // function to show progress on screen
// function showTimeOnScreen(time){
//     let progressBar = document.querySelector(".progressBar");
//     let progressText = document.querySelector(".progressText");
//     let timer = parseInt(time.value);
//     let percent = (time/timer)*100;
//     progressBar.style.width = `${percent}%`;
//     progressText.innerText = ` ${time}`;
// }
// let startTiming;
// function stopWork(answerSubmitBtn,nextQuestionBtn){
//     clearInterval(startTiming);
//             answerSubmitBtn.style.display = "none";
//             nextQuestionBtn.style.display = "block"
            
// }

// function startTimer(timer){
//     let answerSubmitBtn = document.querySelector('#answerSubmitBtn');
//     let nextQuestionBtn = document.querySelector("#nextQuestionBtn");
//     let time  = parseInt(timer);
//     startTiming = setInterval(()=>{
//         if(time === 3){
//             playAudio("countdown.mp3");
//         }
//         if(time>=0){
//             showTimeOnScreen(time);
//             time--;
//         }else{
//             stopWork(answerSubmitBtn,nextQuestionBtn);
//         }
//     })
// }

function startQuiz(arrayQ,topic,timer,difficulty,totalQ){
    document.querySelector(".totalQ").innerText = totalQ;
    let currQu = parseInt(document.querySelector(".currQ").innerText);
    // For answers
    let answerContainer = document.querySelector(".answers");
    let answereBoxs = document.querySelectorAll(".ans") ;
    let answerText = document.querySelector(".text");
    
    const quizData = arrayQ.filter((quizObj)=>{
        if(quizObj.topic === topic && quizObj.difficulty === difficulty){
            return quizObj;
        }
    });
    // console.log(quizData);
    // marks
    const marks = {};
    if(currQu <= totalQ){
        fillQnaOneByOne(quizData,currQu,totalQ);
    }
    else{
        console.log(marks)
    }
    let currentQnA = quizData[currQu-1];
    
    
    // console.log(time,typeof time)
    
    // startTimer(time,answerSubmitBtn,nextQuestionBtn,marks,currQu);
    let selectedOptions = []
    // answer selection logic
    answereBoxs.forEach((ansDiv,index)=>{
        
        ansDiv.addEventListener('click',()=>{
            answereBoxs.forEach((ansDiv)=>{ansDiv.classList.remove("selected");
            ansDiv.classList.remove('checked');
        });

            ansDiv.classList.toggle('selected');
            // get selected option
            selectedOptions.push(index)
            // console.log(selectedOptions)
            console.log("value sned",currQu)
            answerSubmitFunction(selectedOptions,currentQnA,marks,currQu);
            
        });
        // ansDiv.classList.remove('selected');
    });
    
    // 
    // next btn logic
    
        nextQuestionBtn.addEventListener("click", () => {
            startTimer(timer);
            answereBoxs.forEach((ansDiv)=>{
                    if(!ansDiv.classList.contains("checked")){
                        ansDiv.style.cursor = "disabled";
                    }
                    ansDiv.classList.remove('wrong');
                    ansDiv.classList.remove('correct');
            });
            currQu += 1;
            if(currQu <= totalQ){
                nextQuestionBtn.style.display="none";
                answerSubmitBtn.style.display="block";
                fillQnaOneByOne(quizData,currQu,totalQ);
            }
            else{
                showFinalResult(marks,totalQ);
                
            }
            
        })

    // answereBoxs.forEach((ansDiv,index)=>{
    //     if(ansDiv.classList.contains('selected')){
    //         selectedOption = index;
    //     }
    // });  
    
}

function showFinalResult(marks,totalQ){
    stopTimer();
    let quizQna = document.querySelector(".quizQna");
    let finalResult = document.querySelector(".finalResult");
    let totalScore = 0; 
    console.log("joker",marks.length);
    for(let key in marks){
        totalScore += marks[key];
    }
    quizQna.classList.toggle('hide');
    finalResult.classList.toggle('hide');
    let yourScore = document.querySelector(".yourScore");
    yourScore.innerText = `${totalScore}/${totalQ}`;
    let restartBtn = document.getElementById("restartBtn");
    restartBtn.addEventListener('click',()=>{
        location.reload();
    })
}
// Quiz app ends here
/*--------------------------------------------------------------------------------------------------------*/
// Dictionary App starts here(
let dictInput = document.querySelector("#dictInput");
let dictBtn = document.querySelector("#dictBtn");
let wordMainBody = document.querySelector(".wordMainBody");
let pronounciation;
async function fetchWordMeaning(){
    try{
        let word = dictInput.value;
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let resultObj = await response.json();
        wordMainBody.innerHTML = 
        `
        <div class="wordMeaning">
        <h3>Meaning-</h3><p>${resultObj[0]?.meanings[0]?.definitions[0]?.definition}</p>
    </div>
    <div class="wordMeaning">
        <h3>Meaning-</h3><p>Lorem ipsum dolor sit amet consectetur  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officiis dolores illum blanditiis amet deserunt aut, necessitatibus ab sint sunt deleniti vel. Modi placeat eius neque at. Ab minus pariatur nostrum! Illum, atque nemo sequi a totam tenetur eum eligendi odit, voluptate debitis odio, harum omnis neque? Placeat, cupiditate et est, perspiciatis iusto sed voluptatum nulla molestiae harum libero quaerat illum excepturi maiores. Quibusdam nihil autem libero. Quidem facere sunt placeat consequuntur vitae nam maxime recusandae facilis, dolore odit tempora, molestias voluptatibus ut quibusdam corporis animi repudiandae iure laudantium incidunt error nemo! Quia neque harum quisquam cumque animi consectetur ducimus!adipisicing elit. Natus, quisquam?</p>
    </div>
    <div class="wordMeaning">
        <h3>Meaning-</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quisquam?</p>
    </div>
    <div class="wordMeaning">
        <h3>Meaning-</h3><p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fugit nobis, distinctio facere ab officia qui eum itaque! Ad minima vitae officia, molestiae veniam beatae aliquid repellendus tempore cumque maxime laboriosam quis pariatur voluptate quo, ex ducimus optio id consequatur neque. Ratione deleniti voluptatum cum quos quam, hic veniam placeat! consectetur adipisicing elit. Natus, quisquam?</p>
    </div>
        `
        console.log(resultObj);
        console.log("Word- ",resultObj[0]?.word);
        console.log("POS-",resultObj[0]?.meanings[0]?.partOfSpeech);
        console.log("meaning-",resultObj[0]?.meanings[0]?.definitions[0]?.definition);
        console.log("Synonym-",resultObj[0]?.meanings[0]?.definitions[0]?.synonyms[0]);
        console.log("Antonym-",resultObj[0]?.meanings[0]?.definitions[0]?.antonyms[0]);
        console.log("Antonym-",resultObj[0]?.meanings[0]?.definitions[0]?.example);
        console.log("sound url - ",resultObj[0]?.phonetics[0]?.audio)
        dictInput.value = "";
    }catch(err){
        console.log("Error:",err);
    }
}

dictBtn.addEventListener('click',fetchWordMeaning)


// Dictionary app ends here
/*--------------------------------------------------------------------------------------------------------*/