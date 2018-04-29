
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require("koa-logger");
const routes = require('./routes');
const verify4Url = require('./services/tools/verify').verify4Url;
const verify4Parameter = require('./services/tools/verify').verify4Parameter;

const port = process.env.PORT || 3333;
const app = new koa();

app.use(logger());
app.use(bodyParser());

app.use(async (ctx, next) => {    
    console.log("start request");
    let key = md5("a" + "b").toString();
    console.log('key', key);
    
    await wait();
    await next();
    console.log("end request");
});

const delay = (interval) => {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
    });
};

let wait = async function () {
    await delay(1000);
}
app.use(verify4Url.routes(), verify4Url.allowedMethods());
app.use(verify4Parameter.routes(), verify4Parameter.allowedMethods());
app.use(routes.routes(), routes.allowedMethods());

app.listen(port, (err, result) => {
    if (err) {
        console.log("err : ", err);
    } else {
        console.log("server is listening on port:%s", port);
    }
});