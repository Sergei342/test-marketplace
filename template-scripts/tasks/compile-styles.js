import * as dartSass from 'sass';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import cssimport from 'postcss-import';
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import { gulpGlobs } from '../configs/index.js';

const sass = gulpSass(dartSass);

async function compileStyles() {
  const isProd = process.env.NODE_ENV === 'production';
  const pCssPlugins = isProd
    ? [cssimport(), autoprefixer(), cssnano()]
    : [cssimport()];

  return gulp.src(`${gulpGlobs.app}/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: isProd ? 'compressed' : 'expanded' }))
    .on('error', sass.logError)
    .pipe(postcss(pCssPlugins))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(gulpGlobs.publicStyles));
}

export default compileStyles;
