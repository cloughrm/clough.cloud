const posthtml = require('posthtml');
const htmlmin = require('html-minifier');
const minifyClassnames = require('posthtml-minify-classnames');

const EXCLUDED_TAGS = ['blog_posts'];

const generateTopics = function(collectionApi) {
  const tagsHash = {};
  collectionApi.getAll().map(item => {
    if (item.data.tags) {
      item.data.tags.map((tag) => {

        // Remove excluded tags
        if (EXCLUDED_TAGS.includes(tag)) {
          return;
        }

        // Initalize the tag count at 1
        if (!Object.keys(tagsHash).includes(tag)) {
          tagsHash[tag] = 1;
          return;
        }

        // Increment the tag count
        tagsHash[tag] += 1;
      })
    }
  });

  // Convert the tag hash into a sorted list
  const sorted = [];
  for (const [k, v] of Object.entries(tagsHash)) {
    sorted.push([k, v]);
  }
  sorted.sort(function(a, b) {
    return a[1] - b[1];
  }).reverse();

  console.log(`[info] Sorted Tags: ${sorted.join('|')}`);
  return sorted;
};

const minify = async function(content, outputPath) {
  if (outputPath.endsWith('.html')) {

    // Minify the HTML
    let minified = htmlmin.minify(content, {
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
    });
    // Minify the CSS attributes
    const { html } = await posthtml().use(minifyClassnames({
      filter: /^#profile-pic/, // #profile-pic is referenced in scripts
      genNameClass: 'genNameEmoji',
      genNameId: 'genNameEmoji',
    })).process(minified);
    return html;
  }
  return content;
};

const topicImgSrc = function (topic) {
  topic = topic.toLowerCase();
  let prefix = '/assets/images';
  switch (topic) {
    case 'css':
      return `${prefix}/css3.png`;
    case 'threat intelligence':
      return `${prefix}/graph.png`;
    default:
      return `${prefix}/tag.png`;
  }
};

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/assets/');
  eleventyConfig.addWatchTarget('src/assets/');

  eleventyConfig.addPassthroughCopy('src/css/');
  eleventyConfig.addWatchTarget('src/css/');

  eleventyConfig.addShortcode('topicImgSrc', topicImgSrc);

  eleventyConfig.addCollection('topics', generateTopics);

  if (process.env.ENV === 'prod') {
    eleventyConfig.addTransform('htmlmin', minify);
  }

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
    templateFormats: ['html', 'md', 'liquid'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  }
};
