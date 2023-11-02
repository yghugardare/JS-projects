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
const tenQ = [
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
        question: "What is the time complexity of the Quicksort algorithm?",
        options: ["O(n log n)", "O(n2)", "O(n3)", "O(n log n) in the average case and O(n2) in the worst case"],
        correctAnswer: 3,
        topic: "DSA",
        difficulty: "hard"
    },
    {
        question: "What is the difference between a balanced binary search tree and an unbalanced binary search tree?",
        options: ["A balanced binary search tree has a height of O(log n), while an unbalanced binary search tree can have a height of O(n).", "A balanced binary search tree has a maximum node degree of 2, while an unbalanced binary search tree can have a maximum node degree of greater than 2.", "A balanced binary search tree has both left and right subtrees of equal height, while an unbalanced binary search tree can have a left or right subtree that is significantly taller than the other.", "All of the above."],
        correctAnswer: 3,
        topic: "DSA",
        difficulty: "hard"
    },
    {
        question: "What is the knapsack problem?",
        options: ["A problem in which you have a limited amount of space and you need to find the most valuable items to put in the space.", "A problem in which you have a limited amount of time and you need to find the most efficient way to complete a set of tasks.", "A problem in which you have a limited amount of money and you need to find the best way to invest it.", "A problem in which you have a limited amount of data and you need to find the most accurate way to predict something."],
        correctAnswer: 0,
        topic: "DSA",
        difficulty: "hard"
    },
    {
        question: "What is the difference between a dynamic programming solution and a greedy solution?",
        options: ["A dynamic programming solution considers all possible subproblems of a problem and solves them in a bottom-up approach, while a greedy solution makes the best choice at each step without considering future consequences.", "A dynamic programming solution is typically more efficient than a greedy solution, but it can be more difficult to implement.", "A dynamic programming solution can be used to solve problems that cannot be solved with a greedy solution.", "All of the above."],
        correctAnswer: 3,
        topic: "DSA",
        difficulty: "hard"
    },
    {
        question: "What is the difference between a binary search tree and a red-black tree?",
        options: ["A binary search tree is a self-balancing tree, while a red-black tree is not.", "A binary search tree has a maximum height of O(log n), while a red-black tree has a maximum height of O(2 log n).", "A binary search tree can be used to implement a set, while a red-black tree can be used to implement a map.", "All of the above."],
        correctAnswer: 1,
        topic: "DSA",
        difficulty: "hard"
    },
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
        question: "What is the difference between an element and an attribute in HTML?",
        options: ["An element is a building block of an HTML document, while an attribute is a property of an element.", "An element is a tag that encloses text or other elements, while an attribute is a modifier of an element.", "An element is a visible part of an HTML document, while an attribute is a hidden part of an HTML document.", "All of the above."],
        correctAnswer: 3,
        topic: "Web-Development",
        difficulty: "easy"
    },
    {
        question: "What is the purpose of the `DOCTYPE` declaration in HTML?",
        options: ["To tell the browser what version of HTML the document is using.", "To specify the encoding of the HTML document.", "To define the root element of the HTML document.", "All of the above."],
        correctAnswer: 0,
        topic: "Web-Development",
        difficulty: "easy"
    },
    {
        question: "What are the three main types of CSS selectors?",
        options: ["Element selectors, class selectors, and ID selectors.", "Inline CSS, internal CSS, and external CSS.", "Cascade, specificity, and inheritance.", "All of the above."],
        correctAnswer: 0,
        topic: "Web-Development",
        difficulty: "easy"
    },
    {
        question: "What is the difference between `display: none` and `visibility: hidden` in CSS?",
        options: ["`display: none` hides the element from the browser, while `visibility: hidden` hides the element from the user.", "`display: none` removes the element from the document flow, while `visibility: hidden` keeps the element in the document flow.", "Both `display: none` and `visibility: hidden` do the same thing.", "None of the above."],
        correctAnswer: 1,
        topic: "Web-Development",
        difficulty: "easy"
    },
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
        question: "What is the purpose of a `meta` element with the `charset` attribute in an HTML document?",
        options: ["Set the page's background color", "Define the document's character encoding", "Specify the page's title", "Enable JavaScript execution"],
        correctAnswer: 1,
        topic: "Web-Development",
        difficulty: "hard"
    },
    {
        question: "What are the different types of HTTP requests and responses?",
        options: ["GET, POST, PUT, and DELETE", "200 OK, 404 Not Found, and 500 Internal Server Error", "JSON, XML, and HTML", "All of the above"],
        correctAnswer: 3,
        topic: "Web-Development",
        difficulty: "hard"
    },
    {
        question: "What is the difference between progressive enhancement and graceful degradation?",
        options: ["Progressive enhancement builds a basic website that works in all browsers and then adds features for browsers that support them, while graceful degradation starts with a fully featured website and then removes features for browsers that don't support them.", "Progressive enhancement is a more modern approach, while graceful degradation is an older approach.", "Progressive enhancement is more complex to implement, but it results in a more user-friendly website.", "All of the above."],
        correctAnswer: 0,
        topic: "Web-Development",
        difficulty: "hard"
    },
    {
        question: "What is the purpose of a content delivery network (CDN)?",
        options: ["To deliver content to users from servers that are located close to them, which improves performance.", "To provide a backup for your website in case your primary server goes down.", "To protect your website from DDoS attacks.", "All of the above."],
        correctAnswer: 3,
        topic: "Web-Development",
        difficulty: "hard"
    },
    {
        question: "What are some of the best practices for securing a web application?",
        options: ["Use strong passwords and two-factor authentication for all accounts.", "Keep your software up to date.", "Use a web application firewall (WAF) to protect your website from common attacks.", "All of the above."],
        correctAnswer: 3,
        topic: "Web-Development",
        difficulty: "hard"
    },
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
},
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
export {
    fiveQ,
    tenQ
}


