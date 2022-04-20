const puppeter = require('puppeteer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const moment = require('moment');

class FootBoolScrap {
    constructor(password, username) {
        this.password = password;
        this.username = username;
   
    }

    async init() {
        const browser = await puppeter.launch({
            userDataDir : './userData', 
            headless: false,
            defaultViewport: {
              width: 920,
              height: 580
            },
            args: [
              '--disable-web-security',
              '--disable-features=IsolateOrigins,site-per-process',
                '--disable-extensions',
                "--window-size=920,680",
                "--window-position=500,0",

            ],  
            devTools: true, 
              
          });
        const page = await browser.newPage();
        this.page = page;
        this.browser = browser;
        return page;

        }


        async getPage(page) {
            await page.goto('https://www.bet365.com/#/IP/B151', {waitUntil: 'networkidle2'});

            // get Content with cheerio
            const content = await page.content();
            const $ = cheerio.load(content);
            const class2 = $('.ovm-Competition ovm-Competition-open');

         
            setInterval( async () => {
                
            await page.$$('.ovm-Fixture_Container').then(async (el) => {
                el.forEach(async (element, index) => {
                    console.log(index)
                    const content = await element.getProperty('innerText');
                    const text = await content.jsonValue();
                    console.log(text);
                    
                })
            })


        }, 5000);
        }

        async start() {
           const page = await this.init();
           const page2 =  await this.getPage(page);
              await page.waitFor(5000);
        }
}


const footBoolScrap = new FootBoolScrap();
footBoolScrap.start();