
const Router = require('koa-router');
const router = new Router();
// const fs = require('fs');
const path = require('path');
// const apiDirPath = './api'
const apiActionPath = path.relative(__dirname, 'api');
// const verify = require('../api/verify').verify;

let tmpPath = path.join(__dirname, 'node_modules');
console.log('​tmpPath', tmpPath);

router.get('/*', async (ctx) => {   
    let startTime = new Date().getTime();
    
    let url = ctx.request.url.split('/')
    console.log('​url', url);

    let action = url[url.length - 1];
    let dir = url[url.length - 2];

    let model = await require(path.join(apiActionPath, dir));
    
    let res = await model[action](ctx);
    console.log('spend time : %s second', (new Date().getTime() - startTime)/1000 ) ;    
    ctx.response.body = res;
    // fs.readdir(apiDirPath, (err, dirs) => {
    //     if(err){
    //         throw err;
    //     }else{
    //         console.log('​dirs', dirs);        
    //         dirs.forEach(item => {
    //             let path1 = apiActionPath + '/' + item;
    //             let model = require(path1);
    //             if(typeof model === 'object'){
    //                 Object.keys(model).forEach(item => {
    //                     if(action === item){
    //                         console.log('​item', item);
    //                         model[item](ctx.request.query);
    //                         // console.log('​res', res);
    //                         // ctx.response.body = item;
    //                         ctx.body = {item : item};
    //                         // next();
    //                     }
    //                 })
    //             }
    //         });
    //     }
    // })
})

module.exports = router;