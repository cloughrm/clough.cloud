// module.exports = {
//   NOTE: `process.env.URL` is provided by Netlify, and may need
//   adjusted pending your host
//   url: process.env.URL || "http://localhost:8080",
//   siteName: "clough.cloud",
//   siteDescription: "Threat Intelligence & Software Development Professional. Creator of too many threat map visualizations. Opinions are my own and not the views of my employer.",
//   authorName: "Ryan Clough", // optional
// };

module.exports = function() {
  return {
    headerText: `Hey there, I'm Ryan 👋🏻,
      welcome to my personal blog. I (mostly) write about web development & products.
      I spend my days building automated cloud incident response tools 👨🏼‍💻☁️.
      You can find me on <a href="https://twitter.com/hotF1X">Twitter</a> &
      <a href="https://www.linkedin.com/in/cloughrm/">LinkedIn</a>.`,
    author: 'Ryan Clough',
    year: new Date().getFullYear(),
  }
}