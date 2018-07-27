module.exports = function(grunt) {
        grunt.initConfig({
                sass: {
                    options: {
                      sourceMap: true,
                      //find link when you changes css in the brower.
                      // outputStyle: 'compressed'
                    },
                    dist: {
                      files: {
                        'css/main.css': 'scss/main.scss'
                      }
                    }
                  }, 
                // cssmin task config
                 cssmin: {
                            minify: {
                                src: 'scss/main.scss',
                                // src: ['scss/main.scss','scss/pages/home.scss','scss/pages/footer-home.scss','scss/helpers/mixins.scss','scss/helpers/variables.scss'],
                                dest: 'css/main.css',
                            }
                        },
                        
                watch: { 
                    nenCSS:{
                      // /**/ để xem hết tất cả các file.chứ /*.scss  thì chỉ xme được 1 file nên nó sẽ k chạy 
                      files: ['scss/**/*.scss'],
                      tasks: ['cssmin']
                    },
                    BuildCSS: {
                        files: ['scss/**/*.scss'],
                        tasks: ['sass']
                    },
                    configFiles: {
                        files: ['Gruntfile.js'],
                        options: {
                            reload: true
                        }
                    }
                }
            });
            grunt.loadNpmTasks('grunt-contrib-watch');
            grunt.loadNpmTasks('grunt-contrib-cssmin'); 
            grunt.loadNpmTasks('grunt-sass'); 
            grunt.registerTask('default', ['watch']);
        };