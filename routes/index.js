const Router = require('koa-router');
const router = new Router();
// const fs = require('fs');
// const path = require('path');
// const apiDirPath = './api'
const apiActionPath = '../api';
const verify = require('../api/verify').verify;

router.get('/*', async (ctx) => {    
    console.log('​ctx', ctx.request.url);
    let url = ctx.request.url.split('/')
    console.log('​url', url);
    let action = url[url.length - 1];
    console.log('​action', action);
    
    let dir = url[url.length - 2];
    console.log('​dir', dir);

    let dirPath = apiActionPath + '/' + dir;
    console.log('dirPath', dirPath);
    let model = await require(dirPath);
    
    let res = await model[action](ctx);
    console.log('​res', res);
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