let questions = [];

document.getElementById('create-quiz').addEventListener('click', function() {
    document.querySelector('.create').style.display = 'block';
    document.querySelector('.take').style.display = 'none';
});

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

        document.getElementById('question').value = '';
        document.getElementById('answer1').value = '';
        document.getElementById('answer2').value = '';
        document.getElementById('answer3').value = '';
        document.getElementById('answer4').value = '';
        document.getElementById('correct-answer').value = '';

        if (questions.length > 0) {
            document.getElementById('take-quiz').style.display = 'block';
        }
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('take-quiz').addEventListener('click', function() {
    displayQuiz();
});

function displayQuiz() {
    const quizContainer = document.getElementById('quiz-questions');
    quizContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${q.question}</p>`;

        q.answers.forEach((answer) => {
            const wrapper = document.createElement('div');
            wrapper.style.marginLeft = '20px'; // Add margin to the whole option line

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = answer;
            input.style.marginRight = '8px'; // space between radio and text

            const label = document.createElement('label');
            label.textContent = answer;

            wrapper.appendChild(input);
            wrapper.appendChild(label);
            questionElement.appendChild(wrapper);
        });

        quizContainer.appendChild(questionElement);
    });

    document.getElementById('quiz-display').style.display = 'block';
    document.querySelector('.create').style.display = 'none';
    document.querySelector('.take').style.display = 'block';
}


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