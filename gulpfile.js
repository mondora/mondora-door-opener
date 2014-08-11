var gulp	= require("gulp");
var concat	= require("gulp-concat");
var pp		= require("gulp-preprocess");
var mkdirp	= require("mkdirp");
var exec	= require("child_process").exec;

var buildScripts = function (dest, target) {
	return gulp.src("ext/js/*.js")
		.pipe(gulp.dest(dest));
};

var buildImages = function (dest) {
	return gulp.src("ext/img/*")
		.pipe(gulp.dest(dest));
};

var buildManifest = function (dest) {
	return gulp.src("ext/manifest.json")
		.pipe(gulp.dest(dest));
};

gulp.task("build", function () {
	mkdirp.sync("builds/prod/js");
	mkdirp.sync("builds/prod/img");

	buildScripts("builds/prod/js/", "prod");
	buildImages("builds/prod/img/");
	buildManifest("builds/prod/");

	exec("rm builds/mondora-door-opener.zip");
	exec("cd builds/ && zip -r mondora-door-opener.zip prod/");
});

gulp.task("default", ["build"]);
