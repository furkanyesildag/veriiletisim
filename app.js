// Veri İletişimi Teknikleri - Soru Bankası Uygulaması
let currentQuestion = null;
let selectedAnswer = null;
let currentQuestionIndex = -1; // Hangi soruda olduğumuz
let questionOrder = []; // Soruların sırası
let isChecking = false; // Şu anda kontrol yapılıyor mu?
let stats = {
    correct: 0,
    wrong: 0,
    total: 0
};
let recentQuestions = [];

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    loadStats();
    updateStatsDisplay();
    
    document.getElementById('resetBtn').addEventListener('click', resetStats);
    
    // Soruları sıraya koy ve rastgele birinden başla
    initializeQuestions();
});

// Soruları başlat - rastgele sırayla ama 1. sorudan başla
function initializeQuestions() {
    // Tüm soruları sıraya koy
    questionOrder = questions.map((q, index) => index);
    
    // Soruları karıştır (Fisher-Yates shuffle algoritması)
    for (let i = questionOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionOrder[i], questionOrder[j]] = [questionOrder[j], questionOrder[i]];
    }
    
    // 1. soruyu (ID=1) bul ve başa taşı
    const questionOneIndex = questions.findIndex(q => q.id === 1);
    if (questionOneIndex !== -1) {
        const indexInOrder = questionOrder.indexOf(questionOneIndex);
        if (indexInOrder !== -1) {
            // 1. soruyu başa taşı
            questionOrder.splice(indexInOrder, 1);
            questionOrder.unshift(questionOneIndex);
        }
    }
    
    currentQuestionIndex = 0;
    loadNextQuestion();
}

// Bir sonraki soruyu yükle
function loadNextQuestion() {
    if (currentQuestionIndex >= questionOrder.length) {
        // Tüm sorular tamamlandı
        document.getElementById('questionText').textContent = '🎉 Tüm sorular tamamlandı!';
        document.getElementById('optionsContainer').innerHTML = '<p style="text-align: center; color: #667eea; font-size: 1.2em;">Tebrikler! Tüm soruları çözdünüz.</p>';
        return;
    }
    
    const questionIndex = questionOrder[currentQuestionIndex];
    currentQuestion = questions[questionIndex];
    selectedAnswer = null;
    isChecking = false;
    
    displayQuestion(currentQuestion);
    
    // Geri bildirimleri temizle
    document.getElementById('feedback').classList.remove('show', 'correct', 'wrong');
    document.getElementById('correctAnswer').classList.remove('show');
}

// Rastgele soru yükle (artık kullanılmıyor, ama geriye dönük uyumluluk için)
function loadRandomQuestion() {
    loadNextQuestion();
}

// Soruyu ekranda göster
function displayQuestion(question) {
    document.getElementById('questionNumber').textContent = question.id;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    // Seçenekleri oluştur
    ['a', 'b', 'c', 'd', 'e'].forEach(optionKey => {
        if (question.options[optionKey]) {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'answer';
            radio.id = `option-${optionKey}`;
            radio.value = optionKey;
            radio.addEventListener('change', function() {
                if (!isChecking) {
                    selectedAnswer = optionKey;
                    updateOptionStyles();
                    // Otomatik olarak cevabı kontrol et
                    setTimeout(() => {
                        checkAnswer();
                    }, 300); // Kısa bir gecikme ile daha akıcı görünsün
                }
            });
            
            const label = document.createElement('label');
            label.className = 'option-label';
            label.textContent = optionKey.toUpperCase() + ')';
            label.setAttribute('for', `option-${optionKey}`);
            
            const optionText = document.createElement('span');
            optionText.textContent = question.options[optionKey];
            
            optionDiv.appendChild(radio);
            optionDiv.appendChild(label);
            optionDiv.appendChild(optionText);
            
            optionsContainer.appendChild(optionDiv);
        }
    });
}

// Seçenek stillerini güncelle
function updateOptionStyles() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('selected');
        const radio = option.querySelector('input[type="radio"]');
        if (radio && radio.checked) {
            option.classList.add('selected');
        }
    });
}

// Cevabı kontrol et
function checkAnswer() {
    if (!currentQuestion || isChecking) {
        return;
    }
    
    if (!selectedAnswer) {
        return;
    }
    
    isChecking = true;
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const feedbackDiv = document.getElementById('feedback');
    const correctAnswerDiv = document.getElementById('correctAnswer');
    
    stats.total++;
    
    if (isCorrect) {
        stats.correct++;
        feedbackDiv.textContent = '✓ Doğru Cevap! Tebrikler!';
        feedbackDiv.className = 'feedback show correct';
        correctAnswerDiv.classList.remove('show');
        
        // Doğru cevabı vurgula
        highlightCorrectAnswer();
        
        // İstatistikleri güncelle
        updateStatsDisplay();
        saveStats();
        
        // Son çözülen sorulara ekle
        addToRecentQuestions(currentQuestion.id, isCorrect);
        
        // Doğru cevapta daha hızlı geçiş (1 saniye)
        setTimeout(() => {
            currentQuestionIndex++;
            loadNextQuestion();
        }, 1000);
    } else {
        stats.wrong++;
        feedbackDiv.textContent = '✗ Yanlış Cevap! Doğru cevap: ' + 
            currentQuestion.correctAnswer.toUpperCase() + ') ' + 
            currentQuestion.options[currentQuestion.correctAnswer];
        feedbackDiv.className = 'feedback show wrong';
        
        // Açıklamayı göster
        const correctOption = currentQuestion.options[currentQuestion.correctAnswer];
        correctAnswerDiv.innerHTML = `<strong>Doğru Cevap:</strong> ${currentQuestion.correctAnswer.toUpperCase()}) ${correctOption}<br><br><strong>Açıklama:</strong> ${currentQuestion.explanation}`;
        correctAnswerDiv.classList.add('show');
        
        // Doğru cevabı vurgula
        highlightCorrectAnswer();
        
        // İstatistikleri güncelle
        updateStatsDisplay();
        saveStats();
        
        // Son çözülen sorulara ekle
        addToRecentQuestions(currentQuestion.id, isCorrect);
        
        // Yanlış cevapta açıklamayı okuyabilmesi için biraz daha uzun süre (2.5 saniye)
        setTimeout(() => {
            currentQuestionIndex++;
            loadNextQuestion();
        }, 2500);
    }
}

// Doğru cevabı vurgula
function highlightCorrectAnswer() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        const radio = option.querySelector('input[type="radio"]');
        if (radio && radio.value === currentQuestion.correctAnswer) {
            option.classList.add('correct');
        } else if (radio && radio.checked && radio.value !== currentQuestion.correctAnswer) {
            option.classList.add('wrong');
        }
        radio.disabled = true;
    });
}

// Doğru cevabı göster (artık kullanılmıyor)
function showCorrectAnswer() {
    // Bu fonksiyon artık kullanılmıyor
}

// İstatistikleri ekranda güncelle
function updateStatsDisplay() {
    document.getElementById('correctCount').textContent = stats.correct;
    document.getElementById('wrongCount').textContent = stats.wrong;
    
    const successRate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    document.getElementById('successRate').textContent = successRate + '%';
}

// İstatistikleri kaydet (localStorage)
function saveStats() {
    localStorage.setItem('quizStats', JSON.stringify(stats));
    localStorage.setItem('recentQuestions', JSON.stringify(recentQuestions));
}

// İstatistikleri yükle (localStorage)
function loadStats() {
    const savedStats = localStorage.getItem('quizStats');
    if (savedStats) {
        stats = JSON.parse(savedStats);
    }
    
    const savedRecent = localStorage.getItem('recentQuestions');
    if (savedRecent) {
        recentQuestions = JSON.parse(savedRecent);
        updateRecentQuestionsDisplay();
    }
}

// İstatistikleri sıfırla
function resetStats() {
    if (confirm('İstatistikleri sıfırlamak istediğinizden emin misiniz?')) {
        stats = {
            correct: 0,
            wrong: 0,
            total: 0
        };
        recentQuestions = [];
        updateStatsDisplay();
        saveStats();
        updateRecentQuestionsDisplay();
        
        // Soruları yeniden başlat
        initializeQuestions();
        
        alert('İstatistikler sıfırlandı ve sorular yeniden başlatıldı!');
    }
}

// Son çözülen sorulara ekle
function addToRecentQuestions(questionId, isCorrect) {
    recentQuestions.unshift({
        id: questionId,
        isCorrect: isCorrect,
        timestamp: Date.now()
    });
    
    // Maksimum 10 soru tut
    if (recentQuestions.length > 10) {
        recentQuestions = recentQuestions.slice(0, 10);
    }
    
    updateRecentQuestionsDisplay();
    saveStats();
}

// Son çözülen soruları göster
function updateRecentQuestionsDisplay() {
    const recentList = document.getElementById('recentQuestionsList');
    recentList.innerHTML = '';
    
    if (recentQuestions.length === 0) {
        recentList.innerHTML = '<p style="color: #6b7280;">Henüz soru çözülmedi.</p>';
        return;
    }
    
    recentQuestions.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'recent-question-item ' + (item.isCorrect ? 'correct' : 'wrong');
        itemDiv.textContent = `Soru ${item.id}`;
        itemDiv.title = item.isCorrect ? 'Doğru' : 'Yanlış';
        itemDiv.addEventListener('click', function() {
            // Soruyu yükle
            const question = questions.find(q => q.id === item.id);
            if (question) {
                // Soruyu bul ve sıraya ekle
                const questionIndex = questions.findIndex(q => q.id === item.id);
                if (questionIndex !== -1) {
                    // Bu soruyu bir sonraki soru yap
                    const currentIndex = questionOrder.indexOf(questionIndex);
                    if (currentIndex !== -1) {
                        currentQuestionIndex = currentIndex;
                    } else {
                        // Soru henüz çözülmemişse, sıraya ekle
                        questionOrder.splice(currentQuestionIndex + 1, 0, questionIndex);
                        currentQuestionIndex++;
                    }
                    loadNextQuestion();
                }
            }
        });
        recentList.appendChild(itemDiv);
    });
}

