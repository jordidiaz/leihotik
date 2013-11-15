/*jshint camelcase: false*/
// Generated on 2013-08-01 using generator-chrome-extension 0.2.3

module.exports = function (grunt) {
  'use strict';

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var config = {
    app: 'app',
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
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/templates/',
            src: ['**/*.jade'],
            dest: '<%= config.app %>/views/',
            ext: '.html'
          }
        ]
      }
    },
    stylus: {
      compile: {
        files: {
          '<%= config.app %>/css/app.css': ['<%= config.src %>/stylesheets/*.styl']
        }
      }
    },
    coffee: {
      compile: {
        files: {
          '<%= config.app %>/js/app.js': ['<%= config.src %>/javascript/*.coffee']
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          '<%= config.app %>/js/app.js': [
                                          '<%= config.app %>/js/app.js',
                                          'bower_components/jquery/jquery.min.js',
                                          'bower_components/bootstrap/dist/js/bootstrap.min.js',
                                          '<%= config.src %>/javascript/js/*.js'
                                          ]
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          '<%= config.app %>/css/app.css': [
                                            '<%= config.src %>/stylesheets/css/*.css',
                                            'bower_components/bootstrap/dist/css/bootstrap.min.css',
                                            'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                                            'bower_components/font-awesome/css/font-awesome.min.css',
                                            '<%= config.app %>/css/app.css'
                                            ]
        }
      }
    },
    rename: {
      moveIndex: {
        src: '<%= config.app %>/views/index.html',
        dest: '<%= config.app %>/index.html'
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
          '<%= config.app %>/*.html',
          '<%= config.app %>/css/*.css',
          '<%= config.app %>/js/*.js',
          '<%= config.app %>/views/*.html}'
        ]
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'bower_components/font-awesome/fonts/', src: ['*'], dest: '<%= config.app %>/fonts/', filter: 'isFile'},
          {expand: true, cwd: 'bower_components/bootstrap/dist/fonts/', src: ['*'], dest: '<%= config.app %>/fonts/', filter: 'isFile'},
          {expand: true, cwd: '<%= config.src %>/images/', src: ['*'], dest: '<%= config.app %>/img/', filter: 'isFile'}
          ]
      },
      robots: {
        src: '<%= config.src %>/robots.txt',
        dest: '<%= config.app %>/robots.txt'
      }
    },
    clean: ['<%= config.app %>/**/*.*']
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
    'rename',
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