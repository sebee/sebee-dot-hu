/*jQuery(document).ready(function(){
    jQuery.getScript('js/build_index.js', function() {
        var a = a;
    });
});/**/

function buildSiteFrame() {
    buildContentHolder();
    buildSiteMenu();
    googleAnalyticsCall();
}

function buildContentHolder() {
    jQuery('body').prepend(jQuery('<div class="content"></div>'));
}

function buildSiteMenu() {
    var currentPage = getCurrentPage();
    jQuery('.content').append(jQuery('<ul id="top_menu"></ul>'));
    var pages = [{'name': 'home', 'page': 'index', 'id': 'home'},
                 {'name': 'pictures', 'page': 'pictures', 'id': 'pictures'},
                 {'name': 'code', 'page': 'code', 'id': 'code'},
                 {'name': 'stories', 'page': 'stories', 'id': 'stories'},
                 {'name': 'blogs', 'page': 'blogs', 'id': 'blogs'},
                 {'name': 'etc...', 'page': 'misc', 'id': 'misc'},
                 {'name': 'cv', 'page': 'cv', 'id': 'cv'}];
    for (var i = 0; i < pages.length; i++) {
        var buttonClass = '';
        if(pages[i].page == currentPage) {
            buttonClass = ' class="highlighted"';
        }
        var menuLink = '<li' + buttonClass + '><a href="' + pages[i].page + '.html" id="' +
                       pages[i].id + '">' + pages[i].name +
                       '</a></li>';
        jQuery('#top_menu').append(jQuery(menuLink));
    }
}

function getCurrentPage() {
    var currentPath = window.location.pathname;
    var currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1,
                                            currentPath.lastIndexOf('.'));
    return currentPage;
}

function googleAnalyticsCall() {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      
      ga('create', 'UA-41614628-1', 'c9.io');
      ga('send', 'pageview');
}
