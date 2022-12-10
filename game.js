document.addEventListener("DOMContentLoaded", () => {

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
var audio = new Audio('Guile Theme.mp3');
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What is the song?",
        choice1: 'Mortal Kombat 2',
        pic1: 'MK2',
        choice2: 'Street Fighter 2',
        pic2: 'SF2',
        choice3: 'Killer Instinct',
        pic3: 'KI',
        choice4: 'Final Fight',
        pic4: 'FF',
        answer: 'Street Fighter 2',
        audio: "Guile Theme"

    },

    {
        question: "What is the song?",
        choice1: 'Chrono Trigger',
        pic1: 'Chronotrigger',
        choice2: 'Donkey Kong Country 2',
        pic2: 'DKC2',
        choice3: 'Donkey Kong Country',
        pic3: 'DKC',
        choice4: 'Super Mario World 2',
        pic4: 'SMW2',
        answer: 'Donkey Kong Country',
        audio: "Gang-Plank Galleon"
    },

    {
        question: "What is the song?",
        choice1: 'Megaman 7',
        pic1: 'MM7',
        choice2: 'Megaman X',
        pic2: 'MMX',
        choice3: 'Megaman X2',
        pic3: 'MMX2',
        choice4: 'Megaman X3',
        pic4: 'MMX3',
        answer: 'Megaman X',
        audio: "Storm Eagle"
    },

    {
        question: "What is the song?",
        choice1: 'Super Bomberman',
        pic1: 'SBM',
        choice2: 'Super Mario Kart',
        pic2: 'SMK',
        choice3: 'Super Mario World',
        pic3: 'SMW',
        choice4: 'Donkey Kong Country',
        pic4: 'DKC',
        answer: 'Super Mario World',
        audio: "Special World"
    },

    {
        question: "What is the song?",
        choice1: 'Link to the Past',
        pic1: 'LTTP',
        choice2: 'Final Fantasy IV',
        pic2: 'FFIII',
        choice3: 'Secret of Mana',
        pic3: 'SOM',
        choice4: 'Chrono Trigger',
        pic4: 'CT',
        answer: 'Link to the Past',
        audio: "Kakariko Village"
    },
    {
        question: "What is the song?",
        choice1: 'Stunt Race FX',
        pic1: 'SRFX',
        choice2: 'Super Metroid',
        pic2: 'SM',
        choice3: 'Super Castlevania',
        pic3: 'SCV4',
        choice4: 'E.V.O, The Search For Eden',
        pic4: 'EVO',
        answer: 'Super Metroid',
        audio: "Theme of Super Metroid"
    },
    {
        question: "What is the song?",
        choice1: 'Super Mario World 2',
        pic1: 'SMW2',
        choice2: "Zombies Ate My Neighbour",
        pic2: 'ZAMN',
        choice3: "Kirby's Dreamland 3",
        pic3: 'KDL3',
        choice4: "Kirby's Super Star",
        pic4: 'KSS',
        answer: "Kirby's Super Star",
        audio: "King Dedede's Theme"
    },
    {
        question: "What is the song?",
        choice1: 'Star Fox',
        pic1: 'SF',
        choice2: "Zombies Ate My Neighbours",
        pic2: 'ZAMN',
        choice3: 'E.V.O, The Search For Eden',
        pic3: 'EVO',
        choice4: "Wario's Woods",
        pic4: 'WW',
        answer: "Star Fox",
        audio: "Title"
    },
    {
        question: "What is the song?",
        choice1: 'Earthworm Jim',
        pic1: 'EJ1',
        choice2: "NBA Jam",
        pic2: 'NBAJ',
        choice3: 'Super Ghosts and Ghouls',
        pic3: 'SGnG',
        choice4: "Actraiser",
        pic4: 'AR',
        answer: "Earthworm Jim",
        audio: "Snot a Problem"
    },
    {
        question: "What is the song?",
        choice1: 'Killer Instinct',
        pic1: 'KI',
        choice2: "Contra 3",
        pic2: 'C3',
        choice3: 'Final Fight 2',
        pic3: 'FF2',
        choice4: "Clay Fighter",
        pic4: 'CF',
        answer: "Contra 3",
        audio: "The Final Gauntlet (Part 3)"
    },
    {
        question: "What is the song?",
        choice1: 'Fatal Fury 2',
        pic1: 'FF2',
        choice2: "Rock n' Roll Racing",
        pic2: 'RnRR',
        choice3: 'Pilot Wings',
        pic3: 'PW',
        choice4: "Earthbound",
        pic4: 'EB',
        answer: "Earthbound",
        audio: "Alien Invasion 1"
    },
    {
        question: "What is the song?",
        choice1: 'Biker Mice From Mars',
        pic1: 'BM',
        choice2: "Star Fox",
        pic2: 'SF',
        choice3: 'Contra 3',
        pic3: 'C3',
        choice4: "Super Castlevania IV",
        pic4: 'SCV4',
        answer: "Super Castlevania IV",
        audio: "Bloody Tears"
    },
    {
        question: "What is the song?",
        choice1: 'Battletoads in Battlemaniacs',
        pic1: 'BT',
        choice2: "Teenage mutant Ninja Turtles: Turtles in Time",
        pic2: 'TiT',
        choice3: 'Super Double Dragon',
        pic3: 'SDD',
        choice4: "Breath of Fire 2",
        pic4: 'BF2',
        answer: "Battletoads in Battlemaniacs",
        audio: "Ragnarok Canyon"
    },
    {
        question: "What is the song?",
        choice1: 'Earthworm Jim 2',
        pic1: 'EJ2',
        choice2: "Metal Warriors",
        pic2: 'MW',
        choice3: 'Super Star Wars',
        pic3: 'SSW',
        choice4: "Teenage Mutant Ninja Turtles: Turtles in Time",
        pic4: 'TiT',
        answer: "Teenage Mutant Ninja Turtles: Turtles in Time",
        audio: "Sewer Surfin'"
    },
    {
        question: "What is the song?",
        choice1: 'Uniracer',
        pic1: 'U',
        choice2: "Battle Cars",
        pic2: 'BC',
        choice3: 'Super Mario Kart',
        pic3: 'SMK',
        choice4: "F-Zero",
        pic4: 'FZ',
        answer: "F-Zero",
        audio: "Big Blue"
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = function() {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    console.log(progressBarFull.width)
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    console.log(progressBarFull.width)

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = "Which game is the song from?";
    audio = new Audio(`Music/${currentQuestion.audio}.mp3`)
    audio.play();

    console.log(currentQuestion.answer)
    console.log(currentQuestion)

    choices.forEach(choice => {
        const number = choice.dataset['number']
        console.log(number)
        choice.innerText = currentQuestion['choice' + number]
        //hoverChoice.style.backgroundImage = `url(${currentQuestion.audio})`;
        const bgImage =currentQuestion['pic'+number]
        
    })

    availableQuestions.splice(questionsIndex, 1)
    
    acceptingAnswers = true
}
    
choices.forEach(choice => {
    choice.addEventListener("mouseover", evt => {
        const number = choice.dataset['number']
        const bgImage =currentQuestion['pic'+number]
        const hoverChoice = evt.target
        hoverChoice.style.backgroundImage = `url(images/${bgImage}.png)`;
      }, false);
      choice.addEventListener("mouseout", evt => {
        const hoverChoice = evt.target
        hoverChoice.style.backgroundImage = "";
     }, false);

    choice.addEventListener('click', evt => {
        
        if(!acceptingAnswers) {return}
        acceptingAnswers = false
        let classList = evt.target.parentElement.classList;
        const selectedChoice = evt.target
        const selectedAnswer = selectedChoice.dataset['number']
        console.log(selectedAnswer)
        console.log(selectedChoice.innerText)
        console.log(currentQuestion.answer)
  
        let classToApply;
        if(currentQuestion.answer == selectedChoice.innerText){
            classToApply = "correct";
            selectedChoice.style.backgroundImage = "";
            selectedChoice.style.backgroundColor= 'rgb(34, 154, 78)';
            selectedChoice.previousElementSibling.style.backgroundColor = 'rgb(34, 154, 78)';
            selectedChoice.innerText= "Correct"
        }
        else{
            classToApply = "incorrect"
            selectedChoice.style.backgroundImage = "";
            selectedChoice.style.backgroundColor= "rgb(214, 75, 32)";
            selectedChoice.previousElementSibling.style.backgroundColor = "rgb(214, 75, 32)";
            selectedChoice.innerText= "Incorrect"
        }

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        audio.pause();

        setTimeout(() => {
            //selectedChoice.parentElement.classList.remove(classToApply)
            selectedChoice.style.backgroundColor= 'rgb(18, 93, 255)';
            selectedChoice.previousElementSibling.style.backgroundColor = 'rgb(18, 93, 255)';
            getNewQuestion()
        }, 1000)
        remove

    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()
});