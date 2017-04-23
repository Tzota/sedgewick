"use strict";
var stacker = require('./Stack');

// expect(t10.InfixToPostfix("a+b*c")).to.equal('abc*+');

const operators = '+-*/';

function is_operator(char) {
  return operators.indexOf(char) > -1;
}

function is_op1_is_bigger_than_op2(op1, op2) {
  return (op1 == '*' || op1 == '/') && (op2 == '+' || op2 == '-');
}

function InfixToPostfix(text) {
  let op_stack = new stacker.Stack();
  let target = new stacker.Stack();
  let chars = new stacker.Stack();

  for(let i = text.length - 1; i > -1; i--) {
    chars.push(text[i]);
  }
  console.log(chars);

  while(chars.size() > 0) {
    let char = chars.pop();

    if (is_operator(char)) {
      
      // console.log(char + '>' + op_stack.peek() + '=' + is_op1_is_bigger_than_op2(char, op_stack.peek()));

        if (op_stack.size() == 0 || op_stack.peek() == '(') {
          op_stack.push(char);
          dump(char, target, op_stack, '2a');
        } else if (is_op1_is_bigger_than_op2(char, op_stack.peek())) {
          op_stack.push(char);
          dump(char, target, op_stack, '2b');
        } else {
          console.log('2c');
          do {
            let other_op = op_stack.peek();
            if (other_op == '(' || is_op1_is_bigger_than_op2(other_op, char)) {
              break;
            } 
            target.push(op_stack.pop());
          } while(op_stack.size() > 0)
          op_stack.push(char);
        }
    } else if (char == '(') {
        op_stack.push(char);
    } else if (char == ')') {
        do {
          let other_op = op_stack.push();
          if (other_op == '(') {
            break;
          }
          target.push(other_op);
        } while (op_stack.size() > 0)
    } else {
      target.push(char);
      dump(char, target, op_stack, '1');
    }
  }

  while(op_stack.size() > 0) {
    let char = op_stack.pop();
    target.push(char);
    dump(char, target, op_stack, '5');
  }

  var result = '';
  while(target.size() > 0) {
    result = target.pop().concat(result);
  }

  return result;
}

function dump(char, target, op_stack, point) {
  console.log(char + " " + JSON.stringify(target) + " " + JSON.stringify(op_stack) + " " + point);
}

exports.InfixToPostfix = InfixToPostfix;