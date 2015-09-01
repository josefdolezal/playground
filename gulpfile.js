var gulp    = require( 'gulp' ),
	uglify  = require( 'gulp-uglify' ),
	sass    = require( 'gulp-sass' ),
	plumber = require( 'gulp-plumber' ),
	notify  = require( 'gulp-notify' ),
	cache   = require( 'gulp-cache' );
	// plugins = require( 'gulp-load-plugins' )(),
	// concat  = require( 'gulp-concat' ),
	// notify  = require( 'gulp-notify' )
	// plumber = require( 'gulp-plumber' );


gulp.task( 'scripts', function() {
	gulp.src( 'src/js/*.js' )
		.pipe( plumber() )
		.pipe( uglify() )
		.pipe( plumber() )
		.pipe( gulp.dest( 'assets/js' ) )
		.pipe( notify( { message: "Scripts task complete", onLast: true } ) );
} );

gulp.task( 'styles', function() {
	gulp.src( 'src/sass/**/*.scss' )
	    .pipe( plumber() )
		.pipe( sass( {
			outputStyle: 'compressed' 
		} ) )
		.pipe( gulp.dest( 'assets/css' ) )
		.pipe( notify( { message: "Styles task complete", onLast: true } ) );
} );

gulp.task( 'watch', function() {
	gulp.watch( 'src/js/*.js', ['scripts'] );
	gulp.watch( 'src/sass/**/*.scss', ['styles'] );
} );

gulp.task( 'default', ['watch', 'scripts', 'styles'] );