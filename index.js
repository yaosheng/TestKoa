const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require("koa-logger");
const app = new koa();
const port = process.env.PORT || 3333;
const routes = require('./routes');
const verify = require('./api/verify').verify;

app.use(logger());
app.use(bodyParser());

app.use(async(ctx, next) => {
    console.log("start timeout");
    await wait();
    let result = await verify(ctx);
    console.log('​result', result);
    if(result){
        next();
    }else{
        ctx.response.body = {status : 4001, message : "super error"};
    }
});

const delay = (interval) => {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
    });
};

let wait = async function () {
    await delay(2000);
}

app.use(routes.routes(), routes.allowedMethods());

app.listen(port, (err, result) => {
    if(err){
        console.log("err : ", err);
    }else{
        console.log("server is listening by %s", port);
    }
});

