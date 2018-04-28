const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require("koa-logger");
const app = new koa();
const port = process.env.PORT || 3333;
const routes = require('./routes');

app.use(logger());
app.use(bodyParser());

app.use(routes.routes(), routes.allowedMethods());

app.use(ctx => {
    ctx.body = 'hello';
});


app.listen(port, (err, result) => {
    if(err){
        console.log("err : ", err);
    }else{
        console.log("server is listening by %s", port);
    }
});

