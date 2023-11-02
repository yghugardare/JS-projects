
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
const fiveQ = [
    // Easy DSA Questions
    {
        question: "What does 'LIFO' stand for in data structures?",
        options: ["Last In First Out", "Last In First Order", "Late Input, First Output", "Low-level Input, Fast Output"],
        correctAnswer: 0,
        topic: "DSA",
        difficulty: "easy"
    },
    {
        question: "What is the time complexity of appending an element to the end of an array?",
        options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
        correctAnswer: 0,
        topic: "DSA",
        difficulty: "easy"
    },
    {
        question: "Which data structure is used to implement recursion?",
        options: ["Stack", "Queue", "List", "Tree"],
        correctAnswer: 0,
        topic: "DSA",
        difficulty: "easy"
    },
    {
        question: "In binary search, what is the key idea to reduce the search space?",
        options: ["Divide and Conquer", "Combine and Merge", "Random Selection", "Linear Search"],
        correctAnswer: 0,
        topic: "DSA",
        difficulty: "easy"
    },
    {
        question: "Which algorithm sorts an array by repeatedly finding the minimum element from the unsorted part and putting it at the beginning?",
        options: ["Selection Sort", "Bubble Sort", "Insertion Sort", "Quick Sort"],
        correctAnswer: 0,
        topic: "DSA",
        difficulty: "easy"
    },

    // Medium DSA Questions
    {
        question: "What is the time complexity of finding the shortest path in a weighted graph using Dijkstra's algorithm?",
        options: ["O(V^2)", "O(E * log(V))", "O(E + V)", "O(V * log(V))"],
        correctAnswer: 1,
        topic: "DSA",
        difficulty: "medium"
    },
    {
        question: "Which data structure is used to implement a priority queue?",
        options: ["Stack", "Queue", "Heap", "Linked List"],
        correctAnswer: 2,
        topic: "DSA",
        difficulty: "medium"
    },
    {
        question: "What is the worst-case time complexity of quicksort?",
        options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
        correctAnswer: 3,
        topic: "DSA",
        difficulty: "medium"
    },
    {
        question: "What does 'DFS' stand for in graph traversal?",
        options: ["Dynamic First Search", "Depth-First Search", "Directed Feedback Search", "Data Flow System"],
        correctAnswer: 1,
        topic: "DSA",
        difficulty: "medium"
    },
    {
        question: "In the context of data structures, what is a 'trie'?",
        options: ["A tree-like data structure", "A type of linked list", "A binary search tree", "A hash table"],
        correctAnswer: 0,
        topic: "DSA",
        difficulty: "medium"
    },

    // Hard DSA Questions
    {
        question: "What is the time complexity of finding the longest common subsequence of two strings using dynamic programming?",
        options: ["O(N^2)", "O(N^3)", "O(2^N)", "O(N * M)"],
        correctAnswer: 3,
        topic: "DSA",
        difficulty: "hard"
    },
    {
        question: "Which data structure is used to implement a hash table?",
        options: ["Array", "Queue", "Heap", "Linked List"],
        correctAnswer: 0,
        topic: "DSA",
        difficulty: "hard"
    },
    {
        question: "What is the worst-case time complexity of the traveling salesman problem?",
        options: ["O(N)", "O(N^2)", "O(N!)", "O(N * log(N))"],
        correctAnswer: 2,
        topic: "DSA",
        difficulty: "hard"
    },
    {
        question: "What is the time complexity of the Ford-Fulkerson algorithm for max flow in a flow network?",
        options: ["O(V)", "O(E)", "O(V * E)", "O(V * E^2)"],
        correctAnswer: 3,
        topic: "DSA",
        difficulty: "hard"
    },
    {
        question: "In graph theory, what does 'NP-hard' mean?",
        options: ["Nondeterministic Polynomial Hard", "Non-Polynomial Hard", "Not Practical Hard", "Nondeterministic Polynomial Time Reduction Hard"],
        correctAnswer: 0,
        topic: "DSA",
        difficulty: "hard"
    },

    // Easy Web Development Questions
    {
        question: "What does 'HTML' stand for?",
        options: ["Hyper Transfer Markup Language", "Hyper Text Markup Language", "High-level Text Markup Language", "Home Tool Markup Language"],
        correctAnswer: 1,
        topic: "Web-Development",
        difficulty: "easy"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<a>", "<h>", "<link>", "<hyperlink>"],
        correctAnswer: 0,
        topic: "Web-Development",
        difficulty: "easy"
    },
    {
        question: "What is the primary purpose of CSS?",
        options: ["Creating interactive web pages", "Structuring web content", "Styling web content", "Executing web scripts"],
        correctAnswer: 2,
        topic: "Web-Development",
        difficulty: "easy"
    },
    {
        question: "Which programming language is commonly used for client-side scripting in web development?",
        options: ["Java", "C++", "Python", "JavaScript"],
        correctAnswer: 3,
        topic: "Web-Development",
        difficulty: "easy"
    },
    {
        question: "What does 'CSS' stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 0,
        topic: "Web-Development",
        difficulty: "easy"
    },

    // Medium Web Development Questions
    {
        question: "Which HTML element is used to define the structure of an HTML document?",
        options: ["<header>", "<body>", "<nav>", "<html>"],
        correctAnswer: 3,
        topic: "Web-Development",
        difficulty: "medium"
    },
    {
        question: "In web development, what does 'DOM' stand for?",
        options: ["Digital Object Model", "Document Object Model", "Dynamic Object Model", "Direct Object Management"],
        correctAnswer: 1,
        topic: "Web-Development",
        difficulty: "medium"
    },
    {
        question: "Which CSS property is used to specify the font of an element's text?",
        options: ["font-size", "text-font", "font-family", "text-style"],
        correctAnswer: 2,
        topic: "Web-Development",
        difficulty: "medium"
    },
    {
        question: "What does 'HTTP' stand for in web communication?",
        options: ["Hypertext Transfer Protocol", "Hyper Text Transfer Process", "High Traffic Transfer Protocol", "Home Text Transfer Process"],
        correctAnswer: 0,
        topic: "Web-Development",
        difficulty: "medium"
    },
    {
        question: "Which JavaScript function is used to add a class to an element?",
        options: ["addClass", "toggleClass", "appendTo", "hasClass"],
        correctAnswer: 1,
        topic: "Web-Development",
        difficulty: "medium"
    },

    // Hard Web Development Questions
    {
        question: "What is the purpose of a 'meta' element with the 'charset' attribute in an HTML document?",
        options: ["Set the page's background color", "Define the document's character encoding", "Specify the page's title", "Enable JavaScript execution"],
        correctAnswer: 1,
        topic: "Web-Development",
        difficulty: "hard"
    },
    {
        question: "In web development, what does 'AJAX' stand for?",
        options: ["Asynchronous JavaScript and XML", "Advanced JavaScript and XHR", "Application JavaScript and XML", "All JavaScript and XML"],
        correctAnswer: 0,
        topic: "Web-Development",
        difficulty: "hard"
    },
    {
        question: "What does 'SEO' stand for in the context of web development and online content?",
        options: ["Search Engine Optimization", "Software Engineering Operations", "Site Enhancement Organization", "Secure External Output"],
        correctAnswer: 0,
        topic: "Web-Development",
        difficulty: "hard"
    },
    {
        question: "Which CSS property is used to create a 3D effect on text and elements?",
        options: ["transform", "perspective", "box-shadow", "3d-effect"],
        correctAnswer: 0,
        topic: "Web-Development",
        difficulty: "hard"
    },
    {
        question: "What is the primary purpose of a 'DOCTYPE' declaration in an HTML document?",
        options: ["Define the document's structure", "Specify the character encoding", "Validate the document", "Trigger compatibility mode"],
        correctAnswer: 3,
        topic: "Web-Development",
        difficulty: "hard"
    },

    // Easy Python Questions
    {
        question: "Which programming language is known for its simplicity and readability?",
        options: ["Java", "C++", "Python", "JavaScript"],
        correctAnswer: 2,
        topic: "Python",
        difficulty: "easy"
    },
    {
        question: "What is the primary use of 'print()' function in Python?",
        options: ["Input from the user", "Write to a file", "Display output", "Perform mathematical operations"],
        correctAnswer: 2,
        topic: "Python",
        difficulty: "easy"
    },
    {
        question: "What does 'PEP 8' refer to in Python programming?",
        options: ["A popular Python library", "A Python package manager", "The Python Enhancement Proposal for code style", "A Python error code"],
        correctAnswer: 2,
        topic: "Python",
        difficulty: "easy"
    },
    {
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "**", "*", "//"],
        correctAnswer: 1,
        topic: "Python",
        difficulty: "easy"
    },
    {
        question: "In Python, what is the purpose of 'if-else' statements?",
        options: ["Looping", "File I/O", "Exception handling", "Conditional execution"],
        correctAnswer: 3,
        topic: "Python",
        difficulty: "easy"
    },

    // Medium Python Questions
    {
        question: "Which of the following data structures is NOT built into Python?",
        options: ["Lists", "Dictionaries", "Stacks", "Arrays"],
        correctAnswer: 3,
        topic: "Python",
        difficulty: "medium"
    },
    {
        question: "What is the output of 'print(5/2)' in Python 3?",
        options: ["2.5", "2.0", "2", "2.5 (rounded down)"],
        correctAnswer: 0,
        topic: "Python",
        difficulty: "medium"
    },
    {
        question: "In Python, what is the purpose of 'lambda' functions?",
        options: ["Define variables", "Create classes", "Write documentation", "Create anonymous functions"],
        correctAnswer: 3,
        topic: "Python",
        difficulty: "medium"
    },
    {
        question: "What does 'import random' do in Python?",
        options: ["Import a random number generator", "Import the 'random' module", "Generate random numbers", "Import random variables"],
        correctAnswer: 1,
        topic: "Python",
        difficulty: "medium"
    },
    {
        question: "Which type of Python loop is used when you want to iterate over a sequence of numbers?",
        options: ["for", "while", "do-while", "foreach"],
        correctAnswer: 0,
        topic: "Python",
        difficulty: "medium"
    },

    // Hard Python Questions
    // Hard Python Questions
{
    question: "What is a 'closure' in Python?",
    options: [
        "A function defined inside another function that has access to the outer function's variables.",
        "A way to close a file after it has been opened for reading or writing.",
        "A data structure that stores elements with unique keys.",
        "A way to stop the execution of a Python program."
    ],
    correctAnswer: 0,
    topic: "Python",
    difficulty: "hard"
},
{
    question: "What is the Global Interpreter Lock (GIL) in Python?",
    options: [
        "A built-in function in Python that locks global variables to prevent data corruption.",
        "A lock that prevents multiple threads from executing Python bytecodes in parallel.",
        "A global setting that controls the interpreter's verbosity.",
        "A cryptographic protocol used for secure data transfer in Python."
    ],
    correctAnswer: 1,
    topic: "Python",
    difficulty: "hard"
},
{
    question: "What does the 'yield' keyword do in Python?",
    options: [
        "It yields control back to the operating system.",
        "It indicates the end of a Python script.",
        "It is used to define a generator function, which returns an iterator.",
        "It suspends the execution of a function and returns a value to the caller."
    ],
    correctAnswer: 2,
    topic: "Python",
    difficulty: "hard"
},
{
    question: "What is 'Metaclasses' in Python?",
    options: [
        "A special kind of class that inherits from all other classes in Python.",
        "A class that is automatically created when a class is defined.",
        "A class that controls the behavior and structure of other classes.",
        "A type of class that is used for multiple inheritance."
    ],
    correctAnswer: 2,
    topic: "Python",
    difficulty: "hard"
},
{
    question: "What is the purpose of the '__slots__' attribute in Python classes?",
    options: [
        "It defines the methods that are available in a class.",
        "It restricts the set of attributes that can be added to instances of a class.",
        "It specifies the global variables in a Python module.",
        "It is used to define the slots on a roulette wheel in a Python casino game."
    ],
    correctAnswer: 1,
    topic: "Python",
    difficulty: "hard"
}
];
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
    
});
function fillQnaOneByOne(quizData,currQ,totalQ){
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
// // function to play audio when time is 3 sec
// function playAudio(src){
//     const audio = new Audio(src);
//     audio.play();
// }
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
            answereBoxs.forEach((ansDiv)=>{
            
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