
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

$('.Contents').tocible({
    heading: 'h2', //[selector], the first level heading
    subheading: 'h3', //[selector], the second level heading
    reference:'.ref', //[selector], reference element for horizontal positioning
    title: '', //[selector or string], title of the menu
    hash: false, //[boolean], setting true will enable URL hashing on click
    offsetTop: 80, //[number], spacing/margin above the menu
    speed: 800, //[number or string ('slow' & 'fast')], duration of the animation when jumping to the clicked content
    collapsible: false, //[boolean], enabling true will auto collapse sub level heading not being scrolled into
    maxWidth: 150 //[number], set max-width of the navigation menu
});