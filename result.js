
function showResult() {
    let answers = document.querySelectorAll('input[type=radio]:checked');
    let totalQuestions = document.querySelectorAll('.question').length;

    if (answers.length < totalQuestions) {
        document.getElementById("result").innerHTML = "Ответь на все вопросы, феечка! ✨";
        return;
    }

    let counts = { bloom: 0, stella: 0, flora: 0, tecna: 0, musa: 0, leila: 0 };
    answers.forEach(a => counts[a.value]++);

    let winner = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

    let results = {
        bloom: "Блум 🔥 — лидер, верный друг и хранительница Огня Дракона!",
        stella: "Стелла 💫 — стильная, обаятельная и всегда сияет ярче солнца!",
        flora: "Флора 🌿 — добрая, заботливая и любит всё живое!",
        tecna: "Текна ⚡ — гений технологий, логики и видеоигр!",
        musa: "Муза 🎵 — творческая, честная и живёт музыкой!",
        leila: "Лейла 💧 — смелая, спортивная и управляет магией воды!"
    };

    let images = {
        bloom: "images/bloom.png",
        stella: "images/stella.webp",
        flora: "images/flora.jpg",
        tecna: "images/tecna.webp",
        musa: "images/musa.jpeg",
        leila: "images/leila.webp"
    };

    document.getElementById("result").innerHTML =
        "<h2>Ты — " + results[winner] + "</h2>" +
        "<img src='" + images[winner] + "' alt='" + winner + "' width='200'>";
}