"use strict";
var stacker = require('./Stack');

const operators = '+-*/';

function is_operator(char) {
    return operators.indexOf(char) > -1;
}

function CompleteLeftBrackets(expression) {
    let res = new stacker.Stack();
    let chars = new stacker.Stack();
    let brackets = 0;
    for(let i = expression.length-1; i > -1; i--) {
        chars.push(expression[i]);
    }

    while(chars.size() > 0) {

        let char = chars.pop();

        if (is_operator(char)) {
            res.push(char);
        } else if (char == '(') {
            brackets++;
            res.push(char);
        } else if (char == ')') {
            if (brackets == 0) {
                chars.push(')');

                let operands = 0;
                let operators = 0;
                let subbrackets = 0;
                do
                {
                    let tmp = res.pop();
                    if (tmp == ')') {
                        subbrackets++;
                    } else if (tmp == '(') {
                        subbrackets--;
                        if (subbrackets == 0) {
                            operands++;
                        }
                    } else if (is_operator(tmp)) {
                        if (subbrackets == 0) {
                            operators++;
                        }
                    } else {
                        if (subbrackets == 0) {
                            operands++;
                        }
                    }
                    chars.push(tmp);
                }
                while(!((operands == 2 && operators == 1) || res.length == 0));

                chars.push('(');
                
            } else {
                brackets--;
                res.push(char);
            }
        } else {
            res.push(char);
        }
    }

    var result = '';
    while(res.size() > 0) {
      result = res.pop().concat(result);
    }

    return result;
}

exports.CompleteLeftBrackets = CompleteLeftBrackets;