'use strict';

const Markdowner = require('/scripts/markdowner');

const init = () => {

  const md = new Markdowner();

  // setting up markdown and preview
  md.setMarkdownCanvas('#markdown')
    .setPreviewCanvas('#preview')
    .listen();
}

$(document).ready(init);
