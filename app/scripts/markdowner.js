'use strict';

/*
 * A module to convert markdown input into preview
 * @require Babel for compiling ES6 syntax
 */
const Markdowner = class Markdowner {

    constructor() {
        this._canvas = {
            markdown: null,
            preview: null
        }
    }

    /*
     * set the markdown canvas element
     * @param {string} markdownSelector
     * @return {object} this for chaining
     */
    setMarkdownCanvas (markdownSelector) {
        this._canvas.markdown = document.querySelector(markdownSelector);
        return this;
    }

    /*
     * set the preview canvas element
     * @param {string} previewSelector
     * @return {object} this for chaining
     */
    setPreviewCanvas (previewSelector) {
        this._canvas.preview = document.querySelector(previewSelector);
        return this;
    }

    /*
     * set the markdown canvas element
     * @param {string} markdownSelector
     */
    listen () {
        // handle the keyup event on user input
        let self = this;
        self._canvas.markdown.addEventListener('keyup', (e) => {
            // TODO
            // implement the markdown-to-reveal-preview converter here
            // ...

            // just for testing, dump all markdown to preview
            self._canvas.preview.innerHTML = e.target.innerHTML;
        });
    }
};

module.exports = Markdowner;
