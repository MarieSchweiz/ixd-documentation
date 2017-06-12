
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

