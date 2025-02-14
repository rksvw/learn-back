// Modules - Encapsulated code (only share mininum)
// CommonJS = every file is module (by default)

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}
module.exports = {
    sayHi,
}