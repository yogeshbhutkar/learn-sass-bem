const { src, dest, watch, series } = require( 'gulp' );
const sass = require( 'gulp-sass' )( require( 'sass' ) );
const cleanCSS = require( 'gulp-clean-css' );

function buildStyles() {
	return src( 'styles/**/*.scss' )
		.pipe( sass() )
		.pipe( cleanCSS() )
		.pipe( dest( 'dist' ) );
}

function watchTask() {
	watch( 'styles/**/*.scss', buildStyles );
}

exports.default = series( buildStyles, watchTask );