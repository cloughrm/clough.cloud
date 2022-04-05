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
    author: 'Ryan Clough',
    year: new Date().getFullYear(),
    desktopMinWidth: '50rem',
  }
}