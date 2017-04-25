'use strict';
var stacker = require('./Stack');

function Parentheses(text) {
    const opening = ['(', '[', '{'];
    const closing = [')', ']', '}'];
    let stack = new stacker.Stack();

    for(let i = 0, len = text.length; i < len; i++) {
        let char = text[i];
        let openingIndex = opening.indexOf(char);

        if (openingIndex > -1) {
            stack.push(char);
            continue;
        }

        let closingIndex = closing.indexOf(char);

        if(closingIndex > -1) {
            let stackChar = stack.pop();
            if(closingIndex !== opening.indexOf(stackChar)) {
                return false;
            }
            continue;
        }

        throw new Error('Forbidden character ' + char);
    }

    return true;
}

exports.Parentheses = Parentheses;