$(function() {
  $('[data-toggle="tooltip"]').tooltip();

  if (typeof $.fn.slimScroll != 'undefined') {
    $(".sidebar .slimContent").slimScroll({
      height: $(window).height(),
      color: "rgba(0,0,0,0.15)",
      size: "5px",
      position: 'right',
    });
  }

  $('#collapseToc').on('shown.bs.collapse', function() {
    if (typeof $.fn.slimScroll != 'undefined') {
      $(".sidebar .slimContent").slimScroll().on('slimscroll');
    }
  });

  $(".geopattern").each(function() {
    $(this).geopattern($(this).data('pattern-id'));
  });

  var navigation = $('#nav-main').okayNav({
    swipe_enabled: false,
  });

  $('[data-stick-bottom]').keepInView({
    fixed: false,
    parentClass: "has-sticky",
    customClass: "sticky",
    trigger: 'bottom',
    zindex: 42,
    edgeOffset: 0
  });
  
  $('[data-stick-top]').keepInView({
    fixed: true,
    parentClass: "has-sticky",
    customClass: "sticky",
    trigger: 'top',
    zindex: 42,
    edgeOffset: 0
  });

  var menuHighlight = $("ul.main-nav").hasClass('menu-highlight');
  if (menuHighlight) {
    var currentPathname = location.pathname,
      $menuList = $("ul.main-nav>li"),
      activeIndex = -1;
    for (var i = 0, length = $menuList.length; i < length; i++) {
      var itemHref = $($menuList[i]).find('a').attr('href');
      if (currentPathname.indexOf(itemHref) > -1 ||
        (currentPathname === '/' && (itemHref === '/.' || itemHref === '/' || itemHref === 'index.html' || itemHref === '/index.html'))) {
        activeIndex = i;
      }
      $($menuList[i]).removeClass('active');
    }
    $menuList[activeIndex] && $($menuList[activeIndex]).addClass('active');
  }
});

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

