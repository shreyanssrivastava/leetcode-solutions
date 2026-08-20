/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (l1 === null && l2 === null) return null;

    let l1Arr = [];
    let l2Arr = [];
    let output = {};
    let current = l1;

    if (current !== null) {
        while (current !== null) {
            l1Arr.push(current.val);
            current = current.next;
        }
        l1Arr.reverse();
    }

    current = l2;

    if (current !== null) {
        while (current !== null) {
            l2Arr.push(current.val);
            current = current.next;
        }
        l2Arr.reverse();
    }

    const arrSum = BigInt(l1Arr.join('')) + BigInt(l2Arr.join(''))
    const sumArray = String(arrSum).split('').map(Number).reverse();

    let currOutput = output;

    for (let i = 0; i < sumArray.length; i++) {
        current = sumArray[i];

        if (sumArray.length === 1) {
            output.val = current;
            output.next = null;
            return output;
        }

        if (i === 0) {
            output.val = current;
            output.next = {};
            currOutput = output.next;
        } else if (i === sumArray.length - 1) {
            currOutput.val = current;
            currOutput.next = null;
        } else {
            currOutput.val = current;
            currOutput.next = {};
            currOutput = currOutput.next;
        }
    }

    return output;
};