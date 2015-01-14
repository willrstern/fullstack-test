var gulp = require('gulp');
var browserify = require('browserify');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('scripts', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./app/client/app.jsx');
  return b.bundle()
    .pipe(source('./app.js'))
    .pipe(gulp.dest('./build/js'));
});
// gulp.task('scripts', function() {
//     // Single entry point to browserify
//     gulp.src('./app/client/app.js')
//         .pipe(browserify({
//           insertGlobals : true,
//           debug : process.env.NODE_ENV !== 'production'
//         }))
//         .pipe(gulp.dest('./build/js'));
// });

gulp.task('watch', function() {
  livereload.listen();
  watch('./app/client/**/*', function () {
    gulp.run('scripts');
  });
  watch(['./build/**/*', './app/**/*']).pipe(livereload());
});

gulp.task('server', function() {
  var server = nodemon({
    env: {
      DEBUG: process.env.DEBUG || 'app:*',
      NODE_ENV: process.env.NODE_ENV || 'development',
    },
    ignore: 'app/test',
    script: 'bin/www',
    watch: ['app'],
  });

  server
    .on('change')
    .on('start', function() {
      setTimeout(livereload.changed, 1000);
    })
  ;
});

gulp.task('default', ['scripts', 'server', 'watch']);
