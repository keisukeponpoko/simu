const elixir = require('laravel-elixir');
var gulp = require('gulp');

var browserify = require('browserify');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var babelify = require('babelify');
var plumber = require('gulp-plumber');
var streamify = require('gulp-streamify');
var notify  = require('gulp-notify');
var lintFilePath = require('gulp-lint-filepath');
var source = require('vinyl-source-stream');

config = elixir.config;
require('laravel-elixir-vue-2');
require("laravel-elixir-webpack-advanced");

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
       .browserify('system.js');
});
