var cron = require('node-cron');
const  FootBoolScrap = require('./RobotFutbool.js');

cron.schedule('*/2 * * * *', async () => {
    console.log('running a task every minute');
    const footBoolScrap = new FootBoolScrap();
    const result = await footBoolScrap.start();
    console.log(result);
    
});