import ListNode, { NullAble } from "./type";

export default class LinkedList {
    public head: NullAble = null;
    /**
     * 
     * @param value 
     * @description add element to the list
     */
    add(value: any) {
        if (this.head === null) {
            this.head = new ListNode(value)
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = new ListNode(value)
        }
    }
    /**
     * 
     * @param value 
     * @description remove element from the list
     */
    remove(value: any) {
        if (this.head !== null) {
            if (this.head.value === value) {
                this.head = this.head.next
            } else {
                let prev: NullAble = null;
                let current: NullAble = this.head;
                while (current && current.value !== value) {
                    prev = current;
                    current = current.next
                }
                if (prev && current) {
                    prev.next = current.next;
                }
            }
        }
    }

    /**
     * @description reverse the list
     */
    reverse() {
        let prev: NullAble = null;
        let current = this.head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    /**
     * 
     * @param value 
     * @returns {number} Index of the element
     * @description get the index of the element
     */
    indexOf(value: any) {
        let index = 0;
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    /**
     * 
     * @param index 
     * @returns {any} Element at the index
     * @description get the element at the index
     */
    elementAt(index: number) {
        let current = this.head;
        let i = 0;
        while (current) {
            if (i === index) {
                return current.value;
            }
            i++;
            current = current.next;
        }
        return null;
    }

    /**
     * 
     * @returns {number} Size of the list
     * @description get the size of the list
     */
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            current = current.next;
            count++
        }
        return count
    }

    /**
     * 
     * @returns {any} Head of the list
     * @description print & get the head & size of the list
     */
    print() {
        let data = {
            size: this.size(),
            list: this.head
        }
        console.log(data)
        return data;
    }

    /**
     * @description print each element of the list
     */
    printEach() {
        console.log()
        let current = this.head
        while (current) {
            console.log(current.value)
            current = current.next
        }
    }
}