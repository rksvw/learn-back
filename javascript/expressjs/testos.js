const os = require('os');
const { exec } = require('child_process');

exec('ls', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
})

console.log(os.userInfo());
console.log(os.homedir());
console.log(os.platform());
console.log(os.release());
console.log(os.cpus());
console.log(`OS Total Memory : ${os.totalmem()}`);
console.log(`OS Free Memory : ${os.freemem()}`);
console.log(os.loadavg());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.uptime());
console.log(`OS Type : ${os.type()}`);