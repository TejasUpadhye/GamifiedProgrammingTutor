// ==================== SPIRITS DATA ====================
const SPIRITS = {
    valorine: {
        name: 'Valorine',
        title: 'Spirit of Variables',
        icon: '🔮',
        description: 'Guardian of memory and storage. Valorine helps you understand the flow of data.',
        ability: 'Inventory Boost: +5 slots for storing syntax fragments',
        realm: 0,
        color: '#8b5cf6',
        freed: false
    },
    condor: {
        name: 'Condor',
        title: 'Spirit of Conditions',
        icon: '⛰️',
        description: 'Master of paths and decisions. Condor sees all possible outcomes.',
        ability: 'Hint Navigation: Reveals critical decision points in your code',
        realm: 1,
        color: '#3b82f6',
        freed: false
    },
    luminode: {
        name: 'Luminode',
        title: 'Spirit of Loops',
        icon: '🌀',
        description: 'Eternal wanderer of cycles. Luminode understands the rhythm of repetition.',
        ability: 'Time Trials: Unlock speed challenges for bonus rewards',
        realm: 2,
        color: '#06b6d4',
        freed: false
    },
    funcella: {
        name: 'Funcella',
        title: 'Spirit of Functions',
        icon: '🌳',
        description: 'Ancient architect of reusable magic. Funcella teaches the art of efficiency.',
        ability: 'Spell Shortcuts: Save custom function templates',
        realm: 3,
        color: '#10b981',
        freed: false
    },
    sequora: {
        name: 'Sequora',
        title: 'Spirit of Arrays',
        icon: '📊',
        description: 'Keeper of order and collections. Sequora commands thousands as one.',
        ability: 'Multi-Item Spellcasting: Cast spells on entire data collections',
        realm: 4,
        color: '#f59e0b',
        freed: false
    },
    classarion: {
        name: 'Classarion',
        title: 'Spirit of OOP',
        icon: '🏰',
        description: 'The First Architect. Classarion built the kingdom using blueprints of reality.',
        ability: 'Advanced Puzzles: Unlock master-level challenges',
        realm: 5,
        color: '#fbbf24',
        freed: false
    }
};

// Function to get spirit by realm
function getSpiritByRealm(realmId) {
    return Object.values(SPIRITS).find(spirit => spirit.realm === realmId);
}

// Function to free a spirit
function freeSpirit(spiritKey) {
    if (SPIRITS[spiritKey]) {
        SPIRITS[spiritKey].freed = true;
        return SPIRITS[spiritKey];
    }
    return null;
}

// Function to get all freed spirits
function getFreedSpirits() {
    return Object.values(SPIRITS).filter(spirit => spirit.freed);
}

// Function to count freed spirits
function countFreedSpirits() {
    return getFreedSpirits().length;
}
