/*jshint camelcase: false*/
// Generated on 2013-08-01 using generator-chrome-extension 0.2.3

module.exports = function (grunt) {
  'use strict';

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var config = {
    app: 'app',
    assets: 'app/assets',
    src: 'src',
  };

  grunt.initConfig({
    config: config,
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: '<%= config.app %>/js/*.js'
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          '<%= config.app %>/es/index.html': '<%= config.src %>/templates/index-es.jade',
          '<%= config.app %>/eu/index.html': '<%= config.src %>/templates/index-eu.jade',
          '<%= config.app %>/fr/index.html': '<%= config.src %>/templates/index-fr.jade'
        }
      }
    },
    stylus: {
      compile: {
        files: {
          '<%= config.assets %>/css/app.css': ['<%= config.src %>/stylesheets/*.styl']
        }
      }
    },
    coffee: {
      compile: {
        files: {
          '<%= config.assets %>/js/app.js': ['<%= config.src %>/javascript/*.coffee']
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          '<%= config.assets %>/js/app.js': [
                                          'bower_components/jquery/dist/jquery.min.js',
                                          'bower_components/bootstrap/dist/js/bootstrap.min.js',
                                          '<%= config.app %>/assets/js/app.js'
                                          ]
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          '<%= config.assets %>/css/app.css': [
                                            '<%= config.src %>/stylesheets/css/*.css',
                                            'bower_components/bootstrap/dist/css/bootstrap.min.css',
                                            'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                                            'bower_components/font-awesome/css/font-awesome.min.css',
                                            'bower_components/blueimp-gallery/css/blueimp-gallery.min.css',
                                            'bower_components/blueimp-bootstrap-image-gallery/css/bootstrap-image-gallery.min.css',
                                            '<%= config.assets %>/css/app.css'
                                            ]
        }
      }
    },
    connect: {
      options: {
        livereload: 35729,
        hostname: '0.0.0.0',
        port: 8888,
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.app %>'
          ]
        }
      }
    },
    htmlhint: {
      build: {
        options: {
          'tag-pair': true,
          'tagname-lowercase': true,
          'attr-lowercase': true,
          'attr-value-double-quotes': true,
          'doctype-first': true,
          'spec-char-escape': true,
          'id-unique': true,
          'head-script-disabled': true,
          'style-disabled': true
          },
        src: ['<%= config.app %>/index.html', '<%= config.app %>/views/**/*.html']
      }
    },
    watch: {
      build: {
        files: ['<%= config.src %>/**/*.*'],
        tasks: ['build']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/index.html',
          '<%= config.app %>/*/index.html',
          '<%= config.assets %>/css/*.css',
          '<%= config.assets %>/js/*.js'
        ]
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'bower_components/font-awesome/fonts/', src: ['*'], dest: '<%= config.assets %>/fonts/', filter: 'isFile'},
          {expand: true, cwd: 'bower_components/bootstrap/dist/fonts/', src: ['*'], dest: '<%= config.assets %>/fonts/', filter: 'isFile'},
          {expand: true, cwd: '<%= config.src %>/images/', src: ['**/*'], dest: '<%= config.assets %>/img/'},
          {expand: true, cwd: '<%= config.src %>/pdf/', src: ['**/*'], dest: '<%= config.assets %>/pdf/'}
          ]
      },
      robots: {
        src: '<%= config.src %>/robots.txt',
        dest: '<%= config.app %>/robots.txt'
      },
      favicon: {
        src: '<%= config.src %>/images/favicon.ico',
        dest: '<%= config.app %>/favicon.ico'
      },
      indexRedirect: {
        src: '<%= config.src %>/index.php',
        dest: '<%= config.app %>/index.php'
      },
      bootstrap_image_gallery_img: {
        src: 'bower_components/blueimp-bootstrap-image-gallery/img/loading.gif',
        dest: '<%= config.assets %>/img/loading.gif'
      }
    },
    clean: ['<%= config.app %>/*']
  });

  grunt.registerTask('build', [
    'clean',
    'jade',
    'htmlhint',
    'stylus',
    'coffee',
    'jshint',
    'uglify',
    'cssmin',
    'copy'
  ]);

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};