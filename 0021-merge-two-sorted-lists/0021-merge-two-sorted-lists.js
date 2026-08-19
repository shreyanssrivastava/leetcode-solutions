/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    if (list1 === null && list2 === null) return null;

    let l1 = [];
    let l2 = [];
    let output = {};
    let current = list1;

    if (current !== null) {
        while (current !== null) {
            l1.push(current.val);
            current = current.next;
        }
    }

    current = list2;

    if (current !== null) {
        while (current !== null) {
            l2.push(current.val);
            current = current.next;
        }
    }

    const merged = [...l1, ...l2].sort((x, y) => x - y);

    let currOutput = output;

    for (let i = 0; i < merged.length; i++) {
        current = merged[i];

        if (merged.length === 1) {
            output.val = current;
            output.next = null;
            return output;
        }

        if (i === 0) {
            output.val = current;
            output.next = {};
            currOutput = output.next;
        } else if (i === merged.length - 1) {
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