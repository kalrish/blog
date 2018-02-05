- [x]  Make navigation bar stick on non-post pages

- [ ]  Draw slashes between category links displayed on the navigation bar on category pages

- [ ]  Display the whole category tree on index pages

- [ ]  Display an excerpt of each post in index pages

    Possibly wrapped in a &lt;details&gt; element.

- [x]  Create a home page, fancy, with some pictures, some (not all) posts listed as well as an excerpt from each

- [x]  Ensure that line spacing in post titles is adequate

    Both in the home page and in index pages.

- [ ]  Remove custom implementation of drop caps when `initial-letter` support lands on Chrome and Firefox

	See [the Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1223880).

- [ ]  Avoid redundant code in generated CSS when using Sass's @import

    This will require a hard-to-implement workaround until Sass's new module system arrives.

- [ ]  Remove xmlns attributes from &lt;svg&gt; tags

    They aren't really needed in inline SVG, somewhat as the XML declaration.

- [x]  Append a tombstone at the end of posts

- [ ]  Offer various versions of each image

    In CSS, we probably have to use media queries to decide which one to use. However, whenever possible, we should leave the decision to the browser, which is able to take more data into account (factoring, for example, connection speed).

- [ ]  Support comment author URLs, whereby commenters may specify a site linked to their person (e.g. their personal website or a profile page)

- [x]  Let browsers hyphenate paragraphs if they can

    This requires a feature query to check whether `hyphens: auto` is supported. If it's not supported, `manual` and our soft hyphens will do.

- [ ]  Investigate why the tilde above the 'ñ' is too low with ET Book

    This happens in Chrome. If the problem is not related to the browser but to the font itself, solving it could involve looking for another font (or using an alternative for other languages, which could be done in pure CSS using the `:lang()` selector).

- [x]  Implement a proper 404 page

    Perhaps with an image. The artwork of the Hearthstone card _Journey Below_ comes to mind. An adventurer before a cave would actually fit quite well.

- [x]  Style &lt;cite&gt; properly in posts

- [ ]  Improve the drop caps implementation

    Right now, it looks different on different browsers. It's alright in Chrome but off in Firefox.

- [x]  Link RSS feed
