module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/assets/');
  eleventyConfig.addWatchTarget('src/assets/');

  eleventyConfig.addPassthroughCopy('src/css/');
  eleventyConfig.addWatchTarget('src/css/');


  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
    templateFormats: ['html', 'njk', 'md'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  }
};
