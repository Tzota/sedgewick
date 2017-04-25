'use strict';

const {RemoveLastLinkedNode} = require('../../../code/1/3/19.js');
const Node = require('../../../code/1/3/LinkedListNode.js');

const expect = require('chai').expect;

describe('Удаление последнего узла из связного списка', function() {
    it('проходит для 3 узлов', function() {

        const first = new Node(
            1,
            new Node(
                2,
                new Node(
                    3,
                    null
                )
            )
        );

        RemoveLastLinkedNode(first);
        expect(first.next.next).to.be.null;
    });

    it('не падает для одного узла', function() {
        const first = new Node(
            1,
            null
        );

        RemoveLastLinkedNode(first);
        expect(first.next).to.be.null;
    });

    it('кидает исключение на закольцованном списке', function() {
        const first = new Node(
            1,
            new Node(
                2,
                null
            )
        );

        first.next.next = first;

        expect(() => RemoveLastLinkedNode(first)).to.throw(Error);
    });
});