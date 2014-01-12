module.exports = function (grunt) {
  'use strict';

  grunt.util.linefeed = '\n';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    box: {
      less: 'less/_box.less',
      css: 'css/box.css',
      cssMin: 'css/box.min.css',
      banner: '/* \n BOXcss <%= pkg.version %> by Alexander Hansson \n URL: https://github.com/hejhansson/BOXcss \n Theme Name: \n Theme URI: http:// \n Author: \n Author URI: http://alexanderhansson.se/ \n Description: \n Version: 1.0 \n License: \n Tags: \n */\n'
    },

    // Tasks
    clean: {
      dist: ['dist']
    },

    less: {
      dist: {
        files: {
          '<%= box.css %>': '<%= box.less %>'
        }
      },

      distMin: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          '<%= box.cssMin %>': '<%= box.css %>'
        }
      }
    },

    csscomb: {
      sort: {
        options: {
          sortOrder: '.csscomb.json'
        },
        files: {
          '<%= box.css %>': ['<%= box.css %>'],
        }
      }
    },

    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= box.banner %>'
        },
        files: {
          src: [
            '<%= box.cssMin %>'
          ]
        }
      }
    },

    watch: {
      less: {
        files: 'less/*.less',
        tasks: ['less', 'csscomb', 'usebanner'],
        options: {
          livereload: true,
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.registerTask('default', ['clean', 'less', 'csscomb', 'usebanner']);
};