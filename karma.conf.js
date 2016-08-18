//http://karma-runner.github.io/1.0/config/configuration-file.html
//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/js/**/*.js',
      'unit/**/*.js',
      'e2e-tests/**/*.js'
    ],

    logLevel: config.LOG_INFO, // LOG_DEBUG

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantoJS'], // ['Chrome','PhantoJS']

    // plugins: [
    //   'karma-chrome-launcher',
    //   'karma-firefox-launcher',
    //   'karma-jasmine',
    //   'karma-junit-reporter'
    // ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
