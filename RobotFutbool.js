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
              width: 1220,
              height: 980
            },
            args: [
              '--disable-web-security',
              '--disable-features=IsolateOrigins,site-per-process',
                '--disable-extensions',
                "--window-size=1220,880",
                "--window-position=0,0",

            ],  
            devTools: true, 
              
          });
        const page = await browser.newPage();
        this.page = page;
        this.browser = browser;
        return page;

        }


        async getPage(page) {
            await page.goto('https://www.bet365.com/#/IP/B1', {waitUntil: 'networkidle2'});
            await page.waitForTimeout(5500);
            // const x = await page.$$('.iip-IntroductoryPopup_Cross')
            // console.log(x)
            const element = await page.$$('.ovm-CompetitionList');
            const element2 = await page.$$('.ovm-Competition.ovm-Competition-open ');
            let own =  await element.$$('.ovm-FixtureDetailsTwoWay.ovm-FixtureDetailsTwoWay-1')
            let wolf = await element.$$('.ovm-HorizontalMarket ')  
            let tigre = await element.$$('.ovm-StandardScores_ScoresWrapper')
            let elefant = await element.$$('.ovm-FixtureDetailsTwoWay_PeriodWrapper');
            var result = [];
            var obj = {
                TimeOne : '',
                TimeTwo : '',
                Time: '',
                ScoreOne: '',
                ScoreTwo: '',
                _1 : '',
                _2 : '',
                _3 : '',
            };
            setInterval(async () => {
            element2.forEach(async element => {      
              await element.$$('.ovm-HorizontalMarket').then(async (e) => {
                  e.forEach(async element => {
                     let timeOne = await 
                      let timeTwo = await
                      let scoreOne = await
                      let scoreTwo = await
                      let time = await
                      let _1 = await
                      let _2 = await
                      let _3 = await
                      
                  })
              });


                own.forEach(async element => {
                    let text = await element.getProperty('textContent');
                    let text2 = await text.jsonValue();
                    obj.game = text2;
                    
                })|
                wolf.forEach(async element => {
                    let deer = [] 
                    let cat = element.$$('.ovm-HorizontalMarket_Participant.ovm-ParticipantOddsOnly.gl-Participant_General ')
                    cat.forEach(async element => {
                        let text = await element.getProperty('textContent');
                        let text2 = await text.jsonValue();
                        deer.push(text2)                        
                      })

                    obj.gol = deer;
                    result.push(obj)
            })
          })

            console.table(result)

          }, 15000);
       
     
        }

        async start() {
           const page = await this.init();
           const page2 =  await this.getPage(page);

        }
}


const footBoolScrap = new FootBoolScrap();
footBoolScrap.start();