/*----------------------------------------------------------
Modal triggered
----------------------------------------------------------*/
function modalTriggered(id) {
  const membersName = {
    "teamMember1": "Willie Chang",
    "teamMember2": "Ashish Varma",
    "teamMember3": "Wenyun Yuan",
    "teamMember4": "Praveena Prabha",
    "teamMember5": "Sheree Tay",
    "teamMember6": "Ebish Najar",
    "teamMember7": "Peter Man"
  };
  const membersProfile = {
    "teamMember1": "<img src='./assets/imgs/staff/willie_chang.jpg' class='img-fluid'>",
    "teamMember2": "<img src='./assets/imgs/staff/ashish_varma.jpg' class='img-fluid'>",
    "teamMember3": "<img src='./assets/imgs/staff/wenyun_yuan.jpg' class='img-fluid'>",
    "teamMember4": "<img src='./assets/imgs/staff/praveena_prabha.jpg' class='img-fluid'>",
    "teamMember5": "<img src='./assets/imgs/staff/sheree_tay.jpg' class='img-fluid'>",
    "teamMember6": "<img src='./assets/imgs/staff/ebish_najar.jpg' class='img-fluid'>",
    "teamMember7": "<img src='./assets/imgs/staff/peter_man.jpg' class='img-fluid'>"
  };
  const membersBG = {
    "Willie Chang": "<p>Willie is the Chief Executive Officer of Wowoo Exchange. A leader with over twenty years of experience in fintech, investment banking and management consulting, he served as the Head of Strategic Planning and Business Development at Mizuho Securities in Singapore and also held management positions at Lehman Brothers and Deloitte Consulting prior to joining Wowoo Exchange.</p><p>Willie holds an MBA from the Kellogg School of Management at Northwestern University, and graduated summa cum laude from the University of Washington. He is fluent in English, Mandarin, and Japanese and has previous work experience in several countries, including the United States, Australia, Japan and Singapore.</p>",
    "Ashish Varma": "<p>Ashish is the Chief Operating Officer of Wowoo Exchange, with extensive experience in building and launching cryptocurrency exchanges. He was Head of Trading & Operations at Liquid, a leading exchange approved by the Japanese FSA. Ashish also built and launched another trading platform called Alluma, prior to joining Wowoo Exchange.</p><p>Ashish holds a master’s degree in Financial Mathematics from Cass Business School, as well as a bachelor’s degree in Economics & Statistics from University College London.</p>",
    "Wenyun Yuan": "<p>Wenyun is the Chief Financial Officer of Wowoo Exchange. He has over a decade of experience in operations consulting, external and internal audit. Additionally, he led projects, as well as managed teams at PricewaterhouseCoopers and Fraser & Neave prior to joining Wowoo Exchange.</p><p>Wenyun holds an MBA from INSEAD and a Bachelor of Accountancy from Singapore Management University. He is also a Chartered Accountant, and an Enterprise Singapore recognised management consultant. He is fluent in English and Mandarin, and has previous work experience in several countries, including France, Scotland, China, and Singapore.</p>",
    "Praveena Prabha": "<p>Praveena is the Head of Compliance of Wowoo Exchange. She has over seven years of regulatory compliance experience and specializes in the cryptocurrency, payments and remittance industry.</p><p>Prior to joining Wowoo Exchange, she served as Head of Compliance for a regional cryptocurrency exchange, where she set up and managed the compliance team and created the compliance framework. She also oversaw Southeast Asia regulatory compliance for a financial technology firm dealing in payments and remittance, and performed management consultancy services for bulge bracket banks.</p><p>Praveena holds a Bachelor of Business Management from Royal Melbourne Institute of Technology.</p>",
    "Sheree Tay": "<p>Sheree is the Head of Legal at Wowoo Exchange. Having spent 15 years working across three jurisdictions, London, Hong Kong and Singapore, she brings with her a wealth of legal experience. Prior to joining Wowoo Exchange, Sheree worked in top-tier international law firms, and as in-house legal at Citibank.</p><p>Sheree graduated with a LLB from King's College London and is a dual-qualified lawyer, admitted as an Advocate and Solicitor of the Supreme Court of Singapore and a Solicitor in England and Wales. She is fluent in English and Mandarin.</p>",
    "Ebish Najar": "<p>Ebish is the Head of Customer Support of Wowoo Exchange. He is a certified IT professional with close to 20 years of experience in the IT industry. Prior to joining Wowoo Exchange, he was the IT Director of a leading Danish IT firm, and provided advisory to clients in the global shipping and private security sectors. Ebish also held multiple senior positions in banking and financial institutions.</p><p>Ebish holds a bachelor’s degree in Biology from Cebu Doctors University, as well as a bachelor’s degree in Information Technology from Informatics College. He holds a CHT Certification from NCSA Texas, multiple Microsoft and CISCO certifications for Network and Server Administration, and the ITIL Certification.</p>",
    "Peter Man": "<p>Peter is the Head of Operations of Wowoo Exchange. He has over 12 years of financial services experience across management consulting, project management, financial control and audit. Prior to joining Wowoo Exchange, Peter worked at a management consultancy where he oversaw the implementation of Trade Based AML controls within Operations, and the implementation of trade finance DLT platforms within a traditional corporate bank.</p><p>Peter graduated from University College London and qualified as a Chartered Accountant. He previously worked at PricewaterhouseCoopers, London, before moving to Barclays in Singapore where he managed several key transformation projects for the investment bank.</p>"
  };
  const position = {
    "Willie Chang": "Chief Executive Officer",
    "Ashish Varma": "Chief Operating Officer",
    "Wenyun Yuan": "Chief Financial Officer",
    "Praveena Prabha": "Head of Compliance",
    "Sheree Tay": "Head of Legal",
    "Ebish Najar": "Head of Customer Support",
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
    let curY = document.body.scrollTop > offsetY || document.documentElement.scrollTop;
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
    banner.innerHTML = '<p><strong>Wowoo Exchange use cookies to offer you a better user experience.</strong><br />By continuing to use our website, you consent to the use of cookies in accordance with our <a href="./cookies.html">Cookies Policy</a>.</p><button>Accept &amp; Continue</button>';
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
