module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],
    exclude: [],

    frameworks: ['jasmine'],
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    port: 8080,
    autoWatch: true,
    singleRun: false
  });
};
