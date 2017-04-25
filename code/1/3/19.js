// Приведите кодовый фрагмент, удаляющий последний узел из связного списка, на первый узел которого указывае ссылка first
'use strict';

function RemoveLastLinkedNode(first) {
    if (first === null) {
        throw new Error('Argument is null');
    }

    if (first.next === null) {
        return; // nothing to do
    }

    let initialFirst = first;   // gonna detect cycles

    while(first.next.next !== null) {
        first = first.next;
        if (first === initialFirst) {
            throw new Error('Loop detected');
        }
    }

    first.next = null;
}

exports.RemoveLastLinkedNode = RemoveLastLinkedNode;