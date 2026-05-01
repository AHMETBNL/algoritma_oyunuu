// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const gameScreen = document.getElementById('gameScreen');
const usernameInput = document.getElementById('usernameInput');
const startButton = document.getElementById('startButton');
const leaderboardBtn = document.getElementById('leaderboardBtn'); // NEW

const levelBadge = document.getElementById('levelBadge');
const scoreDisplay = document.getElementById('scoreDisplay');
const levelTitle = document.getElementById('levelTitle');
const sortableList = document.getElementById('sortableList');
const checkButton = document.getElementById('checkButton');
const nextLevelButton = document.getElementById('nextLevelButton');
const appContainer = document.querySelector('.app-container');

// Game State
let currentLevelIndex = 0;
let sortableInstance = null;
let username = "";
let totalScore = 0;
let activeGameLevels = []; // NEW

// Initialize Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    startButton.addEventListener('click', startGame);
    checkButton.addEventListener('click', checkOrder);
    nextLevelButton.addEventListener('click', loadNextLevel);
    leaderboardBtn.addEventListener('click', showWelcomeLeaderboard); // NEW
    document.getElementById('howToPlayBtn').addEventListener('click', showHowToPlay);
    document.getElementById('htpCloseBtn').addEventListener('click', closeHowToPlay);
    document.getElementById('htpGotItBtn').addEventListener('click', closeHowToPlay);
    // Overlay dışına tıklayarak kapat
    document.getElementById('howToPlayModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('howToPlayModal')) closeHowToPlay();
    });
    
    // Allow pressing Enter to start
    usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') startGame();
    });
    
    // Start matrix background
    initMatrixBackground();
});


function startGame() {
    const name = usernameInput.value.trim();
    if (!name) {
        alert("Lütfen bir kullanıcı adı girin!");
        return;
    }
    
    // Select random levels (1 Kolay, 1 Orta, 1 Zor) — baseScore ile filtre
    const kolay = gameLevels.filter(l => l.baseScore === 500);
    const orta  = gameLevels.filter(l => l.baseScore === 1000);
    const zor   = gameLevels.filter(l => l.baseScore === 1500);

    console.log(`Toplam: ${gameLevels.length} soru | Kolay: ${kolay.length} | Orta: ${orta.length} | Zor: ${zor.length}`);

    if (kolay.length === 0 || orta.length === 0 || zor.length === 0) {
        alert("Soru veritabanında eksik kategori var! Konsolu kontrol et.");
        return;
    }
    
    activeGameLevels = [
        kolay[Math.floor(Math.random() * kolay.length)],
        orta[Math.floor(Math.random() * orta.length)],
        zor[Math.floor(Math.random() * zor.length)]
    ];
    
    username = name;
    welcomeScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
    currentLevelIndex = 0;
    totalScore = 0;
    updateScoreDisplay();
    
    loadLevel(currentLevelIndex);
}

// Load a specific level
function loadLevel(index) {
    if (index >= activeGameLevels.length) {
        showWinScreen();
        return;
    }

    const level = activeGameLevels[index];
    
    // Update Header
    levelBadge.textContent = level.badge;
    levelTitle.textContent = level.title;
    
    // Hide next button, show check button
    nextLevelButton.classList.add('hidden');
    checkButton.classList.remove('hidden');
    checkButton.disabled = false;
    
    // Clear list
    sortableList.innerHTML = '';
    
    // Shuffle steps
    const shuffledSteps = [...level.steps].sort(() => Math.random() - 0.5);
    
    // Inject items into DOM
    shuffledSteps.forEach(step => {
        const li = document.createElement('li');
        li.className = 'sortable-item';
        li.dataset.id = step.id;
        
        li.innerHTML = `
            <i class="fas fa-grip-vertical item-icon"></i>
            <span class="item-text">${step.text}</span>
        `;
        
        sortableList.appendChild(li);
    });
    
    // Initialize or re-initialize SortableJS
    if (sortableInstance) {
        sortableInstance.destroy();
    }
    
    sortableInstance = new Sortable(sortableList, {
        animation: 150,
        ghostClass: 'sortable-ghost',
        dragClass: 'sortable-drag'
    });
}

// Check if the current order is correct
function checkOrder() {
    const currentItems = Array.from(sortableList.children);
    const level = activeGameLevels[currentLevelIndex];
    const correctSteps = level.steps;
    let isAllCorrect = true;
    
    currentItems.forEach((item, index) => {
        const itemId = item.dataset.id;
        const expectedId = correctSteps[index].id;
        
        if (itemId !== expectedId) {
            isAllCorrect = false;
            item.classList.add('wrong');
        }
    });
    
    if (isAllCorrect) {
        handleSuccess(level.baseScore);
    } else {
        // Immediate elimination if wrong
        setTimeout(() => {
            showEliminationScreen();
        }, 600); // Wait a bit to show the shake animation
    }
}

// Handle successful sort
function handleSuccess(pointsEarned) {
    const items = sortableList.children;
    for (let item of items) {
        item.classList.remove('wrong');
        item.classList.add('correct');
    }
    
    // Update score
    totalScore += pointsEarned;
    updateScoreDisplay();
    
    // Trigger confetti
    triggerConfetti();
    
    // Update UI
    checkButton.classList.add('hidden');
    nextLevelButton.classList.remove('hidden');
    
    // Disable dragging
    sortableInstance.options.disabled = true;
}

function updateScoreDisplay() {
    scoreDisplay.textContent = totalScore;
}

// Load next level
function loadNextLevel() {
    currentLevelIndex++;
    loadLevel(currentLevelIndex);
}

// Save Score to LocalStorage
function saveScore() {
    let leaderboard = JSON.parse(localStorage.getItem('algoGameLeaderboard')) || [];
    leaderboard.push({ name: username, score: totalScore, date: new Date().toISOString() });
    
    // Sort descending by score
    leaderboard.sort((a, b) => b.score - a.score);
    
    localStorage.setItem('algoGameLeaderboard', JSON.stringify(leaderboard));
    return leaderboard;
}

// Generate Leaderboard HTML
function generateLeaderboardHTML(leaderboard) {
    let html = `
        <div class="leaderboard">
            <h3>🏆 Liderlik Tablosu 🏆</h3>
            <ul class="leaderboard-list">
    `;
    
    const top10 = leaderboard.slice(0, 10);
    top10.forEach((entry, idx) => {
        html += `
            <li class="leaderboard-item">
                <span class="rank">#${idx + 1}</span>
                <span class="name">${entry.name}</span>
                <span class="score">${entry.score} Puan</span>
            </li>
        `;
    });
    
    html += `
            </ul>
        </div>
    `;
    return html;
}

// Show Leaderboard from Welcome Screen
function showWelcomeLeaderboard() {
    let leaderboard = JSON.parse(localStorage.getItem('algoGameLeaderboard')) || [];
    const leaderboardHTML = generateLeaderboardHTML(leaderboard);
    
    appContainer.innerHTML = `
        <div class="end-screen">
            ${leaderboardHTML}
            <div style="display: flex; gap: 10px; margin-top: 20px; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn-secondary" onclick="location.reload()" style="background-color: #333; color: #fff;">
                    <i class="fas fa-arrow-left"></i> Geri Dön
                </button>
                <button class="btn" onclick="resetLeaderboard()" style="background-color: #b71c1c; color: #fff;">
                    <i class="fas fa-trash"></i> Skorları Sıfırla
                </button>
            </div>
        </div>
    `;
}

function resetLeaderboard() {
    if (confirm('Tüm skorlar silinecek. Emin misin?')) {
        localStorage.removeItem('algoGameLeaderboard');
        location.reload();
    }
}

// Show Elimination Screen (Game Over)
function showEliminationScreen() {
    const leaderboard = saveScore();
    const leaderboardHTML = generateLeaderboardHTML(leaderboard);
    
    appContainer.innerHTML = `
        <div class="end-screen">
            <i class="fas fa-times-circle end-icon" style="color: var(--error-color);"></i>
            <h2 class="end-title">Elendiniz!</h2>
            <p class="end-text">Sıralama hatalıydı. Oyun burada sona erdi.</p>
            <h3 style="margin-bottom: 20px; color: #fff;">Puanınız: ${totalScore}</h3>
            <button class="btn btn-primary" onclick="location.reload()" style="margin: 0 auto;">
                <i class="fas fa-redo"></i> Ana Ekrana Dön
            </button>
            ${leaderboardHTML}
        </div>
    `;
}

// Show Win Screen
function showWinScreen() {
    const leaderboard = saveScore();
    const leaderboardHTML = generateLeaderboardHTML(leaderboard);
    
    appContainer.innerHTML = `
        <div class="end-screen">
            <i class="fas fa-trophy end-icon"></i>
            <h2 class="end-title">Tebrikler : ${username}</h2>
            <h3 style="margin-bottom: 10px; color: #fff;">Toplam Puan: ${totalScore}</h3>
            <p class="end-text" style="color: var(--success-color); font-size: 1.2rem; font-weight: bold;">Ödül almaya hak kazandınız!</p>
            <button class="btn btn-primary" onclick="location.reload()" style="margin: 0 auto; margin-top: 20px;">
                <i class="fas fa-redo"></i> Yeni Oyun
            </button>
            ${leaderboardHTML}
        </div>
    `;
}

// Confetti Animation
function triggerConfetti() {
    const count = 200;
    const defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}

// Matrix Background Animation
function initMatrixBackground() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Make canvas full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters for Matrix Rain (only 0 and 1)
    const chars = '01';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    // Array to track the y coordinate of each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100; // start at random heights above screen
    }

    // Animation control
    let lastTime = 0;
    const fps = 3; // Lower FPS to make it very slow
    const interval = 1000 / fps;

    function draw(currentTime) {
        requestAnimationFrame(draw);

        const delta = currentTime - lastTime;

        if (delta > interval) {
            // Draw a semi-transparent black rectangle over the canvas to create the trail effect
            ctx.fillStyle = 'rgba(18, 18, 18, 0.1)'; // Matches background color for fade effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0'; // Neon green text
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                // Pick a random char
                const text = chars.charAt(Math.floor(Math.random() * chars.length));

                // x = i * fontSize, y = drops[i] * fontSize
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop if it reaches bottom or randomly
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Move drop down
                drops[i]++;
            }

            lastTime = currentTime - (delta % interval);
        }
    }

    // Start animation
    requestAnimationFrame(draw);

    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Re-calculate columns and reset drops
        const newColumns = Math.floor(canvas.width / fontSize);
        for (let i = 0; i < newColumns; i++) {
            if (i >= drops.length) {
                drops[i] = Math.random() * -100;
            }
        }
    });
}

// ============================================================
//  HOW TO PLAY MODAL — Çay Demleme Animasyonu
// ============================================================

// Çay demleme adımları (karışık sıra → doğru sıra gösterilecek)
const teaSteps = [
    { id: 1, emoji: '🫖', text: 'Çaydanlığa su doldur' },
    { id: 2, emoji: '🔥', text: 'Ocağı yak ve suyu kaynat' },
    { id: 3, emoji: '🍃', text: 'Demliğe çay yapraklarını koy' },
    { id: 4, emoji: '💧', text: 'Kaynayan suyu demliğe dök' },
    { id: 5, emoji: '⏳', text: '10 dakika demlenmeye bırak' },
    { id: 6, emoji: '🍵', text: 'Bardağa çay koy ve servis et' },
];

let htpAnimTimer = null;

function showHowToPlay() {
    const modal = document.getElementById('howToPlayModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    renderHtpSteps();
    startTeaAnimation();
}

function closeHowToPlay() {
    const modal = document.getElementById('howToPlayModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (htpAnimTimer) { clearTimeout(htpAnimTimer); htpAnimTimer = null; }
}

function renderHtpSteps(order) {
    const container = document.getElementById('htpSteps');
    const steps = order || shuffleArray([...teaSteps]);
    container.innerHTML = '';
    steps.forEach((step, idx) => {
        const card = document.createElement('div');
        card.className = 'htp-step-card';
        card.dataset.stepId = step.id;
        card.innerHTML = `
            <span class="htp-step-num">${idx + 1}</span>
            <span class="htp-step-emoji">${step.emoji}</span>
            <span>${step.text}</span>
        `;
        container.appendChild(card);
    });
    return steps;
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Animasyon: yanlış sıralı kartları göster → bir tanesini "highlight" et → doğru sıraya koy → tümü yeşil
function startTeaAnimation() {
    if (htpAnimTimer) clearTimeout(htpAnimTimer);

    // 1. Karışık sıra ile başla
    const shuffled = renderHtpSteps();

    // 2. 1.2s sonra bir kartı "taşınıyor" olarak işaretle
    htpAnimTimer = setTimeout(() => {
        animateSorting(shuffled, 0);
    }, 1200);
}

function animateSorting(shuffled, swapIndex) {
    const container = document.getElementById('htpSteps');
    if (!container) return;
    const cards = Array.from(container.children);

    // Şu anki ve hedef pozisyon belirleme
    // Hangi kart yanlış yerde?
    let wrongIdx = -1;
    for (let i = 0; i < shuffled.length; i++) {
        if (parseInt(cards[i].dataset.stepId) !== teaSteps[i].id) {
            wrongIdx = i;
            break;
        }
    }

    if (wrongIdx === -1) {
        // Hepsi doğru sırada → yeşil yap, sonra yeniden başlat
        cards.forEach(c => { c.classList.remove('is-moving', 'is-wrong'); c.classList.add('is-correct'); });
        htpAnimTimer = setTimeout(() => {
            cards.forEach(c => c.classList.remove('is-correct'));
            startTeaAnimation(); // baştan başlat
        }, 2200);
        return;
    }

    // Yanlış konumdaki kart → doğru konumu bul
    const movingCardId = parseInt(cards[wrongIdx].dataset.stepId);
    const targetIdx = teaSteps.findIndex(s => s.id === movingCardId);

    // "moving" animasyonu
    cards[wrongIdx].classList.add('is-moving');

    htpAnimTimer = setTimeout(() => {
        cards[wrongIdx].classList.remove('is-moving');

        // DOM'da swap yap
        if (wrongIdx !== targetIdx) {
            // yerlerini değiştir
            const refNode = cards[targetIdx].nextSibling;
            container.insertBefore(cards[wrongIdx], cards[targetIdx]);
            container.insertBefore(cards[targetIdx], refNode);

            // shuffled dizisini güncelle
            [shuffled[wrongIdx], shuffled[targetIdx]] = [shuffled[targetIdx], shuffled[wrongIdx]];
        }

        // Bir sonraki adım
        htpAnimTimer = setTimeout(() => {
            animateSorting(Array.from(container.children).map(c => ({ id: parseInt(c.dataset.stepId) })), swapIndex + 1);
        }, 500);
    }, 700);
}
