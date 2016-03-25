module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', { presets: ['es2015', 'react'] }]
          ]
        },
        files: {
          './js/dist/index.js': ['./js/modules/index.jsx']
        }
      }
    },
    watch: {
      scripts: {
        files: ['./js/modules/*.js', './js/modules/*.jsx'],
        tasks: ['browserify']
      }
    },
    connect: {
      server: {
        options: {
          port: 8888
        }
      }
    },
    uglify: {
      dist: {
        files: {
          './dist/index.min.js' : ['./dist/index.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['connect:server', 'watch']);
  grunt.registerTask('build', ['browserify', 'uglify']);
};
