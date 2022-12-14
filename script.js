// Реалізуйте функцію generateKey(length, characters),
// яка повертає рядок випадкових символів із набору characters довжиною length

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function randomNumber() {
    return Math.round(Math.random() * (characters.length - 1)); 
}

function generateKey(length, characters) { 
    let key = "";

    for(let i = 0; i < length; i++) {
        key += characters[randomNumber()];
    }
    return key;
};

const key = generateKey(16, characters);
console.log(key);