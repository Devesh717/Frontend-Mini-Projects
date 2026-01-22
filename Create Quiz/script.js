let questions = [];

document.getElementById('add-question').addEventListener('click', function() {
    const questionText = document.getElementById('question').value;
    const answers = [
        document.getElementById('answer1').value,
        document.getElementById('answer2').value,
        document.getElementById('answer3').value,
        document.getElementById('answer4').value
    ];
    const correctAnswer = document.getElementById('correct-answer').value;

    if (questionText && answers.every(ans => ans) && correctAnswer) {
        questions.push({ question: questionText, answers, correctAnswer });
        alert('Question added!');

        // Clear input fields
        document.getElementById('question').value = '';
        document.getElementById('answer1').value = '';
        document.getElementById('answer2').value = '';
        document.getElementById('answer3').value = '';
        document.getElementById('answer4').value = '';
        document.getElementById('correct-answer').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('submit-quiz').addEventListener('click', function() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerText = `Your score: ${score} out of ${questions.length}`;
    document.getElementById('result').style.display = 'block';
});

function displayQuiz() {
    const quizContainer = document.getElementById('quiz-questions');
    quizContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${q.question}</p>`;
        q.answers.forEach((answer, answerIndex) => {
            questionElement.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${answer}" />
                    ${answer}
                </label><br />
            `;
        });
        quizContainer.appendChild(questionElement);
    });
    document.getElementById('quiz-display').style.display = 'block';
}

// Add an event listener to show the quiz when questions are added
document.getElementById('add-question').addEventListener('click', function() {
    // After adding a question, display the quiz if there are questions
    if (questions.length > 0) {
        displayQuiz();
    }
});

// Optional: Add a button to start the quiz after creating questions
const startQuizButton = document.createElement('button');
startQuizButton.innerText = 'Start Quiz';
startQuizButton.style.marginTop = '20px';
startQuizButton.addEventListener('click', function() {
    displayQuiz();
});
document.getElementById('quiz-creator').appendChild(startQuizButton);