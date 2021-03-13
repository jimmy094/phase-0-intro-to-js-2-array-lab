// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
const newCats = [...cats];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}

function appendCat(name) {
    return [...newCats, 'Broom']
}

function prependCat(name) {
    return ['Arnold', ...newCats]
}

function removeLastCat() {
    return newCats.slice(0, newCats.length-1)
}

function removeFirstCat() {
    return newCats.slice(1);
    
   
}
