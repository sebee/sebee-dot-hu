function buildIndexContent() {
    var testContent = '<div id="content"><b>Here</b> be a site.<br />This is ' +
                      'where the content should be.</div>';
    jQuery('.content').append(jQuery(testContent));
}
