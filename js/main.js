// ==================== MAIN UI CONTROLLER ====================
// Handles all user interactions and view management

class UIController {
    constructor() {
        this.currentView = 'loading';
        this.currentHintVisible = false;
        this.initializeElements();
        this.attachEventListeners();
    }

    initializeElements() {
        // Screens
        this.loadingScreen = document.getElementById('loadingScreen');
        this.gameContainer = document.getElementById('gameContainer');
        
        // Views
        this.realmMapView = document.getElementById('realmMap');
        this.challengeView = document.getElementById('challengeView');
        this.bossView = document.getElementById('bossView');
        
        // Header elements
        this.playerTitleEl = document.getElementById('playerTitle');
        this.syntaxFragmentsEl = document.getElementById('syntaxFragments');
        this.spiritsFreedEl = document.getElementById('spiritsFreed');
        this.playerLevelEl = document.getElementById('playerLevel');
        
        // Challenge elements
        this.challengeTitleEl = document.getElementById('challengeTitle');
        this.challengeStoryEl = document.getElementById('challengeStory');
        this.objectiveTextEl = document.getElementById('objectiveText');
        this.hintTextEl = document.getElementById('hintText');
        this.testCasesListEl = document.getElementById('testCasesList');
        this.codeEditor = document.getElementById('codeEditor');
        this.outputDisplay = document.getElementById('outputDisplay');
        
        // Modals
        this.victoryModal = document.getElementById('victoryModal');
        this.spiritModal = document.getElementById('spiritModal');
        this.questsModal = document.getElementById('questsModal');
        this.inventoryModal = document.getElementById('inventoryModal');
        this.spellbookModal = document.getElementById('spellbookModal');
    }

    attachEventListeners() {
        // Start game
        document.getElementById('startGameBtn').addEventListener('click', () => {
            this.showGameScreen();
        });

        // Realm cards
        document.querySelectorAll('.realm-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const realmId = parseInt(e.currentTarget.dataset.realm);
                this.openRealm(realmId);
            });
        });

        // Navigation
        document.getElementById('backToMapBtn').addEventListener('click', () => {
            this.showRealmMap();
        });

        // Challenge actions
        document.getElementById('hintBtn').addEventListener('click', () => {
            this.toggleHint();
        });

        document.getElementById('runCodeBtn').addEventListener('click', () => {
            this.runCode();
        });

        document.getElementById('resetCodeBtn').addEventListener('click', () => {
            this.resetCode();
        });

        document.getElementById('submitSolutionBtn').addEventListener('click', () => {
            this.submitSolution();
        });

        document.getElementById('clearOutputBtn').addEventListener('click', () => {
            this.clearOutput();
        });

        // Modal buttons
        document.getElementById('inventoryBtn').addEventListener('click', () => {
            this.showInventory();
        });

        document.getElementById('spellbookBtn').addEventListener('click', () => {
            this.showSpellbook();
        });

        document.getElementById('questsBtn').addEventListener('click', () => {
            this.showQuests();
        });

        document.getElementById('continueBtn').addEventListener('click', () => {
            this.closeVictoryModal();
        });

        document.getElementById('closeSpiritModal').addEventListener('click', () => {
            this.closeSpiritModal();
        });

        // Close modals
        document.getElementById('closeQuestsModal').addEventListener('click', () => {
            this.questsModal.classList.remove('active');
        });

        document.getElementById('closeInventoryModal').addEventListener('click', () => {
            this.inventoryModal.classList.remove('active');
        });

        document.getElementById('closeSpellbookModal').addEventListener('click', () => {
            this.spellbookModal.classList.remove('active');
        });
    }

    // ==================== VIEW MANAGEMENT ====================
    showGameScreen() {
        this.loadingScreen.classList.remove('active');
        this.gameContainer.classList.add('active');
        this.showRealmMap();
        this.updateUI();
    }

    showRealmMap() {
        this.challengeView.classList.remove('active-view');
        this.bossView.classList.remove('active-view');
        this.realmMapView.classList.add('active-view');
        this.updateRealmMap();
        this.updateSpiritsShowcase();
    }

    showChallengeView() {
        this.realmMapView.classList.remove('active-view');
        this.bossView.classList.remove('active-view');
        this.challengeView.classList.add('active-view');
    }

    // ==================== UI UPDATES ====================
    updateUI() {
        const state = gameEngine.getState();
        this.playerTitleEl.textContent = state.playerTitle;
        this.syntaxFragmentsEl.textContent = state.syntaxFragments;
        this.spiritsFreedEl.textContent = `${state.spiritsFreed.length}/6`;
        this.playerLevelEl.textContent = state.playerLevel;
    }

    updateRealmMap() {
        REALMS.forEach(realm => {
            const card = document.querySelector(`[data-realm="${realm.id}"]`);
            if (!card) return;

            const progressFill = card.querySelector('.progress-fill');
            const progressText = card.querySelector('.progress-text');
            const realmStatus = card.querySelector('.realm-status');

            // Update progress
            const progress = (realm.completedChallenges / realm.challengeCount) * 100;
            progressFill.style.width = `${progress}%`;
            progressText.textContent = `${realm.completedChallenges}/${realm.challengeCount} Challenges`;

            // Update status
            if (realm.completed) {
                realmStatus.textContent = '✅';
                realmStatus.classList.remove('locked');
                realmStatus.classList.add('completed');
                card.classList.remove('locked');
            } else if (realm.unlocked) {
                realmStatus.textContent = '🔓';
                realmStatus.classList.remove('locked');
                realmStatus.classList.add('unlocked');
                card.classList.remove('locked');
            } else {
                realmStatus.textContent = '🔒';
                realmStatus.classList.add('locked');
                realmStatus.classList.remove('unlocked', 'completed');
                card.classList.add('locked');
            }
        });
    }

    updateSpiritsShowcase() {
        const spiritsList = document.getElementById('spiritsList');
        spiritsList.innerHTML = '';

        Object.values(SPIRITS).forEach(spirit => {
            const spiritCard = document.createElement('div');
            spiritCard.className = `spirit-card ${spirit.freed ? '' : 'locked'}`;
            spiritCard.innerHTML = `
                <div class="spirit-icon-large">${spirit.icon}</div>
                <h4>${spirit.name}</h4>
                <p>${spirit.title}</p>
                ${spirit.freed ? `<p style="color: var(--accent-gold); margin-top: 0.5rem;">${spirit.ability}</p>` : ''}
            `;
            spiritsList.appendChild(spiritCard);
        });
    }

    // ==================== REALM MANAGEMENT ====================
    openRealm(realmId) {
        const realm = getRealmById(realmId);
        
        if (!realm || !realm.unlocked) {
            this.showNotification('This realm is locked!', 'error');
            return;
        }

        const challenges = getChallengesForRealm(realmId);
        
        // Find first incomplete challenge
        const nextChallenge = challenges.find(c => 
            !gameEngine.isChallengCompleted(c.id)
        );

        if (nextChallenge) {
            this.loadChallenge(nextChallenge.id);
        } else {
            this.showNotification('You have completed all challenges in this realm!', 'success');
        }
    }

    loadChallenge(challengeId) {
        const challenge = gameEngine.startChallenge(challengeId);
        
        if (!challenge) {
            this.showNotification('Challenge not found!', 'error');
            return;
        }

        // Update challenge view
        this.challengeTitleEl.textContent = challenge.title;
        this.challengeStoryEl.textContent = challenge.story;
        this.objectiveTextEl.textContent = challenge.objective;
        this.codeEditor.value = challenge.starterCode;
        this.hintTextEl.textContent = challenge.hint;
        this.hintTextEl.classList.add('hidden');
        this.currentHintVisible = false;

        // Update test cases display
        this.updateTestCasesDisplay(challenge.testCases);

        // Clear output
        this.clearOutput();

        // Show challenge view
        this.showChallengeView();
    }

    updateTestCasesDisplay(testCases) {
        this.testCasesListEl.innerHTML = '';
        testCases.forEach((testCase, index) => {
            const testCaseEl = document.createElement('div');
            testCaseEl.className = 'test-case';
            testCaseEl.id = `test-case-${index}`;
            testCaseEl.innerHTML = `
                <strong>Test ${index + 1}:</strong> ${testCase.description}
            `;
            this.testCasesListEl.appendChild(testCaseEl);
        });
    }

    updateTestCaseResults(results) {
        results.forEach((result, index) => {
            const testCaseEl = document.getElementById(`test-case-${index}`);
            if (testCaseEl) {
                testCaseEl.classList.remove('passed', 'failed');
                testCaseEl.classList.add(result.passed ? 'passed' : 'failed');
            }
        });
    }

    // ==================== CODE EXECUTION ====================
    runCode() {
        const code = this.codeEditor.value;
        const challenge = gameEngine.getState().currentChallenge;

        this.clearOutput();

        if (!challenge) {
            this.addOutput('No active challenge!', 'error');
            return;
        }

        const result = codeValidator.validateSolution(code, challenge.testCases);
        
        // Display output
        result.output.forEach(line => {
            this.addOutput(line.text, line.type);
        });

        // Update test case display
        this.updateTestCaseResults(result.results);
    }

    submitSolution() {
        const code = this.codeEditor.value;
        const challenge = gameEngine.getState().currentChallenge;

        if (!challenge) {
            this.showNotification('No active challenge!', 'error');
            return;
        }

        const result = codeValidator.validateSolution(code, challenge.testCases);

        if (result.passed) {
            // Complete challenge
            gameEngine.completeChallenge(challenge.id, challenge.rewards);
            
            // Show victory modal
            this.showVictoryModal(challenge);
        } else {
            this.showNotification('Not all tests passed. Keep trying!', 'error');
            // Display output
            result.output.forEach(line => {
                this.addOutput(line.text, line.type);
            });
            this.updateTestCaseResults(result.results);
        }
    }

    resetCode() {
        const challenge = gameEngine.getState().currentChallenge;
        if (challenge) {
            this.codeEditor.value = challenge.starterCode;
            this.clearOutput();
        }
    }

    toggleHint() {
        if (this.currentHintVisible) {
            this.hintTextEl.classList.add('hidden');
            this.currentHintVisible = false;
        } else {
            this.hintTextEl.classList.remove('hidden');
            this.currentHintVisible = true;
        }
    }

    // ==================== OUTPUT ====================
    addOutput(text, type = 'info') {
        const line = document.createElement('div');
        line.className = `output-line ${type}`;
        line.textContent = text;
        this.outputDisplay.appendChild(line);
        this.outputDisplay.scrollTop = this.outputDisplay.scrollHeight;
    }

    clearOutput() {
        this.outputDisplay.innerHTML = '';
    }

    // ==================== MODALS ====================
    showVictoryModal(challenge) {
        const rewards = challenge.rewards;
        const victoryMessage = document.getElementById('victoryMessage');
        const rewardsDisplay = document.getElementById('rewardsDisplay');

        victoryMessage.innerHTML = `
            <p>You have successfully completed <strong>${challenge.title}</strong>!</p>
            <p>Your mastery of logic grows stronger.</p>
        `;

        rewardsDisplay.innerHTML = `
            <div class="reward-item">
                <span class="stat-icon">✨</span>
                <span>+${rewards.syntaxFragments} Syntax Fragments</span>
            </div>
            <div class="reward-item">
                <span class="stat-icon">⭐</span>
                <span>+${rewards.exp} Experience</span>
            </div>
        `;

        this.victoryModal.classList.add('active');
        this.updateUI();

        // Check if spirit was freed
        if (rewards.spiritFreed) {
            setTimeout(() => {
                this.victoryModal.classList.remove('active');
                const realm = getRealmById(challenge.realmId);
                const spirit = SPIRITS[realm.spiritKey];
                this.showSpiritModal(spirit);
            }, 2000);
        }
    }

    closeVictoryModal() {
        this.victoryModal.classList.remove('active');
        
        // Load next challenge or return to map
        const currentChallenge = gameEngine.getState().currentChallenge;
        const challenges = getChallengesForRealm(currentChallenge.realmId);
        const currentIndex = challenges.findIndex(c => c.id === currentChallenge.id);
        
        if (currentIndex < challenges.length - 1) {
            // Load next challenge
            this.loadChallenge(challenges[currentIndex + 1].id);
        } else {
            // Return to realm map
            this.showRealmMap();
        }
    }

    showSpiritModal(spirit) {
        document.getElementById('spiritIcon').textContent = spirit.icon;
        document.getElementById('spiritName').textContent = spirit.name;
        document.getElementById('spiritDescription').textContent = spirit.description;
        document.getElementById('spiritAbility').innerHTML = `
            <strong>New Ability:</strong> ${spirit.ability}
        `;
        this.spiritModal.classList.add('active');
    }

    closeSpiritModal() {
        this.spiritModal.classList.remove('active');
        this.showRealmMap();
    }

    showInventory() {
        const inventoryGrid = document.getElementById('inventoryGrid');
        const state = gameEngine.getState();
        
        inventoryGrid.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                <h3>Syntax Fragments: ${state.syntaxFragments}</h3>
                <p style="margin-top: 1rem;">Use fragments to unlock special upgrades and cosmetics!</p>
                <p style="margin-top: 1rem; font-style: italic;">More items coming soon...</p>
            </div>
        `;
        
        this.inventoryModal.classList.add('active');
    }

    showSpellbook() {
        const spellbookContent = document.getElementById('spellbookContent');
        const progress = gameEngine.getProgress();
        
        spellbookContent.innerHTML = `
            <div style="padding: 1rem;">
                <h3 style="margin-bottom: 1rem; color: var(--accent-purple);">Your Progress</h3>
                <div style="margin-bottom: 1.5rem;">
                    <p><strong>Challenges Completed:</strong> ${progress.completedChallenges} / ${progress.totalChallenges}</p>
                    <p><strong>Spirits Freed:</strong> ${progress.freedSpirits} / ${progress.totalSpirits}</p>
                    <p><strong>Level:</strong> ${progress.level}</p>
                    <p><strong>Experience:</strong> ${progress.experience} / ${progress.nextLevelExp}</p>
                </div>
                
                <h3 style="margin-bottom: 1rem; color: var(--accent-purple);">Learned Concepts</h3>
                <div style="display: grid; gap: 0.5rem;">
                    ${REALMS.filter(r => r.completed).map(r => `
                        <div style="background: rgba(139, 92, 246, 0.1); padding: 0.75rem; border-radius: 8px;">
                            <strong>${r.icon} ${r.name}</strong>
                            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.25rem;">
                                ${r.concepts.join(', ')}
                            </p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        this.spellbookModal.classList.add('active');
    }

    showQuests() {
        const questsList = document.getElementById('questsList');
        const quests = gameEngine.getState().dailyQuests;
        
        questsList.innerHTML = quests.map(quest => `
            <div class="quest-item" style="background: rgba(26, 31, 58, 0.6); padding: 1.5rem; border-radius: 12px; margin-bottom: 1rem; border-left: 4px solid ${quest.completed ? 'var(--accent-green)' : 'var(--accent-blue)'};">
                <h4 style="margin-bottom: 0.5rem;">${quest.completed ? '✅' : '⏳'} ${quest.title}</h4>
                <p style="color: var(--text-secondary); margin-bottom: 0.75rem;">${quest.description}</p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div class="progress-bar" style="flex: 1; margin-right: 1rem;">
                        <div class="progress-fill" style="width: ${(quest.progress / quest.goal) * 100}%"></div>
                    </div>
                    <span style="color: var(--accent-gold);">🎁 ${quest.reward}</span>
                </div>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;">Progress: ${quest.progress} / ${quest.goal}</p>
            </div>
        `).join('');
        
        this.questsModal.classList.add('active');
    }

    // ==================== NOTIFICATIONS ====================
    showNotification(message, type = 'info') {
        // Create temporary notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'error' ? 'var(--accent-red)' : type === 'success' ? 'var(--accent-green)' : 'var(--accent-blue)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// ==================== INITIALIZE ====================
let ui;

document.addEventListener('DOMContentLoaded', () => {
    ui = new UIController();
    
    // Override game engine notification
    gameEngine.showNotification = (message, type) => {
        ui.showNotification(message, type);
    };
    
    console.log('🌟 Code Kingdom Quest loaded!');
    console.log('Your journey begins...');
});

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
    .active-view {
        display: block !important;
    }
    .realm-map, .challenge-view, .boss-view {
        display: none;
    }
`;
document.head.appendChild(style);
