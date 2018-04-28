const Router = require('koa-router');
const router = new Router();
const fs = require('fs');
const path = require('path');
const apiDirPath = './api'

let tmp = require('../api/login');

console.log('​path', __dirname);

fs.readdir(apiDirPath, (err, dirs) => {
    if(err){
        throw err;
    }else{
        console.log('​dirs', dirs);
    }
})

router.get('', async ctx => {
    ctx.body = 'first';
    console.log("first");
    fc();
})

router.get('/hello', async ctx => {
    ctx.body = 'world';
    console.log("second");
})

let fc = function () {  
    console.log("first function");
}
module.exports = router;