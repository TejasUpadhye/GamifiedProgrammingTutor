// ==================== CODE VALIDATOR ====================
// This module handles code execution and validation in a safe sandbox

class CodeValidator {
    constructor() {
        this.outputLines = [];
        this.testResults = [];
    }

    // Clear previous output
    clearOutput() {
        this.outputLines = [];
        this.testResults = [];
    }

    // Add output line
    addOutput(text, type = 'info') {
        this.outputLines.push({ text, type });
    }

    // Safe eval wrapper
    safeEval(code, testCase = null) {
        try {
            // Create a sandboxed environment
            const sandbox = {
                console: {
                    log: (...args) => {
                        this.addOutput(args.join(' '), 'info');
                    }
                },
                Math: Math,
                String: String,
                Number: Number,
                Boolean: Boolean,
                Array: Array,
                Object: Object
            };

            // Execute code and capture result
            let wrappedCode;
            if (testCase) {
                // For test cases, execute code then return the test expression
                wrappedCode = `
                    ${code}
                    return ${testCase.call};
                `;
            } else {
                // For regular execution, just run the code
                wrappedCode = code;
            }

            // Create function from code
            const func = new Function(...Object.keys(sandbox), wrappedCode);
            
            // Execute with sandbox
            const result = func(...Object.values(sandbox));
            
            return { success: true, result, error: null };
        } catch (error) {
            return { success: false, result: null, error: error.message };
        }
    }

    // Validate code against test cases
    validateSolution(code, testCases) {
        this.clearOutput();
        this.testResults = [];

        if (!code.trim()) {
            this.addOutput('Error: No code provided', 'error');
            return { passed: false, results: [] };
        }

        let allPassed = true;

        testCases.forEach((testCase, index) => {
            this.addOutput(`\n🧪 Running Test ${index + 1}: ${testCase.description}`, 'info');
            
            const execution = this.safeEval(code, testCase);
            
            if (!execution.success) {
                this.addOutput(`❌ Error: ${execution.error}`, 'error');
                this.testResults.push({
                    index: index + 1,
                    description: testCase.description,
                    passed: false,
                    expected: testCase.expected,
                    received: null,
                    error: execution.error
                });
                allPassed = false;
                return;
            }

            const result = execution.result;
            const expected = testCase.expected;
            const passed = this.compareResults(result, expected);

            if (passed) {
                this.addOutput(`✅ Passed! Result: ${JSON.stringify(result)}`, 'success');
                this.testResults.push({
                    index: index + 1,
                    description: testCase.description,
                    passed: true,
                    expected,
                    received: result
                });
            } else {
                this.addOutput(`❌ Failed!`, 'error');
                this.addOutput(`   Expected: ${JSON.stringify(expected)}`, 'error');
                this.addOutput(`   Received: ${JSON.stringify(result)}`, 'error');
                this.testResults.push({
                    index: index + 1,
                    description: testCase.description,
                    passed: false,
                    expected,
                    received: result
                });
                allPassed = false;
            }
        });

        if (allPassed) {
            this.addOutput('\n🎉 All tests passed! Submit your solution to continue.', 'success');
        } else {
            this.addOutput('\n⚠️ Some tests failed. Review your code and try again.', 'error');
        }

        return {
            passed: allPassed,
            results: this.testResults,
            output: this.outputLines
        };
    }

    // Compare expected and actual results
    compareResults(actual, expected) {
        if (typeof expected === 'function') {
            return expected(actual);
        }
        
        if (Array.isArray(expected)) {
            if (!Array.isArray(actual)) return false;
            if (actual.length !== expected.length) return false;
            return actual.every((val, idx) => this.compareResults(val, expected[idx]));
        }
        
        if (typeof expected === 'object' && expected !== null) {
            if (typeof actual !== 'object' || actual === null) return false;
            const expectedKeys = Object.keys(expected);
            return expectedKeys.every(key => this.compareResults(actual[key], expected[key]));
        }
        
        return actual === expected;
    }

    // Execute code without test cases (for practice/exploration)
    executeCode(code) {
        this.clearOutput();
        
        if (!code.trim()) {
            this.addOutput('Error: No code provided', 'error');
            return { success: false, output: this.outputLines };
        }

        const execution = this.safeEval(code);
        
        if (!execution.success) {
            this.addOutput(`❌ Error: ${execution.error}`, 'error');
        } else {
            if (execution.result !== undefined) {
                this.addOutput(`Result: ${JSON.stringify(execution.result)}`, 'success');
            }
            if (this.outputLines.length === 0) {
                this.addOutput('✅ Code executed successfully (no output)', 'success');
            }
        }

        return {
            success: execution.success,
            output: this.outputLines
        };
    }

    // Check for common code issues
    analyzeCode(code) {
        const issues = [];

        // Check for infinite loops (basic detection)
        if (/while\s*\(\s*true\s*\)/.test(code) && !/break/.test(code)) {
            issues.push('⚠️ Warning: Potential infinite loop detected (while(true) without break)');
        }

        // Check for undefined variables (basic)
        const declaredVars = code.match(/(?:let|const|var)\s+(\w+)/g) || [];
        const usedVars = code.match(/\b[a-zA-Z_]\w*\b/g) || [];
        
        // Check for common syntax patterns
        if (code.includes('=') && !code.includes('==') && !code.includes('===')) {
            // Just assignments, no comparisons - might be intentional
        }

        return issues;
    }
}

// Export singleton instance
const codeValidator = new CodeValidator();
