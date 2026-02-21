const markdownIt = require("markdown-it");
const markdownItPrism = require("markdown-it-prism");

module.exports = function(eleventyConfig) {
  // Ignore old Gatsby directories and files
  eleventyConfig.ignores.add("src/pages/**");
  eleventyConfig.ignores.add("src/components/**");
  eleventyConfig.ignores.add("src/templates/**");
  eleventyConfig.ignores.add("src/docs/**");
  eleventyConfig.ignores.add("src/html.js");

  // Pass-through copy for static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy({ "static": "/" });

  // Configure markdown with PrismJS syntax highlighting
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  }).use(markdownItPrism);
  eleventyConfig.setLibrary("md", md);

  // Global data for snapshot date (used in queries)
  eleventyConfig.addGlobalData("snapshot", 20260215);

  // Filter to replace SNAPSHOT_DATE_HERE placeholder
  eleventyConfig.addFilter("replaceSnapshot", function(content, snapshot) {
    if (!content) return content;
    return content.replace(/SNAPSHOT_DATE_HERE/g, snapshot);
  });

  // Collection for Redash sample queries
  eleventyConfig.addCollection("redashSamples", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/redash-samples/[0-9]*.md")
      .sort((a, b) => (a.data.position || 0) - (b.data.position || 0));
  });

  // Collection for Athena sample queries
  eleventyConfig.addCollection("athenaSamples", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/athena-samples/[0-9]*.md")
      .sort((a, b) => (a.data.position || 0) - (b.data.position || 0));
  });

  // Collection for Imhotep sample queries
  eleventyConfig.addCollection("imhotepSamples", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/imhotep-samples/[0-9]*.md")
      .sort((a, b) => (a.data.position || 0) - (b.data.position || 0));
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
