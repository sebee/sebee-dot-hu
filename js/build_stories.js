var stories = [{'date_time': '2008-10-29 16:47', 'title': 'A Rhyme', 'url': '2008-10-29-rhyme', 'docs_id': '1wk5-kAqm4LMOUe5ELd5xjvQpwCAoboZlGtyYPWLyjGE'},
               {'date_time': '2013-01-01 00:00', 'title': 'blank', 'url': 'blank', 'docs_id': 'blank'}];

function buildIndexContent() {
    var indexContent = '<div id="content"></div>';
    jQuery('.content').append(jQuery(indexContent));
    jQuery('#content').append(jQuery('<p>' + stories[1].title + '</p>'));
    jQuery('#content').append(jQuery('<p>' + stories[1].date_time + '</p>'));
}
