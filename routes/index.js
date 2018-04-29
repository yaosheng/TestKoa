
const Router = require('koa-router');
const router = new Router();

router.get('/*', async ctx => {   
    console.log('​ctx args', ctx.args);
    
    try{
        let res = await ctx.args.action[ctx.args.actionName](ctx);
        console.log("end api request");        
        ctx.response.body = res;
    }catch(err){
        console.log("error : ", err);
        ctx.response.body = {
            error : 4445,
            message : "server error"
        }
    }
})

module.exports = router;