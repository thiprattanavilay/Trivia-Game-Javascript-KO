var json = {
    title: "Movies Trivia Game",
    showProgressBar: "bottom",
    firstPageIsStarted: true,
    startSurveyText: "START GAME",
    
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "Grab your friends and let us play a trivia game. <br/>Please click on <b>'Start Game'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "The Matrix",
                    title: "When Neo experiences déjà vu in The Matrix, what animal does he see twice?",
                    choices: [
                        "A mouse", "A cat", "A dog", "A tiger",
                    ],
                    correctAnswer: "A cat"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Ghost",
                    title: "In Ghost, what does Sam slide up the door to convince Molly he is there?",
                    choicesOrder: "random",
                    choices: [
                        "A dime", "A penny", "A dollar", "A quarter",
                    ],
                    correctAnswer: "A penny"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Fight Club",
                    title: "What is the narrator’s power animal in Fight Club?",
                    choicesOrder: "random",
                    choices: [
                        "A turtle", "A dolphin", "A penguin", "A sea lion",
                    ],
                    correctAnswer: "A penguin"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Jerry Maguire",
                    title: "According to the cute little kid in Jerry Maguire, how much does the human head weigh?",
                    choices: [
                        "6 pounds", "8 pounds", "10 pounds", "12 pounds",
                    ],
                    correctAnswer: "Program the behavior of web pages"
                }
            ]
        }, 
          {
            questions: [
                {
                    type: "radiogroup",
                    name: "Romy and Michele's",
                    title: "In Romy and Michele’s High School Reunion, what did Sandy Frink invent that made him a billionaire?",
                    choices: [
                        "Post-it notes", "Pogs", "A rubber for shoes",
                    ],
                    correctAnswer: "A rubber for shoes"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Tremors",
                    title: "What is the name of the town attacked by the sand creatures in Tremors?",
                    choices: [
                        "Kingston Falls", "Perfection", "Hill Valley", "Haddonfield",
                    ],
                    correctAnswer: "Perfection"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "Total Recall",
                    title: "Which of these quotes is NOT a line of dialogue from 1990 Arnie classic Total Recall?",
                    choices: [
                        "Consider that a divorce", "See you at the party, Richter", "Don't forget to send me a copy",
                    ],
                    correctAnswer: "Don't forget to send me a copy"
                }
            ]
        },
         {
            questions: [
                {
                    type: "radiogroup",
                    name: "Thelma & Louise?",
                    title: "Who directed Thelma & Louise?",
                    choices: [
                        "Amy Heckerling", "Allison Anders", "Kathryn Bigelow", "Ridley Scott",
                    ],
                    correctAnswer: "Ridley Scott"
                }
            ]
        },
         {
            questions: [
                {
                    type: "radiogroup",
                    name: "Jurassic Park",
                    title: "In 1996 movie Independence Day, Goldblum repeats a line he uttered in 1993’s Jurassic Park. What is it?",
                    choices: [
                        "Must go faster", "Life finds a way", "I'm fairly alarmed here", "Boy, do I hate being right all the time",
                    ],
                    correctAnswer: "Must go faster"
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "The Big Lebowski",
                    title: "Which band did The Dude say he used to be a roadie for in The Big Lebowski?",
                    choices: [
                        "Megadeth", "The Eagles", "Metallica", "Guns N'Roses",
                    ],
                    correctAnswer: "Metallica"
                }
            ]
        },
    ],
    completedHtml: "<h4>WOW! You've answered correctly <b>{correctedAnswers}</b> questions out of <b>{questionCount}</b>.</h4>"
    
};

// This function reloads the
function myFunction() {
    location.reload();
}

window.survey = new Survey.Model(json);

survey.showPrevButton = true;

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector("#surveyResult")
            .textContent = "Answers:\n" + JSON.stringify(result.data, null, 3);
            

    });

survey.render("surveyElement");