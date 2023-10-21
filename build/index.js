"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numberCollection = new NumbersCollection_1.NumberCollection([10, -5, 0, -12]);
const sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
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
