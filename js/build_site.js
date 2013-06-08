/*jQuery(document).ready(function(){
    jQuery.getScript('js/build_index.js', function() {
        var a = a;
    });
});/**/

function buildSiteFrame() {
    buildContentHolder();
    buildSiteMenu();
}

function buildContentHolder() {
    jQuery('body').prepend(jQuery('<div class="content"></div>'))
}

function buildSiteMenu() {
    jQuery('.content').append(jQuery('<ul id="top_menu"></ul>'));
    var pages = [{'name': 'home', 'page': 'index', 'id': 'home'},
                 {'name': 'pictures', 'page': 'pictures', 'id': 'pictures'},
                 {'name': 'code', 'page': 'code', 'id': 'code'},
                 {'name': 'stories', 'page': 'stories', 'id': 'stories'},
                 {'name': 'blogs', 'page': 'blogs', 'id': 'blogs'},
                 {'name': 'etc...', 'page': 'etc', 'id': 'etc'}];
    for (var i = 0; i < pages.length; i++) {
        var menuLink = '<li><a href="' + pages[i].page + '.html" id="' +
                       pages[i].id + '">' + pages[i].name + '</a></li>';
        jQuery('#top_menu').append(jQuery(menuLink));
    }
}