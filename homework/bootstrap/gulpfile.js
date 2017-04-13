/**
 * Created by user on 2017/4/10.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    server = require('gulp-webserver'),
    bundle = require('gulp-browserify'),
    rev = require('gulp-rev');

gulp.task('rev',function(){
    return gulp.src(['js/build.js','scss/style.scss'])
        .pipe(rev())
        .pipe(gulp.dest('public'))
})

gulp.task('sass',function(){
    return gulp.src("bootstrap/scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"));
});
gulp.task('server',function(){
    gulp.watch("bootstrap/scss/*.scss",["bootstrap/scss"]);
    return gulp.src("./")
        .pipe(server({
            livereload:true,
            directoryListing:true,
            open:"bootstrap/cale.html"
        }));
});

gulp.task('bundle',function(){
    return gulp.src('js/index.js')
        .pipe(bundle())
        .pipe(rename('build.js'))
        .pipe(gulp.dest('js'));
})

//var gulp = require('gulp');
//var sass = require('gulp-sass');
//var server = require('gulp-webserver');
//var cleancss = require('gulp-clean-css');
//var rename = require('gulp-rename');
//var bundle = require('gulp-browserify');
//
//
//gulp.task('sass',function () {
//    return gulp.src('sass/index.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('css'))
//})
//gulp.task('mincss',['sass'],function(){
//    return gulp.src('css/index.css')
//        .pipe(cleancss())
//        .pipe(rename('index.min.css'))
//        .pipe(gulp.dest('css'))
//})
//
//var url = require('url');
//var fs = require('fs');
//gulp.task('server',function(){
//    gulp.watch('sass/*.scss',['mincss']);
//
//    gulp.watch('js/*.js',['bundle']);
//    return gulp.src('./')
//        .pipe(server({
//            livereload: {
//                enable:true,
//                filter:function(filename){
//                    var res = filename.match(/sass|node_modules|gulpfile.js|package.json/);
//                    if(res){return false}
//                    return true;
//                }
//            },
//            directoryListing: true,
//            open: 'index.html',
//            middleware:function(req,res,next){
//                var reqObj = url.parse(req.url,true);
//                console.log(req);
//                if(reqObj.pathname=='/yeesight/api/user/updateUser'){
//                    res.setHeader('Content-Type','application/json');
//                    console.log(123);
//                    res.end(fs.readFileSync('data/list.json'))
//                }
//                next();
//            }
//        }));
//})
//
//
//gulp.task('bundle',function(){
//    return gulp.src('js/index.js')
//        .pipe(bundle())
//        .pipe(rename('build.js'))
//        .pipe(gulp.dest('js'))
//})
//
//gulp.task('build',function(){
//    return gulp.src('scss/style.scss')
//        .pipe()
//})