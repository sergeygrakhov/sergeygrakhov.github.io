module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/dist/script.main.min.js'
            }
        },
        uglify: {
            dist: {
                src: ['js/dist/script.main.min.js'],
                dest: 'js/dist/script.main.min.js'
            }
        },
        concat_css: {
            all: {
                src:['css/src/*.css'],
                dest:'css/dist/styles.min.css'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/dist',
                    src: ['*.min.css'],
                    dest: 'css/dist'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat','uglify','concat_css','cssmin']);

};