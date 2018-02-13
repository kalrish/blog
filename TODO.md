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

- [x]  Support comment author URLs, whereby commenters may specify a site linked to their person (e.g. their personal website or a profile page)

- [x]  Let browsers hyphenate paragraphs if they can

    This requires a feature query to check whether `hyphens: auto` is supported. If it's not supported, `manual` and our soft hyphens will do.

- [ ]  Investigate why the tilde above the 'ñ' is too low with ET Book

    This happens in Chrome. If the problem is not related to the browser but to the font itself, solving it could involve looking for another font (or using an alternative for other languages, which could be done in pure CSS using the `:lang()` selector).

- [x]  Implement a proper 404 page

    Perhaps with an image. The artwork of the Hearthstone card _Journey Below_ comes to mind. An adventurer before a cave would actually fit quite well.

- [x]  Style &lt;cite&gt; properly in posts

- [x]  Improve the drop caps implementation

    Right now, it looks different on different browsers. It's alright in Chrome but off in Firefox.

- [x]  Link RSS feed

- [x]  Offer fonts in WOFF2 as well

    The format enables (at least theoretically) further compression than its predecessor and, in any case, than formats such as TrueType.
    
    - [x]  Cinzel
    - [x]  ET Book

- [ ]  Offer the favicon in proper formats

    - [x]  PNG, 16x16
    - [x]  PNG, 32x32

- [ ]  Enable ligatures in text fonts

    The lack of ligatures is evident (and annoying) in post text, which uses the ET Book font.

- [x]  Mark external links with `rel=external`

- [x]  Internationalize 404 page

    As it is now, it is unconditionally displayed in English, which is annoying when browsing the site in another language, for all the links offered point to the English pages. It would be best if the previous language were respected, but that's probably impossible to achieve without having access to the server. Thus, our best bet is some JavaScript magic.

- [ ]  Mark links to the about page with `rel=help`

- [x]  Remove all instances of `<meta charset="utf-8">`

    GitHub's servers expect documents to be encoded in UTF-8 and already specify UTF-8 in HTTP headers, so this is redundant and unnecessary.

- [x]  Link the language-relevant page in `<link rel=author>`

    Using the Liquid variable `page.lang`, we can link directly to the language-relevant page and thus avoid a redirection.
