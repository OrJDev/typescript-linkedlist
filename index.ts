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
// add the element at index 4, should replace 9 with 10
console.log('ADDING - INDEX 4')
console.log({ before: li.elementAt(4) })
li.addAt(4, 10)
console.log({ after: li.elementAt(4) })
console.log('ADDED - INDEX 4')
// replace the head element, include all the old elements too
console.log('ADDING - INDEX 0')
console.log({ before: li.elementAt(0) })
li.addAt(0, 17)
console.log({ after: li.elementAt(0) })
console.log('ADDED - INDEX 0')
li.printEach()
// remove the element at index 5, expect 10 to be removed
console.log('REMOVING - INDEX 5')
console.log({ before: li.elementAt(5) })
li.removeAt(5)
console.log({ after: li.elementAt(5) })
console.log('REMOVED - INDEX 5')
li.printEach()