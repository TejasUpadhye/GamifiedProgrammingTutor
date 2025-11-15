// ==================== REALMS DATA ====================
const REALMS = [
    {
        id: 0,
        name: 'Realm of Variables',
        subtitle: 'The Origin Fields',
        icon: '🔮',
        description: 'A landscape where memory crystals float like lazy fireflies. The spirits trapped here are "Shifters," creatures who can only return to form when assigned the right values.',
        concepts: ['Variable Declaration', 'Assignment', 'Data Types', 'Variable Scope', 'Constants'],
        unlocked: true,
        completed: false,
        challengeCount: 5,
        completedChallenges: 0,
        spiritKey: 'valorine'
    },
    {
        id: 1,
        name: 'Valley of Conditions',
        subtitle: 'The If-Cliffs',
        icon: '⛰️',
        description: 'Cliffs split by branching paths, ruled by troll-guards who only accept correct logic. Their shields flicker in patterns hinting at their expectations.',
        concepts: ['If Statements', 'Else/Else If', 'Boolean Logic', 'Comparison Operators', 'Logical Operators'],
        unlocked: false,
        completed: false,
        challengeCount: 5,
        completedChallenges: 0,
        spiritKey: 'condor'
    },
    {
        id: 2,
        name: 'Loop Dungeons',
        subtitle: 'The Endless Halls',
        icon: '🌀',
        description: 'An ancient labyrinth cursed to repeat itself. Gates open only if you command the hall to echo actions exactly the required number of times.',
        concepts: ['For Loops', 'While Loops', 'Loop Control', 'Nested Loops', 'Break/Continue'],
        unlocked: false,
        completed: false,
        challengeCount: 6,
        completedChallenges: 0,
        spiritKey: 'luminode'
    },
    {
        id: 3,
        name: 'Forest of Functions',
        subtitle: 'The Awakening Grove',
        icon: '🌳',
        description: 'A serene forest where ancient stone giants slumber. These titans awaken only when invoked through precise rituals (functions).',
        concepts: ['Function Declaration', 'Parameters', 'Return Values', 'Function Calls', 'Scope'],
        unlocked: false,
        completed: false,
        challengeCount: 5,
        completedChallenges: 0,
        spiritKey: 'funcella'
    },
    {
        id: 4,
        name: 'Arrays & List Plains',
        subtitle: 'The Sequence Steppe',
        icon: '📊',
        description: 'Miles of creatures marching in perfect order. Bugs have broken their sequence, and only your ordering magic can restore formation.',
        concepts: ['Array Creation', 'Array Access', 'Array Methods', 'Iteration', 'Sorting'],
        unlocked: false,
        completed: false,
        challengeCount: 5,
        completedChallenges: 0,
        spiritKey: 'sequora'
    },
    {
        id: 5,
        name: 'OOP Highlands',
        subtitle: 'The Class Citadel',
        icon: '🏰',
        description: 'A towering castle built on blueprints, where every creature is created from a class. The King of Logic lies frozen here.',
        concepts: ['Classes', 'Objects', 'Properties', 'Methods', 'Inheritance', 'Encapsulation'],
        unlocked: false,
        completed: false,
        challengeCount: 6,
        completedChallenges: 0,
        spiritKey: 'classarion'
    }
];

// Boss battles unlocked after completing specific realms
const BOSS_BATTLES = [
    {
        id: 'bug-hydra',
        name: 'Bug Hydra',
        icon: '🐉',
        description: 'Every head repeats an attack pattern. Use loops to counter and break the pattern.',
        unlockAfterRealm: 2,
        unlocked: false,
        defeated: false
    },
    {
        id: 'logic-troll-king',
        name: 'Logic Troll King',
        icon: '👹',
        description: 'Answers only in true/false riddles. One wrong condition and the bridge collapses.',
        unlockAfterRealm: 1,
        unlocked: false,
        defeated: false
    },
    {
        id: 'infinite-wraith',
        name: 'The Infinite Wraith',
        icon: '👻',
        description: 'Represents infinite loops. Break the cycle by finding the missing condition.',
        unlockAfterRealm: 2,
        unlocked: false,
        defeated: false
    },
    {
        id: 'compiler-dragon',
        name: 'The Corrupted Compiler Dragon',
        icon: '🐲',
        description: 'The final boss. You must combine variables, loops, conditions, functions, and objects to cleanse its code.',
        unlockAfterRealm: 5,
        unlocked: false,
        defeated: false
    }
];

// Function to get realm by ID
function getRealmById(realmId) {
    return REALMS.find(realm => realm.id === realmId);
}

// Function to unlock next realm
function unlockNextRealm(currentRealmId) {
    if (currentRealmId < REALMS.length - 1) {
        REALMS[currentRealmId + 1].unlocked = true;
        return REALMS[currentRealmId + 1];
    }
    return null;
}

// Function to mark realm as completed
function completeRealm(realmId) {
    const realm = getRealmById(realmId);
    if (realm) {
        realm.completed = true;
        checkBossUnlocks(realmId);
    }
}

// Function to check if any bosses should be unlocked
function checkBossUnlocks(completedRealmId) {
    BOSS_BATTLES.forEach(boss => {
        if (boss.unlockAfterRealm === completedRealmId) {
            boss.unlocked = true;
        }
    });
}

// Function to update realm progress
function updateRealmProgress(realmId, completedCount) {
    const realm = getRealmById(realmId);
    if (realm) {
        realm.completedChallenges = completedCount;
        if (completedCount >= realm.challengeCount) {
            completeRealm(realmId);
        }
    }
}
