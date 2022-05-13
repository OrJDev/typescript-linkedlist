import LinkedList from "./src";

let li = new LinkedList();
// simple initialization
li.add(1)
li.add(2)
li.add(5)
li.add(7)
li.add(8)
li.remove(8)
li.printEach()
// reversing the list
li.reverse()
li.printEach()
li.add(9)
// getting the index of 9 - expected: 4
console.log({ indexOf: li.indexOf(9) })
// getting the element at index 4 - expected: 9
console.log({ elementAt: li.elementAt(4) })