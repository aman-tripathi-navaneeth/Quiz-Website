// script.js

const questions = [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HyperTransfer Markup Language", "Home Tool Markup Language", "None of the above"],
      answer: 0
    },
    {
      question: "Which language is used for web apps?",
      options: ["PHP", "Python", "JavaScript", "All of the above"],
      answer: 3
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "None of the above"],
      answer: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  let timeLeft = 10;
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const timerElement = document.getElementById('time');
  const resultElement = document.getElementById('result');
  const scoreElement = document.getElementById('score');
  const quizElement = document.getElementById('quiz');
  
  function startQuiz() {
    showQuestion();
    startTimer();
  }
  
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
      const li = document.createElement('li');
      li.textContent = option;
      li.onclick = () => selectOption(index);
      optionsElement.appendChild(li);
    });
  }
  
  function selectOption(selectedIndex) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedIndex === correctAnswer) {
      score++;
    }
    clearInterval(timer);
    nextQuestion();
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      timeLeft = 10;
      startQuiz();
    } else {
      showResult();
    }
  }
  
  function startTimer() {
    timerElement.textContent = timeLeft;
    timer = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }, 1000);
  }
  
  function showResult() {
    quizElement.style.display = 'none';
    resultElement.style.display = 'block';
    scoreElement.textContent = `${score} / ${questions.length}`;
  }
  
  // Initialize the quiz
  startQuiz();
  