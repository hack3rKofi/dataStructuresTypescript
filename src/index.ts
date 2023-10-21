import { Sorter } from './Sorter';
import { NumberCollection } from './NumbersCollection';
import { CharacterCollection } from './characterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([10, -5, 0, -12]);
numberCollection.sort();
console.log(numberCollection.data);
// const characterCollection = new CharacterCollection('Xaayb');
// const sorterch = new Sorter(characterCollection);
// sorterch.sort();
// console.log(characterCollection.data);

// const linkedList = new LinkedList();
// linkedList.add(-500);
// linkedList.add(-3);
// linkedList.add(456);
// linkedList.add(3);
// linkedList.add(5);

// console.log(linkedList.print());

// const sortlinkedList = new Sorter(linkedList);
// sortlinkedList.sort();
// console.log(linkedList.print());
