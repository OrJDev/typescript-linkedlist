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
                let prev: any = null;
                let current: any = this.head;
                while (current && current.value !== value) {
                    prev = current;
                    current = current.next
                }
                prev.next = current.next;
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
     * @param index 
     * @description remove the element at the index
     */
    removeAt(index: number) {
        if (this.head !== null) {
            if (index === 0) {
                this.head = this.head.next;
            } else {
                let prev: any = null;
                let current: any = this.head;
                let i = 0;
                while (current && i < index) {
                    prev = current;
                    current = current.next;
                    i++;
                }
                prev.next = current.next;
            }
        }
    }

    /**
     * 
     * @param index 
     * @param value 
     * @description insert the element at the index
     */
    addAt(index: number, value: any) {
        if (index === 0) {
            if (this.head == null) {
                this.head = new ListNode(value);
            } else {
                let newNode = new ListNode(value);
                newNode.next = this.head;
                this.head = newNode;
            }
        } else {
            let prev: any = null;
            let current: any = this.head;
            let i = 0;
            while (current && i < index) {
                prev = current;
                current = current.next;
                i++;
            }
            prev.next = new ListNode(value);
            prev.next.next = current;
        }
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