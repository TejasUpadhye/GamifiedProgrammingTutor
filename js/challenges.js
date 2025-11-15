// ==================== CHALLENGES DATA ====================
// Comprehensive challenges for each realm

const CHALLENGES = {
    // Realm 0: Variables
    realm0: [
        {
            id: 'var-001',
            realmId: 0,
            title: 'The First Memory Crystal',
            story: `A glowing crystal floats before you, its surface blank and waiting. The Shifter spirit whispers: "To give me form, you must first understand names and values."
            
Your task is simple but fundamental: create a variable named 'crystalPower' and assign it the value 100.`,
            objective: 'Declare a variable named crystalPower with value 100',
            starterCode: '// Declare your variable here\n',
            hint: 'Use let, const, or var to declare a variable. Example: let variableName = value;',
            testCases: [
                {
                    description: 'crystalPower should equal 100',
                    call: 'crystalPower',
                    expected: 100
                }
            ],
            rewards: { syntaxFragments: 10, exp: 50 }
        },
        {
            id: 'var-002',
            realmId: 0,
            title: 'The Shapeshifter\'s Name',
            story: `Three crystals appear, each holding a piece of the Shifter's identity. You must store their values properly to reassemble the spirit.`,
            objective: 'Create three variables: spiritName (string), spiritAge (number), and spiritAwake (boolean)',
            starterCode: '// Create three variables:\n// spiritName should be "Valorine"\n// spiritAge should be 1000\n// spiritAwake should be true\n',
            hint: 'Strings use quotes, numbers don\'t, and booleans are true or false',
            testCases: [
                {
                    description: 'spiritName should be "Valorine"',
                    call: 'spiritName',
                    expected: 'Valorine'
                },
                {
                    description: 'spiritAge should be 1000',
                    call: 'spiritAge',
                    expected: 1000
                },
                {
                    description: 'spiritAwake should be true',
                    call: 'spiritAwake',
                    expected: true
                }
            ],
            rewards: { syntaxFragments: 15, exp: 75 }
        },
        {
            id: 'var-003',
            realmId: 0,
            title: 'The Value Exchange',
            story: `Two memory stones pulse with conflicting energies. To stabilize them, you must swap their values. This ancient technique requires a third stone as a temporary holder.`,
            objective: 'Swap the values of two variables using a temporary variable',
            starterCode: 'let stone1 = "light";\nlet stone2 = "shadow";\n\n// Swap their values so stone1 contains "shadow" and stone2 contains "light"\n// Hint: Use a temporary variable\n',
            hint: 'Create a temp variable, store stone1 in it, then swap',
            testCases: [
                {
                    description: 'stone1 should be "shadow"',
                    call: 'stone1',
                    expected: 'shadow'
                },
                {
                    description: 'stone2 should be "light"',
                    call: 'stone2',
                    expected: 'light'
                }
            ],
            rewards: { syntaxFragments: 20, exp: 100 }
        },
        {
            id: 'var-004',
            realmId: 0,
            title: 'The Calculator Crystal',
            story: `A mathematical crystal needs charging. It requires the sum of three magical numbers to activate.`,
            objective: 'Create variables for three numbers and calculate their sum',
            starterCode: '// Create three number variables and calculate their sum\n// The three numbers are: 25, 37, 48\n// Store the sum in a variable called totalPower\n',
            hint: 'Use the + operator to add numbers together',
            testCases: [
                {
                    description: 'totalPower should equal 110',
                    call: 'totalPower',
                    expected: 110
                }
            ],
            rewards: { syntaxFragments: 20, exp: 100 }
        },
        {
            id: 'var-005',
            realmId: 0,
            title: 'The Shifter\'s Full Form',
            story: `All the pieces are ready. Combine the Shifter's attributes into a complete profile to free Valorine!`,
            objective: 'Create a summary string combining multiple variables',
            starterCode: 'let name = "Valorine";\nlet type = "Spirit";\nlet power = 100;\n\n// Create a variable called summary that combines these in the format:\n// "Valorine is a Spirit with 100 power"\n',
            hint: 'Use the + operator to concatenate strings. Don\'t forget spaces!',
            testCases: [
                {
                    description: 'summary should match the format',
                    call: 'summary',
                    expected: 'Valorine is a Spirit with 100 power'
                }
            ],
            rewards: { syntaxFragments: 30, exp: 150, spiritFreed: true }
        }
    ],

    // Realm 1: Conditions
    realm1: [
        {
            id: 'cond-001',
            realmId: 1,
            title: 'The First Gate',
            story: `A troll-guard blocks your path. His shield glows with a simple pattern: it will only open if your courage is high enough.`,
            objective: 'Write an if statement to check if courage is greater than 50',
            starterCode: 'let courage = 75;\nlet gateOpen = false;\n\n// Write an if statement to set gateOpen to true if courage > 50\n',
            hint: 'if (condition) { /* do something */ }',
            testCases: [
                {
                    description: 'gateOpen should be true when courage > 50',
                    call: 'gateOpen',
                    expected: true
                }
            ],
            rewards: { syntaxFragments: 15, exp: 75 }
        },
        {
            id: 'cond-002',
            realmId: 1,
            title: 'The Forking Path',
            story: `Two paths diverge before you. The left path opens only in daylight, the right only in darkness.`,
            objective: 'Use if-else to choose the correct path based on time of day',
            starterCode: 'let timeOfDay = "night";\nlet chosenPath = "";\n\n// Set chosenPath to "left" if timeOfDay is "day", otherwise "right"\n',
            hint: 'if (condition) { /* do this */ } else { /* do that */ }',
            testCases: [
                {
                    description: 'chosenPath should be "right" for night',
                    call: 'chosenPath',
                    expected: 'right'
                }
            ],
            rewards: { syntaxFragments: 20, exp: 100 }
        },
        {
            id: 'cond-003',
            realmId: 1,
            title: 'The Troll\'s Riddle',
            story: `The troll poses a riddle: "Only those who carry both torch AND key may pass."`,
            objective: 'Check if player has both items using logical AND',
            starterCode: 'let hasTorch = true;\nlet hasKey = true;\nlet canPass = false;\n\n// Set canPass to true only if BOTH hasTorch AND hasKey are true\n',
            hint: 'Use the && operator for AND logic',
            testCases: [
                {
                    description: 'canPass should be true when both items present',
                    call: 'canPass',
                    expected: true
                }
            ],
            rewards: { syntaxFragments: 25, exp: 125 }
        },
        {
            id: 'cond-004',
            realmId: 1,
            title: 'The Weather Barrier',
            story: `A magical barrier responds to weather. It allows passage if the weather is NOT stormy.`,
            objective: 'Check if weather is not stormy',
            starterCode: 'let weather = "sunny";\nlet barrierDown = false;\n\n// Set barrierDown to true if weather is NOT "stormy"\n',
            hint: 'Use !== for "not equal to"',
            testCases: [
                {
                    description: 'barrierDown should be true for non-stormy weather',
                    call: 'barrierDown',
                    expected: true
                }
            ],
            rewards: { syntaxFragments: 25, exp: 125 }
        },
        {
            id: 'cond-005',
            realmId: 1,
            title: 'The Guardian\'s Test',
            story: `The final guardian tests your complete understanding. His shield has three patterns, and you must decode which message he sends based on your power level.`,
            objective: 'Use if-else if-else to return different messages for different power levels',
            starterCode: 'let powerLevel = 85;\nlet message = "";\n\n// Set message based on powerLevel:\n// >= 80: "Legendary Warrior"\n// >= 50: "Skilled Apprentice"  \n// < 50: "Novice Seeker"\n',
            hint: 'Use else if for multiple conditions',
            testCases: [
                {
                    description: 'message should be "Legendary Warrior" for powerLevel 85',
                    call: 'message',
                    expected: 'Legendary Warrior'
                }
            ],
            rewards: { syntaxFragments: 30, exp: 150, spiritFreed: true }
        }
    ],

    // Realm 2: Loops
    realm2: [
        {
            id: 'loop-001',
            realmId: 2,
            title: 'The Echoing Hall',
            story: `The hall whispers: to open the gate, you must echo the ancient phrase exactly 5 times.`,
            objective: 'Use a for loop to count from 1 to 5',
            starterCode: 'let echoCount = 0;\n\n// Write a for loop that runs 5 times and increments echoCount each time\n',
            hint: 'for (let i = 1; i <= 5; i++) { /* code */ }',
            testCases: [
                {
                    description: 'echoCount should equal 5',
                    call: 'echoCount',
                    expected: 5
                }
            ],
            rewards: { syntaxFragments: 20, exp: 100 }
        },
        {
            id: 'loop-002',
            realmId: 2,
            title: 'The Summoning Ritual',
            story: `To summon the Loop Spirit, you must calculate the sum of numbers 1 through 10.`,
            objective: 'Use a loop to sum numbers 1 to 10',
            starterCode: 'let sum = 0;\n\n// Use a for loop to add numbers 1 through 10 to sum\n',
            hint: 'sum += i inside the loop',
            testCases: [
                {
                    description: 'sum should equal 55',
                    call: 'sum',
                    expected: 55
                }
            ],
            rewards: { syntaxFragments: 25, exp: 125 }
        },
        {
            id: 'loop-003',
            realmId: 2,
            title: 'The Gear Mechanism',
            story: `Ancient gears must rotate in perfect sync. Each gear multiplies by 2. Starting at 1, make 6 rotations.`,
            objective: 'Use a loop to calculate powers of 2',
            starterCode: 'let gearPower = 1;\n\n// Use a loop to multiply gearPower by 2, six times\n// Result should be 64 (1 * 2 * 2 * 2 * 2 * 2 * 2)\n',
            hint: 'gearPower *= 2 inside the loop',
            testCases: [
                {
                    description: 'gearPower should equal 64',
                    call: 'gearPower',
                    expected: 64
                }
            ],
            rewards: { syntaxFragments: 30, exp: 150 }
        },
        {
            id: 'loop-004',
            realmId: 2,
            title: 'The Countdown Lock',
            story: `A magical lock counts down from 10. Use a while loop to simulate the countdown.`,
            objective: 'Use a while loop to countdown from 10 to 1',
            starterCode: 'let countdown = 10;\nlet launched = false;\n\n// Use a while loop to countdown from 10 to 1\n// When countdown reaches 0, set launched to true\n',
            hint: 'while (countdown > 0) { countdown--; }',
            testCases: [
                {
                    description: 'countdown should be 0',
                    call: 'countdown',
                    expected: 0
                },
                {
                    description: 'launched should be true',
                    call: 'launched',
                    expected: true
                }
            ],
            rewards: { syntaxFragments: 30, exp: 150 }
        },
        {
            id: 'loop-005',
            realmId: 2,
            title: 'Break the Cycle',
            story: `A wraith traps you in an infinite loop. Use break to escape when you find the magic number 7.`,
            objective: 'Use break to exit a loop early',
            starterCode: 'let found = false;\nlet position = 0;\n\n// Loop from 1 to 20, but break when you reach 7\n// Set position to that number and found to true\n',
            hint: 'Use if inside the loop to check the condition, then break',
            testCases: [
                {
                    description: 'position should be 7',
                    call: 'position',
                    expected: 7
                },
                {
                    description: 'found should be true',
                    call: 'found',
                    expected: true
                }
            ],
            rewards: { syntaxFragments: 35, exp: 175 }
        },
        {
            id: 'loop-006',
            realmId: 2,
            title: 'The Eternal Dance',
            story: `Luminode appears! To free them, you must create a pattern: count only even numbers from 2 to 20.`,
            objective: 'Use a loop to sum only even numbers',
            starterCode: 'let evenSum = 0;\n\n// Sum only even numbers from 2 to 20\n// Hint: Use continue to skip odd numbers, or check if i % 2 === 0\n',
            hint: 'Use i % 2 === 0 to check if a number is even',
            testCases: [
                {
                    description: 'evenSum should equal 110 (2+4+6+8+10+12+14+16+18+20)',
                    call: 'evenSum',
                    expected: 110
                }
            ],
            rewards: { syntaxFragments: 40, exp: 200, spiritFreed: true }
        }
    ],

    // Realm 3: Functions
    realm3: [
        {
            id: 'func-001',
            realmId: 3,
            title: 'The First Awakening',
            story: `A stone giant slumbers. To awaken it, you must create a ritual (function) that can be called upon.`,
            objective: 'Create a simple function that returns a greeting',
            starterCode: '// Create a function called awaken that returns "Giant awakens!"\n',
            hint: 'function awaken() { return "Giant awakens!"; }',
            testCases: [
                {
                    description: 'awaken() should return "Giant awakens!"',
                    call: 'awaken()',
                    expected: 'Giant awakens!'
                }
            ],
            rewards: { syntaxFragments: 25, exp: 125 }
        },
        {
            id: 'func-002',
            realmId: 3,
            title: 'The Personalized Ritual',
            story: `Different giants need different invocations. Create a ritual that accepts a name.`,
            objective: 'Create a function with parameters',
            starterCode: '// Create a function greetGiant(name) that returns "Hello, " + name\n',
            hint: 'function greetGiant(name) { return "Hello, " + name; }',
            testCases: [
                {
                    description: 'greetGiant("Stonebeard") should return "Hello, Stonebeard"',
                    call: 'greetGiant("Stonebeard")',
                    expected: 'Hello, Stonebeard'
                }
            ],
            rewards: { syntaxFragments: 30, exp: 150 }
        },
        {
            id: 'func-003',
            realmId: 3,
            title: 'The Calculator Stone',
            story: `Giants measure strength in calculations. Create a function that adds two numbers.`,
            objective: 'Create a function that adds two parameters',
            starterCode: '// Create a function add(a, b) that returns the sum of a and b\n',
            hint: 'function add(a, b) { return a + b; }',
            testCases: [
                {
                    description: 'add(5, 3) should return 8',
                    call: 'add(5, 3)',
                    expected: 8
                },
                {
                    description: 'add(100, 50) should return 150',
                    call: 'add(100, 50)',
                    expected: 150
                }
            ],
            rewards: { syntaxFragments: 35, exp: 175 }
        },
        {
            id: 'func-004',
            realmId: 3,
            title: 'The Power Multiplier',
            story: `To lift great obstacles, you need a function that calculates power multiplied by a factor.`,
            objective: 'Create a function that multiplies and uses the result',
            starterCode: '// Create a function multiply(x, y) that returns x * y\n// Then call it with multiply(7, 6) and store in result\nlet result = 0;\n',
            hint: 'First define the function, then call it: result = multiply(7, 6);',
            testCases: [
                {
                    description: 'result should equal 42',
                    call: 'result',
                    expected: 42
                }
            ],
            rewards: { syntaxFragments: 35, exp: 175 }
        },
        {
            id: 'func-005',
            realmId: 3,
            title: 'Funcella\'s Liberation',
            story: `The greatest giant awaits. Create a function that checks if a number is even, then use it to verify the magic number.`,
            objective: 'Create and use a boolean-returning function',
            starterCode: '// Create function isEven(num) that returns true if num is even\n// Then use it to check if 42 is even, store result in answer\nlet answer = false;\n',
            hint: 'function isEven(num) { return num % 2 === 0; }',
            testCases: [
                {
                    description: 'answer should be true',
                    call: 'answer',
                    expected: true
                }
            ],
            rewards: { syntaxFragments: 40, exp: 200, spiritFreed: true }
        }
    ],

    // Realm 4: Arrays
    realm4: [
        {
            id: 'arr-001',
            realmId: 4,
            title: 'The Formation Begins',
            story: `The Sequence Serpents have scattered. Create an array to hold their formation.`,
            objective: 'Create an array with 5 numbers',
            starterCode: '// Create an array called serpents with numbers [1, 2, 3, 4, 5]\n',
            hint: 'let serpents = [1, 2, 3, 4, 5];',
            testCases: [
                {
                    description: 'serpents should be [1, 2, 3, 4, 5]',
                    call: 'serpents',
                    expected: [1, 2, 3, 4, 5]
                }
            ],
            rewards: { syntaxFragments: 25, exp: 125 }
        },
        {
            id: 'arr-002',
            realmId: 4,
            title: 'The Third Serpent',
            story: `Find the serpent in the third position (index 2) of the formation.`,
            objective: 'Access array element by index',
            starterCode: 'let serpents = [10, 20, 30, 40, 50];\n\n// Get the element at index 2 and store in thirdSerpent\nlet thirdSerpent = 0;\n',
            hint: 'Arrays start at index 0. thirdSerpent = serpents[2];',
            testCases: [
                {
                    description: 'thirdSerpent should be 30',
                    call: 'thirdSerpent',
                    expected: 30
                }
            ],
            rewards: { syntaxFragments: 30, exp: 150 }
        },
        {
            id: 'arr-003',
            realmId: 4,
            title: 'Count the Formation',
            story: `How many serpents are in the formation? Use the length property.`,
            objective: 'Get array length',
            starterCode: 'let serpents = [5, 10, 15, 20, 25, 30];\n\n// Store the count of serpents in formation Size\nlet formationSize = 0;\n',
            hint: 'formationSize = serpents.length;',
            testCases: [
                {
                    description: 'formationSize should be 6',
                    call: 'formationSize',
                    expected: 6
                }
            ],
            rewards: { syntaxFragments: 30, exp: 150 }
        },
        {
            id: 'arr-004',
            realmId: 4,
            title: 'The March of Many',
            story: `Each serpent in formation calls out its position. Use a loop to sum all their values.`,
            objective: 'Loop through array and sum values',
            starterCode: 'let serpents = [3, 7, 2, 9, 5];\nlet totalPower = 0;\n\n// Loop through serpents array and sum all values\n',
            hint: 'for (let i = 0; i < serpents.length; i++) { totalPower += serpents[i]; }',
            testCases: [
                {
                    description: 'totalPower should be 26',
                    call: 'totalPower',
                    expected: 26
                }
            ],
            rewards: { syntaxFragments: 35, exp: 175 }
        },
        {
            id: 'arr-005',
            realmId: 4,
            title: 'Sequora\'s Perfect Order',
            story: `To free Sequora, you must restore perfect order. Find the largest serpent in the formation.`,
            objective: 'Find maximum value in array',
            starterCode: 'let serpents = [23, 67, 12, 89, 45, 34];\nlet strongest = 0;\n\n// Find the largest number in the serpents array\n',
            hint: 'Loop through, compare each to strongest, update if larger',
            testCases: [
                {
                    description: 'strongest should be 89',
                    call: 'strongest',
                    expected: 89
                }
            ],
            rewards: { syntaxFragments: 40, exp: 200, spiritFreed: true }
        }
    ],

    // Realm 5: OOP
    realm5: [
        {
            id: 'oop-001',
            realmId: 5,
            title: 'The Blueprint Stone',
            story: `The ancient architects left blueprints everywhere. Create your first class - a Warrior.`,
            objective: 'Create a simple class with a constructor',
            starterCode: '// Create a class Warrior with constructor that takes name parameter\n// Store name in this.name\n\n// Then create an instance: let hero = new Warrior("Aragorn");\nlet hero;\n',
            hint: 'class Warrior { constructor(name) { this.name = name; } }',
            testCases: [
                {
                    description: 'hero.name should be "Aragorn"',
                    call: 'hero.name',
                    expected: 'Aragorn'
                }
            ],
            rewards: { syntaxFragments: 30, exp: 150 }
        },
        {
            id: 'oop-002',
            realmId: 5,
            title: 'The Method Stone',
            story: `Classes without methods are incomplete blueprints. Add an action to your Warrior.`,
            objective: 'Add a method to a class',
            starterCode: '// Create class Warrior with:\n// - constructor(name) that stores this.name\n// - method attack() that returns "name attacks!"\n\nlet fighter = new Warrior("Gimli");\nlet action = "";\n// Call the attack method and store in action\n',
            hint: 'attack() { return this.name + " attacks!"; }',
            testCases: [
                {
                    description: 'action should be "Gimli attacks!"',
                    call: 'action',
                    expected: 'Gimli attacks!'
                }
            ],
            rewards: { syntaxFragments: 35, exp: 175 }
        },
        {
            id: 'oop-003',
            realmId: 5,
            title: 'The Property Scroll',
            story: `Warriors need strength. Add properties to track their power.`,
            objective: 'Create class with multiple properties',
            starterCode: '// Create class Warrior with:\n// - constructor(name, strength) that stores both\n// - method getPower() that returns strength * 2\n\nlet warrior = new Warrior("Boromir", 50);\nlet power = 0;\n// Store the result of getPower() in power\n',
            hint: 'this.strength = strength; getPower() { return this.strength * 2; }',
            testCases: [
                {
                    description: 'power should be 100',
                    call: 'power',
                    expected: 100
                }
            ],
            rewards: { syntaxFragments: 40, exp: 200 }
        },
        {
            id: 'oop-004',
            realmId: 5,
            title: 'The Inheritance Crystal',
            story: `Some warriors are special. Create a Mage class that extends Warrior.`,
            objective: 'Use class inheritance',
            starterCode: '// Create class Warrior with constructor(name)\n// Create class Mage that extends Warrior\n// Mage should have additional property: mana = 100\n\nclass Warrior {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\n// Create the Mage class here\n\nlet wizard = new Mage("Gandalf");\nlet wizardMana = 0;\n// Store wizard.mana in wizardMana\n',
            hint: 'class Mage extends Warrior { constructor(name) { super(name); this.mana = 100; } }',
            testCases: [
                {
                    description: 'wizardMana should be 100',
                    call: 'wizardMana',
                    expected: 100
                }
            ],
            rewards: { syntaxFragments: 45, exp: 225 }
        },
        {
            id: 'oop-005',
            realmId: 5,
            title: 'The King\'s Object',
            story: `The King of Logic stirs! His essence is locked in a broken object. Create a Character class and instantiate the King.`,
            objective: 'Create complete class and multiple instances',
            starterCode: '// Create class Character with:\n// - constructor(name, hp, power)\n// - method isAlive() that returns true if hp > 0\n// - method takeDamage(amount) that subtracts from hp\n\nlet king = new Character("King of Logic", 100, 50);\nking.takeDamage(30);\nlet kingAlive = false;\nlet kingHP = 0;\n// Store king.isAlive() in kingAlive and king.hp in kingHP\n',
            hint: 'Store properties, create methods that modify and check them',
            testCases: [
                {
                    description: 'kingAlive should be true',
                    call: 'kingAlive',
                    expected: true
                },
                {
                    description: 'kingHP should be 70',
                    call: 'kingHP',
                    expected: 70
                }
            ],
            rewards: { syntaxFragments: 50, exp: 250 }
        },
        {
            id: 'oop-006',
            realmId: 5,
            title: 'The Kingdom Restored',
            story: `With all knowledge combined, restore the Kingdom by creating its core architecture!`,
            objective: 'Create a Kingdom class with multiple citizens',
            starterCode: '// Create class Citizen with constructor(name, role)\n// Create class Kingdom with:\n// - constructor() that initializes this.citizens = []\n// - method addCitizen(citizen) that pushes to array\n// - method countCitizens() that returns citizens.length\n\nlet realm = new Kingdom();\nrealm.addCitizen(new Citizen("Guard", "protector"));\nrealm.addCitizen(new Citizen("Healer", "support"));\nrealm.addCitizen(new Citizen("Scholar", "wisdom"));\nlet population = 0;\n// Store realm.countCitizens() in population\n',
            hint: 'Use array methods push() and length property',
            testCases: [
                {
                    description: 'population should be 3',
                    call: 'population',
                    expected: 3
                }
            ],
            rewards: { syntaxFragments: 60, exp: 300, spiritFreed: true }
        }
    ]
};

// Function to get challenges for a realm
function getChallengesForRealm(realmId) {
    return CHALLENGES[`realm${realmId}`] || [];
}

// Function to get specific challenge
function getChallenge(challengeId) {
    for (let realm in CHALLENGES) {
        const challenge = CHALLENGES[realm].find(c => c.id === challengeId);
        if (challenge) return challenge;
    }
    return null;
}
