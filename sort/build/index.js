"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, -1000]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xayzb');
const sorterr = new Sorter_1.Sorter(charactersCollection);
sorterr.sort();
console.log(charactersCollection.data);
