
const Router = require('koa-router');
const verify4Url = new Router();
const verify4Parameter = new Router();
const path = require('path');
const apiActionPath = path.relative(__dirname, 'services');
const md5 = require('crypto-js/md5');

verify4Url.get('/*', async (ctx, next) => {
    console.log("start verify4Url");
    let requestUrl = ctx.request.url.split('/');
    let arrangeUrl = requestUrl.slice(0, requestUrl.length - 1).join('/');
    let actionName = requestUrl[requestUrl.length - 1];
    try{
        let action = await require(apiActionPath + arrangeUrl);
        if(action){
            ctx.args = {
                action : action,
                actionName : actionName
            }
            console.log("end verify4Url");
            await next();
        }
    }catch(err){
        console.log("error : ", err);
        ctx.response.body = {
            error : 4444,
            message : "路由錯誤"
        }
    }
})

verify4Parameter.get('/*', async (ctx, next) => {
    console.log("start verify4Parameter");
    
    console.log("end verify4Parameter");
    await next();
})

module.exports = {
    verify4Url : verify4Url,
    verify4Parameter : verify4Parameter
};