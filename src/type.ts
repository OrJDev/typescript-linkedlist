export default class ListNode {
    public value: any;
    public next: ListNode | null;
    constructor(value: any) {
        this.value = value;
        this.next = null
    }
}

/**
 * @type {NullAble} Might be null could be ListNode 
 */
export type NullAble = ListNode | null;