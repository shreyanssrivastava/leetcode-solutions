/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];

    const pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (let ch of s) {
        // Opening bracket
        if (ch === "(" || ch === "{" || ch === "[") {
            stack.push(ch);
        }

        // Closing bracket
        else if (ch === ")" || ch === "}" || ch === "]") {
            if (stack.pop() !== pairs[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
