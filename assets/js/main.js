/**
* Template Name: KnightOne
* Template URL: https://bootstrapmade.com/knight-simple-one-page-bootstrap-template/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns acti  te
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar-ar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar-ar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns acti  te
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar-ar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar-ar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)
  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()
window.addEventListener('scroll', function() {
  const button = document.querySelector('.get-started-btn');
  if (window.scrollY > 0) {
    button.classList.add('green');
  } else {
    button.classList.remove('green');
  }
});

const translations = {
  en: {
    test: "Al-Zabin & Al-Dakheel Allah Transports Co.",
    lanchg_1: "Your Trusted Partner in Petroleum and Chemical Transportation",
    lanchg_2: "Your Trusted Partner in Petroleum and Chemical Transportation",
  },
  ar: {
    test: "شركة الزبن والدخيل الله للنقل",
    lanchg_1: "شريككم الموثوق في نقل البترول والكيماويات",
    lanchg_2: "شريككم الموثوق في نقل البترول والكيماويات",
  }
};

const languageSelect = document.querySelector("select");
let h1 = document.getElementById("rest");
let h2 = document.getElementById("lanchg_1");
let span = document.getElementById("lanchg_2");
const englishSection = document.querySelector('#about-en');
const arabicSection = document.querySelector('#about-ar');
const arabicnavbar = document.querySelector('#navbar-ar');
const englishnavbar = document.querySelector('#navbar');
const arabiclogin = document.querySelector('#login-ar');
const englishlogin = document.querySelector('#login');
const arabiccta = document.querySelector('#cta-ar');
const englishcta = document.querySelector('#cta');
const arabicmission = document.querySelector('#mission-ar');
const englishmission = document.querySelector('#mission-en');
const arabiccounts = document.querySelector('#counts-ar');
const englishcounts = document.querySelector('#counts');
const arabicrecepit = document.querySelector('#recepit-ar');
const englishrecepit = document.querySelector('#recepit');
const arabiccontact = document.querySelector('#contact-ar');
const englishcontact = document.querySelector('#contact');
const arabicmbea = document.querySelector('#mbar');
const englishmbar = document.querySelector('#mbea');
const navbar = document.querySelector('.navbar');
// const arabicheader = document.querySelector('#header-ar');
// const englishheader = document.querySelector('#header');
const setLanguage = (language) => {
  if (language === 'ar') {
    arabicSection.style.display = 'block';
    englishSection.style.display = 'none';
    arabicnavbar.style.display = 'block';
    englishnavbar.style.display = 'none';
    arabiclogin.style.display = 'block';
    englishlogin.style.display = 'none';
    arabiccta.style.display = 'block';
    englishcta.style.display = 'none';
    arabicmission.style.display = 'block';
    englishmission.style.display = 'none';
    arabiccounts.style.display = 'block';
    englishcounts.style.display = 'none';
    arabicrecepit.style.display = 'block';
    englishrecepit.style.display = 'none';
    arabiccontact.style.display = 'block';
    englishcontact.style.display = 'none';
    arabicmbea.style.display = 'block';
    englishmbar.style.display = 'none';
    // arabicheader.style.display = 'block';
    // englishheader.style.display = 'none';
    navbar.classList.remove('en');
    navbar.classList.add('ar');
    h1.innerText = translations.ar.test;
    h2.innerText = translations.ar.lanchg_1;
    span.innerText = translations.ar.lanchg_2;
    const header = document.getElementById('header');
    const hdr = document.getElementById('hdr');

// Add inline style for direction
header.style.direction = 'rtl';

    console.log("Arabic");
  } else if (language === 'en') {
    englishSection.style.display = 'block';
    arabicSection.style.display = 'none';
    arabicnavbar.style.display = 'none';
    englishnavbar.style.display = 'block';
    arabiclogin.style.display = 'none';
    englishlogin.style.display = 'block';
    arabiccta.style.display = 'none';
    englishcta.style.display = 'block';
    arabicmission.style.display = 'none';
    englishmission.style.display = 'block';
    arabiccounts.style.display = 'none';
    englishcounts.style.display = 'block';
    arabicrecepit.style.display = 'none';
    englishrecepit.style.display = 'block';
    arabiccontact.style.display = 'none';
    englishcontact.style.display = 'block';
    arabicmbea.style.display = 'none';
    englishmbar.style.display = 'block';
    // arabicheader.style.display = 'block';
    // englishheader.style.display = 'none';
    navbar.classList.remove('ar');
    navbar.classList.add('en');
    h1.innerText = translations.en.test;
    h2.innerText = translations.en.lanchg_1;
    span.innerText = translations.en.lanchg_2;
    const hdr = document.getElementById('hdr');

// Add inline style for direction
header.style.direction = 'ltr';
    console.log("English");
  }
};

// Initial display logic
const initialLanguage = languageSelect.value;
setLanguage(initialLanguage);

// Event listener for language selection change
languageSelect.addEventListener('change', (event) => {
  setLanguage(event.target.value);
});



languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

// flag
function updateSelectOptions() {
  const select = document.getElementById('slt');
  const options = select.options;

  if (window.innerWidth < 350) {
      for (let i = 0; i < options.length; i++) {
          const option = options[i];
          option.innerHTML = option.getAttribute('data-short');
      }
  } else {
      for (let i = 0; i < options.length; i++) {
          const option = options[i];
          option.innerHTML = option.getAttribute('data-full');
      }
  }
}

// Initial check
updateSelectOptions();

// Add event listener for window resize
window.addEventListener('resize', updateSelectOptions);