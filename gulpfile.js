var gulp = require('gulp'),
    babel = require('gulp-babel'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    less = require('gulp-less'),
    path = require('path'),
    alphaPath = 'MyBlog/*.js',
    compilePath = 'MyBlog/compiled';

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('babel', function() {
    gulp.src([alphaPath])
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(compilePath + '/babel'));
});

gulp.task('images', function(){
  gulp.src("images/*.*")
      .pipe(cache(imagemin({optimizationLevel: 5, progressive: true, interlaced: true })))
      .pipe(gulp.dest('dist/assets/images'));
});

// gulp.task('scripts', function() {
//     return gulp.src(['js/*.js', 'js/*/*.js'])
//         .pipe(jshint('.jshintrc'))
//         .pipe(jshint.reporter('default'))
//         .pipe(babel())
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest('dist/assets/js'))
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/assets/js'))
// });
gulp.task('default', ['clean'], function() {
    gulp.start('less', 'images');
});
gulp.task('clean', function() {
    return del(['dist/assets/js', 'dist/assets/styles']);
});
gulp.task('watch', function(){
  //Watch CSS files
  gulp.watch('less/*.less', ['less']);
  //Watch JS files
  // gulp.watch('js/*/*.js', ['scripts']);
  //Watch images
  gulp.watch('images/*.*', ['images']);
});
