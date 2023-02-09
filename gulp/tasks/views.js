"use strict";

import {
  paths
} from "../../gulpfile.babel";
import gulp from "gulp";
import plumber from "gulp-plumber";
import pug from "gulp-pug";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
  production = !!argv.production;

gulp.task("views", () => {
  return gulp.src(paths.views.src)
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulpif(production, replace(".css", ".min.css")))
    .pipe(gulpif(production, replace(".js", ".min.js")))
    .pipe(gulp.dest(paths.views.dist))
    .pipe(browsersync.stream());
});
