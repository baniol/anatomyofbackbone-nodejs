module.exports = function(grunt) {

  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    bowercopy: {
      options: {
        clean: true
      },
      libs: {
          options: {
              destPrefix: 'assets/lib'
          },
          files: {
              'jquery.min.js': 'jquery/dist/jquery.min.js',
              'jquery.min.map': 'jquery/dist/jquery.min.map',
              'backbone.js'  : 'backbone/backbone.js',
              'underscore-min.js' : 'underscore/underscore-min.js',
              'underscore-min.map' : 'underscore/underscore-min.map'
          },
      }
    }
  });

  grunt.registerTask('bower', ['bowercopy']);
};
