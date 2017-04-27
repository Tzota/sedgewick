// Напишите метод delete, который принимает целочисленный аргумент и удаляет из списка k-тый элемент, если он существует

'use strict';

function RemoveKthLinkedNode(first, k) {
    if (first === null) {
        throw new Error('Argument is null');
    }

    if (k <= 0) {
        throw new Error('Invalid operation');
    }

    let i = 1;
    let prev = null;
    while (i <= k && first.next !== null) {
        i++;
        prev = first;
        first = first.next;
    }

    if (i !== k + 1) {
        return; // список закончился раньше
    }

    // let i = 0, prev = null;

    // do {
    //     i++;
    //     prev = first;
    //     first = first.next;
    // }
    // while(i < k && first !== null);

    // if (i !== k || first === null) {
    //     return; // список закончился раньше
    // }

    prev.next = first.next;
}

exports.RemoveKthLinkedNode = RemoveKthLinkedNode;