var introText = 'Sebee is just a guy. And this is his personal website with ' +
                'links to all he does. Please come inside the site by using ' +
                'the menu on top.';
var contactText = 'If you\'d like to get in touch, fire an email to ' +
                  '<email address should come here>.';

function buildIndexContent() {
    //var testContent = '<div id="content"><b>Here</b> be a site.<br />This is ' +
    //                  'where the content should be.</div>';
    var indexContent = '<div id="content"></div>';
    jQuery('.content').append(jQuery(indexContent));
    jQuery('#content').append(jQuery('<p>' + introText + '</p>'));
    jQuery('#content').append(jQuery('<p>' + contactText + '</p>'));
}
