var cron = require('node-cron');
const  FootBoolScrap = require('./RobotFutbool.js');

cron.schedule('*/4 * * * *', async () => {
    console.log('running a task every minute');
    const footBoolScrap = new FootBoolScrap(maikonwdc, ma128sio4, 'https://www.futbool.com/');
    const result = await footBoolScrap.start();
    console.log(result);
    
});