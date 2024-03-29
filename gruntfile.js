// Gruntfile.js
module.exports = grunt => {
    // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // đọc json
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            dest: 'dest',
            css: "css",
            scss: "scss",
            js: "js"
        },
        // css min
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            my_target: {
                files: [{
                    '<%= dirs.dest %>/stylelibs.min.css': ['<%= dirs.css %>/**/*.css']
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: false,
                    lineNumbers: true
                },
                files: {
                    '<%= dirs.dest %>/style.min.css': '<%= dirs.scss %>/style.scss'
                }
            }
        },
        // tự động hóa 
        watch: {
            options: {
                // livereload: true,
                livereload: 35740,
                livereloadOnError: false,
                spawn: false
            },
            sass: {
                files: "<%= dirs.scss %>/**/**/*.scss",
                tasks: ['sass']
            },
            // cssmin: {
            //     files: "<%= dirs.css %>/**/*.css",
            //     tasks: ['cssmin']
            // },
            // uglify: {
            //     files: ['<%= dirs.js %>/*.js'],
            //     tasks: ['uglify']
            // },
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '<%= dirs.dest %>/style.min.css',
                        '*.html',
                        '<%= dirs.css %>/*.css',
                        '<%= dirs.js %>/*.js',
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                },
            }
        },
        uglify: {
            my_target: {
                files: {
                    '<%= dirs.dest %>/jsmain.min.js': ['<%= dirs.js %>/libs/*.js']
                }
            }
        },

    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['browserSync', 'watch']);
};