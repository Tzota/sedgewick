'use strict';

class LinkedListNode
{
    constructor(item, next) {
        this._item = typeof(item) === 'undefined' ? null : item;
        this._next = typeof(next) === 'undefined' ? null : next;
    }

    get item() {
        return this._item;
    }
    set item(val) {
        this._item = val;
    }

    get next() {
        return this._next;
    }
    set next(val) {
        this._next = val;
    }
}

module.exports = LinkedListNode;