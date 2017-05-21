module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist/',
  root: 'dist/',
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css'
  ],
  runtimeCaching: [{
    urlPattern: /^https:\/\/opendata-download-metfcst\.smhi\.se\/api/,
    handler: 'networkFirst',
	options: {
        cache: {
          maxEntries: 10,
          name: 'smhi-cache'
        }
    }
  }/*, {
    urlPattern: /\/articles\//,
    handler: 'fastest',
    options: {
        cache: {
          maxEntries: 10,
          name: 'articles-cache'
        }
    }
  }*/],
};

