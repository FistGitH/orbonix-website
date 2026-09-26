/* =========================================
   QUESTIONS
========================================= */

const questions = [

/* =========================================
   EASY — 1-10
========================================= */

{
question:
"Which planet is closest to the Sun?",
answers:
[
"Mercury",
"Venus",
"Earth",
"Mars"
],
correct: 0,
difficulty: "EASY"
},

{
question:
"Which planet is known as the Red Planet?",
answers:
[
"Jupiter",
"Mars",
"Venus",
"Mercury"
],
correct: 1,
difficulty: "EASY"
},

{
question:
"Which is the largest planet in the Solar System?",
answers:
[
"Saturn",
"Neptune",
"Jupiter",
"Uranus"
],
correct: 2,
difficulty: "EASY"
},

{
question:
"Which planet do we live on?",
answers:
[
"Mars",
"Earth",
"Venus",
"Mercury"
],
correct: 1,
difficulty: "EASY"
},

{
question:
"Which planet is famous for its prominent ring system?",
answers:
[
"Saturn",
"Jupiter",
"Uranus",
"Neptune"
],
correct: 0,
difficulty: "EASY"
},

{
question:
"How many planets are officially recognized in our Solar System?",
answers:
[
"7",
"8",
"9",
"10"
],
correct: 1,
difficulty: "EASY"
},

{
question:
"Which planet is the hottest on average?",
answers:
[
"Mercury",
"Venus",
"Mars",
"Jupiter"
],
correct: 1,
difficulty: "EASY"
},

{
question:
"Which planet is farthest from the Sun?",
answers:
[
"Saturn",
"Uranus",
"Neptune",
"Jupiter"
],
correct: 2,
difficulty: "EASY"
},

{
question:
"Which planet is famous for its Great Red Spot?",
answers:
[
"Jupiter",
"Mars",
"Saturn",
"Neptune"
],
correct: 0,
difficulty: "EASY"
},

{
question:
"Which planet is often called Earth's sister planet because of its similar size?",
answers:
[
"Mars",
"Venus",
"Mercury",
"Neptune"
],
correct: 1,
difficulty: "EASY"
},


/* =========================================
   MEDIUM — 11-20
========================================= */

{
question:
"Which planet has the shortest year?",
answers:
[
"Mercury",
"Venus",
"Earth",
"Mars"
],
correct: 0,
difficulty: "MEDIUM"
},

{
question:
"Which planet has the longest year of the eight planets?",
answers:
[
"Uranus",
"Neptune",
"Saturn",
"Jupiter"
],
correct: 1,
difficulty: "MEDIUM"
},

{
question:
"Which planet rotates in the opposite direction to most planets?",
answers:
[
"Mars",
"Venus",
"Jupiter",
"Neptune"
],
correct: 1,
difficulty: "MEDIUM"
},

{
question:
"Which planet has the shortest rotation period?",
answers:
[
"Earth",
"Jupiter",
"Saturn",
"Neptune"
],
correct: 1,
difficulty: "MEDIUM"
},

{
question:
"Which planet has the strongest greenhouse effect?",
answers:
[
"Mars",
"Venus",
"Mercury",
"Earth"
],
correct: 1,
difficulty: "MEDIUM"
},

{
question:
"Which planet has a day that is longer than its year?",
answers:
[
"Mercury",
"Venus",
"Mars",
"Neptune"
],
correct: 1,
difficulty: "MEDIUM"
},

{
question:
"Which planet has the highest average density?",
answers:
[
"Earth",
"Mercury",
"Venus",
"Mars"
],
correct: 0,
difficulty: "MEDIUM"
},

{
question:
"Which planet has an extreme axial tilt of about 98 degrees?",
answers:
[
"Neptune",
"Uranus",
"Saturn",
"Mars"
],
correct: 1,
difficulty: "MEDIUM"
},

{
question:
"Which planet is the least dense of all eight planets?",
answers:
[
"Jupiter",
"Saturn",
"Uranus",
"Neptune"
],
correct: 1,
difficulty: "MEDIUM"
},

{
question:
"Which planet has the strongest surface winds measured in the Solar System?",
answers:
[
"Jupiter",
"Neptune",
"Saturn",
"Uranus"
],
correct: 1,
difficulty: "MEDIUM"
},


/* =========================================
   HARD — 21-30
========================================= */

{
question:
"Why is Venus hotter than Mercury even though Mercury is closer to the Sun?",
answers:
[
"Venus is much larger",
"Venus has a powerful greenhouse effect",
"Venus rotates faster",
"Venus receives more sunlight"
],
correct: 1,
difficulty: "HARD"
},

{
question:
"What is the primary reason Mercury has such large temperature differences between day and night?",
answers:
[
"It has almost no substantial atmosphere",
"It has no magnetic field",
"It rotates extremely fast",
"It is farther from the Sun"
],
correct: 0,
difficulty: "HARD"
},

{
question:
"Which planet has a relatively weak global magnetic field compared with Earth?",
answers:
[
"Jupiter",
"Mars",
"Neptune",
"Saturn"
],
correct: 1,
difficulty: "HARD"
},

{
question:
"What is unusual about Uranus's rotation axis?",
answers:
[
"It points almost directly at the Sun",
"It is tilted by about 98 degrees",
"It does not rotate",
"It changes direction every year"
],
correct: 1,
difficulty: "HARD"
},

{
question:
"Which planet has the strongest planetary magnetic field in the Solar System?",
answers:
[
"Earth",
"Saturn",
"Jupiter",
"Neptune"
],
correct: 2,
difficulty: "HARD"
},

{
question:
"What distinguishes the outer planets as gas or ice giants?",
answers:
[
"They are made almost entirely of liquid water",
"They contain large amounts of hydrogen, helium and/or volatile ices",
"They have no solid material anywhere inside",
"They are composed mainly of metals"
],
correct: 1,
difficulty: "HARD"
},

{
question:
"Which planet has a famous hexagonal jet-stream pattern near its north pole?",
answers:
[
"Jupiter",
"Saturn",
"Uranus",
"Neptune"
],
correct: 1,
difficulty: "HARD"
},

{
question:
"Which planet's atmosphere contains clouds of sulfuric acid?",
answers:
[
"Venus",
"Mars",
"Jupiter",
"Neptune"
],
correct: 0,
difficulty: "HARD"
},

{
question:
"Why does Jupiter's moon Io have intense volcanic activity?",
answers:
[
"Because it is heated by tidal forces",
"Because it is the closest moon to the Sun",
"Because its atmosphere traps solar radiation",
"Because it has a very large ocean"
],
correct: 0,
difficulty: "HARD"
},

{
question:
"Which statement about Neptune and Uranus is correct?",
answers:
[
"Neptune is closer to the Sun than Uranus",
"Uranus is more massive than Neptune",
"Neptune is slightly more massive than Uranus",
"They have exactly the same mass"
],
correct: 2,
difficulty: "HARD"
}

];


/* =========================================
   VARIABLES
========================================= */

let currentQuestion = 0;

let score = 0;
let submittedAnswers = [];
let attemptId = crypto.randomUUID();

let answered = false;


/* =========================================
   SHUFFLE
========================================= */

function shuffleAnswers(question) {

    const answerObjects =
        question.answers.map(
            (answer, index) => {

                return {

                    text: answer, originalIndex: index,

                    correct:
                        index === question.correct

                };

            }
        );


    for (
        let i = answerObjects.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            answerObjects[i],
            answerObjects[j]
        ] =
        [
            answerObjects[j],
            answerObjects[i]
        ];

    }


    return answerObjects;
}


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

    answered = false;


    const q =
        questions[currentQuestion];


    document.getElementById(
        "questionNumber"
    ).textContent =
        `QUESTION ${
            String(currentQuestion + 1)
            .padStart(2,"0")
        } / ${questions.length}`;


    document.getElementById(
        "difficulty"
    ).textContent =
        q.difficulty;


    document.getElementById(
        "question"
    ).textContent =
        q.question;


    document.getElementById(
        "progressBar"
    ).style.width =
        `${(
            currentQuestion /
            questions.length
        ) * 100}%`;


    const answersContainer =
        document.getElementById(
            "answers"
        );


    answersContainer.innerHTML = "";


    const shuffled =
        shuffleAnswers(q);


    shuffled.forEach(
        answerObject => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer";


            button.type =
                "button";


            button.textContent =
                answerObject.text;


            button.dataset.correct = answerObject.correct;
            button.dataset.originalIndex = answerObject.originalIndex;


            button.onclick =
                function() {

                    selectAnswer(
                        answerObject.correct,
                        button
                    );

                };


            answersContainer.appendChild(
                button
            );

        }
    );


    document.getElementById(
        "nextButton"
    ).style.display =
        "none";
}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(
    isCorrect,
    selectedButton
) {

    if (answered)
        return;


    answered = true;
    submittedAnswers[currentQuestion] = Number(selectedButton.dataset.originalIndex);


    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(
        button => {

            button.classList.add(
                "disabled"
            );

        }
    );


    if (isCorrect) {

        selectedButton.classList.add(
            "correct"
        );

        score++;

    }

    else {

        selectedButton.classList.add(
            "wrong"
        );


        buttons.forEach(
            button => {

                if (
                    button.dataset.correct
                    === "true"
                ) {

                    button.classList.add(
                        "correct"
                    );

                }

            }
        );

    }


    document.getElementById(
        "nextButton"
    ).style.display =
        "inline-flex";
}


/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {

        showResult();

        return;

    }


    loadQuestion();
}


/* =========================================
   RESULT
========================================= */

function showResult() {
    window.orbonixSaveQuiz?.("Planet-Quiz",submittedAnswers.slice(),attemptId);

    document.getElementById(
        "quiz"
    ).style.display =
        "none";


    const result =
        document.getElementById(
            "result"
        );


    result.style.display =
        "block";


    document.getElementById(
        "progressBar"
    ).style.width =
        "100%";


    document.getElementById(
        "score"
    ).textContent =
        "0 / 30";


    let title = "";

    let text = "";


    if (score <= 10) {

        title =
            "PLANET BEGINNER";

        text =
            "Your journey through the Solar System has begun. Keep exploring — the Universe still has countless worlds to discover.";

    }

    else if (score <= 17) {

        title =
            "PLANET EXPLORER";

        text =
            "A solid result. You know the basic worlds of the Solar System and many of their important characteristics.";

    }

    else if (score <= 23) {

        title =
            "PLANET ASTRONOMER";

        text =
            "Very strong knowledge. You understand many of the physical and orbital differences between the planets.";

    }

    else if (score <= 27) {

        title =
            "PLANET EXPERT";

        text =
            "Excellent performance. You handled most of the advanced planetary questions.";

    }

    else {

        title =
            "PLANET MASTER";

        text =
            "Outstanding. You have demonstrated exceptional knowledge of the planets and planetary science.";

    }


    document.getElementById(
        "resultTitle"
    ).textContent =
        title;


    document.getElementById(
        "resultText"
    ).textContent =
        text;


    animateScore();


    setTimeout(
        function() {

            document.getElementById(
                "finalScoreFill"
            ).style.width =
                `${(
                    score /
                    questions.length
                ) * 100}%`;

        },
        600
    );


    createParticles();
}


/* =========================================
   SCORE ANIMATION
========================================= */

function animateScore() {

    let value = 0;


    const scoreElement =
        document.getElementById(
            "score"
        );


    const duration = 1600;


    const start =
        performance.now();


    function update(now) {

        const progress =
            Math.min(
                (now - start) /
                duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        value =
            Math.floor(
                eased * score
            );


        scoreElement.textContent =
            `${value} / ${questions.length}`;


        if (
            progress < 1
        ) {

            requestAnimationFrame(
                update
            );

        }

        else {

            scoreElement.textContent =
                `${score} / ${questions.length}`;

        }

    }


    requestAnimationFrame(
        update
    );
}


/* =========================================
   PARTICLES
========================================= */

function createParticles() {

    const result =
        document.getElementById(
            "result"
        );


    result
        .querySelectorAll(
            ".final-particle"
        )
        .forEach(
            particle =>
                particle.remove()
        );


    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "final-particle";


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            45 +
            Math.random() * 15 +
            "%";


        particle.style.setProperty(
            "--x",
            (
                Math.random() * 500 -
                250
            ) + "px"
        );


        particle.style.setProperty(
            "--y",
            (
                Math.random() * 500 -
                250
            ) + "px"
        );


        particle.style.animationDelay =
            Math.random() * .8 +
            "s";


        result.appendChild(
            particle
        );


        setTimeout(
            function() {

                particle.remove();

            },
            3500
        );

    }

}


/* =========================================
   RESTART
========================================= */

function restartQuiz() {
    submittedAnswers = []; attemptId = crypto.randomUUID();
    document.getElementById("quiz-save-status")?.remove();

    currentQuestion = 0;

    score = 0;

    answered = false;


    document.getElementById(
        "quiz"
    ).style.display =
        "block";


    document.getElementById(
        "result"
    ).style.display =
        "none";


    document.getElementById(
        "finalScoreFill"
    ).style.width =
        "0%";


    loadQuestion();

}


/* =========================================
   STAR PARALLAX
========================================= */

const stars =
    document.querySelector(
        ".stars"
    );


const smallStars =
    document.querySelector(
        ".stars-small"
    );


document.addEventListener(
    "mousemove",
    function(event) {

        const x =
            event.clientX /
            window.innerWidth -
            0.5;


        const y =
            event.clientY /
            window.innerHeight -
            0.5;


        stars.style.transform =
            `translate(
                ${x * 20}px,
                ${y * 20}px
            )`;


        smallStars.style.transform =
            `translate(
                ${x * -12}px,
                ${y * -12}px
            )`;

    }
);


/* =========================================
   START
========================================= */

loadQuestion();
