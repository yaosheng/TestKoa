
// import {verity} from "./api/verify";
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require("koa-logger");
const md5 = require('crypto-js/md5');
const port = process.env.PORT || 3333;
const routes = require('./routes');
const verify = require('./api/verify').verify;
// import {verity} from './api/verify'
const app = new koa();

app.use(logger());
app.use(bodyParser());

// console.log('global : ', global);

app.use(async (ctx, next) => {
    console.log("start request");
    let key = md5("a" + "b").toString();
    console.log('key', key);
    
    await wait();
    let result = await verify(ctx);
    console.log('​result', result);
    if (result) {
        next();
        console.log("finish request");
    } else {
        ctx.response.body = {
            status: 4001,
            message: "super error"
        };
    }
});

const delay = (interval) => {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
    });
};

let wait = async function () {
    await delay(1000);
}

app.use(routes.routes(), routes.allowedMethods());

app.listen(port, (err, result) => {
    if (err) {
        console.log("err : ", err);
    } else {
        console.log("server is listening by %s", port);
    }
});