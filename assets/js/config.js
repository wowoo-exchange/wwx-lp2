if (!window.wowoo) window.wowoo = {};


// set working environment -> [prod|uat|local]
window.wowoo.env = 'prod';


// environment specific settings
switch(window.wowoo.env) {

  case 'prod':
    wowoo.mailerHost   = 'https://wowooexchange.sg/api/mailer';
    wowoo.cookieDomian = '.wowooexchange.sg';
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
