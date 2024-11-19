const { src, dest, watch, series } = require( 'gulp' );
const sass = require( 'gulp-sass' )( require( 'sass' ) );
const cleanCSS = require( 'gulp-clean-css' );
const sourcemaps = require( 'gulp-sourcemaps' );

function buildStyles() {
	return src( 'styles/**/*.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass() )
		.pipe( cleanCSS() )
		.pipe( sourcemaps.write( '.' ) )
		.pipe( dest( 'dist' ) );
}

function watchTask() {
	watch( 'styles/**/*.scss', buildStyles );
}

exports.default = series( buildStyles, watchTask );