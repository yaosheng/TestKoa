const Router = require('koa-router');
const router = new Router();

router.get('/hello', async ctx => {
    ctx.body = 'world';
})

console.log('run routes');

module.exports = router;