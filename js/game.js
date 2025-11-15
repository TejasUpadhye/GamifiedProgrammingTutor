// ==================== GAME ENGINE ====================
// Core game state and logic management

class GameEngine {
    constructor() {
        this.state = {
            playerLevel: 1,
            playerTitle: 'Apprentice of Order',
            syntaxFragments: 0,
            experience: 0,
            experienceToNextLevel: 100,
            spiritsFreed: [],
            currentRealm: null,
            currentChallenge: null,
            completedChallenges: [],
            inventory: [],
            unlockedSpells: [],
            dailyQuests: [],
            achievements: []
        };

        this.loadGame();
    }

    // ==================== SAVE/LOAD ====================
    saveGame() {
        localStorage.setItem('codeKingdomQuest', JSON.stringify({
            state: this.state,
            realms: REALMS,
            spirits: SPIRITS,
            bossBattles: BOSS_BATTLES
        }));
        console.log('Game saved!');
    }

    loadGame() {
        const saved = localStorage.getItem('codeKingdomQuest');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.state = data.state;
                
                // Restore realm states
                if (data.realms) {
                    data.realms.forEach((savedRealm, index) => {
                        Object.assign(REALMS[index], savedRealm);
                    });
                }
                
                // Restore spirit states
                if (data.spirits) {
                    Object.keys(data.spirits).forEach(key => {
                        if (SPIRITS[key]) {
                            Object.assign(SPIRITS[key], data.spirits[key]);
                        }
                    });
                }

                // Restore boss states
                if (data.bossBattles) {
                    data.bossBattles.forEach((savedBoss, index) => {
                        Object.assign(BOSS_BATTLES[index], savedBoss);
                    });
                }

                console.log('Game loaded!');
                return true;
            } catch (e) {
                console.error('Failed to load game:', e);
                return false;
            }
        }
        this.generateDailyQuests();
        return false;
    }

    resetGame() {
        if (confirm('Are you sure you want to reset all progress?')) {
            localStorage.removeItem('codeKingdomQuest');
            location.reload();
        }
    }

    // ==================== PROGRESSION ====================
    addExperience(amount) {
        this.state.experience += amount;
        
        while (this.state.experience >= this.state.experienceToNextLevel) {
            this.levelUp();
        }
        
        this.saveGame();
    }

    levelUp() {
        this.state.playerLevel++;
        this.state.experience -= this.state.experienceToNextLevel;
        this.state.experienceToNextLevel = Math.floor(this.state.experienceToNextLevel * 1.5);
        
        // Update title based on level
        if (this.state.playerLevel >= 20) {
            this.state.playerTitle = 'Grand Architect of Order';
        } else if (this.state.playerLevel >= 15) {
            this.state.playerTitle = 'Master Coder-Mage';
        } else if (this.state.playerLevel >= 10) {
            this.state.playerTitle = 'Senior Logic Keeper';
        } else if (this.state.playerLevel >= 5) {
            this.state.playerTitle = 'Logic Keeper';
        }
        
        this.showNotification(`Level Up! You are now level ${this.state.playerLevel}!`, 'success');
    }

    addSyntaxFragments(amount) {
        this.state.syntaxFragments += amount;
        this.saveGame();
    }

    // ==================== CHALLENGE MANAGEMENT ====================
    startChallenge(challengeId) {
        const challenge = getChallenge(challengeId);
        if (challenge) {
            this.state.currentChallenge = challenge;
            this.saveGame();
            return challenge;
        }
        return null;
    }

    completeChallenge(challengeId, rewards) {
        if (!this.state.completedChallenges.includes(challengeId)) {
            this.state.completedChallenges.push(challengeId);
            
            // Add rewards
            if (rewards.syntaxFragments) {
                this.addSyntaxFragments(rewards.syntaxFragments);
            }
            if (rewards.exp) {
                this.addExperience(rewards.exp);
            }
            
            // Check if spirit should be freed
            if (rewards.spiritFreed) {
                const challenge = getChallenge(challengeId);
                const realm = getRealmById(challenge.realmId);
                this.freeSpirit(realm.spiritKey);
            }
            
            // Update realm progress
            const challenge = getChallenge(challengeId);
            const realmChallenges = getChallengesForRealm(challenge.realmId);
            const completedInRealm = realmChallenges.filter(c => 
                this.state.completedChallenges.includes(c.id)
            ).length;
            
            updateRealmProgress(challenge.realmId, completedInRealm);
            
            // Check if realm is completed
            if (completedInRealm >= realmChallenges.length) {
                this.completeRealm(challenge.realmId);
            }
            
            // Update daily quests
            this.updateDailyQuests(challengeId);
            
            this.saveGame();
            return true;
        }
        return false;
    }

    completeRealm(realmId) {
        completeRealm(realmId);
        const nextRealm = unlockNextRealm(realmId);
        
        if (nextRealm) {
            this.showNotification(`New Realm Unlocked: ${nextRealm.name}!`, 'success');
        }
        
        this.saveGame();
    }

    // ==================== SPIRITS ====================
    freeSpirit(spiritKey) {
        const spirit = freeSpirit(spiritKey);
        if (spirit && !this.state.spiritsFreed.includes(spiritKey)) {
            this.state.spiritsFreed.push(spiritKey);
            this.saveGame();
            return spirit;
        }
        return null;
    }

    // ==================== DAILY QUESTS ====================
    generateDailyQuests() {
        const quests = [
            {
                id: 'daily-1',
                title: 'Free 1 Spirit',
                description: 'Complete a realm and free its spirit',
                progress: 0,
                goal: 1,
                reward: 50,
                completed: false
            },
            {
                id: 'daily-2',
                title: 'Complete 3 Challenges',
                description: 'Successfully solve 3 code challenges',
                progress: 0,
                goal: 3,
                reward: 30,
                completed: false
            },
            {
                id: 'daily-3',
                title: 'Perfect Execution',
                description: 'Complete a challenge on first try',
                progress: 0,
                goal: 1,
                reward: 40,
                completed: false
            }
        ];
        
        this.state.dailyQuests = quests;
        this.saveGame();
    }

    updateDailyQuests(challengeId) {
        // Update quest progress
        const quest = this.state.dailyQuests.find(q => q.id === 'daily-2');
        if (quest && !quest.completed) {
            quest.progress++;
            if (quest.progress >= quest.goal) {
                quest.completed = true;
                this.addSyntaxFragments(quest.reward);
                this.showNotification('Daily Quest Completed!', 'success');
            }
        }
        
        this.saveGame();
    }

    // ==================== NOTIFICATIONS ====================
    showNotification(message, type = 'info') {
        // This will be called by UI controller
        console.log(`[${type.toUpperCase()}] ${message}`);
    }

    // ==================== GETTERS ====================
    getState() {
        return this.state;
    }

    isChallengCompleted(challengeId) {
        return this.state.completedChallenges.includes(challengeId);
    }

    getProgress() {
        return {
            totalChallenges: Object.values(CHALLENGES).flat().length,
            completedChallenges: this.state.completedChallenges.length,
            totalSpirits: Object.keys(SPIRITS).length,
            freedSpirits: this.state.spiritsFreed.length,
            level: this.state.playerLevel,
            experience: this.state.experience,
            nextLevelExp: this.state.experienceToNextLevel
        };
    }
}

// Export singleton instance
const gameEngine = new GameEngine();
