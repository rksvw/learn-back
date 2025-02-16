const fileSys = require('fs');
const path = require('path');

const text = path.join('folder', 'sub', 'text.txt')

console.log(fileSys.readFileSync(text, 'utf-8'))
const tt = `hello world My name is Ritik Sharma Software Engineer Google`
fileSys.writeFileSync(text, tt);

console.log(fileSys.readFileSync(text, 'utf-8'))

fileSys.readFile(text,'utf-8', (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(result);
});

fileSys.writeFile(text, `Here is the result : ${tt}`, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(res);
})