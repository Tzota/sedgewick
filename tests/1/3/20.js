'use strict';

const {RemoveKthLinkedNode} = require('../../../code/1/3/20.js');
const Node = require('../../../code/1/3/LinkedListNode.js');

const expect = require('chai').expect;

describe('Удаление k-того элемента', function() {
    it('в простом случае удаляет узел', function() {
        const first = new Node(1, new Node(2, new Node(3, null)));
        RemoveKthLinkedNode(first, 1);
        expect(first.next.next).to.be.null;
        expect(first.next.item).to.be.equal(3);
    });


    it('за границей списка не удаляет ничего и не падает', function() {
        const first = new Node(1, new Node(2, new Node(3, null)));
        RemoveKthLinkedNode(first, 3);
        expect(first.next.next).not.to.be.null;
    });

    it('на одном узле не теряется', function() {
        const first = new Node(1, null);
        RemoveKthLinkedNode(first, 3);
        expect(first.next).to.be.null;
    });

    it('кидает исключение для нуля (бессмысленная какая-то операция)', function() {
        const first = new Node(1, new Node(2, new Node(3, null)));
        expect(() => RemoveKthLinkedNode(first, 0)).to.throw(Error);
    });

    it('На закольцованном списке нормально удаляет себя', function() {
        const first = new Node(1, new Node(2, new Node(3, null)));
        const second = first.next;
        const third = second.next;
        third.next = first;

        RemoveKthLinkedNode(first, 3);
        expect(second.next).to.be.equal(third);
        expect(third.next).to.be.equal(second);
    });
});