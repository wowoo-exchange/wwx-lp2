/*----------------------------------------------------------
Modal triggered
----------------------------------------------------------*/
function modalTriggered(id) {
  const membersName = {
    "teamMember1": "Ashish Varma",
    "teamMember2": "Samuel Bourque",
    "teamMember3": "Wenyun Yuan",
    "teamMember4": "Lawrence Lim",
    "teamMember5": "Sheree Tay",
    "teamMember6": "Sultan Arif",
    "teamMember7": "Peter Man"
  };
  const membersProfile = {
    "teamMember1": "<img src='./assets/imgs/staff/ashish_varma.jpg' class='img-fluid'>",
    "teamMember2": "<img src='./assets/imgs/staff/samuel_bourque.png' class='img-fluid'>",
    "teamMember3": "<img src='./assets/imgs/staff/wenyun_yuan.jpg' class='img-fluid'>",
    "teamMember4": "<img src='./assets/imgs/staff/lawrence_lim.png' class='img-fluid'>",
    "teamMember5": "<img src='./assets/imgs/staff/sheree_tay.png' class='img-fluid'>",
    "teamMember6": "<img src='./assets/imgs/staff/sultan_arif.png' class='img-fluid'>",
    "teamMember7": "<img src='./assets/imgs/staff/peter_man.jpg' class='img-fluid'>"
  };
  const membersBG = {
    "Ashish Varma": "<p>Ashish is the Chief Operating Officer of Wowoo Exchange Singapore, with extensive experience in building and launching cryptocurrency exchanges. He was Head of Trading & Operations at Liquid, a leading exchange approved by the Japanese FSA. Ashish also built and launched another trading platform called Alluma, prior to joining Wowoo Exchange Singapore.</p><p>Ashish holds a master’s degree in Financial Mathematics from Cass Business School, as well as a bachelor’s degree in Economics & Statistics from University College London.</p>",
    "Samuel Bourque": "<p>Samuel is the Chief Technology Officer of Wowoo Exchange Singapore. Having several decades of experience as a computer programer, he has a long career in technology divisions in large multinational institutions. He served as Vice President in Morgan Stanley as Head of Trading Systems Infrastructure for Japan on High Frequency Trading Systems, as well as Deputy Director in AIG KK (Japan) having formed the Automation and Tooling team in the Network Department, prior to joining Wowoo Exchange Singapore.</p><p>Samuel holds degrees in Physics and Computer Science, both from the Univeristé de Moncton, as well as a Juris Doctor from the City University of Hong Kong, School of Law.</p>",
    "Wenyun Yuan": "<p>Wenyun is the Chief Financial Officer of Wowoo Exchange Singapore. He has over a decade of experience in operations consulting, external and internal audit. Additionally, he led projects, as well as managed teams at PricewaterhouseCoopers and Fraser &amp; Neave prior to joining Wowoo Exchange Singapore.</p><p>Wenyun holds an MBA from INSEAD and a Bachelor of Accountancy from Singapore Management University. He is also a Chartered Accountant, and an Enterprise Singapore recognised management consultant. He is fluent in English and Mandarin, and has previous work experience in several countries, including France, Scotland, China, and Singapore.</p>",
    "Lawrence Lim": "<p>Lawrence is the Head of Compliance and Risk of Wowoo Exchange Singapore. He has 18 years of governance, risk and compliance experiences in risk intelligence advisory services, regulatory compliance, anti-money laundering/countering of financing terrorism and economic sanctions management in the big four accounting firms and in the banking industry. Prior to joining Wowoo Exchange Singapore, Lawrence was in the Regional AML/CFT Advisory Team in one of the local banks, covering major markets in China, Hong Kong, Japan, India, USA on AML/CFT related issues. He was also the Head of Compliance of an international wholesale bank in Singapore and had held the role of Money Laundering Reporting Officer, Suspicious Transactions Reporting Officer and had been the key liaison officer to the regulatory authorities i.e. MAS, CAD, CPIB, IRAS. He was also instrumental in building the compliance framework for the bank.</p><p>Lawrence is a certified chartered accountant and a certified internal auditor by professional training.</p>",
    "Sheree Tay": "<p>Sheree is the Head of Legal at Wowoo Exchange Singapore. Having spent 15 years working across three jurisdictions, London, Hong Kong and Singapore, she brings with her a wealth of legal experience. Prior to joining Wowoo Exchange Singapore, Sheree worked in top-tier international law firms, and as in-house legal at Citibank.</p><p>Sheree graduated with a LLB from King's College London and is a dual-qualified lawyer, admitted as an Advocate and Solicitor of the Supreme Court of Singapore and a Solicitor in England and Wales. She is fluent in English and Mandarin.</p>",
    "Sultan Arif": "<p>Sultan is Head of Marketing at Wowoo Exchange Singapore. He possess over 18 years of marketing experience, split between both B2B and B2C landscapes. Sultan has worked both client side and agency side, for organizations ranging from start up to multinational.</p><p>Experienced in a wide-range of marketing disciplines, Sultan has utilized everything from direct mail, database, web, email and social media marketing platforms throughout his career.</p><p>Sultan's experience extends across a number of industries ranging from online retail, automotive, FMCG, publishing and banking in the UK, Japan, Australia and across the SEA region.</p>",
    "Peter Man": "<p>Peter is the Head of Operations of Wowoo Exchange Singapore. He has over 12 years of financial services experience across management consulting, project management, financial control and audit. Prior to joining Wowoo Exchange Singapore, Peter worked at a management consultancy where he oversaw the implementation of Trade Based AML controls within Operations, and the implementation of trade finance DLT platforms within a traditional corporate bank.</p><p>Peter graduated from University College London and qualified as a Chartered Accountant. He previously worked at PricewaterhouseCoopers, London, before moving to Barclays in Singapore where he managed several key transformation projects for the investment bank.</p>"
  };
  const position = {
    "Ashish Varma": "Chief Operating Officer",
    "Samuel Bourque": "Chief Technology Officer",
    "Wenyun Yuan": "Chief Financial Officer",
    "Lawrence Lim": "Head of Compliance and Risk",
    "Sheree Tay": "Head of Legal",
    "Sultan Arif": "Head of Marketing",
    "Peter Man": "Head of Operations"
  };

  $('#modalContentProfile').append(membersProfile[id]);
  $('#modalContentName').append(membersName[id]);
  $('#modalContentPosition').append(position[membersName[id]]);
  $('#modalContentHistory').append(membersBG[membersName[id]]);
};

// remove child elements
function modalClosed() {
  $("#modalContentProfile").empty();
  $("#modalContentName").empty();
  $("#modalContentPosition").empty();
  $("#modalContentHistory").empty();
};




/*----------------------------------------------------------
Sticky header resizer
----------------------------------------------------------*/
;(() => {

  const sel_header  = '#header'; // page header element selector
  const offsetY     = 50;            // toggle on window scroll past N px
  const toggleClass = 'scrolled';    // class to added when scrolled beyond range

  // toggle "scrolled" class on header
  let evt = new Event('scroll');
  let elm = document.querySelector(sel_header);
  if (elm) {
    window.addEventListener('scroll', onScroll);

    // trigger manually first time
    // elm.dispatchEvent(evt); not working every time, so calling manually
    onScroll();
}

  function onScroll() {
     let curY = document.body.scrollTop || document.documentElement.scrollTop;
     document.querySelector(sel_header).classList.toggle(toggleClass, curY > offsetY);
   }

})();

/*----------------------------------------------------------
mailing list form
------------------------------------------------------------
method: POST
API: http://lp.dev.wowoo.exchange/api/mailer  (for production use https://wowoo.exchange/api/mailer)
payload: {email: "abc@abc.com"}
response: JSON string {success: false | true, message: ""}
----------------------------------------------------------*/
;(() => {

  // element selectors (can be any valid CSS selector query)
  const sel_form     = '#join-mailing-list';
  const sel_input    = '#join-mailing-list input[name=email]';
  const sel_message  = '#join-mailing-list-message';

  // messages
  const msg_success  = '<span class="success">Thank you for signing up to our members list!</span>';
  const msg_noEmail  = '<span class="empty">Please enter your email address</span>';
  const msg_badEmail = '<span class="error">Email invalid (please verify and try again)</span>';
  const msg_sending  = '<span class="sending">Sending request...</span>';
  const msg_failed   = '<span class="error">Something went wrong... Please try again later.</span>';

  let form = document.querySelector(sel_form);
  if (form) form.addEventListener('submit', e => {

    let elm_input = document.querySelector(sel_input);
    let elm_msg   = document.querySelector(sel_message);
    let email     = elm_input.value;
    let valid     = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // valid(ish) email test

      // improve this later
      // – add connection error detection
      // – add timeout
      // – wrap xhr.send() in try {} to prevent hard stop due to runtime error.
      if (valid) {
      elm_msg.innerHTML = msg_sending;

      var xhr = new XMLHttpRequest();
      xhr.open('POST', window.wowoo.mailerHost);
      xhr.onload = () => {
        let response = { success: false };
        if (xhr.status === 200 && xhr.responseText.length) {
          response = JSON.parse(xhr.responseText);
        }

        elm_msg.innerHTML = response.success ? msg_success : msg_failed;
        elm_input.value = '';
      };
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({ email: email }));

    } else {
      elm_msg.innerHTML = email ? msg_badEmail : msg_noEmail;
    }

    e.preventDefault(); // prevent form submission

  });

})();


/*----------------------------------------------------------
cookies policy
----------------------------------------------------------*/
;(() => {
  if (!/accept-cookie\s*=\s*true/.test(document.cookie)) {
    //show dialog
    let banner = document.createElement('div');
    banner.id="cookie-policy-popup";
    banner.innerHTML = '<p><strong>Wowoo Exchange Singapore uses cookies to offer you a better user experience.</strong><br />By continuing to use our website, you consent to the use of cookies in accordance with our <a href="./cookies.html">Cookies Policy</a>.</p><button>Accept &amp; Continue</button>';
    document.body.appendChild(banner);

    document.querySelector('#cookie-policy-popup button').addEventListener('click', acceptCookies);

  }

  function acceptCookies () {
    // expiration
    let exp = new Date();
    exp.setTime(exp.getTime() + (window.wowoo.cookieLife * 24 * 60 * 60 * 1000));
    exp = exp.toUTCString();

    document.cookie = 'accept-cookie=true;expires=' + exp + ';domain=' + window.wowoo.cookieDomian;
    document.querySelector('#cookie-policy-popup').classList.add('accepted');
  };

})();

/*----------------------------------------------------------
pass query to link
----------------------------------------------------------*/
;(() => {
  let btn = document.querySelector('#promo-button');
  if (btn) {
    let url  = window.location.href.split('?');
    let href = 'https://trade.wowoo.exchange/signup' + (url.length > 1 ? '?' + url[1] : '');
    btn.addEventListener('click', () => {
      location.assign(href);
    });
  }
})();
