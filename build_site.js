jQuery(document).ready(function(){
    jQuery.getScript('test.js', function() {
        var a = a;
    });
});

function buildSiteMenu() {
    jQuery('body').append(jQuery('<ul id="top_menu"></ul>'));
    var menuButtons = new Array();
    menuButtons[0] = 'pictures';
    menuButtons[1] = 'code';
    menuButtons[2] = 'stories';
    menuButtons[3] = 'blogs';
    menuButtons[4] = 'etc';
    for (var i = 0; i < menuButtons.length; i++) {
        var menuLink = '<li><a href="' + menuButtons[i] + '.html" id="' + menuButtons[i] + '">' + menuButtons[i] + '</a></li>';
        jQuery('#top_menu').append(jQuery(menuLink));
    }
}

function buildIndexContent() {
    jQuery('body').append(jQuery('<div id="content"><b>Here</b> be a site.<br />This is where the content should be.</div>'));
}