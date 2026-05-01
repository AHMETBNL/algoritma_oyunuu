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
    
    // Allow pressing Enter to start
    usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') startGame();
    });
});

function startGame() {
    const name = usernameInput.value.trim();
    if (!name) {
        alert("Lütfen bir kullanıcı adı girin!");
        return;
    }
    
    // Select random levels (1 Kolay, 1 Orta, 1 Zor)
    const kolay = gameLevels.filter(l => l.baseScore === 500);
    const orta = gameLevels.filter(l => l.baseScore === 1000);
    const zor = gameLevels.filter(l => l.baseScore === 1500);
    
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
            <button class="btn btn-secondary" onclick="location.reload()" style="margin: 0 auto; margin-top: 20px; background-color: #333; color: #fff;">
                <i class="fas fa-arrow-left"></i> Geri Dön
            </button>
        </div>
    `;
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
