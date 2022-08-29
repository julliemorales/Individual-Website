// Configure Slick Carousel
$(document).ready(function () {
  $(".carousel").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    draggable: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          arrows: true,
        },
      },
    ],
  });
});

// Initialize AOS
AOS.init();

// Initialize Live Chat
window.__lc = window.__lc || {};
window.__lc.license = 14459466;
(function (n, t, c) {
  function i(n) {
    return e._h ? e._h.apply(null, n) : e._q.push(n);
  }
  var e = {
    _q: [],
    _h: null,
    _v: "2.0",
    on: function () {
      i(["on", c.call(arguments)]);
    },
    once: function () {
      i(["once", c.call(arguments)]);
    },
    off: function () {
      i(["off", c.call(arguments)]);
    },
    get: function () {
      if (!e._h)
        throw new Error("[LiveChatWidget] You can't use getters before load.");
      return i(["get", c.call(arguments)]);
    },
    call: function () {
      i(["call", c.call(arguments)]);
    },
    init: function () {
      var n = t.createElement("script");
      (n.async = !0),
        (n.type = "text/javascript"),
        (n.src = "https://cdn.livechatinc.com/tracking.js"),
        t.head.appendChild(n);
    },
  };
  !n.__lc.asyncInit && e.init(), (n.LiveChatWidget = n.LiveChatWidget || e);
})(window, document, [].slice);

// Handle Navbar
const nav = document.getElementById("navbar");
window.onscroll = function () {
  nav.style.boxShadow = "none";
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
    nav.style.boxShadow =
      "0 1px 1px rgb(0 0 0 / 1%), 0 10px 30px rgb(0 0 0 / 8%)";
};
