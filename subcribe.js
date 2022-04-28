const redis = require('redis');
const Telegram = require('telegram-node-bot');


const chatbot = new Telegram.Telegram(``, {
    polling: true
});






const client = redis.createClient({
    host: 'localhost',
    port: 6379,
    password: "roullet" 
  });

const subscriber = client.duplicate();

(async () => {

  await subscriber.connect();
  let possible = false;
  await subscriber.subscribe('bet365events', async  (message) => {
    
    

    });
})();
