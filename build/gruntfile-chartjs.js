module.exports = function(grunt) {
     
    grunt.initConfig({
 
        pkg: grunt.file.readJSON('package.json'),
 
        uglify: {
          options: {
            banner: '/* <%= pkg.description %> ' +
                '(<%= grunt.template.today("yyyy-mm-dd") %>) ' +
                '(c) 2014 - <%= grunt.template.today("yyyy") %> Enterprise Blocks, Inc. ' +
                'License details : <%= pkg.license %> */'
            },
            dist: {
            files: {
                '../dist/eb-chartjs.min.js': ['../src/eb-chartjs.js']
            }
          }
        }
        
    });
 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['uglify']);
 
};