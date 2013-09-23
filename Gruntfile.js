
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      compass: {
        files: ['public/sass/*.sass'],
        tasks: ['compass']
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: 'public/sass',
          cssDir: 'public/stylesheets'
        }
      }
    
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  return grunt.registerTask('default', ['compass', 'watch']);
};
