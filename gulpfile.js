'use strict';

const gulp = require("gulp");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const watch = require("gulp-watch");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const del = require("del");


gulp.task("concatScripts", function() {
    return gulp.src(["src/js/headers.js", "src/js/modal.js"])
    .pipe(concat("app.js"))
        .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest("src/js"));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
    return gulp.src("src/js/app.js")
        .pipe(uglify())
        .pipe(rename("app.min.js"))
        .pipe(gulp.dest("build/js"));
});

gulp.task("compileSass", function() {
    return gulp.src("src/scss/application.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"));
});

gulp.task("minifyCss", function() {
    return gulp.src("src/css/*.css")
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest("build/css"));
});

gulp.task("minifyHtml", function() {
    return gulp.src("../*.html")
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest("build"));
});

gulp.task("minifyImg", function() {
    gulp.src("src/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("build/img"));
});

gulp.task("watch", function() {
    return gulp.watch('src/scss/**/*.scss', ["compileSass"]),
           gulp.watch("src/js/**/*.js", ["concatScripts"]);
});

gulp.task("clean", function() {
    del(["build", "build/css/application.css", "js/app*.js"]);
});

gulp.task("build", ["minifyScripts", "compileSass", "minifyCss", "minifyImg", "minifyHtml"], function() {
    return gulp.src(["css/application.css", "js/app.min.js", "index.html", "contact.html", "img/**"], { base: "./" })
        .pipe(gulp.dest("build"));
});

gulp.task("default", ["clean"], function() {
    gulp.start("build");
});