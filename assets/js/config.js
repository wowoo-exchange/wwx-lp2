if (!window.wowoo) window.wowoo = {};



// set working environment -> [prod|uat|local]
window.wowoo.env = 'prod';
//window.wowoo.env = 'prod';
//window.wowoo.env = 'local';



// environment specific settings
switch(window.wowoo.env) {

  case 'prod':
    wowoo.mailerHost   = 'https://wowoo.exchange/api/mailer';
    wowoo.cookieDomian = '.wowoo.exchange';
    break;

  case 'uat':
    wowoo.mailerHost   = 'https://wowoo.exchange/api/mailer';
    wowoo.cookieDomian = 'lp.dev.wowoo.exchange';
    break;

  default:
    wowoo.mailerHost   = 'http://lp.dev.wowoo.exchange/api/mailer';
    wowoo.cookieDomian = '.app.localhost';
    break;

}




// cookies policy check life (in days)
window.wowoo.cookieLife = 2000;
