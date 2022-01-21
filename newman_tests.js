'use strict';

global.Promise = require('bluebird');
const path = require('path');
const newman =  Promise.promisifyAll(require('newman'));
const fs = Promise.promisifyAll(require('fs'));
//const environment = 'postman_environment.json';
const FOLDER = path.join(__dirname, 'collections'); 


let files = fs.readdirSync(FOLDER);
files = files.map(file=> path.join(FOLDER, file))
console.log(files);

Promise.map(files, file => {
    return newman.runAsync({
    collection: file, // your collection
    //environment: path.join(__dirname, environment), //your env
    reporters: ['cli']
    });

}, {
   concurrency: 2
});
