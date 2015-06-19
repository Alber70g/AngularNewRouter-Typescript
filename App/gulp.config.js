﻿module.exports = function () {
    var client = 'src/';
    var clientApp = client + '';
    var root = './';
    var temp = './.tmp/';
    var assets = './assets/';
    var dist = './dist/';

    var config = {
        injectmanual: {
            dev: [
                client + "bower_components/angular-new-router/dist/router.es5.js"
            ],
            dist: [
                client + "bower_components/angular-new-router/dist/router.es5.min.js"
            ]
        },
        dist: {
            path: client + 'dist/',
            assets: client + 'dist/assets/',
            html: client + 'dist/src/',
            js: {
                path: client + 'dist/js/'
            },
            css: {
                path: client + 'dist/css/'
            }
        },
        assets: { 
                folder: assets,
                files: assets + '**/*'
        },
        lib: './lib/',
        typescript: {
            js: client + 'app.js',
            ts: [client + '**/*.ts',
                 '!' + client + '**/*-spec.ts'
            ],
            tests: [ client + 'definitions/*.ts',
                     client + '**/*-spec.ts'
            ],
            min: {
                file: 'app.min.js'
            }
        },
        allappjs: [
            '!./src/bower_components/**/*.js',
            '!./src/dist/',
            '!./src/**/*-spec.js',
            './src/**/*.js'
        ],
        allappcss: [
            '!./src/bower_components/**/*.css',
            '!./src/dist/',
            './src/**/*.css'
        ],
        allappless: './src/**/*.less',
        build: './build/',
        client: client,
        html: {
            files: [
                '!./src/bower_components/**/*.html',
                '!./src/dist/**/*.html',
                '!./src/index.html',
                './src/**/*.html'
            ]
        },
        css: {
            path: 'css',
            file: client + 'app.css'
        },
        index: client + 'index.html',
        less: {
            file: client + 'app.less',
            modules: [
                client + '**/*.less',
                '!' + client + 'app.less',
                '!' + client + 'bower_components/**/*.less'
            ],
            cssDir: dist + 'css'
        },
        // report: report,
        root: root,
        source: 'src/',
        temp: temp,

        /**
         * optimized files
         */
        optimized: {
            app: '../dist/app.js',
            lib: '../dist/lib.js'
        },
        
        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            path: client + '/bower_components/',
            ignorePath: '../'
        }
    };

    /**
     * Default wiredep and bower settings
     */
    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.path,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
}