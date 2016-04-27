module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css/src',
                    src: ['reset.scss','style.scss'],
                    dest: 'css/src',
                    ext: '.css'
                }]
            }
        },
        concat_css: {
            all: {
                src:['css/src/*.css'],
                dest:'css/dist/style.css'
            }
        },
        watch: {
            sass: {
                files: ['css/src/*.scss'],
                tasks: ['sass','concat_css']
            }
    }});
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concat-css');


    grunt.registerTask('default', ['sass','concat_css']);

};