module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/assets/');
  eleventyConfig.addWatchTarget('src/assets/');

  eleventyConfig.addPassthroughCopy('src/css/');
  eleventyConfig.addWatchTarget('src/css/');

  eleventyConfig.addCollection('topics', function(collectionApi) {
    const tagsList = new Set();
    collectionApi.getAll().map(item => {
      if (item.data.tags) {
        item.data.tags.map(tag => tagsList.add(tag))
      }
    });
    return tagsList;
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'docs',
    },
    templateFormats: ['html', 'njk', 'md'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  }
};
