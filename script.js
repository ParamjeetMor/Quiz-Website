const questions = [
           
    {
        'que': "HTML stands for -",
        'a': "HighText Machine Language",
        'b': "HyperText and links Markup Language",
        'c': "HyperText Markup Language",
        'd': "None of these",
        'correct': "c"
    },
    {
        'que': " The correct sequence of HTML tags for starting a webpage is -",
        'a': "Head, Title, HTML, body",
        'b': "HTML, Body, Title, Head",
        'c': "HTML, Head, Body, Title",
        'd': "HTML, Head, Title, Body",
        'correct': "d"
    },
    {
        'que': "Which of the following element is responsible for making the text bold in HTML?",
        'a': "<pre>",
        'b': "<a>",
        'c': "<b>",
        'd': "<br>",
        'correct': "c"
    },
    {
        'que': "Which of the following tag is used for inserting the largest heading in HTML?",
        'a': "<h3>",
        'b': "<h1>",
        'c': "<h5>",
        'd': "<h6>",
        'correct': "b"
    },
    {
        'que': "Which of the following tag is used to insert a line-break in HTML?",
        'a': "<br>",
        'b': "<a>",
        'c': "<pre>",
        'd': "<b>",
        'correct': "a"
    },
    {
        'que': "How to create an unordered list (a list with the list items in bullets) in HTML?",
        'a': "<ul>",
        'b': "<ol>",
        'c': "<li>",
        'd': "<i>",
        'correct': "a"
    },
    {
        'que': " How to create an ordered list (a list with the list items in numbers) in HTML?",
        'a': "<ul>",
        'b': "<ol>",
        'c': "<li>",
        'd': "<i>",
        'correct': "b"
    },
    {
        'que': "Which of the following element is responsible for making the text italic in HTML?",
        'a': "<i>",
        'b': "<italic>",
        'c': "<it>",
        'd': "<pre>",
        'correct': "a"
    },
    {
        'que': "CSS stands for -",
        'a': "Cascade style sheets",
        'b': "Color and style sheets",
        'c': "Cascading style sheets",
        'd': "None of the above",
        'correct': "c"
    },
    {
        'que': " The property in CSS used to change the background color of an element is -",
        'a': "bgcolor",
        'b': "color",
        'c': "background-color",
        'd': "All of the above",
        'correct': "c"
    },
    {
        'que': " The property in CSS used to change the text color of an element is -",
        'a': "bgcolor",
        'b': "color",
        'c': "background-color",
        'd': "All of the above",
        'correct': "b"
    },
    {
        'que': " The CSS property used to control the element's font-size is -",
        'a': "text-style",
        'b': "text-size",
        'c': "font-size",
        'd': "None of the above",
        'correct': "c"
    },
    {
        'que': "The HTML attribute used to define the internal stylesheet is -",
        'a': "<style>",
        'b': "style",
        'c': "<link>",
        'd': "<script>",
        'correct': "a"
    },
    {
        'que': "Which of the following CSS property is used to set the background image of an element?",
        'a': "background-attachment",
        'b': "background-image",
        'c': "background-color",
        'd': "None of the above",
        'correct': "b"
    },
    {
        'que': " Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
        'a': "p {background-color : yellow;}",
        'b': "p {background-color : #yellow;}",
        'c': "all {background-color : yellow;}",
        'd': "all p {background-color : #yellow;}",
        'correct': "a"
    }
]

const main = document.querySelector("#box")
const container = document.querySelector(".container")
const start = document.querySelector("#start")
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")
start.addEventListener("click", function () {
    main.style.display = 'block'
    container.style.display = "none"
})

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const loadQuestion = () => {
    if (index == total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index + 1}) ${data.que}`
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
      
    }
    else {
        wrong++;
    }
    index++
    loadQuestion()
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;

            }
        })
    return answer;
}


const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    main.innerHTML = `<h3>Thanks for  playing the Quiz</h3>
<h2>${right}/ ${total} are correct. </h2>`


}
loadQuestion();

