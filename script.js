 const questions = [
    {
        question: "¿Quién descubrió la estructura del ADN?",
        options: ["Watson y Crick", "Einstein", "Fleming", "Mendel"],
        answer: "Watson y Crick"
    },
    {
        question: "¿Cuál es el proceso por el cual las plantas producen su propio alimento?",
        options: ["Fotosíntesis", "Respiración", "Digestión", "Fermentación"],
        answer: "Fotosíntesis"
    },
    {
        question: "¿Cuál fue la fecha de la independencia de Nicaragua?",
        options: ["15 de septiembre de 1821", "14 de julio de 1789", "1 de enero de 1804", "17 de septiembre de 1821"],
        answer: "15 de septiembre de 1821"
    },
    {
        question: "¿Cuál es la fórmula para calcular la fuerza?",
        options: ["F = m * a", "F = m / a", "F = m + a", "F = m - a"],
        answer: "F = m * a"
    },
    {
        question: "¿Qué elemento químico es representado por el símbolo 'Na'?",
        options: ["Sodio", "Nitrógeno", "Oxígeno", "Plata"],
        answer: "Sodio"
    },
    {
        question: "¿En qué año se publicó 'El origen de las especies' de Charles Darwin?",
        options: ["1859", "1875", "1823", "1901"],
        answer: "1859"
    },
    {
        question: "¿Cuál es la capital de Nicaragua?",
        options: ["Managua", "San José", "Tegucigalpa", "Ciudad de Guatemala"],
        answer: "Managua"
    },
    {
        question: "¿Qué científico propuso la teoría de la relatividad?",
        options: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "¿Cuál es la fórmula química del agua?",
        options: ["H2O", "CO2", "NaCl", "CH4"],
        answer: "H2O"
    },
    {
        question: "¿En qué año llegó Cristóbal Colón a América?",
        options: ["1492", "1501", "1520", "1453"],
        answer: "1492"
    },
    {
        question: "¿Cuál es la unidad básica de la vida?",
        options: ["Célula", "Átomo", "Molécula", "Proteína"],
        answer: "Célula"
    },
    {
        question: "¿Cuál es el nombre del proceso por el cual las plantas obtienen energía de la luz solar?",
        options: ["Fotosíntesis", "Respiración", "Digestión", "Fermentación"],
        answer: "Fotosíntesis"
    },
    {
        question: "¿Cuál es el metal más abundante en la corteza terrestre?",
        options: ["Aluminio", "Hierro", "Plomo", "Cobre"],
        answer: "Aluminio"
    },
    {
        question: "¿Quién fue el primer presidente de Nicaragua?",
        options: ["Manuel José Estrada Cabrera", "Fernando Chamorro", "José Santos Zelaya", "Fruto Chamorro"],
        answer: "Fruto Chamorro"
    },
    {
        question: "¿Cuál es la capital de Costa Rica?",
        options: ["San José", "Managua", "Tegucigalpa", "Panamá"],
        answer: "San José"
    },
    {
        question: "¿Quién descubrió la penicilina?",
        options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Jonas Salk"],
        answer: "Alexander Fleming"
    },
    {
        question: "¿Cuál es el metal más pesado?",
        options: ["Osmio", "Plomo", "Mercurio", "Uranio"],
        answer: "Osmio"
    },
    {
        question: "¿Qué gas compone la mayor parte de la atmósfera terrestre?",
        options: ["Nitrógeno", "Oxígeno", "Hidrógeno", "Dióxido de carbono"],
        answer: "Nitrógeno"
    },
    {
        question: "¿Quién fue el primer astronauta en pisar la luna?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
        answer: "Neil Armstrong"
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        answer: "Amazonas"
    },
    {
        question: "¿Cuál es el elemento más abundante en el universo?",
        options: ["Hidrógeno", "Oxígeno", "Helio", "Carbono"],
        answer: "Hidrógeno"
    },
    {
        question: "¿Quién fue el primer presidente de Estados Unidos?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "¿Cuál es el hueso más largo del cuerpo humano?",
        options: ["Fémur", "Tibia", "Húmero", "Radio"],
        answer: "Fémur"
    },
    {
        question: "¿Cuál es la unidad básica de la herencia genética?",
        options: ["Gen", "Cromosoma", "ADN", "Alelo"],
        answer: "Gen"
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        options: ["Júpiter", "Saturno", "Urano", "Neptuno"],
        answer: "Júpiter"
    }
];

// Función para mezclar preguntas de manera aleatoria
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Mezclar las preguntas aleatoriamente
shuffleQuestions(questions);

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = 0; // Contador de respuestas incorrectas

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const timerElement = document.getElementById('timer');

let timer; // Variable para almacenar el temporizador

function displayQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = '';
    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.addEventListener('click', () => checkAnswer(option, btn));
        optionsElement.appendChild(btn);
    });
    // Iniciar temporizador
    startTimer();
}

function startTimer() {
    let timeLeft = 15; // 15 segundos por pregunta
    updateTimer(timeLeft); // Mostrar el temporizador inicial
    timer = setInterval(() => {
        timeLeft--;
        updateTimer(timeLeft); // Actualizar el temporizador en cada iteración

        if (timeLeft === 0) {
            clearInterval(timer);
            checkAnswer(null, null); // Llamar a checkAnswer con null para pasar a la siguiente pregunta automáticamente
        }
    }, 1000);
}

function updateTimer(timeLeft) {
    // Formatear el tiempo restante en formato mm:ss
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `Tiempo restante: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function checkAnswer(option, btn) {
    clearInterval(timer); // Detener el temporizador al verificar la respuesta

    const q = questions[currentQuestion];
    if (option === q.answer) {
        score++;
        resultElement.textContent = '¡Respuesta Correcta!';
        if (btn) {
            btn.style.backgroundColor = '#2ecc71'; // Color verde para respuesta correcta
        }
    } else {
        resultElement.textContent = `Respuesta Incorrecta. La respuesta correcta era: ${q.answer}`;
        if (btn) {
            btn.style.backgroundColor = '#e74c3c'; // Color rojo para respuesta incorrecta
            // Encuentra el botón con la respuesta correcta y cámbiale el color a verde
            const correctBtn = Array.from(optionsElement.children).find(child => child.textContent === q.answer);
            if (correctBtn) {
                correctBtn.style.backgroundColor = '#2ecc71'; // Cambia el color del botón con la respuesta correcta a verde
            }
        }
        incorrectAnswers++; // Incrementar el contador de respuestas incorrectas
    }
    // Deshabilitar todos los botones después de la selección
    const buttons = optionsElement.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });
    // Mostrar la siguiente pregunta después de un breve retraso
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
            resultElement.textContent = '';
        } else {
            showFinalResult();
        }
    }, 1000);
}

function showFinalResult() {
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
    resultElement.textContent = `Tu puntuación final es ${score} de ${questions.length}. Respuestas incorrectas: ${incorrectAnswers}`;
}

// Función para mostrar una pregunta y sus opciones de respuesta
function displayQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = '';
    const shuffledOptions = shuffleOptions([...q.options]); // Mezcla las opciones de respuesta
    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.addEventListener('click', () => checkAnswer(option, btn));
        optionsElement.appendChild(btn);
    });
    // Reiniciar temporizador para la nueva pregunta
    startTimer();
}

// Función para mezclar las opciones de respuesta de manera aleatoria
function shuffleOptions(options) {
    // Mover la respuesta correcta a una posición aleatoria
    const correctIndex = options.findIndex(option => option === questions[currentQuestion].answer);
    const randomIndex = Math.floor(Math.random() * options.length);
    [options[correctIndex], options[randomIndex]] = [options[randomIndex], options[correctIndex]];

    // Mezclar las opciones restantes
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}

// Obtener elementos relevantes del DOM
const startQuizButton = document.getElementById('start-quiz');
const welcomeScreen = document.getElementById('welcome-screen');
const quizContainer = document.getElementById('question-container');
const booksContainer = document.getElementById('books-container');

// Agregar evento al botón de iniciar quizz
startQuizButton.addEventListener('click', () => {
    // Ocultar la pantalla de bienvenida y mostrar el contenedor de preguntas
    welcomeScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    // Mostrar la primera pregunta
    displayQuestion();
});

// Agregar evento al botón de ver libros
document.getElementById('view-books-btn').addEventListener('click', () => {
    // Ocultar la pantalla de bienvenida y mostrar el contenedor de libros
    welcomeScreen.style.display = 'none';
    booksContainer.style.display = 'block';
});