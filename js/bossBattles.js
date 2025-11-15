// ==================== BOSS BATTLES ====================
// Special boss encounters with unique mechanics

const BOSS_CHALLENGES = {
    'bug-hydra': {
        id: 'boss-bug-hydra',
        bossId: 'bug-hydra',
        name: '🐉 Bug Hydra Battle',
        story: `The Bug Hydra emerges from the depths of the Loop Dungeons! Each of its three heads attacks in a repeating pattern. You must use loops to counter each attack sequence and defeat the beast.

The Hydra's heads attack in these patterns:
- Head 1: Attacks every 1 second (10 times)
- Head 2: Attacks every 2 seconds (5 times)
- Head 3: Attacks every 3 seconds (3 times)

You must calculate the total number of attacks to shield against!`,
        objective: 'Calculate the total attacks and create a counter-loop strategy',
        starterCode: `// Calculate total attacks from all three heads
let head1Attacks = 0;
let head2Attacks = 0;
let head3Attacks = 0;
let totalAttacks = 0;

// Head 1: 10 attacks (use a loop to count)

// Head 2: 5 attacks (use a loop to count)

// Head 3: 3 attacks (use a loop to count)

// Sum all attacks

`,
        hint: 'Use three separate for loops to count each head\'s attacks, then sum them',
        testCases: [
            {
                description: 'head1Attacks should be 10',
                call: 'head1Attacks',
                expected: 10
            },
            {
                description: 'head2Attacks should be 5',
                call: 'head2Attacks',
                expected: 5
            },
            {
                description: 'head3Attacks should be 3',
                call: 'head3Attacks',
                expected: 3
            },
            {
                description: 'totalAttacks should be 18',
                call: 'totalAttacks',
                expected: 18
            }
        ],
        rewards: { syntaxFragments: 100, exp: 500 },
        difficulty: 'boss'
    },

    'logic-troll-king': {
        id: 'boss-logic-troll',
        bossId: 'logic-troll-king',
        name: '👹 Logic Troll King Battle',
        story: `The Logic Troll King blocks the bridge with three ancient riddles. Answer all correctly or face certain doom!

Riddle 1: "Is the sum of 15 and 25 greater than 35?"
Riddle 2: "Do you possess both courage AND wisdom?" (courage = true, wisdom = true)
Riddle 3: "Is the number 42 even AND divisible by 3?"`,
        objective: 'Solve all three boolean riddles correctly',
        starterCode: `let courage = true;
let wisdom = true;

// Riddle 1: Is 15 + 25 > 35?
let riddle1Answer = false;

// Riddle 2: Do you have BOTH courage AND wisdom?
let riddle2Answer = false;

// Riddle 3: Is 42 even (42 % 2 === 0) AND divisible by 3 (42 % 3 === 0)?
let riddle3Answer = false;

`,
        hint: 'Use comparison operators (>, <, ===) and logical operators (&&, ||)',
        testCases: [
            {
                description: 'riddle1Answer should be true',
                call: 'riddle1Answer',
                expected: true
            },
            {
                description: 'riddle2Answer should be true',
                call: 'riddle2Answer',
                expected: true
            },
            {
                description: 'riddle3Answer should be true',
                call: 'riddle3Answer',
                expected: true
            }
        ],
        rewards: { syntaxFragments: 100, exp: 500 },
        difficulty: 'boss'
    },

    'infinite-wraith': {
        id: 'boss-infinite-wraith',
        bossId: 'infinite-wraith',
        name: '👻 The Infinite Wraith Battle',
        story: `The Infinite Wraith traps you in an eternal loop! The only way to escape is to break the cycle when you find the magic sequence.

The wraith creates numbers in sequence: 1, 2, 3, 4, 5, 6, 7...

You must:
1. Loop through numbers 1 to 100
2. Break when you find a number divisible by both 7 AND 11
3. Store that number to banish the wraith`,
        objective: 'Find the first number divisible by both 7 and 11, break the loop',
        starterCode: `let magicNumber = 0;
let escaped = false;

// Loop from 1 to 100
// Find first number divisible by BOTH 7 and 11
// Store it in magicNumber and break
// Set escaped to true when you break

`,
        hint: 'Use modulo (%) to check divisibility. A number divisible by both 7 and 11 means: n % 7 === 0 && n % 11 === 0',
        testCases: [
            {
                description: 'magicNumber should be 77',
                call: 'magicNumber',
                expected: 77
            },
            {
                description: 'escaped should be true',
                call: 'escaped',
                expected: true
            }
        ],
        rewards: { syntaxFragments: 100, exp: 500 },
        difficulty: 'boss'
    },

    'compiler-dragon': {
        id: 'boss-compiler-dragon',
        bossId: 'compiler-dragon',
        name: '🐲 Corrupted Compiler Dragon - FINAL BOSS',
        story: `The Corrupted Compiler Dragon awakens! This ancient beast can only be defeated by demonstrating mastery of ALL programming concepts.

The dragon's corruption has three layers:
1. Its scales are numbered 1-50. Sum only the EVEN numbered scales.
2. Its hearts beat with power levels [100, 250, 175, 300, 225]. Find the strongest heart.
3. Create a DragonSlayer class with name and attackPower properties, and a method strike() that returns "name strikes for X damage!"

Combine all your knowledge to save the kingdom!`,
        objective: 'Use variables, loops, arrays, and classes to defeat the final boss',
        starterCode: `// PART 1: Sum even-numbered scales (2, 4, 6, ... 50)
let scaleSum = 0;

// PART 2: Find the maximum heart power
let heartPowers = [100, 250, 175, 300, 225];
let strongestHeart = 0;

// PART 3: Create DragonSlayer class
// Properties: name, attackPower
// Method: strike() returns "name strikes for attackPower damage!"

// Create hero instance
let hero = new DragonSlayer("Chosen One", 500);
let heroStrike = "";
// Call hero.strike() and store in heroStrike

`,
        hint: 'Combine everything: loops for scales, array iteration for hearts, class with constructor and method',
        testCases: [
            {
                description: 'scaleSum should be 650 (sum of 2+4+6...+50)',
                call: 'scaleSum',
                expected: 650
            },
            {
                description: 'strongestHeart should be 300',
                call: 'strongestHeart',
                expected: 300
            },
            {
                description: 'heroStrike should contain correct format',
                call: 'heroStrike',
                expected: 'Chosen One strikes for 500 damage!'
            }
        ],
        rewards: { syntaxFragments: 500, exp: 2000 },
        difficulty: 'final-boss'
    }
};

// Function to get boss challenge
function getBossChallenge(bossId) {
    return BOSS_CHALLENGES[bossId];
}

// Function to check if boss is unlocked
function isBossUnlocked(bossId) {
    const boss = BOSS_BATTLES.find(b => b.id === bossId);
    return boss ? boss.unlocked : false;
}

// Add boss challenges to the main CHALLENGES object under a special category
CHALLENGES.bosses = Object.values(BOSS_CHALLENGES);

// Export for use in game
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BOSS_CHALLENGES, getBossChallenge, isBossUnlocked };
}
