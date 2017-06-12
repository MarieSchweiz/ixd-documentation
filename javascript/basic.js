
/**
 * Example 1
 * Add anchors to all h1's on the page
 */
anchors.add('h1');

/**
 * Example 2
 * Adds anchors to elements that have been assigned the class '.anchored'
 */
anchors.add('.anchored');

/**
 * Example 3
 * If no selector is provided, it falls back to a default selector of:
 * 'h2, h3, h4, h5, h6'
 */
anchors.add();

$('#toc').toc({
    'selectors': 'h1,h2,h3', //elements to use as headings
    'container': 'body', //element to find all selectors in
    'smoothScrolling': true, //enable or disable smooth scrolling on click
    'prefix': 'toc', //prefix for anchor tags and class names
    'onHighlight': function(el) {}, //called when a new section is highlighted 
    'highlightOnScroll': true, //add class to heading that is currently in focus
    'highlightOffset': 100, //offset to trigger the next headline
    'anchorName': function(i, heading, prefix) { //custom function for anchor name
        return prefix+i;
    },
    'headerText': function(i, heading, $heading) { //custom function building the header-item text
        return $heading.text();
    },
'itemClass': function(i, heading, $heading, prefix) { // custom function for item class
  return $heading[0].tagName.toLowerCase();
}
});

