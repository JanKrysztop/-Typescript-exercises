import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -1000]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xayzb');
const sorterr = new Sorter(charactersCollection);
sorterr.sort();
console.log(charactersCollection.data);
