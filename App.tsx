let name: string = "Hamza";
let age: number = 45;
let isStudent: boolean = true;
let hobbies: string[]; // strings array
let role: [number , string]; // touple : this can only contain number and strings

// Objects in TS
type Person = {
  name: String,
  age?: number, // What if we want to make the age optional, we use ? mark with that variable
}

let person: Person = {
  name: "Hamza",
  age: 45,
}

// Assigning an array the object person
let lotsPerson: Person[]; // now lots of person is an array and it can have multiple Person objects stored at their indexes

// let say we want a variable to have 2 types a number and a string we can use union operator to do this
let aa: number | string;
aa = 45;
aa = "Ali";


// Now lets Declare a function in typescript
// return type can be a string, void, number
// if return type is unknown then it can return anything a void num str etc
// if never is the return type then nothing is returned
// void return type returns undefined
let printName: (name: String) => void;

printName = (name) => {
    console.log({name});
} 

printName("Hamza");

// types and interfaces
// types once created cannot be changed and same name type cannot be created again
// interfaces can have same name type and interfaces can be reopened
type Animal = {
  name: String,
  age: number,
}

type Animal2 = Animal & {
  a: string,
  b: number,
}

let animal: Animal2 = {
  a: "dog",
  b: 45,
  name: "cat",
  age: 48,
}

// the interfaces also implement the extended functionality otherwise we get error
interface shape {
  name: string,
  age: number,
}

interface tulip extends shape {
  typeis: string,
}

let fl: tulip = {
  typeis: "flower",
  name: "tupil flower",
  age: 2,
}

const App = () => {
  return (
    <>
      <h1>Hamza</h1>
    </>
  );
}

export default App;
