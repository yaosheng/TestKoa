const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require("koa-logger");
const app = new koa();
const port = process.env.PORT || 3333;
const routes = require('./routes');

app.use(logger());
app.use(bodyParser());

app.use(async(ctx, next) => {
    // ctx.body = 'hello';
    console.log("start timeout");
    await wait();
    if(true){
        next();
        // ctx.response = "ok";
        // console.log('​ctx.response', ctx.response);
        // ctx.body = "ok";
    }else{
        ctx.throw('error', 404);
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

