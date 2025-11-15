// ==================== CODE KINGDOM QUEST - SOLUTION GUIDE ====================
// 🔒 SPOILER ALERT: This file contains all challenge solutions!
// Use this as a reference or unlock as a premium feature

const SOLUTION_GUIDE = {
    // ==================== REALM 0: VARIABLES ====================
    'var-001': {
        challengeTitle: 'The First Memory Crystal',
        difficulty: 'Beginner',
        solution: `let crystalPower = 100;`,
        explanation: `This challenge teaches variable declaration. We use 'let' to declare a variable named 'crystalPower' and assign it the value 100. You can also use 'const' or 'var'.`,
        alternativeSolutions: [
            `const crystalPower = 100;`,
            `var crystalPower = 100;`
        ],
        keyLearnings: ['Variable declaration', 'Assignment operator (=)', 'Numeric values']
    },

    'var-002': {
        challengeTitle: 'The Shapeshifter\'s Name',
        difficulty: 'Beginner',
        solution: `let spiritName = "Valorine";
let spiritAge = 1000;
let spiritAwake = true;`,
        explanation: `This introduces the three main primitive data types: strings (text in quotes), numbers (no quotes), and booleans (true/false). Each variable stores a different type.`,
        alternativeSolutions: [
            `const spiritName = "Valorine";
const spiritAge = 1000;
const spiritAwake = true;`
        ],
        keyLearnings: ['String data type', 'Number data type', 'Boolean data type', 'Multiple variables']
    },

    'var-003': {
        challengeTitle: 'The Value Exchange',
        difficulty: 'Beginner',
        solution: `let stone1 = "light";
let stone2 = "shadow";

let temp = stone1;
stone1 = stone2;
stone2 = temp;`,
        explanation: `The classic swap algorithm uses a temporary variable. First, save stone1's value to temp, then assign stone2's value to stone1, finally assign temp (original stone1) to stone2.`,
        alternativeSolutions: [
            `// Modern destructuring swap (ES6)
let stone1 = "light";
let stone2 = "shadow";
[stone1, stone2] = [stone2, stone1];`
        ],
        keyLearnings: ['Variable reassignment', 'Swap algorithm', 'Temporary variables']
    },

    'var-004': {
        challengeTitle: 'The Calculator Crystal',
        difficulty: 'Beginner',
        solution: `let num1 = 25;
let num2 = 37;
let num3 = 48;
let totalPower = num1 + num2 + num3;`,
        explanation: `Use the + operator to add numbers. Create variables for each number, then add them together and store in totalPower.`,
        alternativeSolutions: [
            `let totalPower = 25 + 37 + 48;`
        ],
        keyLearnings: ['Arithmetic operators', 'Addition', 'Combining variables']
    },

    'var-005': {
        challengeTitle: 'The Shifter\'s Full Form',
        difficulty: 'Beginner',
        solution: `let name = "Valorine";
let type = "Spirit";
let power = 100;

let summary = name + " is a " + type + " with " + power + " power";`,
        explanation: `String concatenation uses the + operator to join strings and variables. Include spaces in your strings to format properly.`,
        alternativeSolutions: [
            `let summary = \`\${name} is a \${type} with \${power} power\`;  // Template literals (ES6)`
        ],
        keyLearnings: ['String concatenation', 'Combining strings and numbers', 'Template literals']
    },

    // ==================== REALM 1: CONDITIONS ====================
    'cond-001': {
        challengeTitle: 'The First Gate',
        difficulty: 'Beginner',
        solution: `let courage = 75;
let gateOpen = false;

if (courage > 50) {
    gateOpen = true;
}`,
        explanation: `An if statement checks a condition (courage > 50). If true, the code inside the curly braces executes. The > operator checks if the left value is greater than the right.`,
        alternativeSolutions: [
            `let courage = 75;
let gateOpen = courage > 50;  // Direct boolean assignment`
        ],
        keyLearnings: ['If statements', 'Comparison operators (>)', 'Boolean conditions', 'Code blocks']
    },

    'cond-002': {
        challengeTitle: 'The Forking Path',
        difficulty: 'Beginner',
        solution: `let timeOfDay = "night";
let chosenPath = "";

if (timeOfDay === "day") {
    chosenPath = "left";
} else {
    chosenPath = "right";
}`,
        explanation: `If-else provides two paths. Use === to check equality (three equals for strict comparison). If the condition is false, the else block runs.`,
        alternativeSolutions: [
            `let chosenPath = (timeOfDay === "day") ? "left" : "right";  // Ternary operator`
        ],
        keyLearnings: ['If-else statements', 'Equality operator (===)', 'String comparison', 'Alternative paths']
    },

    'cond-003': {
        challengeTitle: 'The Troll\'s Riddle',
        difficulty: 'Intermediate',
        solution: `let hasTorch = true;
let hasKey = true;
let canPass = false;

if (hasTorch && hasKey) {
    canPass = true;
}`,
        explanation: `The && (AND) operator requires both conditions to be true. Only when hasTorch AND hasKey are both true does canPass become true.`,
        alternativeSolutions: [
            `let canPass = hasTorch && hasKey;  // Direct boolean assignment`
        ],
        keyLearnings: ['Logical AND (&&)', 'Multiple conditions', 'Boolean logic']
    },

    'cond-004': {
        challengeTitle: 'The Weather Barrier',
        difficulty: 'Beginner',
        solution: `let weather = "sunny";
let barrierDown = false;

if (weather !== "stormy") {
    barrierDown = true;
}`,
        explanation: `The !== operator means "not equal to". If weather is NOT "stormy" (anything else), the condition is true.`,
        alternativeSolutions: [
            `let barrierDown = weather !== "stormy";  // Direct assignment`
        ],
        keyLearnings: ['Not equal operator (!==)', 'Negation logic', 'String comparison']
    },

    'cond-005': {
        challengeTitle: 'The Guardian\'s Test',
        difficulty: 'Intermediate',
        solution: `let powerLevel = 85;
let message = "";

if (powerLevel >= 80) {
    message = "Legendary Warrior";
} else if (powerLevel >= 50) {
    message = "Skilled Apprentice";
} else {
    message = "Novice Seeker";
}`,
        explanation: `Else-if chains check multiple conditions in order. The first true condition executes, then the rest are skipped. Use >= for "greater than or equal to".`,
        alternativeSolutions: [],
        keyLearnings: ['Else-if statements', 'Multiple conditions', 'Greater than or equal (>=)', 'Condition ordering']
    },

    // ==================== REALM 2: LOOPS ====================
    'loop-001': {
        challengeTitle: 'The Echoing Hall',
        difficulty: 'Beginner',
        solution: `let echoCount = 0;

for (let i = 1; i <= 5; i++) {
    echoCount++;
}`,
        explanation: `A for loop has three parts: initialization (i = 1), condition (i <= 5), and increment (i++). The loop runs 5 times, incrementing echoCount each time.`,
        alternativeSolutions: [
            `let echoCount = 5;  // If you just need the final count`
        ],
        keyLearnings: ['For loops', 'Loop syntax', 'Increment operator (++)', 'Loop counter']
    },

    'loop-002': {
        challengeTitle: 'The Summoning Ritual',
        difficulty: 'Beginner',
        solution: `let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}`,
        explanation: `Loop from 1 to 10, adding each number to sum. The += operator is shorthand for sum = sum + i. Result is 1+2+3+...+10 = 55.`,
        alternativeSolutions: [
            `let sum = (10 * (10 + 1)) / 2;  // Mathematical formula for sum of 1 to n`
        ],
        keyLearnings: ['For loops', 'Accumulator pattern', 'Addition assignment (+=)', 'Sum calculation']
    },

    'loop-003': {
        challengeTitle: 'The Gear Mechanism',
        difficulty: 'Intermediate',
        solution: `let gearPower = 1;

for (let i = 0; i < 6; i++) {
    gearPower *= 2;
}`,
        explanation: `Multiply gearPower by 2 six times: 1*2*2*2*2*2*2 = 64. The *= operator is shorthand for gearPower = gearPower * 2.`,
        alternativeSolutions: [
            `let gearPower = Math.pow(2, 6);  // Using exponentiation`,
            `let gearPower = 2 ** 6;  // ES7 exponentiation operator`
        ],
        keyLearnings: ['For loops', 'Multiplication assignment (*=)', 'Powers of 2', 'Repeated multiplication']
    },

    'loop-004': {
        challengeTitle: 'The Countdown Lock',
        difficulty: 'Beginner',
        solution: `let countdown = 10;
let launched = false;

while (countdown > 0) {
    countdown--;
}
launched = true;`,
        explanation: `A while loop continues as long as its condition is true. Decrement countdown each iteration until it reaches 0, then set launched to true.`,
        alternativeSolutions: [
            `let countdown = 0;
let launched = true;  // If you just need final state`
        ],
        keyLearnings: ['While loops', 'Loop conditions', 'Decrement operator (--)', 'Post-loop actions']
    },

    'loop-005': {
        challengeTitle: 'Break the Cycle',
        difficulty: 'Intermediate',
        solution: `let found = false;
let position = 0;

for (let i = 1; i <= 20; i++) {
    if (i === 7) {
        position = i;
        found = true;
        break;
    }
}`,
        explanation: `Use break to exit a loop early. When i equals 7, store the value, set found to true, and break out of the loop immediately.`,
        alternativeSolutions: [],
        keyLearnings: ['Break statement', 'Early loop exit', 'Equality check (===)', 'Loop control flow']
    },

    'loop-006': {
        challengeTitle: 'The Eternal Dance',
        difficulty: 'Intermediate',
        solution: `let evenSum = 0;

for (let i = 2; i <= 20; i += 2) {
    evenSum += i;
}`,
        explanation: `Start at 2 and increment by 2 each time (i += 2) to get only even numbers. Add each to evenSum. Result: 2+4+6+8+10+12+14+16+18+20 = 110.`,
        alternativeSolutions: [
            `let evenSum = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}`,
            `let evenSum = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) continue;
    evenSum += i;
}`
        ],
        keyLearnings: ['Loop increment variations', 'Even numbers', 'Modulo operator (%)', 'Continue statement']
    },

    // ==================== REALM 3: FUNCTIONS ====================
    'func-001': {
        challengeTitle: 'The First Awakening',
        difficulty: 'Beginner',
        solution: `function awaken() {
    return "Giant awakens!";
}`,
        explanation: `A function is declared with the function keyword, followed by name and parentheses. The return statement sends a value back when the function is called.`,
        alternativeSolutions: [
            `const awaken = () => "Giant awakens!";  // Arrow function (ES6)`,
            `const awaken = function() { return "Giant awakens!"; };  // Function expression`
        ],
        keyLearnings: ['Function declaration', 'Return statement', 'Function syntax', 'Reusable code']
    },

    'func-002': {
        challengeTitle: 'The Personalized Ritual',
        difficulty: 'Beginner',
        solution: `function greetGiant(name) {
    return "Hello, " + name;
}`,
        explanation: `Parameters go inside the parentheses. The name parameter acts as a variable inside the function. When called with an argument, name takes that value.`,
        alternativeSolutions: [
            `const greetGiant = (name) => \`Hello, \${name}\`;  // Arrow function with template literal`
        ],
        keyLearnings: ['Function parameters', 'Arguments', 'String concatenation in functions', 'Return values']
    },

    'func-003': {
        challengeTitle: 'The Calculator Stone',
        difficulty: 'Beginner',
        solution: `function add(a, b) {
    return a + b;
}`,
        explanation: `Functions can take multiple parameters separated by commas. This function adds two numbers and returns the result.`,
        alternativeSolutions: [
            `const add = (a, b) => a + b;  // Arrow function shorthand`
        ],
        keyLearnings: ['Multiple parameters', 'Arithmetic in functions', 'Return values', 'Function reusability']
    },

    'func-004': {
        challengeTitle: 'The Power Multiplier',
        difficulty: 'Intermediate',
        solution: `function multiply(x, y) {
    return x * y;
}

let result = multiply(7, 6);`,
        explanation: `First define the function, then call it with arguments. The function returns a value that is stored in the result variable.`,
        alternativeSolutions: [
            `const multiply = (x, y) => x * y;
let result = multiply(7, 6);`
        ],
        keyLearnings: ['Function definition and call', 'Storing return values', 'Function invocation', 'Multiplication']
    },

    'func-005': {
        challengeTitle: 'Funcella\'s Liberation',
        difficulty: 'Intermediate',
        solution: `function isEven(num) {
    return num % 2 === 0;
}

let answer = isEven(42);`,
        explanation: `Boolean functions return true or false. The modulo operator (%) gives the remainder. If num % 2 equals 0, the number is even.`,
        alternativeSolutions: [
            `const isEven = num => num % 2 === 0;
let answer = isEven(42);`
        ],
        keyLearnings: ['Boolean functions', 'Modulo operator', 'Even/odd checking', 'Function calls with return']
    },

    // ==================== REALM 4: ARRAYS ====================
    'arr-001': {
        challengeTitle: 'The Formation Begins',
        difficulty: 'Beginner',
        solution: `let serpents = [1, 2, 3, 4, 5];`,
        explanation: `Arrays are created with square brackets. They hold multiple values in a single variable, indexed starting at 0.`,
        alternativeSolutions: [
            `const serpents = [1, 2, 3, 4, 5];`
        ],
        keyLearnings: ['Array creation', 'Array literal syntax', 'Multiple values', 'Collections']
    },

    'arr-002': {
        challengeTitle: 'The Third Serpent',
        difficulty: 'Beginner',
        solution: `let serpents = [10, 20, 30, 40, 50];

let thirdSerpent = serpents[2];`,
        explanation: `Arrays use zero-based indexing. Index 0 is first, index 1 is second, index 2 is third. So serpents[2] gives us 30.`,
        alternativeSolutions: [],
        keyLearnings: ['Array indexing', 'Zero-based indexing', 'Array access', 'Bracket notation']
    },

    'arr-003': {
        challengeTitle: 'Count the Formation',
        difficulty: 'Beginner',
        solution: `let serpents = [5, 10, 15, 20, 25, 30];

let formationSize = serpents.length;`,
        explanation: `The .length property tells you how many elements are in an array. It's a property, not a function, so no parentheses.`,
        alternativeSolutions: [],
        keyLearnings: ['Array length', 'Array properties', 'Counting elements']
    },

    'arr-004': {
        challengeTitle: 'The March of Many',
        difficulty: 'Intermediate',
        solution: `let serpents = [3, 7, 2, 9, 5];
let totalPower = 0;

for (let i = 0; i < serpents.length; i++) {
    totalPower += serpents[i];
}`,
        explanation: `Loop through array using length property. Access each element with serpents[i] and add to totalPower. This is the accumulator pattern with arrays.`,
        alternativeSolutions: [
            `let totalPower = serpents.reduce((sum, val) => sum + val, 0);  // Using reduce method`
        ],
        keyLearnings: ['Iterating arrays', 'Array loops', 'Accumulator pattern', 'Array element access']
    },

    'arr-005': {
        challengeTitle: 'Sequora\'s Perfect Order',
        difficulty: 'Intermediate',
        solution: `let serpents = [23, 67, 12, 89, 45, 34];
let strongest = 0;

for (let i = 0; i < serpents.length; i++) {
    if (serpents[i] > strongest) {
        strongest = serpents[i];
    }
}`,
        explanation: `Start with strongest at 0. Compare each array element to strongest. If larger, update strongest. This finds the maximum value.`,
        alternativeSolutions: [
            `let strongest = Math.max(...serpents);  // Using spread operator and Math.max`,
            `let strongest = serpents[0];
for (let i = 1; i < serpents.length; i++) {
    if (serpents[i] > strongest) strongest = serpents[i];
}`
        ],
        keyLearnings: ['Finding maximum', 'Array comparison', 'Maximum algorithm', 'Comparison in loops']
    },

    // ==================== REALM 5: OOP ====================
    'oop-001': {
        challengeTitle: 'The Blueprint Stone',
        difficulty: 'Intermediate',
        solution: `class Warrior {
    constructor(name) {
        this.name = name;
    }
}

let hero = new Warrior("Aragorn");`,
        explanation: `Classes are blueprints for objects. The constructor method initializes new instances. Use 'this' to set properties. Create instances with 'new'.`,
        alternativeSolutions: [],
        keyLearnings: ['Class declaration', 'Constructor', 'this keyword', 'Object instantiation', 'new keyword']
    },

    'oop-002': {
        challengeTitle: 'The Method Stone',
        difficulty: 'Intermediate',
        solution: `class Warrior {
    constructor(name) {
        this.name = name;
    }
    
    attack() {
        return this.name + " attacks!";
    }
}

let fighter = new Warrior("Gimli");
let action = fighter.attack();`,
        explanation: `Methods are functions inside classes. They can access object properties using 'this'. Call methods using dot notation on instances.`,
        alternativeSolutions: [
            `class Warrior {
    constructor(name) {
        this.name = name;
    }
    
    attack() {
        return \`\${this.name} attacks!\`;
    }
}

let fighter = new Warrior("Gimli");
let action = fighter.attack();`
        ],
        keyLearnings: ['Class methods', 'this in methods', 'Method calls', 'Dot notation']
    },

    'oop-003': {
        challengeTitle: 'The Property Scroll',
        difficulty: 'Intermediate',
        solution: `class Warrior {
    constructor(name, strength) {
        this.name = name;
        this.strength = strength;
    }
    
    getPower() {
        return this.strength * 2;
    }
}

let warrior = new Warrior("Boromir", 50);
let power = warrior.getPower();`,
        explanation: `Classes can have multiple properties. Methods can use these properties in calculations. The getPower method accesses this.strength.`,
        alternativeSolutions: [],
        keyLearnings: ['Multiple properties', 'Property access in methods', 'Calculations in methods', 'Constructor parameters']
    },

    'oop-004': {
        challengeTitle: 'The Inheritance Crystal',
        difficulty: 'Advanced',
        solution: `class Warrior {
    constructor(name) {
        this.name = name;
    }
}

class Mage extends Warrior {
    constructor(name) {
        super(name);
        this.mana = 100;
    }
}

let wizard = new Mage("Gandalf");
let wizardMana = wizard.mana;`,
        explanation: `Inheritance uses 'extends'. Child classes inherit parent properties and methods. Use 'super()' to call parent constructor. Mage gets name from Warrior and adds mana.`,
        alternativeSolutions: [],
        keyLearnings: ['Class inheritance', 'extends keyword', 'super keyword', 'Parent-child classes', 'Property inheritance']
    },

    'oop-005': {
        challengeTitle: 'The King\'s Object',
        difficulty: 'Advanced',
        solution: `class Character {
    constructor(name, hp, power) {
        this.name = name;
        this.hp = hp;
        this.power = power;
    }
    
    isAlive() {
        return this.hp > 0;
    }
    
    takeDamage(amount) {
        this.hp -= amount;
    }
}

let king = new Character("King of Logic", 100, 50);
king.takeDamage(30);
let kingAlive = king.isAlive();
let kingHP = king.hp;`,
        explanation: `Complete class with multiple properties and methods. takeDamage modifies state. isAlive returns boolean based on current hp. Methods can change object properties.`,
        alternativeSolutions: [],
        keyLearnings: ['Complex classes', 'State management', 'Multiple methods', 'Property modification', 'Boolean methods']
    },

    'oop-006': {
        challengeTitle: 'The Kingdom Restored',
        difficulty: 'Advanced',
        solution: `class Citizen {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

class Kingdom {
    constructor() {
        this.citizens = [];
    }
    
    addCitizen(citizen) {
        this.citizens.push(citizen);
    }
    
    countCitizens() {
        return this.citizens.length;
    }
}

let realm = new Kingdom();
realm.addCitizen(new Citizen("Guard", "protector"));
realm.addCitizen(new Citizen("Healer", "support"));
realm.addCitizen(new Citizen("Scholar", "wisdom"));
let population = realm.countCitizens();`,
        explanation: `Classes can contain arrays of other objects. Kingdom manages Citizens. Array methods (push, length) work inside classes. This demonstrates composition - objects containing objects.`,
        alternativeSolutions: [],
        keyLearnings: ['Object composition', 'Arrays in classes', 'Class relationships', 'Collection management', 'Complex object structures']
    }
};

// ==================== BOSS BATTLE SOLUTIONS ====================
const BOSS_SOLUTIONS = {
    'boss-bug-hydra': {
        bossName: 'Bug Hydra',
        difficulty: 'Boss',
        solution: `let head1Attacks = 0;
let head2Attacks = 0;
let head3Attacks = 0;
let totalAttacks = 0;

for (let i = 0; i < 10; i++) {
    head1Attacks++;
}

for (let i = 0; i < 5; i++) {
    head2Attacks++;
}

for (let i = 0; i < 3; i++) {
    head3Attacks++;
}

totalAttacks = head1Attacks + head2Attacks + head3Attacks;`,
        explanation: `Three separate loops count each head's attacks. Then sum them all. This tests your mastery of loops and accumulation.`,
        alternativeSolutions: [
            `let head1Attacks = 10;
let head2Attacks = 5;
let head3Attacks = 3;
let totalAttacks = head1Attacks + head2Attacks + head3Attacks;`
        ],
        keyLearnings: ['Multiple loops', 'Loop patterns', 'Accumulation', 'Addition']
    },

    'boss-logic-troll': {
        bossName: 'Logic Troll King',
        difficulty: 'Boss',
        solution: `let courage = true;
let wisdom = true;

let riddle1Answer = (15 + 25) > 35;
let riddle2Answer = courage && wisdom;
let riddle3Answer = (42 % 2 === 0) && (42 % 3 === 0);`,
        explanation: `Three boolean riddles test comparison and logical operators. Riddle 1 uses arithmetic and comparison. Riddle 2 uses AND. Riddle 3 combines modulo with AND.`,
        alternativeSolutions: [
            `let riddle1Answer = 40 > 35;  // Simplified
let riddle2Answer = true && true;
let riddle3Answer = true && true;`
        ],
        keyLearnings: ['Boolean logic', 'Logical AND', 'Comparisons', 'Modulo operator', 'Complex conditions']
    },

    'boss-infinite-wraith': {
        bossName: 'The Infinite Wraith',
        difficulty: 'Boss',
        solution: `let magicNumber = 0;
let escaped = false;

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0 && i % 11 === 0) {
        magicNumber = i;
        escaped = true;
        break;
    }
}`,
        explanation: `Loop through numbers, check divisibility by both 7 and 11 using modulo and AND. First number that satisfies both is 77. Use break to escape the loop.`,
        alternativeSolutions: [
            `let magicNumber = 77;
let escaped = true;  // If you calculate it manually`
        ],
        keyLearnings: ['Break statement', 'Multiple conditions', 'Modulo operator', 'Loop control', 'Early exit']
    },

    'boss-compiler-dragon': {
        bossName: 'Corrupted Compiler Dragon',
        difficulty: 'Final Boss',
        solution: `// PART 1: Sum even-numbered scales
let scaleSum = 0;
for (let i = 2; i <= 50; i += 2) {
    scaleSum += i;
}

// PART 2: Find maximum heart power
let heartPowers = [100, 250, 175, 300, 225];
let strongestHeart = 0;
for (let i = 0; i < heartPowers.length; i++) {
    if (heartPowers[i] > strongestHeart) {
        strongestHeart = heartPowers[i];
    }
}

// PART 3: Create DragonSlayer class
class DragonSlayer {
    constructor(name, attackPower) {
        this.name = name;
        this.attackPower = attackPower;
    }
    
    strike() {
        return this.name + " strikes for " + this.attackPower + " damage!";
    }
}

let hero = new DragonSlayer("Chosen One", 500);
let heroStrike = hero.strike();`,
        explanation: `The ultimate test combining all concepts: loops for even numbers, array iteration for maximum, and a complete class with method. This proves you've mastered all six realms!`,
        alternativeSolutions: [],
        keyLearnings: ['Combining concepts', 'Loops', 'Arrays', 'Classes', 'Methods', 'Complete solutions']
    }
};

// ==================== HELPER FUNCTIONS ====================

function getSolution(challengeId) {
    return SOLUTION_GUIDE[challengeId] || null;
}

function getBossSolution(bossId) {
    return BOSS_SOLUTIONS[bossId] || null;
}

function getAllSolutions() {
    return {
        challenges: SOLUTION_GUIDE,
        bosses: BOSS_SOLUTIONS
    };
}

function getSolutionsByRealm(realmId) {
    const realmKeys = {
        0: ['var-001', 'var-002', 'var-003', 'var-004', 'var-005'],
        1: ['cond-001', 'cond-002', 'cond-003', 'cond-004', 'cond-005'],
        2: ['loop-001', 'loop-002', 'loop-003', 'loop-004', 'loop-005', 'loop-006'],
        3: ['func-001', 'func-002', 'func-003', 'func-004', 'func-005'],
        4: ['arr-001', 'arr-002', 'arr-003', 'arr-004', 'arr-005'],
        5: ['oop-001', 'oop-002', 'oop-003', 'oop-004', 'oop-005', 'oop-006']
    };
    
    const keys = realmKeys[realmId] || [];
    return keys.map(key => ({
        id: key,
        ...SOLUTION_GUIDE[key]
    }));
}

// Export for use in game (can be unlocked as premium feature)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SOLUTION_GUIDE,
        BOSS_SOLUTIONS,
        getSolution,
        getBossSolution,
        getAllSolutions,
        getSolutionsByRealm
    };
}
